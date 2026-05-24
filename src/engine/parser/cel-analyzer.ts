/**
 * CEL Expression Analyzer for KRO ResourceGraphDefinitions.
 *
 * Extracts and parses CEL expressions (`${...}`) embedded in YAML values.
 * Handles complex CEL syntax including ternary operators, optional access,
 * `.orValue()`, `base64.decode()`, and array indexing.
 *
 * @module cel-analyzer
 */

import type {
  CelExpression,
  CelExpressionContext,
  CelReferenceType,
} from './types';

/** Regex pattern to match CEL expressions: ${...} */
const CEL_EXPRESSION_REGEX = /\$\{([^}]+)\}/g;

/**
 * Result of parsing a raw CEL expression into its components.
 */
export interface CelParseResult {
  /** The resource ID being referenced, or null for schema/self references */
  resourceId: string | null;
  /** The field path being accessed */
  fieldPath: string;
  /** The type of reference */
  referenceType: CelReferenceType;
}

/**
 * Parse a raw CEL expression string to determine which resource and field it references.
 *
 * Handles various CEL patterns:
 * - `schema.spec.field` → schema-spec reference
 * - `schema.metadata.field` → schema-metadata reference
 * - `self.field` → self reference
 * - `resourceId.field.path` → cross-resource dependency
 * - Ternary: `condition ? expr1 : expr2`
 * - Optional: `resource.?.field`
 * - Functions: `.orValue()`, `base64.decode()`
 *
 * @param expression - The raw CEL expression (without `${}`)
 * @returns Parsed reference info with resourceId, fieldPath, and referenceType
 */
export function parseCelReference(expression: string): CelParseResult {
  const cleaned = expression.trim();

  // Handle ternary expressions — parse the primary (first non-conditional) reference
  // e.g., `someCondition ? ${resourceA.field} : "default"`
  // We extract references from all parts of the ternary, but return the first "interesting" one.
  if (cleaned.includes('?') && cleaned.includes(':')) {
    const primaryRef = extractPrimaryFromTernary(cleaned);
    if (primaryRef) {
      return primaryRef;
    }
  }

  // Strip function calls: `.orValue(...)`, `base64.decode(...)`, `size(...)` etc.
  const withoutFunctions = stripFunctionCalls(cleaned);

  // Strip optional access: `.?` → `.`
  const withoutOptional = withoutFunctions.replace(/\.\?/g, '.');

  // Strip array indexing: `[0]`, `[*]` etc.
  const withoutArrayIndex = withoutOptional.replace(/\[\d+\]/g, '').replace(/\[\*\]/g, '');

  // Now parse the cleaned dot-path
  return parseSimpleReference(withoutArrayIndex.trim());
}

/**
 * Recursively extract all CEL expressions from an arbitrary YAML value.
 *
 * Walks strings, arrays, and objects, accumulating every `${...}` expression found.
 * Each expression is enriched with its YAML path context and parsed reference info.
 *
 * @param value - Any YAML value (string, number, array, object, etc.)
 * @param yamlPath - The dot-path location in the YAML (e.g., "spec.template.spec.containers[0].env[0].value")
 * @returns Array of all CEL expressions found in the value
 */
export function extractCelExpressions(
  value: unknown,
  yamlPath: string
): CelExpression[] {
  const results: CelExpression[] = [];
  walkValue(value, yamlPath, results);
  return results;
}

/**
 * Extract all raw CEL expression strings from a string value.
 * Returns the inner expression (without `${}`).
 *
 * @param str - The string to scan for CEL expressions
 * @returns Array of raw expression strings
 */
export function extractRawExpressions(str: string): string[] {
  const matches: string[] = [];
  // Reset regex state
  CEL_EXPRESSION_REGEX.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = CEL_EXPRESSION_REGEX.exec(str)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

// ─── Internal Helpers ────────────────────────────────────────────────────────

/**
 * Recursively walk a value and extract CEL expressions.
 */
function walkValue(
  value: unknown,
  yamlPath: string,
  results: CelExpression[]
): void {
  if (value === null || value === undefined) {
    return;
  }

  if (typeof value === 'string') {
    extractFromString(value, yamlPath, results);
    return;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      walkValue(value[i], `${yamlPath}[${i}]`, results);
    }
    return;
  }

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    for (const key of Object.keys(obj)) {
      const childPath = yamlPath ? `${yamlPath}.${key}` : key;
      walkValue(obj[key], childPath, results);
    }
  }
}

/**
 * Extract CEL expressions from a string value.
 */
function extractFromString(
  str: string,
  yamlPath: string,
  results: CelExpression[]
): void {
  const rawExpressions = extractRawExpressions(str);

  for (const raw of rawExpressions) {
    const parsed = parseCelReference(raw);
    const context = buildContext(yamlPath);

    results.push({
      raw,
      full: `\${${raw}}`,
      referencedResourceId: parsed.resourceId,
      fieldPath: parsed.fieldPath,
      context,
      referenceType: parsed.referenceType,
    });
  }
}

/**
 * Build a CelExpressionContext from a YAML path string.
 */
function buildContext(yamlPath: string): CelExpressionContext {
  const lowerPath = yamlPath.toLowerCase();

  return {
    yamlPath,
    isEnvVar: /\.env\b/.test(lowerPath) || /\.env\[/.test(lowerPath),
    isVolume:
      lowerPath.includes('volume') ||
      lowerPath.includes('volumemount') ||
      lowerPath.includes('configmap.name') ||
      lowerPath.includes('secret.secretname'),
    isSelector: lowerPath.includes('selector'),
    isCondition: lowerPath.includes('includewhen') || lowerPath.includes('readywhen'),
  };
}

/**
 * Parse a simple dot-path reference (after all CEL syntax has been stripped).
 */
function parseSimpleReference(path: string): CelParseResult {
  if (!path || path.length === 0) {
    return { resourceId: null, fieldPath: '', referenceType: 'unknown' };
  }

  const segments = splitDotPath(path);
  if (segments.length === 0) {
    return { resourceId: null, fieldPath: path, referenceType: 'unknown' };
  }

  const root = segments[0];
  const rest = segments.slice(1).join('.');

  // Schema spec reference: schema.spec.*
  if (root === 'schema' && segments.length > 1 && segments[1] === 'spec') {
    return {
      resourceId: null,
      fieldPath: segments.slice(2).join('.') || 'spec',
      referenceType: 'schema-spec',
    };
  }

  // Schema metadata reference: schema.metadata.*
  if (root === 'schema' && segments.length > 1 && segments[1] === 'metadata') {
    return {
      resourceId: null,
      fieldPath: segments.slice(2).join('.') || 'metadata',
      referenceType: 'schema-metadata',
    };
  }

  // Schema without further qualifier (fallback)
  if (root === 'schema') {
    return {
      resourceId: null,
      fieldPath: rest || 'schema',
      referenceType: 'schema-spec',
    };
  }

  // Self reference: self.*
  if (root === 'self') {
    return {
      resourceId: null,
      fieldPath: rest || 'self',
      referenceType: 'self',
    };
  }

  // Cross-resource reference: resourceId.*
  return {
    resourceId: root,
    fieldPath: rest || root,
    referenceType: 'resource',
  };
}

/**
 * Split a dot-path into segments, respecting array indexing.
 * e.g., "spec.containers[0].env" → ["spec", "containers[0]", "env"]
 * We strip the array indices later, so keep them for now.
 */
function splitDotPath(path: string): string[] {
  // Split by dots but not within brackets
  const segments: string[] = [];
  let current = '';
  let bracketDepth = 0;

  for (const char of path) {
    if (char === '[') {
      bracketDepth++;
      current += char;
    } else if (char === ']') {
      bracketDepth--;
      current += char;
    } else if (char === '.' && bracketDepth === 0) {
      if (current.length > 0) {
        segments.push(current);
      }
      current = '';
    } else {
      current += char;
    }
  }
  if (current.length > 0) {
    segments.push(current);
  }
  return segments;
}

/**
 * Strip function calls from a CEL expression while preserving the reference path.
 *
 * Examples:
 * - `base64.decode(resource.field)` → `resource.field`
 * - `resource.field.orValue("default")` → `resource.field`
 * - `size(resource.field)` → `resource.field`
 */
function stripFunctionCalls(expr: string): string {
  let result = expr.trim();
  let changed = true;

  while (changed) {
    changed = false;

    // Strip trailing method calls: `.orValue(...)`, `.map(...)`, etc.
    const trailingPattern = /\.(orValue|map|filter|exists|all|exists_one|size)\s*\([^)]*\)$/;
    const trailingMatch = result.match(trailingPattern);
    if (trailingMatch) {
      result = result.substring(0, result.length - trailingMatch[0].length).trim();
      changed = true;
      continue;
    }

    // Strip wrapping function calls: `function(inner)` → inner
    const wrappingFuncPattern = /^(?:base64\.decode|base64\.encode|size|int|uint|double|string|bool|type|duration|timestamp)\s*\((.+)\)$/;
    const wrappingMatch = result.match(wrappingFuncPattern);
    if (wrappingMatch) {
      result = wrappingMatch[1].trim();
      changed = true;
      continue;
    }
  }

  return result;
}

/**
 * Extract the primary reference from a ternary expression.
 * For `condition ? exprA : exprB`, we try to parse all parts and return
 * the first cross-resource or schema reference found.
 */
function extractPrimaryFromTernary(expr: string): CelParseResult | null {
  // Find the top-level `?` and `:` — be careful about nested ternaries
  const qIndex = findTopLevelChar(expr, '?');
  if (qIndex === -1) return null;

  const colonIndex = findTopLevelChar(expr.substring(qIndex + 1), ':');
  if (colonIndex === -1) return null;

  const condition = expr.substring(0, qIndex).trim();
  const trueBranch = expr.substring(qIndex + 1, qIndex + 1 + colonIndex).trim();
  const falseBranch = expr.substring(qIndex + 1 + colonIndex + 1).trim();

  // Try each part — prefer the condition or true branch which typically has the interesting reference
  const candidates = [condition, trueBranch, falseBranch];
  let fallback: CelParseResult | null = null;

  for (const candidate of candidates) {
    // Strip quotes — if it's a literal string, skip
    const trimmed = candidate.replace(/^["']|["']$/g, '').trim();
    if (!trimmed || /^[0-9]+$/.test(trimmed) || trimmed === 'true' || trimmed === 'false') {
      continue;
    }

    // Check if this looks like a reference path (contains dots, starts with a word char)
    if (/^[a-zA-Z_]/.test(trimmed) && trimmed.includes('.')) {
      const parsed = parseSimpleReference(stripFunctionCalls(trimmed.replace(/\.\?/g, '.').replace(/\[\d+\]/g, '')));
      if (parsed.referenceType === 'resource') {
        return parsed;
      }
      if (parsed.referenceType !== 'unknown' && !fallback) {
        fallback = parsed;
      }
    }
  }

  return fallback;
}

/**
 * Find the index of a character at the top level (not nested in parens/brackets/quotes).
 */
function findTopLevelChar(expr: string, char: string): number {
  let parenDepth = 0;
  let bracketDepth = 0;
  let inSingleQuote = false;
  let inDoubleQuote = false;

  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    const prev = i > 0 ? expr[i - 1] : '';

    if (c === "'" && !inDoubleQuote && prev !== '\\') {
      inSingleQuote = !inSingleQuote;
    } else if (c === '"' && !inSingleQuote && prev !== '\\') {
      inDoubleQuote = !inDoubleQuote;
    } else if (!inSingleQuote && !inDoubleQuote) {
      if (c === '(') parenDepth++;
      else if (c === ')') parenDepth--;
      else if (c === '[') bracketDepth++;
      else if (c === ']') bracketDepth--;
      else if (c === char && parenDepth === 0 && bracketDepth === 0) {
        return i;
      }
    }
  }
  return -1;
}
