import { describe, it, expect } from 'vitest';
import { extractCelExpressions, parseCelReference } from '../../engine/parser/cel-analyzer';

describe('CEL Analyzer', () => {
  describe('extractCelExpressions', () => {
    it('should extract simple CEL expressions from a string', () => {
      const result = extractCelExpressions(
        'host: ${schema.spec.dbHost}',
        'spec.host'
      );
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        raw: 'schema.spec.dbHost',
        full: '${schema.spec.dbHost}',
        referencedResourceId: null,
        fieldPath: 'dbHost',
        referenceType: 'schema-spec',
        context: {
          yamlPath: 'spec.host',
          isEnvVar: false,
          isVolume: false,
          isSelector: false,
          isCondition: false,
        },
      });
    });

    it('should extract multiple expressions from a single string', () => {
      const result = extractCelExpressions(
        'url: http://${schema.spec.host}:${schema.spec.port}/api',
        'spec.url'
      );
      expect(result).toHaveLength(2);
      expect(result[0].raw).toBe('schema.spec.host');
      expect(result[1].raw).toBe('schema.spec.port');
    });

    it('should recursively walk objects and arrays', () => {
      const data = {
        name: 'web-service',
        env: [
          { name: 'DB_PORT', value: '${db.status.port}' },
          { name: 'DB_USER', value: '${schema.spec.user}' }
        ],
        metadata: {
          namespace: '${schema.metadata.namespace}'
        }
      };

      const result = extractCelExpressions(data, 'spec');
      expect(result).toHaveLength(3);

      const dbPort = result.find(r => r.raw === 'db.status.port');
      expect(dbPort).toBeDefined();
      expect(dbPort?.context.yamlPath).toBe('spec.env[0].value');
      expect(dbPort?.referencedResourceId).toBe('db');
      expect(dbPort?.referenceType).toBe('resource');

      const dbUser = result.find(r => r.raw === 'schema.spec.user');
      expect(dbUser).toBeDefined();
      expect(dbUser?.context.yamlPath).toBe('spec.env[1].value');
      expect(dbUser?.referenceType).toBe('schema-spec');
    });
  });

  describe('parseCelReference', () => {
    it('should parse schema.spec references correctly', () => {
      const res = parseCelReference('schema.spec.database.host');
      expect(res.resourceId).toBeNull();
      expect(res.fieldPath).toBe('database.host');
      expect(res.referenceType).toBe('schema-spec');
    });

    it('should parse schema.metadata references correctly', () => {
      const res = parseCelReference('schema.metadata.name');
      expect(res.resourceId).toBeNull();
      expect(res.fieldPath).toBe('name');
      expect(res.referenceType).toBe('schema-metadata');
    });

    it('should parse self references correctly', () => {
      const res = parseCelReference('self.status.ready');
      expect(res.resourceId).toBeNull();
      expect(res.fieldPath).toBe('status.ready');
      expect(res.referenceType).toBe('self');
    });

    it('should parse cross-resource references correctly', () => {
      const res = parseCelReference('db-deployment.metadata.name');
      expect(res.resourceId).toBe('db-deployment');
      expect(res.fieldPath).toBe('metadata.name');
      expect(res.referenceType).toBe('resource');
    });

    it('should parse optional chaining and array indexing', () => {
      const res = parseCelReference('db.status.conditions[0].?.type');
      expect(res.resourceId).toBe('db');
      expect(res.fieldPath).toBe('status.conditions.type');
      expect(res.referenceType).toBe('resource');
    });

    it('should strip complex function calls', () => {
      const res = parseCelReference('base64.decode(secret.status.token).orValue("default")');
      expect(res.resourceId).toBe('secret');
      expect(res.fieldPath).toBe('status.token');
      expect(res.referenceType).toBe('resource');
    });

    it('should extract primary reference from ternary expressions', () => {
      const res = parseCelReference('schema.spec.enableSSL ? cert.status.secretName : "none"');
      expect(res.resourceId).toBe('cert');
      expect(res.fieldPath).toBe('status.secretName');
      expect(res.referenceType).toBe('resource');
    });
  });
});
