'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';

export function StatusBar() {
  const parsedRGD = useAppStore((s) => s.parsedRGD);
  const parseErrors = useAppStore((s) => s.parseErrors);
  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const cursorLine = useAppStore((s) => s.cursorLine);

  const errorCount = parseErrors.filter(e => e.severity === 'error').length;
  const warningCount = parsedRGD?.warnings.length || 0;

  return (
    <div className="flex items-center h-7 px-3 bg-[#0d0d15] border-t border-slate-800/50 text-[10px] text-slate-500 flex-shrink-0 gap-4">
      {/* Parse status */}
      {errorCount > 0 ? (
        <span className="text-red-400">✕ {errorCount} error{errorCount > 1 ? 's' : ''}</span>
      ) : parsedRGD ? (
        <span className="text-emerald-500">✓ Valid RGD</span>
      ) : (
        <span>No input</span>
      )}

      {warningCount > 0 && (
        <span className="text-amber-400">⚠ {warningCount} warning{warningCount > 1 ? 's' : ''}</span>
      )}

      {resourceGraph && (
        <>
          <span>{resourceGraph.stats.totalResources} resources</span>
          <span>{resourceGraph.stats.totalEdges} deps</span>
          <span>{resourceGraph.stats.executionPhases} phases</span>
        </>
      )}

      <span className="ml-auto">Ln {cursorLine}</span>
      {parsedRGD?.metadata.name && (
        <span className="font-medium text-slate-400">{parsedRGD.metadata.name}</span>
      )}
    </div>
  );
}
