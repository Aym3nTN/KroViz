/**
 * Type definitions for the dependency inference engine.
 */

/** A dependency between two resources */
export interface Dependency {
  /** ID of the dependent resource (the one that needs the other) */
  source: string;
  /** ID of the dependency resource (the one being depended upon) */
  target: string;
  /** Type of dependency */
  type: DependencyType;
  /** The CEL references that created this dependency */
  references: DependencyReference[];
  /** Human-readable description of why this dependency exists */
  description: string;
}

export type DependencyType =
  | 'cel-reference'       // Direct ${resourceId.field} reference
  | 'env-var'             // Environment variable injection
  | 'volume-mount'        // Volume/configMap/secret mount
  | 'selector'            // Label selector match via shared schema refs
  | 'namespace'           // Namespace dependency
  | 'service-binding'     // Service → Deployment binding via selector
  | 'secret-ref'          // secretKeyRef reference
  | 'configmap-ref'       // configMapKeyRef reference
  | 'conditional';        // includeWhen reference to another resource

/** A specific reference that contributes to a dependency */
export interface DependencyReference {
  /** The CEL expression creating this reference */
  expression: string;
  /** Where in the source resource this reference appears */
  sourceContext: string;
  /** What field on the target resource is being accessed */
  targetField: string;
}

/** The complete dependency analysis result */
export interface DependencyAnalysis {
  /** All dependencies found */
  dependencies: Dependency[];
  /** Resources with no dependencies (roots) */
  rootResources: string[];
  /** Resources with no dependents (leaves) */
  leafResources: string[];
  /** Total number of unique dependency edges */
  totalEdges: number;
  /** Dependency type breakdown */
  typeBreakdown: Record<DependencyType, number>;
}
