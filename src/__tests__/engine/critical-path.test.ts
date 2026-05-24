import { describe, it, expect } from 'vitest';
import { DAG } from '../../engine/graph/dag';
import { computeCriticalPath } from '../../engine/graph/critical-path';
import type { ParsedResource } from '../../engine/parser/types';

describe('Critical Path Analyzer', () => {
  it('should find the longest weighted path and identify the bottleneck resource', () => {
    const dag = new DAG();
    // B depends on A
    // C depends on A
    // D depends on B
    // D depends on C
    dag.addEdge('B', 'A');
    dag.addEdge('C', 'A');
    dag.addEdge('D', 'B');
    dag.addEdge('D', 'C');

    const mockResources: ParsedResource[] = [
      { id: 'A', kind: 'Namespace', celExpressions: [], errors: [], sourceLocation: { startLine: 1, endLine: 2 } }, // ~2s
      { id: 'B', kind: 'Deployment', celExpressions: [], errors: [], sourceLocation: { startLine: 3, endLine: 4 } }, // ~10s
      { id: 'C', kind: 'Secret', celExpressions: [], errors: [], sourceLocation: { startLine: 5, endLine: 6 } }, // ~1s
      { id: 'D', kind: 'Service', celExpressions: [], errors: [], sourceLocation: { startLine: 7, endLine: 8 } }, // ~3s
    ];

    const result = computeCriticalPath(dag, mockResources);

    // B has kind Deployment which takes 10s. A takes 2s, D takes 3s.
    // Path through B: A (2s) -> B (10s) -> D (3s) = 15s
    // Path through C: A (2s) -> C (1s) -> D (3s) = 6s
    // Longest path must be A -> B -> D
    expect(result.path).toEqual(['A', 'B', 'D']);
    expect(result.totalDuration).toBe(15);
    expect(result.bottleneck).toBe('B'); // B is the deployment taking 10s
  });

  it('should return empty values for an empty graph', () => {
    const dag = new DAG();
    const result = computeCriticalPath(dag, []);
    expect(result.path).toEqual([]);
    expect(result.totalDuration).toBe(0);
    expect(result.bottleneck).toBeNull();
  });
});
