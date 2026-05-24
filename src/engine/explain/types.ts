/**
 * Type definitions for the explanation engine.
 */

/** An explanation of a dependency chain */
export interface ChainExplanation {
  /** The dependency chain being explained (path of resource IDs) */
  chain: string[];
  /** Overall summary */
  summary: string;
  /** Step-by-step explanation */
  steps: ExplanationStep[];
  /** Reconciliation order explanation */
  reconciliationNarrative: string;
}

export interface ExplanationStep {
  /** Index in the chain */
  index: number;
  /** Source resource ID */
  from: string;
  /** Target resource ID */
  to: string;
  /** Why this dependency exists */
  reason: string;
  /** What data flows along this edge */
  dataFlow: string;
  /** What happens if this dependency fails */
  failureImpact: string;
}

/** Explanation of the overall execution plan */
export interface ExecutionExplanation {
  /** Total phases */
  totalPhases: number;
  /** Phase-by-phase narrative */
  phaseNarratives: PhaseNarrative[];
  /** Overall summary */
  summary: string;
}

export interface PhaseNarrative {
  phase: number;
  resourceIds: string[];
  narrative: string;
  parallelizable: boolean;
}
