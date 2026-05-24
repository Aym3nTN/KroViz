/**
 * Type definitions for the KRO RGD parser.
 * Covers all structures needed to represent a parsed ResourceGraphDefinition.
 */

/** Raw RGD YAML structure after parsing */
export interface RawRGD {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: {
    schema: RawSchema;
    resources: RawResource[];
  };
}

export interface RawSchema {
  apiVersion: string;
  kind: string;
  group?: string;
  scope?: 'Namespaced' | 'Cluster';
  spec: Record<string, unknown>;
  status?: Record<string, unknown>;
}

export interface RawResource {
  id: string;
  template?: Record<string, unknown>;
  externalRef?: {
    apiVersion: string;
    kind: string;
    metadata: {
      name: string;
      namespace?: string;
    };
  };
  includeWhen?: string[];
  readyWhen?: string[];
}

/** Parsed and enriched RGD structure */
export interface ParsedRGD {
  /** Original YAML string */
  rawYaml: string;
  /** RGD metadata */
  metadata: RGDMetadata;
  /** Parsed schema definition */
  schema: ParsedSchema;
  /** All parsed resources */
  resources: ParsedResource[];
  /** Validation errors encountered during parsing */
  errors: ParseError[];
  /** Warnings (non-fatal issues) */
  warnings: ParseWarning[];
}

export interface RGDMetadata {
  name: string;
  namespace?: string;
  apiVersion: string;
  kind: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export interface ParsedSchema {
  apiVersion: string;
  kind: string;
  group: string;
  scope: 'Namespaced' | 'Cluster';
  specFields: SchemaField[];
  statusMappings: StatusMapping[];
}

export interface SchemaField {
  name: string;
  path: string;
  type: SchemaFieldType;
  required: boolean;
  default?: unknown;
  description?: string;
  enum?: string[];
  minimum?: number;
  maximum?: number;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  immutable?: boolean;
  children?: SchemaField[];
}

export type SchemaFieldType =
  | 'string'
  | 'integer'
  | 'boolean'
  | 'float'
  | 'object'
  | 'string[]'
  | 'integer[]'
  | 'boolean[]'
  | 'float[]'
  | 'object[]'
  | 'map[string]string'
  | 'map[string]integer'
  | 'unknown';

export interface StatusMapping {
  field: string;
  expression: string;
  referencedResource?: string;
}

export interface ParsedResource {
  /** Unique resource identifier (lowerCamelCase) */
  id: string;
  /** Whether this is a template or externalRef resource */
  resourceType: 'template' | 'externalRef';
  /** Kubernetes API version */
  apiVersion: string;
  /** Kubernetes resource kind */
  kind: string;
  /** Resource metadata from the template */
  templateMetadata: {
    name?: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  /** Full template content (if template resource) */
  template?: Record<string, unknown>;
  /** External reference config (if externalRef resource) */
  externalRef?: {
    apiVersion: string;
    kind: string;
    name: string;
    namespace?: string;
  };
  /** CEL expressions found in includeWhen */
  includeWhen: string[];
  /** CEL expressions found in readyWhen */
  readyWhen: string[];
  /** All CEL expressions found in this resource */
  celExpressions: CelExpression[];
  /** YAML source location for editor sync */
  sourceLocation: SourceLocation;
}

export interface CelExpression {
  /** The raw expression string (without ${}) */
  raw: string;
  /** The full expression including ${} */
  full: string;
  /** The resource ID being referenced (null if schema/self reference) */
  referencedResourceId: string | null;
  /** The field path being accessed */
  fieldPath: string;
  /** Where in the resource template this expression appears */
  context: CelExpressionContext;
  /** The type of reference */
  referenceType: CelReferenceType;
}

export type CelReferenceType =
  | 'schema-spec'        // ${schema.spec.field}
  | 'schema-metadata'    // ${schema.metadata.field}
  | 'resource'           // ${resourceId.field}
  | 'self'               // ${self.field}
  | 'unknown';

export interface CelExpressionContext {
  /** YAML path where expression appears (e.g., "spec.template.spec.containers[0].env[0].value") */
  yamlPath: string;
  /** Whether this is in env var context */
  isEnvVar: boolean;
  /** Whether this is in volume context */
  isVolume: boolean;
  /** Whether this is in selector context */
  isSelector: boolean;
  /** Whether this is in includeWhen/readyWhen */
  isCondition: boolean;
}

export interface SourceLocation {
  /** Start line in the YAML (1-indexed) */
  startLine: number;
  /** End line in the YAML (1-indexed) */
  endLine: number;
  /** Start column */
  startColumn: number;
  /** End column */
  endColumn: number;
}

export interface ParseError {
  message: string;
  severity: 'error';
  location?: SourceLocation;
  resourceId?: string;
}

export interface ParseWarning {
  message: string;
  severity: 'warning';
  location?: SourceLocation;
  resourceId?: string;
}
