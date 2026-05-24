'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';

export function GraphToolbar() {
  const layoutDirection = useAppStore((s) => s.layoutDirection);
  const setLayoutDirection = useAppStore((s) => s.setLayoutDirection);
  const searchQuery = useAppStore((s) => s.searchQuery);
  const setSearchQuery = useAppStore((s) => s.setSearchQuery);
  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const showImpactAnalysis = useAppStore((s) => s.showImpactAnalysis);
  const setShowImpactAnalysis = useAppStore((s) => s.setShowImpactAnalysis);

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50">
      {/* Layout direction toggle */}
      <button
        onClick={() => setLayoutDirection(layoutDirection === 'DOWN' ? 'RIGHT' : 'DOWN')}
        className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors"
        title="Toggle layout direction"
        id="layout-toggle"
      >
        {layoutDirection === 'DOWN' ? '↕ Vertical' : '↔ Horizontal'}
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-[200px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search resources..."
          className="w-full px-3 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 placeholder-slate-500 border border-slate-600/50 focus:outline-none focus:border-violet-500/50 transition-colors"
          id="resource-search"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Stats */}
      {resourceGraph && (
        <div className="flex items-center gap-3 text-[10px] text-slate-500 ml-auto">
          <span>{resourceGraph.stats.totalResources} resources</span>
          <span>{resourceGraph.stats.totalEdges} dependencies</span>
          <span>{resourceGraph.stats.executionPhases} phases</span>
        </div>
      )}

      {/* Impact analysis toggle */}
      <button
        onClick={() => setShowImpactAnalysis(!showImpactAnalysis)}
        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
          showImpactAnalysis
            ? 'bg-red-900/30 text-red-300 border-red-700/50'
            : 'bg-[#242440] text-slate-300 border-slate-600/50 hover:bg-[#2d2d50]'
        }`}
        id="impact-toggle"
      >
        💥 Impact
      </button>
    </div>
  );
}
