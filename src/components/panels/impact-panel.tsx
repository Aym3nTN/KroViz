'use client';

import React, { useCallback } from 'react';
import { useAppStore } from '@/store/app-store';
import { analyzeImpact, DAG } from '@/engine/graph';
import { getResourceStyle } from '@/lib/colors';

export function ImpactPanel() {
  const showImpactAnalysis = useAppStore((s) => s.showImpactAnalysis);
  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const impactTarget = useAppStore((s) => s.impactTarget);
  const setImpactTarget = useAppStore((s) => s.setImpactTarget);
  const impactResult = useAppStore((s) => s.impactResult);
  const setImpactResult = useAppStore((s) => s.setImpactResult);
  const setHighlightedNodeIds = useAppStore((s) => s.setHighlightedNodeIds);

  const handleSelectResource = useCallback((resourceId: string) => {
    if (!resourceGraph) return;
    setImpactTarget(resourceId);

    const dag = new DAG();
    for (const n of resourceGraph.nodes) dag.addNode(n.id);
    for (const e of resourceGraph.edges) dag.addEdge(e.source, e.target);

    const allIds = resourceGraph.nodes.map(n => n.id);
    const result = analyzeImpact(dag, resourceId, allIds);
    setImpactResult(result);

    // Highlight affected nodes
    const affected = new Set([resourceId, ...result.directlyBlocked, ...result.transitivelyBlocked]);
    setHighlightedNodeIds(affected);
  }, [resourceGraph, setImpactTarget, setImpactResult, setHighlightedNodeIds]);

  if (!showImpactAnalysis || !resourceGraph) return null;

  const severityColors: Record<string, string> = {
    critical: 'bg-red-900/40 text-red-300 border-red-700/40',
    high: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
    medium: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
    low: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    none: 'bg-slate-700/40 text-slate-300 border-slate-600/40',
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-[#12121f] border-t border-slate-700/50 z-40 overflow-auto shadow-2xl">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xs font-semibold text-slate-300">💥 Failure Impact Simulation</h3>
          <select
            value={impactTarget || ''}
            onChange={(e) => e.target.value && handleSelectResource(e.target.value)}
            className="px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 border border-slate-600/50"
          >
            <option value="">Select resource to fail...</option>
            {resourceGraph.nodes.map(n => (
              <option key={n.id} value={n.id}>{n.id} ({n.kind})</option>
            ))}
          </select>
          {impactResult && (
            <span className={`text-[10px] px-2 py-0.5 rounded border ${severityColors[impactResult.severity]}`}>
              {impactResult.severity.toUpperCase()}
            </span>
          )}
        </div>

        {impactResult && (
          <div className="grid grid-cols-3 gap-4">
            {/* Failed */}
            <div>
              <h4 className="text-[10px] font-semibold text-red-400 mb-1.5">Failed</h4>
              <ResourceBadge id={impactResult.failedResource} nodes={resourceGraph.nodes} status="failed" />
            </div>

            {/* Blocked */}
            <div>
              <h4 className="text-[10px] font-semibold text-orange-400 mb-1.5">
                Blocked ({impactResult.directlyBlocked.length + impactResult.transitivelyBlocked.length})
              </h4>
              <div className="space-y-1 max-h-[160px] overflow-auto">
                {impactResult.directlyBlocked.map(id => (
                  <ResourceBadge key={id} id={id} nodes={resourceGraph.nodes} status="direct" />
                ))}
                {impactResult.transitivelyBlocked.map(id => (
                  <ResourceBadge key={id} id={id} nodes={resourceGraph.nodes} status="cascade" />
                ))}
              </div>
            </div>

            {/* Unaffected */}
            <div>
              <h4 className="text-[10px] font-semibold text-emerald-400 mb-1.5">
                Unaffected ({impactResult.unaffected.length})
              </h4>
              <div className="space-y-1 max-h-[160px] overflow-auto">
                {impactResult.unaffected.map(id => (
                  <ResourceBadge key={id} id={id} nodes={resourceGraph.nodes} status="ok" />
                ))}
              </div>
            </div>
          </div>
        )}

        {impactResult && (
          <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">{impactResult.summary}</p>
        )}
      </div>
    </div>
  );
}

function ResourceBadge({ id, nodes, status }: { id: string; nodes: { id: string; kind: string; resourceType: string }[]; status: string }) {
  const node = nodes.find(n => n.id === id);
  const style = getResourceStyle(node?.kind || '', node?.resourceType === 'externalRef');
  const statusColors: Record<string, string> = {
    failed: 'border-red-700/30 bg-red-950/30',
    direct: 'border-orange-700/30 bg-orange-950/30',
    cascade: 'border-amber-700/30 bg-amber-950/20',
    ok: 'border-emerald-800/30 bg-emerald-950/20',
  };

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded border ${statusColors[status] || ''}`}>
      <span className="text-xs">{style.icon}</span>
      <span className="text-[10px] text-slate-300 truncate">{id}</span>
      <span className="text-[8px] ml-auto" style={{ color: style.color }}>{node?.kind}</span>
    </div>
  );
}
