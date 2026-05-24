'use client';

import React, { useEffect, useCallback } from 'react';
import { ReactFlowProvider, useReactFlow } from '@xyflow/react';
import { FlowCanvas } from './flow-canvas';
import { GraphToolbar } from './graph-toolbar';
import { useAppStore } from '@/store/app-store';
import { useGraphLayout } from '@/hooks/use-graph-layout';

function GraphPanelInner() {
  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const layoutDirection = useAppStore((s) => s.layoutDirection);
  const { applyLayout } = useGraphLayout();
  const { setNodes, setEdges } = useReactFlow();

  useEffect(() => {
    if (resourceGraph) {
      applyLayout(resourceGraph, { direction: layoutDirection });
    } else {
      setNodes([]);
      setEdges([]);
    }
  }, [resourceGraph, layoutDirection, applyLayout, setNodes, setEdges]);

  return (
    <div className="flex flex-col h-full bg-[#0f0f17]">
      <GraphToolbar />
      <div className="flex-1 relative">
        <FlowCanvas />
        {!resourceGraph && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-4xl mb-3 opacity-30">⬡</div>
              <p className="text-sm text-slate-500">Paste or load an RGD to visualize</p>
              <p className="text-xs text-slate-600 mt-1">The dependency graph will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GraphPanel() {
  return (
    <ReactFlowProvider>
      <GraphPanelInner />
    </ReactFlowProvider>
  );
}
