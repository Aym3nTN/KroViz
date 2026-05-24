'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import { getResourceStyle, DEPENDENCY_TYPE_STYLES } from '@/lib/colors';
import yaml from 'js-yaml';

export function ResourceDetail() {
  const selectedNodeId = useAppStore((s) => s.selectedNodeId);
  const showDetailPanel = useAppStore((s) => s.showDetailPanel);
  const setShowDetailPanel = useAppStore((s) => s.setShowDetailPanel);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);
  const setHighlightedLines = useAppStore((s) => s.setHighlightedLines);
  const parsedRGD = useAppStore((s) => s.parsedRGD);
  const resourceGraph = useAppStore((s) => s.resourceGraph);

  if (!showDetailPanel || !selectedNodeId || !parsedRGD || !resourceGraph) return null;

  const resource = parsedRGD.resources.find(r => r.id === selectedNodeId);
  const graphNode = resourceGraph.nodes.find(n => n.id === selectedNodeId);
  if (!resource || !graphNode) return null;

  const style = getResourceStyle(resource.kind, resource.resourceType === 'externalRef');

  // Find upstream and downstream
  const upstreamEdges = resourceGraph.edges.filter(e => e.source === selectedNodeId);
  const downstreamEdges = resourceGraph.edges.filter(e => e.target === selectedNodeId);

  const handleClose = () => {
    setShowDetailPanel(false);
    setSelectedNodeId(null);
    setHighlightedLines(null);
  };

  const handleNodeLink = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    const res = parsedRGD.resources.find(r => r.id === nodeId);
    if (res) {
      setHighlightedLines({ start: res.sourceLocation.startLine, end: res.sourceLocation.endLine });
    }
  };

  let templateYaml = '';
  try {
    if (resource.template) {
      templateYaml = yaml.dump(resource.template, { indent: 2, lineWidth: -1 });
    }
  } catch { templateYaml = ''; }

  return (
    <div className="absolute top-0 right-0 w-[360px] h-full bg-[#12121f] border-l border-slate-700/50 z-50 overflow-auto shadow-2xl animate-slide-in">
      {/* Header */}
      <div className="sticky top-0 bg-[#12121f] border-b border-slate-700/30 px-4 py-3 flex items-center gap-3 z-10">
        <span className="text-xl">{style.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-slate-200 truncate">{resource.id}</div>
          <div className="text-xs" style={{ color: style.color }}>{resource.kind}</div>
        </div>
        <button onClick={handleClose} className="text-slate-500 hover:text-slate-300 text-lg">✕</button>
      </div>

      <div className="px-4 py-3 space-y-4">
        {/* Metadata */}
        <Section title="Info">
          <InfoRow label="API Version" value={resource.apiVersion} />
          <InfoRow label="Kind" value={resource.kind} />
          <InfoRow label="Type" value={resource.resourceType} />
          <InfoRow label="Phase" value={`${graphNode.executionPhase + 1}`} />
          <InfoRow label="Duration" value={`~${graphNode.estimatedDuration}s`} />
          {graphNode.metadata.name && <InfoRow label="Name" value={graphNode.metadata.name} />}
          {graphNode.metadata.namespace && <InfoRow label="Namespace" value={graphNode.metadata.namespace} />}
        </Section>

        {/* Status badges */}
        <div className="flex gap-1.5 flex-wrap">
          {graphNode.isOnCriticalPath && <Badge text="Critical Path" color="orange" />}
          {graphNode.isConditional && <Badge text="Conditional" color="amber" />}
          {graphNode.hasReadinessGate && <Badge text="Readiness Gate" color="blue" />}
          {resource.resourceType === 'externalRef' && <Badge text="External Ref" color="slate" />}
        </div>

        {/* Dependencies (upstream) */}
        {upstreamEdges.length > 0 && (
          <Section title={`Dependencies (${upstreamEdges.length})`}>
            {upstreamEdges.map(e => {
              const depStyle = DEPENDENCY_TYPE_STYLES[e.dependencyType];
              return (
                <button
                  key={e.id}
                  onClick={() => handleNodeLink(e.target)}
                  className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded hover:bg-[#242440] transition-colors"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: depStyle?.color || '#7c3aed' }} />
                  <span className="text-xs text-slate-300 flex-1">{e.target}</span>
                  <span className="text-[9px] text-slate-500">{depStyle?.label}</span>
                </button>
              );
            })}
          </Section>
        )}

        {/* Dependents (downstream) */}
        {downstreamEdges.length > 0 && (
          <Section title={`Dependents (${downstreamEdges.length})`}>
            {downstreamEdges.map(e => {
              const depStyle = DEPENDENCY_TYPE_STYLES[e.dependencyType];
              return (
                <button
                  key={e.id}
                  onClick={() => handleNodeLink(e.source)}
                  className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded hover:bg-[#242440] transition-colors"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: depStyle?.color || '#7c3aed' }} />
                  <span className="text-xs text-slate-300 flex-1">{e.source}</span>
                  <span className="text-[9px] text-slate-500">{depStyle?.label}</span>
                </button>
              );
            })}
          </Section>
        )}

        {/* CEL Expressions */}
        {resource.celExpressions.filter(e => e.referenceType === 'resource').length > 0 && (
          <Section title="CEL References">
            {resource.celExpressions
              .filter(e => e.referenceType === 'resource')
              .map((expr, i) => (
                <div key={i} className="text-[11px] font-mono text-violet-300 bg-[#242440] px-2 py-1 rounded mb-1 break-all">
                  {expr.full}
                </div>
              ))}
          </Section>
        )}

        {/* Conditions */}
        {resource.includeWhen.length > 0 && (
          <Section title="includeWhen">
            {resource.includeWhen.map((cond, i) => (
              <div key={i} className="text-[11px] font-mono text-amber-300 bg-[#242440] px-2 py-1 rounded mb-1">{cond}</div>
            ))}
          </Section>
        )}
        {resource.readyWhen.length > 0 && (
          <Section title="readyWhen">
            {resource.readyWhen.map((cond, i) => (
              <div key={i} className="text-[11px] font-mono text-blue-300 bg-[#242440] px-2 py-1 rounded mb-1">{cond}</div>
            ))}
          </Section>
        )}

        {/* Template YAML */}
        {templateYaml && (
          <Section title="Template">
            <pre className="text-[10px] font-mono text-slate-400 bg-[#0a0a14] p-2 rounded-lg overflow-auto max-h-[300px] whitespace-pre-wrap">
              {templateYaml}
            </pre>
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">{title}</h3>
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-xs py-0.5">
      <span className="text-slate-500">{label}</span>
      <span className="text-slate-300 font-mono text-[11px]">{value}</span>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  const colors: Record<string, string> = {
    orange: 'bg-orange-900/30 text-orange-300 border-orange-700/30',
    amber: 'bg-amber-900/30 text-amber-300 border-amber-700/30',
    blue: 'bg-blue-900/30 text-blue-300 border-blue-700/30',
    slate: 'bg-slate-700/30 text-slate-300 border-slate-600/30',
    red: 'bg-red-900/30 text-red-300 border-red-700/30',
    emerald: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
  };
  return (
    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${colors[color] || colors.slate}`}>
      {text}
    </span>
  );
}
