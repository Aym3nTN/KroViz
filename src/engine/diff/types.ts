/**
 * Type definitions for the RGD diff engine.
 */

/** The complete diff result between two RGDs */
export interface RGDDiff {
  /** Whether the two RGDs are identical */
  isIdentical: boolean;
  /** Schema-level changes */
  schemaChanges: SchemaChange[];
  /** Resource-level changes */
  resourceChanges: ResourceChange[];
  /** Dependency changes */
  dependencyChanges: DependencyChange[];
  /** Summary statistics */
  stats: DiffStats;
}

export interface SchemaChange {
  type: 'added' | 'removed' | 'modified';
  field: string;
  oldValue?: unknown;
  newValue?: unknown;
  description: string;
}

export interface ResourceChange {
  type: 'added' | 'removed' | 'modified';
  resourceId: string;
  kind?: string;
  /** Specific field changes for modified resources */
  fieldChanges?: FieldChange[];
  description: string;
}

export interface FieldChange {
  path: string;
  oldValue?: unknown;
  newValue?: unknown;
  type: 'added' | 'removed' | 'modified';
}

export interface DependencyChange {
  type: 'added' | 'removed' | 'modified';
  source: string;
  target: string;
  oldType?: string;
  newType?: string;
  description: string;
}

export interface DiffStats {
  resourcesAdded: number;
  resourcesRemoved: number;
  resourcesModified: number;
  dependenciesAdded: number;
  dependenciesRemoved: number;
  schemaFieldsAdded: number;
  schemaFieldsRemoved: number;
  schemaFieldsModified: number;
}
