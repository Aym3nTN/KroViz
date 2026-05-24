import { describe, it, expect } from 'vitest';
import { inferDependencies } from '../../engine/dependency/inference-engine';
import type { ParsedRGD, ParsedResource } from '../../engine/parser/types';

describe('Dependency Inference Engine', () => {
  it('should infer various types of dependencies from resource CEL expressions', () => {
    // Construct a mock ParsedRGD
    const mockRGD: ParsedRGD = {
      apiVersion: 'kro.run/v1alpha1',
      kind: 'ResourceGraphDefinition',
      schema: {
        apiVersion: 'kro.run/v1alpha1',
        kind: 'Instance',
        specFields: [],
        statusMappings: [],
      },
      resources: [
        {
          id: 'my-namespace',
          kind: 'Namespace',
          celExpressions: [],
          errors: [],
          sourceLocation: { startLine: 1, endLine: 10 },
        },
        {
          id: 'my-secret',
          kind: 'Secret',
          celExpressions: [
            {
              full: '${my-namespace.metadata.name}',
              expression: 'my-namespace.metadata.name',
              yamlPath: 'metadata.namespace',
              referenceType: 'resource',
              referencedResourceId: 'my-namespace',
              fieldPath: 'metadata.name',
              context: {
                yamlPath: 'metadata.namespace',
                isEnvVar: false,
                isVolume: false,
                isSelector: false,
                isCondition: false,
              },
            },
          ],
          errors: [],
          sourceLocation: { startLine: 12, endLine: 20 },
        },
        {
          id: 'my-db-deployment',
          kind: 'Deployment',
          celExpressions: [
            {
              full: '${my-secret.metadata.name}',
              expression: 'my-secret.metadata.name',
              yamlPath: 'spec.template.spec.containers[0].env[0].valueFrom.secretKeyRef.name',
              referenceType: 'resource',
              referencedResourceId: 'my-secret',
              fieldPath: 'metadata.name',
              context: {
                yamlPath: 'spec.template.spec.containers[0].env[0].valueFrom.secretKeyRef.name',
                isEnvVar: true,
                isVolume: false,
                isSelector: false,
                isCondition: false,
              },
            },
          ],
          errors: [],
          sourceLocation: { startLine: 22, endLine: 40 },
        },
        {
          id: 'my-app-deployment',
          kind: 'Deployment',
          celExpressions: [
            {
              full: '${my-db-deployment.status.ready}',
              expression: 'my-db-deployment.status.ready',
              yamlPath: 'spec.includeWhen',
              referenceType: 'resource',
              referencedResourceId: 'my-db-deployment',
              fieldPath: 'status.ready',
              context: {
                yamlPath: 'spec.includeWhen',
                isEnvVar: false,
                isVolume: false,
                isSelector: false,
                isCondition: true,
              },
            },
          ],
          errors: [],
          sourceLocation: { startLine: 42, endLine: 60 },
        },
      ],
      errors: [],
    };

    const analysis = inferDependencies(mockRGD);

    // Should have 3 edges: Secret -> Namespace, DbDeployment -> Secret, AppDeployment -> DbDeployment
    expect(analysis.totalEdges).toBe(3);
    expect(analysis.dependencies).toHaveLength(3);

    // Verify Secret -> Namespace is 'namespace' type
    const secretToNs = analysis.dependencies.find(
      (d) => d.source === 'my-secret' && d.target === 'my-namespace'
    );
    expect(secretToNs).toBeDefined();
    expect(secretToNs?.type).toBe('namespace');

    // Verify DbDeployment -> Secret is 'secret-ref' type
    const dbToSecret = analysis.dependencies.find(
      (d) => d.source === 'my-db-deployment' && d.target === 'my-secret'
    );
    expect(dbToSecret).toBeDefined();
    expect(dbToSecret?.type).toBe('secret-ref');

    // Verify AppDeployment -> DbDeployment is 'conditional' type
    const appToDb = analysis.dependencies.find(
      (d) => d.source === 'my-app-deployment' && d.target === 'my-db-deployment'
    );
    expect(appToDb).toBeDefined();
    expect(appToDb?.type).toBe('conditional');

    // Verify Roots & Leaves
    // my-namespace should be a leaf because it has incoming references but no outgoing dependencies
    // my-app-deployment should be a root because it has outgoing dependencies but no incoming references
    expect(analysis.rootResources).toContain('my-app-deployment');
    expect(analysis.leafResources).toContain('my-namespace');
  });
});
