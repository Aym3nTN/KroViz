import { describe, it, expect } from 'vitest';
import { diffRGDs } from '../../engine/diff/rgd-differ';
import type { ParsedRGD } from '../../engine/parser/types';

describe('RGD Differ', () => {
  const createMockRgd = (resources: any[], specFields: any[] = []): ParsedRGD => ({
    apiVersion: 'kro.run/v1alpha1',
    kind: 'ResourceGraphDefinition',
    schema: {
      apiVersion: 'kro.run/v1alpha1',
      kind: 'Instance',
      specFields,
      statusMappings: [],
    },
    resources,
    errors: [],
  });

  it('should identify identical RGDs', () => {
    const oldRgd = createMockRgd(
      [
        {
          id: 'web',
          kind: 'Deployment',
          celExpressions: [],
          errors: [],
          sourceLocation: { startLine: 1, endLine: 5 },
          template: { spec: { replicas: 3 } },
        },
      ],
      [{ path: 'spec.replicas', type: 'integer', required: true }]
    );

    const newRgd = createMockRgd(
      [
        {
          id: 'web',
          kind: 'Deployment',
          celExpressions: [],
          errors: [],
          sourceLocation: { startLine: 1, endLine: 5 },
          template: { spec: { replicas: 3 } },
        },
      ],
      [{ path: 'spec.replicas', type: 'integer', required: true }]
    );

    const diff = diffRGDs(oldRgd, newRgd);
    expect(diff.isIdentical).toBe(true);
    expect(diff.resourceChanges).toHaveLength(0);
    expect(diff.dependencyChanges).toHaveLength(0);
    expect(diff.schemaChanges).toHaveLength(0);
  });

  it('should detect added, removed, and modified resources', () => {
    const oldRgd = createMockRgd([
      {
        id: 'web',
        kind: 'Deployment',
        celExpressions: [],
        errors: [],
        sourceLocation: { startLine: 1, endLine: 5 },
        template: { spec: { replicas: 3 } },
      },
      {
        id: 'db',
        kind: 'Deployment',
        celExpressions: [],
        errors: [],
        sourceLocation: { startLine: 6, endLine: 10 },
        template: { spec: { image: 'mysql' } },
      },
    ]);

    const newRgd = createMockRgd([
      {
        id: 'web',
        kind: 'Deployment',
        celExpressions: [],
        errors: [],
        sourceLocation: { startLine: 1, endLine: 5 },
        template: { spec: { replicas: 5 } }, // modified replicas
      },
      {
        id: 'redis',
        kind: 'Deployment',
        celExpressions: [],
        errors: [],
        sourceLocation: { startLine: 6, endLine: 10 },
        template: { spec: { image: 'redis' } }, // added
      },
      // db deployment is removed
    ]);

    const diff = diffRGDs(oldRgd, newRgd);
    expect(diff.isIdentical).toBe(false);

    // Verify Redis is added
    const redisAdd = diff.resourceChanges.find((c) => c.resourceId === 'redis' && c.type === 'added');
    expect(redisAdd).toBeDefined();

    // Verify DB is removed
    const dbRemove = diff.resourceChanges.find((c) => c.resourceId === 'db' && c.type === 'removed');
    expect(dbRemove).toBeDefined();

    // Verify Web is modified
    const webModify = diff.resourceChanges.find((c) => c.resourceId === 'web' && c.type === 'modified');
    expect(webModify).toBeDefined();
    expect(webModify?.fieldChanges).toContainEqual({
      path: 'spec.replicas',
      oldValue: 3,
      newValue: 5,
      type: 'modified',
    });
  });

  it('should detect schema and dependency modifications', () => {
    const oldRgd = createMockRgd([], [{ path: 'spec.port', type: 'integer' }]);
    const newRgd = createMockRgd([], [{ path: 'spec.port', type: 'string' }]);

    const diff = diffRGDs(oldRgd, newRgd);
    expect(diff.schemaChanges).toHaveLength(1);
    expect(diff.schemaChanges[0]).toEqual({
      type: 'modified',
      field: 'spec.port',
      oldValue: 'integer',
      newValue: 'string',
      description: 'Modified field "spec.port": integer → string',
    });
  });
});
