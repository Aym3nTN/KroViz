/**
 * Directed Acyclic Graph (DAG) data structure for resource dependency graphs.
 * 
 * @module dag
 */

import type { SubgraphResult } from './types';

/**
 * DAG representation with adjacency lists for efficient traversal.
 */
export class DAG {
  /** Forward adjacency list: node → nodes it depends ON (outgoing edges from dependent TO dependency) */
  private adjacency = new Map<string, Set<string>>();
  /** Reverse adjacency list: node → nodes that depend on it */
  private reverseAdjacency = new Map<string, Set<string>>();
  /** All node IDs */
  private nodeSet = new Set<string>();

  /** Add a node to the graph */
  addNode(id: string): void {
    this.nodeSet.add(id);
    if (!this.adjacency.has(id)) {
      this.adjacency.set(id, new Set());
    }
    if (!this.reverseAdjacency.has(id)) {
      this.reverseAdjacency.set(id, new Set());
    }
  }

  /** 
   * Add a directed edge: source depends on target.
   * Edge goes from source → target (source needs target).
   */
  addEdge(source: string, target: string): void {
    this.addNode(source);
    this.addNode(target);
    this.adjacency.get(source)!.add(target);
    this.reverseAdjacency.get(target)!.add(source);
  }

  /** Get all nodes */
  getNodes(): string[] {
    return Array.from(this.nodeSet);
  }

  /** Get the number of nodes */
  get size(): number {
    return this.nodeSet.size;
  }

  /** Check if a node exists */
  hasNode(id: string): boolean {
    return this.nodeSet.has(id);
  }

  /** Get dependencies of a node (what it depends on) */
  getDependencies(id: string): string[] {
    return Array.from(this.adjacency.get(id) || []);
  }

  /** Get dependents of a node (what depends on it) */
  getDependents(id: string): string[] {
    return Array.from(this.reverseAdjacency.get(id) || []);
  }

  /** Get in-degree (number of dependencies) */
  getInDegree(id: string): number {
    return this.adjacency.get(id)?.size || 0;
  }

  /** Get out-degree (number of dependents) */
  getOutDegree(id: string): number {
    return this.reverseAdjacency.get(id)?.size || 0;
  }

  /** Get root nodes (no dependencies — in-degree 0) */
  getRoots(): string[] {
    return this.getNodes().filter(id => this.getInDegree(id) === 0);
  }

  /** Get leaf nodes (no dependents — out-degree 0) */
  getLeaves(): string[] {
    return this.getNodes().filter(id => this.getOutDegree(id) === 0);
  }

  /** Get forward adjacency list */
  getAdjacencyList(): Map<string, Set<string>> {
    return new Map(this.adjacency);
  }

  /** Get reverse adjacency list */
  getReverseAdjacencyList(): Map<string, Set<string>> {
    return new Map(this.reverseAdjacency);
  }

  /**
   * Compute upstream (all transitive dependencies) and downstream (all transitive dependents)
   * subgraphs for a given node.
   */
  getSubgraph(nodeId: string): SubgraphResult {
    return {
      upstream: this.getUpstream(nodeId),
      downstream: this.getDownstream(nodeId),
    };
  }

  /** Get all transitive dependencies (upstream) of a node using BFS */
  getUpstream(nodeId: string): string[] {
    const visited = new Set<string>();
    const queue = [...this.getDependencies(nodeId)];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;
      visited.add(current);
      queue.push(...this.getDependencies(current));
    }

    return Array.from(visited);
  }

  /** Get all transitive dependents (downstream) of a node using BFS */
  getDownstream(nodeId: string): string[] {
    const visited = new Set<string>();
    const queue = [...this.getDependents(nodeId)];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;
      visited.add(current);
      queue.push(...this.getDependents(current));
    }

    return Array.from(visited);
  }
}
