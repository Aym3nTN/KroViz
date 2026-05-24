'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useAppStore } from '@/store/app-store';
import { getResourceStyle } from '@/lib/colors';

export function TimelineView() {
  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const currentPhase = useAppStore((s) => s.currentPhase);
  const setCurrentPhase = useAppStore((s) => s.setCurrentPhase);
  const isPlaying = useAppStore((s) => s.isPlaying);
  const setIsPlaying = useAppStore((s) => s.setIsPlaying);
  const playbackSpeed = useAppStore((s) => s.playbackSpeed);
  const setPlaybackSpeed = useAppStore((s) => s.setPlaybackSpeed);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);
  const setShowDetailPanel = useAppStore((s) => s.setShowDetailPanel);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const phases = resourceGraph?.executionPlan.phases || [];
  const totalPhases = phases.length;
  const criticalPathSet = new Set(resourceGraph?.criticalPath.path || []);
  const nodeMap = new Map(resourceGraph?.nodes.map(n => [n.id, n]) || []);

  // Auto-play
  useEffect(() => {
    if (isPlaying && totalPhases > 0) {
      intervalRef.current = setInterval(() => {
        const prev = useAppStore.getState().currentPhase;
        const next = prev + 1;
        if (next >= totalPhases) {
          setIsPlaying(false);
          setCurrentPhase(totalPhases - 1);
        } else {
          setCurrentPhase(next);
        }
      }, 1500 / playbackSpeed);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, totalPhases, playbackSpeed, setCurrentPhase, setIsPlaying]);

  const handleNodeClick = useCallback((nodeId: string) => {
    setSelectedNodeId(nodeId);
    setShowDetailPanel(true);
  }, [setSelectedNodeId, setShowDetailPanel]);

  if (!resourceGraph || phases.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-500">
        <div className="text-center">
          <div className="text-4xl mb-3 opacity-30">⏱</div>
          <p className="text-sm">Load an RGD to view the execution timeline</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0f0f17]">
      {/* Controls */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border-b border-slate-700/50">
        <button
          onClick={() => setCurrentPhase(Math.max(-1, currentPhase - 1))}
          className="px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 disabled:opacity-30"
          disabled={currentPhase <= -1}
        >
          ◀ Prev
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-3 py-1 rounded text-xs font-medium border transition-colors ${
            isPlaying
              ? 'bg-violet-900/30 text-violet-300 border-violet-700/50'
              : 'bg-[#242440] text-slate-300 border-slate-600/50 hover:bg-[#2d2d50]'
          }`}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        <button
          onClick={() => setCurrentPhase(Math.min(totalPhases - 1, currentPhase + 1))}
          className="px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 disabled:opacity-30"
          disabled={currentPhase >= totalPhases - 1}
        >
          Next ▶
        </button>
        <button
          onClick={() => { setCurrentPhase(-1); setIsPlaying(false); }}
          className="px-2 py-1 rounded text-xs bg-[#242440] text-slate-400 hover:text-slate-200 border border-slate-600/50"
        >
          Reset
        </button>

        <div className="flex items-center gap-1.5 ml-2">
          <span className="text-[10px] text-slate-500">Speed:</span>
          {[1, 2, 4].map(s => (
            <button
              key={s}
              onClick={() => setPlaybackSpeed(s)}
              className={`px-1.5 py-0.5 rounded text-[10px] ${
                playbackSpeed === s ? 'bg-violet-600 text-white' : 'bg-[#242440] text-slate-400'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        <div className="ml-auto text-xs text-slate-500">
          {currentPhase >= 0 ? `Phase ${currentPhase + 1} of ${totalPhases}` : `${totalPhases} phases`}
        </div>

        {/* Progress bar */}
        <div className="w-24 h-1.5 rounded-full bg-[#242440] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: currentPhase >= 0 ? `${((currentPhase + 1) / totalPhases) * 100}%` : '0%' }}
          />
        </div>
      </div>

      {/* Timeline lanes */}
      <div className="flex-1 overflow-auto p-4">
        <div className="flex gap-4 min-w-max">
          {phases.map((phase) => {
            const isCurrent = phase.phase === currentPhase;
            const isPast = currentPhase >= 0 && phase.phase < currentPhase;
            const isFuture = currentPhase >= 0 && phase.phase > currentPhase;

            return (
              <div
                key={phase.phase}
                className={`flex flex-col min-w-[200px] rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? 'border-violet-500/50 bg-violet-950/20 shadow-lg shadow-violet-900/20'
                    : isPast
                    ? 'border-emerald-800/30 bg-emerald-950/10 opacity-70'
                    : isFuture
                    ? 'border-slate-700/30 bg-[#1a1a2e]/50 opacity-50'
                    : 'border-slate-700/30 bg-[#1a1a2e]/50'
                }`}
              >
                {/* Phase header */}
                <div className={`px-3 py-2 border-b text-center ${
                  isCurrent ? 'border-violet-700/30' : 'border-slate-700/30'
                }`}>
                  <div className={`text-xs font-semibold ${
                    isCurrent ? 'text-violet-300' : isPast ? 'text-emerald-400' : 'text-slate-400'
                  }`}>
                    Phase {phase.phase + 1}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    ~{phase.estimatedDuration}s • {phase.resourceIds.length} resource{phase.resourceIds.length > 1 ? 's' : ''}
                  </div>
                  {phase.resourceIds.length > 1 && (
                    <div className="text-[9px] text-cyan-600 mt-0.5">⚡ parallel</div>
                  )}
                </div>

                {/* Resources */}
                <div className="p-2 flex flex-col gap-2">
                  {phase.resourceIds.map(id => {
                    const node = nodeMap.get(id);
                    if (!node) return null;
                    const style = getResourceStyle(node.kind, node.resourceType === 'externalRef');

                    return (
                      <button
                        key={id}
                        onClick={() => handleNodeClick(id)}
                        className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border text-left transition-all ${
                          isCurrent ? 'border-violet-600/30 bg-violet-950/30' :
                          isPast ? 'border-emerald-800/20 bg-emerald-950/20' :
                          'border-slate-700/20 bg-[#242440]/50'
                        } hover:brightness-125`}
                      >
                        <span className="text-sm">{style.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-medium text-slate-200 truncate">{id}</div>
                          <div className="text-[9px] truncate" style={{ color: style.color }}>{node.kind}</div>
                        </div>
                        {criticalPathSet.has(id) && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-orange-900/30 text-orange-300">crit</span>
                        )}
                        {isPast && <span className="text-emerald-500 text-xs">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
