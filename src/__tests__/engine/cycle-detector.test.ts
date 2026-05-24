import { describe, it, expect } from 'vitest';
import { DAG } from '../../engine/graph/dag';
import { detectCycles } from '../../engine/graph/cycle-detector';

describe('Cycle Detector', () => {
  it('should return no cycles for a correct DAG', () => {
    const dag = new DAG();
    dag.addEdge('B', 'A');
    dag.addEdge('C', 'B');
    dag.addEdge('D', 'A');

    const cycles = detectCycles(dag);
    expect(cycles).toHaveLength(0);
  });

  it('should detect a simple 2-node cycle', () => {
    const dag = new DAG();
    dag.addEdge('A', 'B');
    dag.addEdge('B', 'A');

    const cycles = detectCycles(dag);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]).toEqual(['A', 'B', 'A']);
  });

  it('should detect a 3-node transitive cycle', () => {
    const dag = new DAG();
    dag.addEdge('A', 'B');
    dag.addEdge('B', 'C');
    dag.addEdge('C', 'A');

    const cycles = detectCycles(dag);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]).toEqual(['A', 'B', 'C', 'A']);
  });

  it('should normalize and deduplicate cycles', () => {
    const dag = new DAG();
    // Circular: A -> B -> C -> A
    dag.addEdge('A', 'B');
    dag.addEdge('B', 'C');
    dag.addEdge('C', 'A');

    // Run cycle detection
    const cycles = detectCycles(dag);
    expect(cycles).toHaveLength(1);
    // Cycle A->B->C->A, rotated to start at smallest element (A)
    expect(cycles[0]).toEqual(['A', 'B', 'C', 'A']);
  });
});
