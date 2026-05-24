/**
 * Type definitions for the graph model.
 * Covers DAG representation, topological ordering, critical path, and impact analysis.
 */

import type { DependencyType } from '../dependency/types';

/** A node in the resource graph */
export interface GraphNode {
  /** Resource ID */
  id: string;
  /** Kubernetes resource kind */
  kind: string;
  /** Kubernetes API version */
  apiVersion: string;
  /** Resource type (template or externalRef) */
  resourceType: 'template' | 'externalRef';
  /** Display label */
  label: string;
  /** Execution phase (0-indexed layer in topological sort) */
  executionPhase: number;
  /** Whether this resource is on the critical path */
  isOnCriticalPath: boolean;
  /** Whether this resource is conditional (has includeWhen) */
  isConditional: boolean;
  /** Whether this resource has readiness gates (readyWhen) */
  hasReadinessGate: boolean;
  /** Estimated creation duration in seconds */
  estimatedDuration: number;
  /** In-degree (number of dependencies) */
  inDegree: number;
  /** Out-degree (number of dependents) */
  outDegree: number;
  /** Resource metadata for display */
  metadata: {
    name?: string;
    namespace?: string;
    labels?: Record<string, string>;
  };
}

/** An edge in the resource graph */
export interface GraphEdge {
  /** Unique edge ID */
  id: string;
  /** Source node (dependent) */
  source: string;
  /** Target node (dependency) */
  target: string;
  /** Dependency type */
  dependencyType: DependencyType;
  /** Human-readable label */
  label: string;
  /** Whether this edge is on the critical path */
  isOnCriticalPath: boolean;
  /** The CEL expressions that created this edge */
  references: string[];
}

/** The complete resource graph */
export interface ResourceGraph {
  /** All nodes */
  nodes: GraphNode[];
  /** All edges */
  edges: GraphEdge[];
  /** Execution plan (topological phases) */
  executionPlan: ExecutionPlan;
  /** Critical path through the graph */
  criticalPath: CriticalPath;
  /** Whether the graph has cycles */
  hasCycles: boolean;
  /** Cycle details if cycles exist */
  cycles: string[][];
  /** Graph statistics */
  stats: GraphStats;
}

/** Execution plan showing reconciliation order */
export interface ExecutionPlan {
  /** Ordered phases (each phase contains resources that can reconcile in parallel) */
  phases: ExecutionPhase[];
  /** Total estimated duration (sum of critical path) */
  estimatedTotalDuration: number;
  /** Total number of phases */
  totalPhases: number;
}

/** A single execution phase (group of parallel resources) */
export interface ExecutionPhase {
  /** Phase number (0-indexed) */
  phase: number;
  /** Resource IDs in this phase (can be created in parallel) */
  resourceIds: string[];
  /** Estimated duration for this phase (max of resource durations) */
  estimatedDuration: number;
  /** Whether this phase is on the critical path */
  isOnCriticalPath: boolean;
}

/** Critical path analysis result */
export interface CriticalPath {
  /** Ordered resource IDs on the critical path */
  path: string[];
  /** Total estimated duration */
  totalDuration: number;
  /** Bottleneck resource (longest individual duration) */
  bottleneck: string | null;
}

/** Graph statistics */
export interface GraphStats {
  /** Total number of resources */
  totalResources: number;
  /** Number of template resources */
  templateResources: number;
  /** Number of externalRef resources */
  externalRefResources: number;
  /** Number of conditional resources */
  conditionalResources: number;
  /** Total number of dependency edges */
  totalEdges: number;
  /** Number of execution phases */
  executionPhases: number;
  /** Resource kind distribution */
  kindDistribution: Record<string, number>;
  /** Maximum graph depth */
  maxDepth: number;
  /** Maximum graph width (largest phase) */
  maxWidth: number;
}

/** Impact analysis for failure simulation */
export interface ImpactAnalysis {
  /** The failed resource ID */
  failedResource: string;
  /** All directly blocked resources */
  directlyBlocked: string[];
  /** All transitively blocked resources (cascade) */
  transitivelyBlocked: string[];
  /** Resources that are degraded but not blocked */
  degraded: string[];
  /** Resources unaffected by the failure */
  unaffected: string[];
  /** Impact severity level */
  severity: ImpactSeverity;
  /** Human-readable impact summary */
  summary: string;
  /** Detailed impact chain */
  impactChain: ImpactChainNode[];
}

export type ImpactSeverity = 'critical' | 'high' | 'medium' | 'low' | 'none';

export interface ImpactChainNode {
  /** Resource ID */
  resourceId: string;
  /** Impact type */
  impact: 'failed' | 'blocked' | 'degraded' | 'unaffected';
  /** Depth from the failed resource */
  depth: number;
  /** Path from failed resource to this resource */
  path: string[];
}

/** Upstream/downstream subgraph for a selected node */
export interface SubgraphResult {
  /** All upstream resource IDs (transitive dependencies) */
  upstream: string[];
  /** All downstream resource IDs (transitive dependents) */
  downstream: string[];
}
