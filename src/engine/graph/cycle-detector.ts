/**
 * Cycle detection in directed graphs using DFS.
 * @module cycle-detector
 */

import type { DAG } from './dag';

/**
 * Detect all cycles in the DAG using DFS with back-edge tracking.
 * 
 * @param dag - The dependency DAG
 * @returns Array of cycles, where each cycle is an array of resource IDs forming the cycle
 */
export function detectCycles(dag: DAG): string[][] {
  const nodes = dag.getNodes();
  const visited = new Set<string>();
  const inStack = new Set<string>();
  const cycles: string[][] = [];

  for (const node of nodes) {
    if (!visited.has(node)) {
      dfs(node, dag, visited, inStack, [], cycles);
    }
  }

  return cycles;
}

/**
 * DFS traversal with back-edge detection for cycle finding.
 */
function dfs(
  node: string,
  dag: DAG,
  visited: Set<string>,
  inStack: Set<string>,
  path: string[],
  cycles: string[][]
): void {
  visited.add(node);
  inStack.add(node);
  path.push(node);

  for (const dep of dag.getDependencies(node)) {
    if (!visited.has(dep)) {
      dfs(dep, dag, visited, inStack, path, cycles);
    } else if (inStack.has(dep)) {
      // Found a back-edge → cycle
      const cycleStart = path.indexOf(dep);
      if (cycleStart !== -1) {
        const cycle = path.slice(cycleStart).concat(dep);
        // Avoid duplicate cycles (normalize by starting from smallest ID)
        const normalized = normalizeCycle(cycle);
        if (!cycles.some(c => c.join(',') === normalized.join(','))) {
          cycles.push(normalized);
        }
      }
    }
  }

  path.pop();
  inStack.delete(node);
}

/**
 * Normalize a cycle for deduplication by rotating to start from the smallest ID.
 */
function normalizeCycle(cycle: string[]): string[] {
  if (cycle.length <= 1) return cycle;

  // Remove the trailing duplicate (cycle closer)
  const unique = cycle.slice(0, -1);
  if (unique.length === 0) return cycle;

  // Find the index of the smallest element
  let minIdx = 0;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i] < unique[minIdx]) {
      minIdx = i;
    }
  }

  // Rotate to start from the smallest
  const rotated = [...unique.slice(minIdx), ...unique.slice(0, minIdx)];
  return [...rotated, rotated[0]]; // Add back the cycle closer
}
