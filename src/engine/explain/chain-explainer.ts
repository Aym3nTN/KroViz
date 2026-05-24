/**
 * Chain Explainer — generates natural language explanations of dependency chains.
 * @module chain-explainer
 */

import type { ResourceGraph } from '../graph/types';
import type { ChainExplanation, ExplanationStep, ExecutionExplanation, PhaseNarrative } from './types';

/**
 * Generate a natural language explanation of a dependency chain.
 */
export function explainChain(chain: string[], graph: ResourceGraph): ChainExplanation {
  const nodeMap = new Map(graph.nodes.map(n => [n.id, n]));
  const edgeMap = new Map(graph.edges.map(e => [e.id, e]));

  const steps: ExplanationStep[] = [];

  for (let i = 0; i < chain.length - 1; i++) {
    const from = chain[i];
    const to = chain[i + 1];
    const fromNode = nodeMap.get(from);
    const toNode = nodeMap.get(to);
    const edge = edgeMap.get(`${to}->${from}`) || edgeMap.get(`${from}->${to}`);

    const fromKind = fromNode?.kind || 'Resource';
    const toKind = toNode?.kind || 'Resource';

    steps.push({
      index: i,
      from,
      to,
      reason: edge?.label || `${toKind} "${to}" references ${fromKind} "${from}"`,
      dataFlow: describeDataFlow(fromKind, toKind, edge?.dependencyType || 'cel-reference'),
      failureImpact: `If ${fromKind} "${from}" fails, ${toKind} "${to}" will be blocked from creation.`,
    });
  }

  const summary = generateChainSummary(chain, nodeMap);
  const reconciliationNarrative = generateReconciliationNarrative(chain, nodeMap);

  return { chain, summary, steps, reconciliationNarrative };
}

/**
 * Generate a natural language explanation of the entire execution plan.
 */
export function explainExecutionPlan(graph: ResourceGraph): ExecutionExplanation {
  const nodeMap = new Map(graph.nodes.map(n => [n.id, n]));
  const { phases } = graph.executionPlan;

  const phaseNarratives: PhaseNarrative[] = phases.map(phase => {
    const resources = phase.resourceIds.map(id => {
      const node = nodeMap.get(id);
      return `${node?.kind || 'Resource'} "${id}"`;
    });

    const parallelizable = phase.resourceIds.length > 1;

    let narrative: string;
    if (phase.phase === 0) {
      narrative = `Phase ${phase.phase + 1} (Foundation): Create ${resources.join(', ')}. These resources have no dependencies and can be created immediately${parallelizable ? ' in parallel' : ''}.`;
    } else if (phase.phase === phases.length - 1) {
      narrative = `Phase ${phase.phase + 1} (Final): Create ${resources.join(', ')}. All dependencies are satisfied.${parallelizable ? ' These resources can be created in parallel.' : ''}`;
    } else {
      narrative = `Phase ${phase.phase + 1}: Create ${resources.join(', ')}. Their dependencies from earlier phases are now ready.${parallelizable ? ' These resources can reconcile in parallel.' : ''}`;
    }

    return { phase: phase.phase, resourceIds: phase.resourceIds, narrative, parallelizable };
  });

  const summary = `This RGD defines ${graph.stats.totalResources} resources organized into ${phases.length} execution phases. ${
    graph.criticalPath.path.length > 0
      ? `The critical path runs through ${graph.criticalPath.path.join(' → ')} with an estimated total duration of ${graph.criticalPath.totalDuration}s.`
      : 'No critical path detected.'
  }${graph.stats.conditionalResources > 0 ? ` ${graph.stats.conditionalResources} resource(s) are conditional.` : ''}`;

  return { totalPhases: phases.length, phaseNarratives, summary };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function describeDataFlow(fromKind: string, toKind: string, depType: string): string {
  switch (depType) {
    case 'secret-ref': return `Secret data flows from ${fromKind} to ${toKind} via secretKeyRef`;
    case 'configmap-ref': return `Configuration data flows from ${fromKind} to ${toKind} via configMapKeyRef`;
    case 'env-var': return `Environment variables from ${fromKind} are injected into ${toKind}`;
    case 'volume-mount': return `${fromKind} is mounted as a volume in ${toKind}`;
    case 'namespace': return `${toKind} is created in the namespace defined by ${fromKind}`;
    case 'selector': return `${toKind} selects pods matching labels from ${fromKind}`;
    case 'service-binding': return `${toKind} routes traffic to ${fromKind}`;
    case 'conditional': return `${toKind} conditionally references ${fromKind}`;
    default: return `Data flows from ${fromKind} to ${toKind} via CEL expression`;
  }
}

function generateChainSummary(chain: string[], nodeMap: Map<string, { kind: string }>): string {
  if (chain.length === 0) return 'Empty dependency chain.';
  if (chain.length === 1) return `Single resource: ${nodeMap.get(chain[0])?.kind || 'Resource'} "${chain[0]}".`;

  const start = chain[0];
  const end = chain[chain.length - 1];
  const startKind = nodeMap.get(start)?.kind || 'Resource';
  const endKind = nodeMap.get(end)?.kind || 'Resource';

  return `Dependency chain from ${startKind} "${start}" to ${endKind} "${end}" spanning ${chain.length} resources. KRO will create these resources in order, waiting for each to be ready before proceeding to the next.`;
}

function generateReconciliationNarrative(chain: string[], nodeMap: Map<string, { kind: string; executionPhase?: number }>): string {
  return chain
    .map((id, i) => {
      const node = nodeMap.get(id);
      const kind = node?.kind || 'Resource';
      if (i === 0) return `First, KRO creates ${kind} "${id}".`;
      return `Then, once "${chain[i - 1]}" is ready, KRO creates ${kind} "${id}".`;
    })
    .join(' ');
}
