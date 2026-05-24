/**
 * Graph Builder — orchestrates all graph analysis modules to produce a ResourceGraph.
 * 
 * This is the main entry point that takes a ParsedRGD and produces a fully analyzed
 * ResourceGraph with nodes, edges, execution plan, critical path, and statistics.
 * 
 * @module graph-builder
 */

import type { ParsedRGD } from '../parser/types';
import type { ResourceGraph, GraphNode, GraphEdge, GraphStats } from './types';
import { inferDependencies } from '../dependency/inference-engine';
import { DAG } from './dag';
import { topologicalSort } from './topological-sort';
import { computeCriticalPath } from './critical-path';
import { detectCycles } from './cycle-detector';
import { ESTIMATED_DURATIONS, DEFAULT_ESTIMATED_DURATION } from '@/lib/colors';

/**
 * Build a complete ResourceGraph from a parsed RGD.
 * 
 * Orchestrates: dependency inference → DAG construction → topological sort →
 * critical path → cycle detection → node/edge mapping → statistics.
 * 
 * @param rgd - The parsed RGD to analyze
 * @returns Complete ResourceGraph with all analysis results
 */
export function buildResourceGraph(rgd: ParsedRGD): ResourceGraph {
  // Step 1: Infer dependencies
  const depAnalysis = inferDependencies(rgd);

  // Step 2: Build DAG
  const dag = new DAG();
  for (const resource of rgd.resources) {
    dag.addNode(resource.id);
  }
  for (const dep of depAnalysis.dependencies) {
    dag.addEdge(dep.source, dep.target);
  }

  // Step 3: Detect cycles
  const cycles = detectCycles(dag);
  const hasCycles = cycles.length > 0;

  // Step 4: Topological sort (produces execution phases)
  const executionPlan = topologicalSort(dag, rgd.resources);

  // Step 5: Compute critical path
  const criticalPath = computeCriticalPath(dag, rgd.resources);
  const criticalPathSet = new Set(criticalPath.path);

  // Mark critical path phases
  for (const phase of executionPlan.phases) {
    phase.isOnCriticalPath = phase.resourceIds.some(id => criticalPathSet.has(id));
  }

  // Step 6: Build phase map (resource → phase number)
  const phaseMap = new Map<string, number>();
  for (const phase of executionPlan.phases) {
    for (const id of phase.resourceIds) {
      phaseMap.set(id, phase.phase);
    }
  }

  // Step 7: Map to GraphNodes
  const nodes: GraphNode[] = rgd.resources.map(resource => ({
    id: resource.id,
    kind: resource.kind,
    apiVersion: resource.apiVersion,
    resourceType: resource.resourceType,
    label: resource.id,
    executionPhase: phaseMap.get(resource.id) ?? 0,
    isOnCriticalPath: criticalPathSet.has(resource.id),
    isConditional: resource.includeWhen.length > 0,
    hasReadinessGate: resource.readyWhen.length > 0,
    estimatedDuration: ESTIMATED_DURATIONS[resource.kind] || DEFAULT_ESTIMATED_DURATION,
    inDegree: dag.getInDegree(resource.id),
    outDegree: dag.getOutDegree(resource.id),
    metadata: {
      name: resource.templateMetadata.name,
      namespace: resource.templateMetadata.namespace,
      labels: resource.templateMetadata.labels,
    },
  }));

  // Step 8: Map to GraphEdges
  const edges: GraphEdge[] = depAnalysis.dependencies.map(dep => ({
    id: `${dep.source}->${dep.target}`,
    source: dep.source,
    target: dep.target,
    dependencyType: dep.type,
    label: dep.description,
    isOnCriticalPath: criticalPathSet.has(dep.source) && criticalPathSet.has(dep.target),
    references: dep.references.map(r => r.expression),
  }));

  // Step 9: Compute statistics
  const kindDistribution: Record<string, number> = {};
  for (const r of rgd.resources) {
    kindDistribution[r.kind] = (kindDistribution[r.kind] || 0) + 1;
  }

  const maxWidth = executionPlan.phases.reduce(
    (max, phase) => Math.max(max, phase.resourceIds.length),
    0
  );

  const stats: GraphStats = {
    totalResources: rgd.resources.length,
    templateResources: rgd.resources.filter(r => r.resourceType === 'template').length,
    externalRefResources: rgd.resources.filter(r => r.resourceType === 'externalRef').length,
    conditionalResources: rgd.resources.filter(r => r.includeWhen.length > 0).length,
    totalEdges: edges.length,
    executionPhases: executionPlan.totalPhases,
    kindDistribution,
    maxDepth: executionPlan.totalPhases,
    maxWidth,
  };

  return {
    nodes,
    edges,
    executionPlan,
    criticalPath,
    hasCycles,
    cycles,
    stats,
  };
}
