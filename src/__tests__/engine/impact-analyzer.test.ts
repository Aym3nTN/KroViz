import { describe, it, expect } from 'vitest';
import { DAG } from '../../engine/graph/dag';
import { analyzeImpact } from '../../engine/graph/impact-analyzer';

describe('Impact Analyzer', () => {
  it('should return no downstream impact when a leaf resource fails', () => {
    const dag = new DAG();
    // B depends on A. A is root, B is leaf. Add C, D, E to keep ratio low.
    dag.addEdge('B', 'A');
    dag.addNode('C');
    dag.addNode('D');
    dag.addNode('E');

    const result = analyzeImpact(dag, 'B', ['A', 'B', 'C', 'D', 'E']);

    expect(result.failedResource).toBe('B');
    expect(result.directlyBlocked).toHaveLength(0);
    expect(result.transitivelyBlocked).toHaveLength(0);
    expect(result.unaffected).toContain('A');
    expect(result.severity).toBe('low'); // Only B itself (20%) is affected
  });

  it('should compute correct direct and transitive blockages when an intermediate resource fails', () => {
    const dag = new DAG();
    // C depends on B, B depends on A. D is separate.
    dag.addEdge('B', 'A');
    dag.addEdge('C', 'B');
    dag.addNode('D');

    const result = analyzeImpact(dag, 'A', ['A', 'B', 'C', 'D']);

    expect(result.failedResource).toBe('A');
    expect(result.directlyBlocked).toEqual(['B']); // B depends directly on A
    expect(result.transitivelyBlocked).toEqual(['C']); // C depends transitively on A (via B)
    expect(result.unaffected).toEqual(['D']); // D is completely isolated

    // 3 out of 4 resources affected (A, B, C) = 75% -> high severity
    expect(result.severity).toBe('high');
    expect(result.summary).toContain('Directly blocked: B');
    expect(result.summary).toContain('Cascading impact: C');
  });

  it('should correctly format deep traversal paths in the impact chain', () => {
    const dag = new DAG();
    // C depends on B, B depends on A
    dag.addEdge('B', 'A');
    dag.addEdge('C', 'B');

    const result = analyzeImpact(dag, 'A', ['A', 'B', 'C']);

    const nodeC = result.impactChain.find((n) => n.resourceId === 'C');
    expect(nodeC).toBeDefined();
    expect(nodeC?.depth).toBe(2);
    expect(nodeC?.path).toEqual(['A', 'B', 'C']);
  });
});
