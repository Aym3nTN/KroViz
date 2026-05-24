/**
 * RGD Differ — computes structural differences between two ResourceGraphDefinitions.
 * @module rgd-differ
 */

import type { ParsedRGD } from '../parser/types';
import type { RGDDiff, ResourceChange, SchemaChange, DependencyChange, FieldChange, DiffStats } from './types';
import { inferDependencies } from '../dependency/inference-engine';

/**
 * Compute the structural diff between two parsed RGDs.
 */
export function diffRGDs(oldRgd: ParsedRGD, newRgd: ParsedRGD): RGDDiff {
  const schemaChanges = diffSchema(oldRgd, newRgd);
  const resourceChanges = diffResources(oldRgd, newRgd);
  const dependencyChanges = diffDependencies(oldRgd, newRgd);

  const stats: DiffStats = {
    resourcesAdded: resourceChanges.filter(c => c.type === 'added').length,
    resourcesRemoved: resourceChanges.filter(c => c.type === 'removed').length,
    resourcesModified: resourceChanges.filter(c => c.type === 'modified').length,
    dependenciesAdded: dependencyChanges.filter(c => c.type === 'added').length,
    dependenciesRemoved: dependencyChanges.filter(c => c.type === 'removed').length,
    schemaFieldsAdded: schemaChanges.filter(c => c.type === 'added').length,
    schemaFieldsRemoved: schemaChanges.filter(c => c.type === 'removed').length,
    schemaFieldsModified: schemaChanges.filter(c => c.type === 'modified').length,
  };

  const isIdentical = schemaChanges.length === 0 && resourceChanges.length === 0 && dependencyChanges.length === 0;

  return { isIdentical, schemaChanges, resourceChanges, dependencyChanges, stats };
}

function diffSchema(oldRgd: ParsedRGD, newRgd: ParsedRGD): SchemaChange[] {
  const changes: SchemaChange[] = [];
  const oldFields = new Map(oldRgd.schema.specFields.map(f => [f.path, f]));
  const newFields = new Map(newRgd.schema.specFields.map(f => [f.path, f]));

  for (const [path, field] of newFields) {
    if (!oldFields.has(path)) {
      changes.push({ type: 'added', field: path, newValue: field.type, description: `Added field "${path}" (${field.type})` });
    } else {
      const oldField = oldFields.get(path)!;
      if (oldField.type !== field.type || oldField.required !== field.required || JSON.stringify(oldField.default) !== JSON.stringify(field.default)) {
        changes.push({ type: 'modified', field: path, oldValue: oldField.type, newValue: field.type, description: `Modified field "${path}": ${oldField.type} → ${field.type}` });
      }
    }
  }

  for (const [path] of oldFields) {
    if (!newFields.has(path)) {
      changes.push({ type: 'removed', field: path, oldValue: oldFields.get(path)?.type, description: `Removed field "${path}"` });
    }
  }

  return changes;
}

function diffResources(oldRgd: ParsedRGD, newRgd: ParsedRGD): ResourceChange[] {
  const changes: ResourceChange[] = [];
  const oldResources = new Map(oldRgd.resources.map(r => [r.id, r]));
  const newResources = new Map(newRgd.resources.map(r => [r.id, r]));

  for (const [id, newRes] of newResources) {
    if (!oldResources.has(id)) {
      changes.push({ type: 'added', resourceId: id, kind: newRes.kind, description: `Added ${newRes.kind} "${id}"` });
    } else {
      const oldRes = oldResources.get(id)!;
      const fieldChanges = diffResourceTemplates(oldRes.template || {}, newRes.template || {});
      if (fieldChanges.length > 0 || oldRes.kind !== newRes.kind) {
        changes.push({ type: 'modified', resourceId: id, kind: newRes.kind, fieldChanges, description: `Modified ${newRes.kind} "${id}" (${fieldChanges.length} field change(s))` });
      }
    }
  }

  for (const [id, oldRes] of oldResources) {
    if (!newResources.has(id)) {
      changes.push({ type: 'removed', resourceId: id, kind: oldRes.kind, description: `Removed ${oldRes.kind} "${id}"` });
    }
  }

  return changes;
}

function diffResourceTemplates(oldTemplate: Record<string, unknown>, newTemplate: Record<string, unknown>, prefix = ''): FieldChange[] {
  const changes: FieldChange[] = [];

  const allKeys = new Set([...Object.keys(oldTemplate), ...Object.keys(newTemplate)]);
  for (const key of allKeys) {
    const path = prefix ? `${prefix}.${key}` : key;
    const oldVal = oldTemplate[key];
    const newVal = newTemplate[key];

    if (oldVal === undefined && newVal !== undefined) {
      changes.push({ path, newValue: newVal, type: 'added' });
    } else if (oldVal !== undefined && newVal === undefined) {
      changes.push({ path, oldValue: oldVal, type: 'removed' });
    } else if (typeof oldVal === 'object' && typeof newVal === 'object' && oldVal && newVal && !Array.isArray(oldVal) && !Array.isArray(newVal)) {
      changes.push(...diffResourceTemplates(oldVal as Record<string, unknown>, newVal as Record<string, unknown>, path));
    } else if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
      changes.push({ path, oldValue: oldVal, newValue: newVal, type: 'modified' });
    }
  }

  return changes;
}

function diffDependencies(oldRgd: ParsedRGD, newRgd: ParsedRGD): DependencyChange[] {
  const changes: DependencyChange[] = [];

  const oldDeps = inferDependencies(oldRgd);
  const newDeps = inferDependencies(newRgd);

  const oldDepKeys = new Map(oldDeps.dependencies.map(d => [`${d.source}->${d.target}`, d]));
  const newDepKeys = new Map(newDeps.dependencies.map(d => [`${d.source}->${d.target}`, d]));

  for (const [key, dep] of newDepKeys) {
    if (!oldDepKeys.has(key)) {
      changes.push({ type: 'added', source: dep.source, target: dep.target, newType: dep.type, description: `New dependency: ${dep.source} → ${dep.target} (${dep.type})` });
    } else {
      const oldDep = oldDepKeys.get(key)!;
      if (oldDep.type !== dep.type) {
        changes.push({ type: 'modified', source: dep.source, target: dep.target, oldType: oldDep.type, newType: dep.type, description: `Changed dependency type: ${dep.source} → ${dep.target} from ${oldDep.type} to ${dep.type}` });
      }
    }
  }

  for (const [key, dep] of oldDepKeys) {
    if (!newDepKeys.has(key)) {
      changes.push({ type: 'removed', source: dep.source, target: dep.target, oldType: dep.type, description: `Removed dependency: ${dep.source} → ${dep.target}` });
    }
  }

  return changes;
}
