import { describe, it, expect } from 'vitest';
import { DAG } from '../../engine/graph/dag';
import { topologicalSort } from '../../engine/graph/topological-sort';
import type { ParsedResource } from '../../engine/parser/types';

describe('Topological Sort', () => {
  it('should sort nodes into correct execution phases', () => {
    const dag = new DAG();
    // A -> B -> D
    // A -> C -> D
    // E -> C
    dag.addEdge('B', 'A'); // B depends on A
    dag.addEdge('C', 'A'); // C depends on A
    dag.addEdge('D', 'B'); // D depends on B
    dag.addEdge('D', 'C'); // D depends on C
    dag.addEdge('C', 'E'); // C depends on E

    const mockResources: ParsedResource[] = [
      { id: 'A', kind: 'Namespace', celExpressions: [], errors: [], sourceLocation: { startLine: 1, endLine: 2 } },
      { id: 'B', kind: 'ConfigMap', celExpressions: [], errors: [], sourceLocation: { startLine: 3, endLine: 4 } },
      { id: 'C', kind: 'Deployment', celExpressions: [], errors: [], sourceLocation: { startLine: 5, endLine: 6 } },
      { id: 'D', kind: 'Service', celExpressions: [], errors: [], sourceLocation: { startLine: 7, endLine: 8 } },
      { id: 'E', kind: 'Secret', celExpressions: [], errors: [], sourceLocation: { startLine: 9, endLine: 10 } },
    ];

    const plan = topologicalSort(dag, mockResources);

    // Verify ordering
    expect(plan.totalPhases).toBeGreaterThanOrEqual(3);

    // Phase 0: should be roots (A, E)
    expect(plan.phases[0].resourceIds).toContain('A');
    expect(plan.phases[0].resourceIds).toContain('E');

    // C depends on A & E, B depends on A.
    // So B and C should be in Phase 1
    expect(plan.phases[1].resourceIds).toContain('B');
    expect(plan.phases[1].resourceIds).toContain('C');

    // D depends on B & C. So D should be in Phase 2
    expect(plan.phases[2].resourceIds).toContain('D');
  });

  it('should handle circular dependencies gracefully by adding a blocked phase', () => {
    const dag = new DAG();
    // Circular: A depends on B, B depends on A. C is separate.
    dag.addEdge('A', 'B');
    dag.addEdge('B', 'A');
    dag.addNode('C');

    const mockResources: ParsedResource[] = [
      { id: 'A', kind: 'Deployment', celExpressions: [], errors: [], sourceLocation: { startLine: 1, endLine: 2 } },
      { id: 'B', kind: 'Deployment', celExpressions: [], errors: [], sourceLocation: { startLine: 3, endLine: 4 } },
      { id: 'C', kind: 'ConfigMap', celExpressions: [], errors: [], sourceLocation: { startLine: 5, endLine: 6 } },
    ];

    const plan = topologicalSort(dag, mockResources);

    // Phase 0 should have C (since C is a root and has in-degree 0)
    expect(plan.phases[0].resourceIds).toContain('C');

    // A and B should be placed in a blocked/unprocessed phase because of the cycle
    const blockedPhase = plan.phases[plan.phases.length - 1];
    expect(blockedPhase.resourceIds).toContain('A');
    expect(blockedPhase.resourceIds).toContain('B');
  });
});
