/**
 * SimpleSchema parser for KRO ResourceGraphDefinition schema fields.
 * Parses the `spec.schema.spec` and `spec.schema.status` sections.
 * 
 * @module schema-parser
 */

import type { SchemaField, SchemaFieldType, StatusMapping } from './types';

/**
 * Parse SimpleSchema fields from the schema spec section.
 * Handles nested objects and SimpleSchema type syntax: `type | marker1=value marker2=value`
 * 
 * @param spec - The raw schema spec object
 * @param parentPath - Parent dot-path for nested fields
 * @returns Array of parsed schema fields
 */
export function parseSchemaFields(
  spec: Record<string, unknown>,
  parentPath: string = ''
): SchemaField[] {
  const fields: SchemaField[] = [];

  for (const [name, value] of Object.entries(spec)) {
    const path = parentPath ? `${parentPath}.${name}` : name;

    if (typeof value === 'string') {
      fields.push(parseFieldDeclaration(name, path, value));
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Nested object - recurse
      const children = parseSchemaFields(value as Record<string, unknown>, path);
      fields.push({
        name,
        path,
        type: 'object',
        required: false,
        children,
      });
    }
  }

  return fields;
}

/**
 * Parse status mappings from the schema status section.
 * Status fields contain CEL expressions that map to resource outputs.
 * 
 * @param status - The raw schema status object
 * @returns Array of status mappings
 */
export function parseStatusMappings(
  status: Record<string, unknown>
): StatusMapping[] {
  const mappings: StatusMapping[] = [];

  for (const [field, value] of Object.entries(status)) {
    if (typeof value === 'string') {
      const celMatch = value.match(/\$\{([^}]+)\}/);
      const expression = celMatch ? celMatch[1] : value;
      
      // Extract referenced resource from the expression
      let referencedResource: string | undefined;
      const parts = expression.split('.');
      if (parts.length > 0 && parts[0] !== 'schema' && parts[0] !== 'self') {
        referencedResource = parts[0];
      }

      mappings.push({ field, expression, referencedResource });
    } else if (typeof value === 'object' && value !== null) {
      // Nested status - flatten with dot notation
      const nested = flattenStatusObject(value as Record<string, unknown>, field);
      mappings.push(...nested);
    }
  }

  return mappings;
}

// ─── Internal Helpers ────────────────────────────────────────────────────────

/**
 * Parse a single field declaration string.
 * Format: `type | marker1=value marker2=value`
 */
function parseFieldDeclaration(name: string, path: string, declaration: string): SchemaField {
  const parts = declaration.split('|').map(p => p.trim());
  const typeStr = parts[0];
  const markersStr = parts.slice(1).join('|').trim();

  const type = parseFieldType(typeStr);
  const markers = markersStr ? parseMarkers(markersStr) : {};

  return {
    name,
    path,
    type,
    required: markers.required === 'true' || markers.required === true,
    default: parseDefaultValue(markers.default, type),
    description: markers.description as string | undefined,
    enum: markers.enum ? String(markers.enum).split(',').map(s => s.trim()) : undefined,
    minimum: markers.minimum !== undefined ? Number(markers.minimum) : undefined,
    maximum: markers.maximum !== undefined ? Number(markers.maximum) : undefined,
    pattern: markers.pattern as string | undefined,
    minLength: markers.minLength !== undefined ? Number(markers.minLength) : undefined,
    maxLength: markers.maxLength !== undefined ? Number(markers.maxLength) : undefined,
    immutable: markers.immutable === 'true' || markers.immutable === true,
  };
}

/**
 * Parse a type string into a SchemaFieldType.
 */
function parseFieldType(typeStr: string): SchemaFieldType {
  const t = typeStr.trim().toLowerCase();

  if (t === 'string') return 'string';
  if (t === 'integer' || t === 'int') return 'integer';
  if (t === 'boolean' || t === 'bool') return 'boolean';
  if (t === 'float' || t === 'double' || t === 'number') return 'float';
  if (t === 'object') return 'object';
  if (t === '[]string') return 'string[]';
  if (t === '[]integer' || t === '[]int') return 'integer[]';
  if (t === '[]boolean' || t === '[]bool') return 'boolean[]';
  if (t === '[]float' || t === '[]double') return 'float[]';
  if (t === '[]object') return 'object[]';
  if (t.startsWith('map[string]string')) return 'map[string]string';
  if (t.startsWith('map[string]integer') || t.startsWith('map[string]int')) return 'map[string]integer';

  return 'unknown';
}

/**
 * Parse marker string into key-value pairs.
 * Format: `marker1=value1 marker2=value2` or `marker1="quoted value"`
 */
function parseMarkers(markersStr: string): Record<string, unknown> {
  const markers: Record<string, unknown> = {};
  // Match key=value pairs, handling quoted values
  const regex = /(\w+)\s*=\s*(?:"([^"]*)"|([\w.,/*-]+))/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markersStr)) !== null) {
    const key = match[1];
    const value = match[2] !== undefined ? match[2] : match[3];
    markers[key] = value;
  }

  return markers;
}

/**
 * Parse a default value to the appropriate type.
 */
function parseDefaultValue(value: unknown, type: SchemaFieldType): unknown {
  if (value === undefined || value === null) return undefined;

  const strVal = String(value);

  switch (type) {
    case 'integer':
      return parseInt(strVal, 10);
    case 'float':
      return parseFloat(strVal);
    case 'boolean':
      return strVal === 'true';
    case 'string':
      // Strip surrounding quotes if present
      return strVal.replace(/^["']|["']$/g, '');
    default:
      return strVal;
  }
}

/**
 * Flatten a nested status object into dot-notation mappings.
 */
function flattenStatusObject(
  obj: Record<string, unknown>,
  prefix: string
): StatusMapping[] {
  const mappings: StatusMapping[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const field = `${prefix}.${key}`;
    if (typeof value === 'string') {
      const celMatch = value.match(/\$\{([^}]+)\}/);
      const expression = celMatch ? celMatch[1] : value;
      let referencedResource: string | undefined;
      const parts = expression.split('.');
      if (parts.length > 0 && parts[0] !== 'schema' && parts[0] !== 'self') {
        referencedResource = parts[0];
      }
      mappings.push({ field, expression, referencedResource });
    } else if (typeof value === 'object' && value !== null) {
      mappings.push(...flattenStatusObject(value as Record<string, unknown>, field));
    }
  }

  return mappings;
}
