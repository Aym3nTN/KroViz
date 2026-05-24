/**
 * Dependency Inference Engine for KRO ResourceGraphDefinitions.
 * 
 * Analyzes CEL expressions across all resources to infer dependency relationships.
 * Classifies dependencies by type (env-var, volume-mount, secret-ref, etc.).
 * 
 * @module inference-engine
 */

import type { ParsedRGD, ParsedResource, CelExpression } from '../parser/types';
import type { Dependency, DependencyType, DependencyReference, DependencyAnalysis } from './types';

/**
 * Infer all dependencies between resources in a parsed RGD.
 * 
 * Walks all CEL expressions in each resource and creates typed dependency
 * relationships based on the context where each expression appears.
 * 
 * @param rgd - The parsed RGD to analyze
 * @returns Complete dependency analysis with typed edges, roots, and leaves
 */
export function inferDependencies(rgd: ParsedRGD): DependencyAnalysis {
  const resourceIds = new Set(rgd.resources.map(r => r.id));
  const dependencyMap = new Map<string, Dependency>();

  for (const resource of rgd.resources) {
    const resourceDeps = inferResourceDependencies(resource, resourceIds);

    for (const dep of resourceDeps) {
      const key = `${dep.source}->${dep.target}`;
      const existing = dependencyMap.get(key);

      if (existing) {
        // Merge references into existing dependency
        existing.references.push(...dep.references);
        // Upgrade type if needed (more specific wins)
        if (getTypeSpecificity(dep.type) > getTypeSpecificity(existing.type)) {
          existing.type = dep.type;
        }
        existing.description = generateDescription(existing.source, existing.target, existing.type, existing.references, rgd);
      } else {
        dep.description = generateDescription(dep.source, dep.target, dep.type, dep.references, rgd);
        dependencyMap.set(key, dep);
      }
    }
  }

  const dependencies = Array.from(dependencyMap.values());

  // Compute roots and leaves
  const hasIncoming = new Set<string>();
  const hasOutgoing = new Set<string>();

  for (const dep of dependencies) {
    hasOutgoing.add(dep.source);
    hasIncoming.add(dep.target);
  }

  const rootResources = rgd.resources
    .map(r => r.id)
    .filter(id => !hasIncoming.has(id));

  const leafResources = rgd.resources
    .map(r => r.id)
    .filter(id => !hasOutgoing.has(id));

  // Type breakdown
  const typeBreakdown: Record<DependencyType, number> = {
    'cel-reference': 0,
    'env-var': 0,
    'volume-mount': 0,
    'selector': 0,
    'namespace': 0,
    'service-binding': 0,
    'secret-ref': 0,
    'configmap-ref': 0,
    'conditional': 0,
  };

  for (const dep of dependencies) {
    typeBreakdown[dep.type] = (typeBreakdown[dep.type] || 0) + 1;
  }

  return {
    dependencies,
    rootResources,
    leafResources,
    totalEdges: dependencies.length,
    typeBreakdown,
  };
}

// ─── Internal ────────────────────────────────────────────────────────────────

/**
 * Infer dependencies for a single resource from its CEL expressions.
 */
function inferResourceDependencies(
  resource: ParsedResource,
  validResourceIds: Set<string>
): Dependency[] {
  const depsMap = new Map<string, Dependency>();

  for (const expr of resource.celExpressions) {
    // Only care about cross-resource references
    if (expr.referenceType !== 'resource' || !expr.referencedResourceId) {
      continue;
    }

    const targetId = expr.referencedResourceId;

    // Validate the referenced resource exists
    if (!validResourceIds.has(targetId)) {
      continue;
    }

    // Don't create self-dependencies
    if (targetId === resource.id) {
      continue;
    }

    const depType = classifyDependencyType(expr);
    const reference: DependencyReference = {
      expression: expr.full,
      sourceContext: expr.context.yamlPath,
      targetField: expr.fieldPath,
    };

    const key = `${resource.id}->${targetId}`;
    const existing = depsMap.get(key);

    if (existing) {
      existing.references.push(reference);
      if (getTypeSpecificity(depType) > getTypeSpecificity(existing.type)) {
        existing.type = depType;
      }
    } else {
      depsMap.set(key, {
        source: resource.id,
        target: targetId,
        type: depType,
        references: [reference],
        description: '', // Will be generated later
      });
    }
  }

  return Array.from(depsMap.values());
}

/**
 * Classify a dependency type based on the CEL expression context.
 */
function classifyDependencyType(expr: CelExpression): DependencyType {
  const path = expr.context.yamlPath.toLowerCase();

  // Condition-based dependency (includeWhen/readyWhen)
  if (expr.context.isCondition) {
    return 'conditional';
  }

  // Secret reference (valueFrom.secretKeyRef)
  if (path.includes('secretkeyref') || (path.includes('valuefrom') && path.includes('secret'))) {
    return 'secret-ref';
  }

  // ConfigMap reference (valueFrom.configMapKeyRef)
  if (path.includes('configmapkeyref') || (path.includes('valuefrom') && path.includes('configmap'))) {
    return 'configmap-ref';
  }

  // Environment variable context
  if (expr.context.isEnvVar) {
    return 'env-var';
  }

  // Volume mount context
  if (expr.context.isVolume) {
    return 'volume-mount';
  }

  // Namespace reference
  if (path.includes('namespace') && expr.fieldPath.includes('metadata.name')) {
    return 'namespace';
  }

  // Selector context
  if (expr.context.isSelector) {
    return 'selector';
  }

  // Service binding (service referencing another resource's name in backend)
  if (path.includes('backend') || path.includes('servicename') || 
      (path.includes('service') && path.includes('name'))) {
    return 'service-binding';
  }

  // Default: general CEL reference
  return 'cel-reference';
}

/**
 * Get specificity ranking for dependency types (higher = more specific).
 */
function getTypeSpecificity(type: DependencyType): number {
  const specificity: Record<DependencyType, number> = {
    'cel-reference': 1,
    'conditional': 2,
    'namespace': 3,
    'selector': 3,
    'env-var': 4,
    'service-binding': 4,
    'configmap-ref': 5,
    'secret-ref': 5,
    'volume-mount': 5,
  };
  return specificity[type] || 0;
}

/**
 * Generate a human-readable description for a dependency.
 */
function generateDescription(
  sourceId: string,
  targetId: string,
  type: DependencyType,
  references: DependencyReference[],
  rgd: ParsedRGD
): string {
  const sourceRes = rgd.resources.find(r => r.id === sourceId);
  const targetRes = rgd.resources.find(r => r.id === targetId);

  const sourceKind = sourceRes?.kind || 'Resource';
  const targetKind = targetRes?.kind || 'Resource';

  switch (type) {
    case 'secret-ref':
      return `${sourceKind} "${sourceId}" reads secrets from ${targetKind} "${targetId}" via secretKeyRef`;
    case 'configmap-ref':
      return `${sourceKind} "${sourceId}" reads config from ${targetKind} "${targetId}" via configMapKeyRef`;
    case 'env-var':
      return `${sourceKind} "${sourceId}" injects environment variables from ${targetKind} "${targetId}"`;
    case 'volume-mount':
      return `${sourceKind} "${sourceId}" mounts ${targetKind} "${targetId}" as a volume`;
    case 'namespace':
      return `${sourceKind} "${sourceId}" is created in the namespace defined by ${targetKind} "${targetId}"`;
    case 'selector':
      return `${sourceKind} "${sourceId}" selects pods/resources matching ${targetKind} "${targetId}"`;
    case 'service-binding':
      return `${sourceKind} "${sourceId}" routes traffic to ${targetKind} "${targetId}"`;
    case 'conditional':
      return `${sourceKind} "${sourceId}" conditionally depends on ${targetKind} "${targetId}"`;
    case 'cel-reference':
    default: {
      const fields = references.map(r => r.targetField).filter(Boolean).slice(0, 3);
      const fieldStr = fields.length > 0 ? ` (${fields.join(', ')})` : '';
      return `${sourceKind} "${sourceId}" references ${targetKind} "${targetId}"${fieldStr}`;
    }
  }
}
