/**
 * RGD Parser — Parses KRO ResourceGraphDefinition YAML into a typed structure.
 * 
 * This is the main entry point for parsing. It validates the RGD structure,
 * extracts resources, and enriches them with CEL expression analysis.
 * 
 * @module rgd-parser
 */

import yaml from 'js-yaml';
import type {
  ParsedRGD,
  RawRGD,
  ParsedResource,
  RGDMetadata,
  ParsedSchema,
  ParseError,
  ParseWarning,
  SourceLocation,
  CelExpression,
} from './types';
import { extractCelExpressions } from './cel-analyzer';
import { parseSchemaFields, parseStatusMappings } from './schema-parser';

/**
 * Parse an RGD YAML string into a fully enriched ParsedRGD structure.
 * 
 * This function:
 * 1. Parses YAML into a raw object
 * 2. Validates the RGD structure
 * 3. Extracts and enriches each resource with CEL expressions
 * 4. Computes YAML source locations for editor sync
 * 
 * @param yamlString - The raw YAML string to parse
 * @returns ParsedRGD with resources, schema, errors, and warnings
 */
export function parseRGD(yamlString: string): ParsedRGD {
  const errors: ParseError[] = [];
  const warnings: ParseWarning[] = [];

  // Step 1: Parse YAML
  let raw: RawRGD;
  try {
    raw = yaml.load(yamlString) as RawRGD;
  } catch (e) {
    const yamlError = e as { mark?: { line: number; column: number }; message: string };
    errors.push({
      message: `YAML parse error: ${yamlError.message}`,
      severity: 'error',
      location: yamlError.mark
        ? { startLine: yamlError.mark.line + 1, endLine: yamlError.mark.line + 1, startColumn: yamlError.mark.column, endColumn: yamlError.mark.column }
        : undefined,
    });
    return {
      rawYaml: yamlString,
      metadata: { name: '', apiVersion: '', kind: '', namespace: undefined },
      schema: { apiVersion: '', kind: '', group: 'kro.run', scope: 'Namespaced', specFields: [], statusMappings: [] },
      resources: [],
      errors,
      warnings,
    };
  }

  if (!raw || typeof raw !== 'object') {
    errors.push({ message: 'YAML did not parse to an object', severity: 'error' });
    return emptyResult(yamlString, errors, warnings);
  }

  // Step 2: Validate structure
  validateStructure(raw, errors, warnings);

  // Step 3: Extract metadata
  const metadata = extractMetadata(raw);

  // Step 4: Parse schema
  const schema = extractSchema(raw, errors);

  // Step 5: Parse resources
  const resourceLocations = computeResourceLocations(yamlString);
  const resources = extractResources(raw, resourceLocations, errors, warnings);

  return {
    rawYaml: yamlString,
    metadata,
    schema,
    resources,
    errors,
    warnings,
  };
}

// ─── Structure Validation ────────────────────────────────────────────────────

function validateStructure(raw: RawRGD, errors: ParseError[], warnings: ParseWarning[]): void {
  if (raw.apiVersion !== 'kro.run/v1alpha1') {
    if (!raw.apiVersion) {
      errors.push({ message: 'Missing apiVersion. Expected "kro.run/v1alpha1"', severity: 'error' });
    } else {
      warnings.push({ message: `Unexpected apiVersion "${raw.apiVersion}". Expected "kro.run/v1alpha1"`, severity: 'warning' });
    }
  }

  if (raw.kind !== 'ResourceGraphDefinition') {
    if (!raw.kind) {
      errors.push({ message: 'Missing kind. Expected "ResourceGraphDefinition"', severity: 'error' });
    } else {
      warnings.push({ message: `Unexpected kind "${raw.kind}". Expected "ResourceGraphDefinition"`, severity: 'warning' });
    }
  }

  if (!raw.metadata?.name) {
    warnings.push({ message: 'Missing metadata.name', severity: 'warning' });
  }

  if (!raw.spec) {
    errors.push({ message: 'Missing spec section', severity: 'error' });
    return;
  }

  if (!raw.spec.schema) {
    errors.push({ message: 'Missing spec.schema section', severity: 'error' });
  }

  if (!raw.spec.resources || !Array.isArray(raw.spec.resources)) {
    errors.push({ message: 'Missing or invalid spec.resources array', severity: 'error' });
  }
}

// ─── Metadata Extraction ─────────────────────────────────────────────────────

function extractMetadata(raw: RawRGD): RGDMetadata {
  return {
    name: raw.metadata?.name || '',
    namespace: raw.metadata?.namespace,
    apiVersion: raw.apiVersion || '',
    kind: raw.kind || '',
    labels: raw.metadata?.labels,
    annotations: raw.metadata?.annotations,
  };
}

// ─── Schema Extraction ───────────────────────────────────────────────────────

function extractSchema(raw: RawRGD, errors: ParseError[]): ParsedSchema {
  const schemaRaw = raw.spec?.schema;
  if (!schemaRaw) {
    return { apiVersion: '', kind: '', group: 'kro.run', scope: 'Namespaced', specFields: [], statusMappings: [] };
  }

  let specFields = [] as ParsedSchema['specFields'];
  let statusMappings = [] as ParsedSchema['statusMappings'];

  try {
    if (schemaRaw.spec && typeof schemaRaw.spec === 'object') {
      specFields = parseSchemaFields(schemaRaw.spec as Record<string, unknown>);
    }
  } catch (e) {
    errors.push({ message: `Error parsing schema spec: ${(e as Error).message}`, severity: 'error' });
  }

  try {
    if (schemaRaw.status && typeof schemaRaw.status === 'object') {
      statusMappings = parseStatusMappings(schemaRaw.status as Record<string, unknown>);
    }
  } catch (e) {
    errors.push({ message: `Error parsing schema status: ${(e as Error).message}`, severity: 'error' });
  }

  return {
    apiVersion: schemaRaw.apiVersion || '',
    kind: schemaRaw.kind || '',
    group: schemaRaw.group || 'kro.run',
    scope: schemaRaw.scope || 'Namespaced',
    specFields,
    statusMappings,
  };
}

// ─── Resource Extraction ─────────────────────────────────────────────────────

function extractResources(
  raw: RawRGD,
  locations: Map<string, SourceLocation>,
  errors: ParseError[],
  warnings: ParseWarning[]
): ParsedResource[] {
  const rawResources = raw.spec?.resources;
  if (!rawResources || !Array.isArray(rawResources)) {
    return [];
  }

  const resources: ParsedResource[] = [];
  const seenIds = new Set<string>();

  for (let i = 0; i < rawResources.length; i++) {
    const rawRes = rawResources[i];
    if (!rawRes || typeof rawRes !== 'object') {
      errors.push({ message: `Resource at index ${i} is not an object`, severity: 'error' });
      continue;
    }

    // Validate ID
    if (!rawRes.id) {
      errors.push({ message: `Resource at index ${i} is missing an id`, severity: 'error' });
      continue;
    }

    if (seenIds.has(rawRes.id)) {
      errors.push({ message: `Duplicate resource id "${rawRes.id}"`, severity: 'error', resourceId: rawRes.id });
      continue;
    }
    seenIds.add(rawRes.id);

    // Validate ID format (lowerCamelCase, no hyphens)
    if (rawRes.id.includes('-')) {
      warnings.push({
        message: `Resource id "${rawRes.id}" contains hyphens. KRO requires lowerCamelCase IDs (hyphens are interpreted as subtraction in CEL).`,
        severity: 'warning',
        resourceId: rawRes.id,
      });
    }

    // Determine resource type
    const isTemplate = !!rawRes.template;
    const isExternalRef = !!rawRes.externalRef;

    if (!isTemplate && !isExternalRef) {
      errors.push({ message: `Resource "${rawRes.id}" has neither template nor externalRef`, severity: 'error', resourceId: rawRes.id });
      continue;
    }

    // Extract apiVersion and kind
    let apiVersion = '';
    let kind = '';
    let templateMetadata: ParsedResource['templateMetadata'] = {};

    if (isTemplate && rawRes.template) {
      apiVersion = (rawRes.template as Record<string, unknown>).apiVersion as string || '';
      kind = (rawRes.template as Record<string, unknown>).kind as string || '';
      const meta = (rawRes.template as Record<string, unknown>).metadata as Record<string, unknown> | undefined;
      templateMetadata = {
        name: meta?.name as string | undefined,
        namespace: meta?.namespace as string | undefined,
        labels: meta?.labels as Record<string, string> | undefined,
        annotations: meta?.annotations as Record<string, string> | undefined,
      };
    } else if (isExternalRef && rawRes.externalRef) {
      apiVersion = rawRes.externalRef.apiVersion || '';
      kind = rawRes.externalRef.kind || '';
      templateMetadata = {
        name: rawRes.externalRef.metadata?.name,
        namespace: rawRes.externalRef.metadata?.namespace,
      };
    }

    // Extract CEL expressions from template
    let celExpressions: CelExpression[] = [];
    if (isTemplate && rawRes.template) {
      celExpressions = extractCelExpressions(rawRes.template, 'template');
    }

    // Extract CEL from includeWhen
    const includeWhen = rawRes.includeWhen || [];
    for (const expr of includeWhen) {
      if (typeof expr === 'string') {
        const conditionExprs = extractCelExpressions(expr, 'includeWhen');
        celExpressions.push(...conditionExprs.map(e => ({
          ...e,
          context: { ...e.context, isCondition: true },
        })));
      }
    }

    // Extract CEL from readyWhen
    const readyWhen = rawRes.readyWhen || [];
    for (const expr of readyWhen) {
      if (typeof expr === 'string') {
        const readyExprs = extractCelExpressions(expr, 'readyWhen');
        celExpressions.push(...readyExprs.map(e => ({
          ...e,
          context: { ...e.context, isCondition: true },
        })));
      }
    }

    // Get source location
    const sourceLocation = locations.get(rawRes.id) || { startLine: 1, endLine: 1, startColumn: 0, endColumn: 0 };

    resources.push({
      id: rawRes.id,
      resourceType: isTemplate ? 'template' : 'externalRef',
      apiVersion,
      kind,
      templateMetadata,
      template: isTemplate ? rawRes.template as Record<string, unknown> : undefined,
      externalRef: isExternalRef && rawRes.externalRef
        ? {
            apiVersion: rawRes.externalRef.apiVersion,
            kind: rawRes.externalRef.kind,
            name: rawRes.externalRef.metadata?.name || '',
            namespace: rawRes.externalRef.metadata?.namespace,
          }
        : undefined,
      includeWhen: includeWhen.map(String),
      readyWhen: readyWhen.map(String),
      celExpressions,
      sourceLocation,
    });
  }

  return resources;
}

// ─── Source Location Computation ─────────────────────────────────────────────

/**
 * Compute YAML source locations for each resource by scanning the raw YAML string.
 * Finds `- id: resourceName` patterns and estimates the range of each resource block.
 */
function computeResourceLocations(yamlString: string): Map<string, SourceLocation> {
  const locations = new Map<string, SourceLocation>();
  const lines = yamlString.split('\n');

  // Find all `- id: <name>` lines (resource starts)
  const resourceStarts: { id: string; line: number; indent: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(\s*)- id:\s*(\S+)/);
    if (match) {
      resourceStarts.push({
        id: match[2],
        line: i + 1, // 1-indexed
        indent: match[1].length,
      });
    }
  }

  // For each resource, find where it ends (next resource at same indent or end of file)
  for (let i = 0; i < resourceStarts.length; i++) {
    const start = resourceStarts[i];
    const nextStart = resourceStarts[i + 1];
    const endLine = nextStart ? nextStart.line - 1 : lines.length;

    locations.set(start.id, {
      startLine: start.line,
      endLine,
      startColumn: start.indent,
      endColumn: 0,
    });
  }

  return locations;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function emptyResult(yamlString: string, errors: ParseError[], warnings: ParseWarning[]): ParsedRGD {
  return {
    rawYaml: yamlString,
    metadata: { name: '', apiVersion: '', kind: '', namespace: undefined },
    schema: { apiVersion: '', kind: '', group: 'kro.run', scope: 'Namespaced', specFields: [], statusMappings: [] },
    resources: [],
    errors,
    warnings,
  };
}
