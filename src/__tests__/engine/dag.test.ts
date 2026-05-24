import { describe, it, expect } from 'vitest';
import { DAG } from '../../engine/graph/dag';

describe('Directed Acyclic Graph (DAG)', () => {
  it('should support adding nodes and edges', () => {
    const dag = new DAG();
    dag.addNode('A');
    dag.addNode('B');
    dag.addEdge('B', 'A'); // B depends on A

    expect(dag.size).toBe(2);
    expect(dag.hasNode('A')).toBe(true);
    expect(dag.hasNode('B')).toBe(true);

    expect(dag.getDependencies('B')).toEqual(['A']);
    expect(dag.getDependents('A')).toEqual(['B']);
  });

  it('should compute in-degree and out-degree correctly', () => {
    const dag = new DAG();
    dag.addEdge('B', 'A'); // B depends on A
    dag.addEdge('C', 'A'); // C depends on A
    dag.addEdge('C', 'B'); // C depends on B

    expect(dag.getInDegree('A')).toBe(0);
    expect(dag.getInDegree('B')).toBe(1); // depends on A
    expect(dag.getInDegree('C')).toBe(2); // depends on A, B

    expect(dag.getOutDegree('A')).toBe(2); // A has dependents B, C
    expect(dag.getOutDegree('B')).toBe(1); // B has dependent C
    expect(dag.getOutDegree('C')).toBe(0);
  });

  it('should find roots and leaves correctly', () => {
    const dag = new DAG();
    dag.addEdge('B', 'A'); // B depends on A
    dag.addEdge('C', 'B'); // C depends on B

    // A has no dependencies (in-degree 0) -> A is root
    // C has no dependents (out-degree 0) -> C is leaf
    expect(dag.getRoots()).toEqual(['A']);
    expect(dag.getLeaves()).toEqual(['C']);
  });

  it('should traverse upstream and downstream subgraphs transitively', () => {
    const dag = new DAG();
    dag.addEdge('B', 'A'); // B depends on A
    dag.addEdge('C', 'B'); // C depends on B
    dag.addEdge('D', 'C'); // D depends on C
    dag.addEdge('E', 'A'); // E depends on A

    // Upstream (dependencies) of D should be C, B, A
    const upstreamD = dag.getUpstream('D');
    expect(upstreamD).toContain('C');
    expect(upstreamD).toContain('B');
    expect(upstreamD).toContain('A');
    expect(upstreamD).not.toContain('E');

    // Downstream (dependents) of A should be B, C, D, E
    const downstreamA = dag.getDownstream('A');
    expect(downstreamA).toContain('B');
    expect(downstreamA).toContain('C');
    expect(downstreamA).toContain('D');
    expect(downstreamA).toContain('E');
  });
});
