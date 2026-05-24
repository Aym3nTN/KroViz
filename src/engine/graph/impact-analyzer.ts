/**
 * Impact Analyzer — simulates resource failure and computes cascading impact.
 * @module impact-analyzer
 */

import type { DAG } from './dag';
import type { ImpactAnalysis, ImpactSeverity, ImpactChainNode } from './types';

/**
 * Analyze the impact of a resource failure on the rest of the graph.
 * 
 * Computes all downstream resources that would be blocked or degraded
 * if the specified resource fails.
 * 
 * @param dag - The dependency DAG
 * @param failedResourceId - The resource to simulate as failed
 * @param allResourceIds - All resource IDs in the graph
 * @returns Impact analysis with blocked resources, severity, and chain
 */
export function analyzeImpact(
  dag: DAG,
  failedResourceId: string,
  allResourceIds: string[]
): ImpactAnalysis {
  if (!dag.hasNode(failedResourceId)) {
    return {
      failedResource: failedResourceId,
      directlyBlocked: [],
      transitivelyBlocked: [],
      degraded: [],
      unaffected: allResourceIds.filter(id => id !== failedResourceId),
      severity: 'none',
      summary: `Resource "${failedResourceId}" not found in the graph.`,
      impactChain: [],
    };
  }

  // Get all downstream (transitive dependents)
  const allDownstream = dag.getDownstream(failedResourceId);
  const directDependents = dag.getDependents(failedResourceId);

  const directlyBlocked = directDependents;
  const transitivelyBlocked = allDownstream.filter(id => !directDependents.includes(id));

  // Everything not downstream and not the failed resource is unaffected
  const affectedSet = new Set([failedResourceId, ...allDownstream]);
  const unaffected = allResourceIds.filter(id => !affectedSet.has(id));

  // Build impact chain
  const impactChain: ImpactChainNode[] = [];
  
  // BFS to build chain with depth
  const visited = new Set<string>();
  const queue: { id: string; depth: number; path: string[] }[] = [
    { id: failedResourceId, depth: 0, path: [failedResourceId] },
  ];

  while (queue.length > 0) {
    const { id, depth, path } = queue.shift()!;
    if (visited.has(id)) continue;
    visited.add(id);

    const impact: ImpactChainNode['impact'] = id === failedResourceId ? 'failed' : 
      directDependents.includes(id) ? 'blocked' : 'blocked';

    impactChain.push({ resourceId: id, impact, depth, path: [...path] });

    for (const dependent of dag.getDependents(id)) {
      if (!visited.has(dependent)) {
        queue.push({ id: dependent, depth: depth + 1, path: [...path, dependent] });
      }
    }
  }

  // Add unaffected nodes
  for (const id of unaffected) {
    impactChain.push({ resourceId: id, impact: 'unaffected', depth: -1, path: [] });
  }

  // Compute severity
  const totalResources = allResourceIds.length;
  const affectedCount = allDownstream.length + 1; // +1 for the failed resource itself
  const severity = computeSeverity(affectedCount, totalResources);

  const summary = generateSummary(failedResourceId, directlyBlocked, transitivelyBlocked, unaffected, severity);

  return {
    failedResource: failedResourceId,
    directlyBlocked,
    transitivelyBlocked,
    degraded: [], // Future: partial dependency analysis
    unaffected,
    severity,
    summary,
    impactChain,
  };
}

function computeSeverity(affected: number, total: number): ImpactSeverity {
  if (total === 0) return 'none';
  const ratio = affected / total;
  if (ratio >= 0.8) return 'critical';
  if (ratio >= 0.5) return 'high';
  if (ratio >= 0.25) return 'medium';
  if (ratio > 0) return 'low';
  return 'none';
}

function generateSummary(
  failedId: string,
  directlyBlocked: string[],
  transitivelyBlocked: string[],
  unaffected: string[],
  severity: ImpactSeverity
): string {
  const totalBlocked = directlyBlocked.length + transitivelyBlocked.length;

  if (totalBlocked === 0) {
    return `Failure of "${failedId}" has no downstream impact. It is a leaf resource.`;
  }

  const parts = [`Failure of "${failedId}" would block ${totalBlocked} resource(s).`];
  
  if (directlyBlocked.length > 0) {
    parts.push(`Directly blocked: ${directlyBlocked.join(', ')}.`);
  }
  if (transitivelyBlocked.length > 0) {
    parts.push(`Cascading impact: ${transitivelyBlocked.join(', ')}.`);
  }
  if (unaffected.length > 0) {
    parts.push(`${unaffected.length} resource(s) would be unaffected.`);
  }

  parts.push(`Severity: ${severity.toUpperCase()}.`);

  return parts.join(' ');
}
