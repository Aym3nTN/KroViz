'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';

export function Header() {
  const viewMode = useAppStore((s) => s.viewMode);
  const setViewMode = useAppStore((s) => s.setViewMode);
  const resourceGraph = useAppStore((s) => s.resourceGraph);

  const tabs = [
    { id: 'graph' as const, label: 'Graph', icon: '⬡' },
    { id: 'timeline' as const, label: 'Timeline', icon: '⏱' },
    { id: 'diff' as const, label: 'Diff', icon: '⇄' },
  ];

  return (
    <header className="flex items-center h-14 px-4 bg-[#0d0d15] border-b border-slate-800/50 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mr-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-900/30">
          K
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 tracking-tight">
            KROViz
          </h1>
          <p className="text-[9px] text-slate-500 -mt-0.5">RGD Dependency Visualizer</p>
        </div>
      </div>

      {/* View mode tabs */}
      <div className="flex items-center gap-0.5 bg-[#1a1a2e] rounded-lg p-0.5 border border-slate-700/30">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              viewMode === tab.id
                ? 'bg-violet-600/20 text-violet-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-300'
            }`}
            id={`tab-${tab.id}`}
          >
            <span className="text-[11px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      {resourceGraph && (
        <div className="flex items-center gap-4 ml-auto text-[10px]">
          <Stat label="Resources" value={resourceGraph.stats.totalResources} color="text-violet-400" />
          <Stat label="Dependencies" value={resourceGraph.stats.totalEdges} color="text-cyan-400" />
          <Stat label="Phases" value={resourceGraph.stats.executionPhases} color="text-emerald-400" />
          {resourceGraph.criticalPath.path.length > 0 && (
            <Stat label="Critical Path" value={`${resourceGraph.criticalPath.totalDuration}s`} color="text-orange-400" />
          )}
          {resourceGraph.hasCycles && (
            <span className="text-red-400 font-medium px-2 py-0.5 rounded bg-red-900/20 border border-red-700/30">
              ⚠ Cycles Detected
            </span>
          )}
        </div>
      )}
    </header>
  );
}

function Stat({ label, value, color }: { label: string; value: number | string; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-slate-600">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}
