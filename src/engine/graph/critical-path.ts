/**
 * Critical Path analysis for resource dependency graphs.
 * Finds the longest weighted path through the DAG.
 * 
 * @module critical-path
 */

import type { DAG } from './dag';
import type { ParsedResource } from '../parser/types';
import type { CriticalPath } from './types';
import { ESTIMATED_DURATIONS, DEFAULT_ESTIMATED_DURATION } from '@/lib/colors';

/**
 * Compute the critical path — the longest weighted path through the DAG.
 * 
 * The critical path determines the minimum total time to reconcile all resources,
 * considering that resources in the same phase can execute in parallel.
 * 
 * @param dag - The dependency DAG
 * @param resources - Parsed resources for duration estimation
 * @returns CriticalPath with path, total duration, and bottleneck
 */
export function computeCriticalPath(dag: DAG, resources: ParsedResource[]): CriticalPath {
  const nodes = dag.getNodes();
  if (nodes.length === 0) {
    return { path: [], totalDuration: 0, bottleneck: null };
  }

  const durationMap = new Map<string, number>();
  for (const r of resources) {
    durationMap.set(r.id, ESTIMATED_DURATIONS[r.kind] || DEFAULT_ESTIMATED_DURATION);
  }

  // Dynamic programming: compute longest path ending at each node
  const longestTo = new Map<string, number>();
  const predecessorOnPath = new Map<string, string | null>();

  // Process in topological order (roots first)
  const topoOrder = topologicalOrder(dag);

  for (const node of topoOrder) {
    const nodeDuration = durationMap.get(node) || DEFAULT_ESTIMATED_DURATION;
    const deps = dag.getDependencies(node);

    if (deps.length === 0) {
      // Root node
      longestTo.set(node, nodeDuration);
      predecessorOnPath.set(node, null);
    } else {
      // Find the dependency with the longest path
      let maxPredDuration = 0;
      let maxPred: string | null = null;

      for (const dep of deps) {
        const depDuration = longestTo.get(dep) || 0;
        if (depDuration > maxPredDuration) {
          maxPredDuration = depDuration;
          maxPred = dep;
        }
      }

      longestTo.set(node, maxPredDuration + nodeDuration);
      predecessorOnPath.set(node, maxPred);
    }
  }

  // Find the node with the longest total path
  let maxNode: string | null = null;
  let maxDuration = 0;

  for (const [node, duration] of longestTo) {
    if (duration > maxDuration) {
      maxDuration = duration;
      maxNode = node;
    }
  }

  if (!maxNode) {
    return { path: [], totalDuration: 0, bottleneck: null };
  }

  // Trace back the path
  const path: string[] = [];
  let current: string | null = maxNode;
  while (current !== null) {
    path.unshift(current);
    current = predecessorOnPath.get(current) || null;
  }

  // Find bottleneck (single resource with longest duration on the path)
  let bottleneck: string | null = null;
  let maxSingleDuration = 0;
  for (const nodeId of path) {
    const d = durationMap.get(nodeId) || DEFAULT_ESTIMATED_DURATION;
    if (d > maxSingleDuration) {
      maxSingleDuration = d;
      bottleneck = nodeId;
    }
  }

  return {
    path,
    totalDuration: maxDuration,
    bottleneck,
  };
}

/**
 * Simple topological ordering using Kahn's algorithm (returns flat list).
 */
function topologicalOrder(dag: DAG): string[] {
  const nodes = dag.getNodes();
  const inDegree = new Map<string, number>();

  for (const node of nodes) {
    inDegree.set(node, dag.getInDegree(node));
  }

  const queue = nodes.filter(n => inDegree.get(n) === 0);
  const order: string[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);

    for (const dependent of dag.getDependents(node)) {
      const newDeg = (inDegree.get(dependent) || 0) - 1;
      inDegree.set(dependent, newDeg);
      if (newDeg === 0) {
        queue.push(dependent);
      }
    }
  }

  // Append any remaining nodes (in case of cycles)
  for (const node of nodes) {
    if (!order.includes(node)) {
      order.push(node);
    }
  }

  return order;
}
