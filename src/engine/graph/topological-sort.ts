/**
 * Topological Sort using Kahn's algorithm.
 * Groups resources into execution phases where each phase's resources
 * can be reconciled in parallel.
 * 
 * @module topological-sort
 */

import type { DAG } from './dag';
import type { ParsedResource } from '../parser/types';
import type { ExecutionPlan, ExecutionPhase } from './types';
import { ESTIMATED_DURATIONS, DEFAULT_ESTIMATED_DURATION } from '@/lib/colors';

/**
 * Compute topological ordering of resources grouped into parallel execution phases.
 * 
 * Uses Kahn's algorithm to produce a layered ordering where all resources
 * in a given phase have their dependencies satisfied by earlier phases.
 * 
 * @param dag - The dependency DAG
 * @param resources - The parsed resources (for duration estimates)
 * @returns Execution plan with ordered phases
 */
export function topologicalSort(dag: DAG, resources: ParsedResource[]): ExecutionPlan {
  const resourceMap = new Map(resources.map(r => [r.id, r]));
  const nodes = dag.getNodes();

  // Compute in-degrees (dependencies count)
  const inDegree = new Map<string, number>();
  for (const node of nodes) {
    inDegree.set(node, dag.getInDegree(node));
  }

  // Initialize with roots (in-degree 0)
  let currentPhaseNodes = nodes.filter(n => inDegree.get(n) === 0);
  const phases: ExecutionPhase[] = [];
  const processed = new Set<string>();
  let phaseNum = 0;

  while (currentPhaseNodes.length > 0) {
    // Compute phase duration (max of resource durations in this phase)
    const phaseDuration = Math.max(
      ...currentPhaseNodes.map(id => {
        const res = resourceMap.get(id);
        const kind = res?.kind || '';
        return ESTIMATED_DURATIONS[kind] || DEFAULT_ESTIMATED_DURATION;
      })
    );

    phases.push({
      phase: phaseNum,
      resourceIds: [...currentPhaseNodes],
      estimatedDuration: phaseDuration,
      isOnCriticalPath: false, // Will be set by critical path analysis
    });

    // Mark as processed
    for (const node of currentPhaseNodes) {
      processed.add(node);
    }

    // Find next phase: reduce in-degrees and find new zero in-degree nodes
    const nextPhaseNodes: string[] = [];
    for (const node of currentPhaseNodes) {
      for (const dependent of dag.getDependents(node)) {
        if (processed.has(dependent)) continue;
        const newDegree = (inDegree.get(dependent) || 0) - 1;
        inDegree.set(dependent, newDegree);
        // Only add if ALL dependencies are now processed (in-degree is effectively 0 among unprocessed)
        if (newDegree <= 0 && !processed.has(dependent)) {
          // Verify all dependencies are actually processed
          const allDepsProcessed = dag.getDependencies(dependent).every(d => processed.has(d));
          if (allDepsProcessed) {
            nextPhaseNodes.push(dependent);
          }
        }
      }
    }

    // Deduplicate next phase nodes
    currentPhaseNodes = [...new Set(nextPhaseNodes)];
    phaseNum++;
  }

  // Check for unprocessed nodes (cycle indication)
  const unprocessed = nodes.filter(n => !processed.has(n));
  if (unprocessed.length > 0) {
    // Add remaining as a final "blocked" phase
    phases.push({
      phase: phaseNum,
      resourceIds: unprocessed,
      estimatedDuration: 0,
      isOnCriticalPath: false,
    });
  }

  const estimatedTotalDuration = phases.reduce((sum, p) => sum + p.estimatedDuration, 0);

  return {
    phases,
    estimatedTotalDuration,
    totalPhases: phases.length,
  };
}
