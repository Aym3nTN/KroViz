'use client';

import React, { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { useAppStore } from '@/store/app-store';

interface ResourceNodeData {
  id: string;
  kind: string;
  label: string;
  executionPhase: number;
  isOnCriticalPath: boolean;
  isConditional: boolean;
  hasReadinessGate: boolean;
  resourceType: 'template' | 'externalRef';
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  inDegree: number;
  outDegree: number;
  metadata: { name?: string; namespace?: string };
}

function ResourceNodeComponent({ data, id }: NodeProps) {
  const d = data as unknown as ResourceNodeData;
  const selectedNodeId = useAppStore((s) => s.selectedNodeId);
  const highlightedNodeIds = useAppStore((s) => s.highlightedNodeIds);
  const currentPhase = useAppStore((s) => s.currentPhase);
  const isSelected = selectedNodeId === id;
  const isHighlighted = highlightedNodeIds.size === 0 || highlightedNodeIds.has(id);
  const isDimmed = highlightedNodeIds.size > 0 && !highlightedNodeIds.has(id);
  const isCurrentPhase = currentPhase >= 0 && d.executionPhase === currentPhase;
  const isPastPhase = currentPhase >= 0 && d.executionPhase < currentPhase;
  const isFuturePhase = currentPhase >= 0 && d.executionPhase > currentPhase;

  return (
    <div
      className={`
        relative px-3 py-2.5 rounded-xl border-2 min-w-[200px] transition-all duration-200 cursor-pointer
        ${isSelected ? 'ring-2 ring-violet-400 ring-offset-2 ring-offset-[#0f0f17] scale-105' : ''}
        ${isDimmed ? 'opacity-30' : 'opacity-100'}
        ${isCurrentPhase ? 'ring-2 ring-emerald-400 ring-offset-1 ring-offset-[#0f0f17]' : ''}
        ${isPastPhase ? 'opacity-60' : ''}
        ${isFuturePhase && currentPhase >= 0 ? 'opacity-40' : ''}
      `}
      style={{
        background: isDimmed ? '#1a1a2e' : d.bgColor,
        borderColor: isSelected ? d.color : d.borderColor,
        boxShadow: d.isOnCriticalPath && !isDimmed
          ? `0 0 20px ${d.color}40, 0 0 40px ${d.color}20`
          : isSelected ? `0 0 15px ${d.color}30` : 'none',
      }}
    >
      <Handle type="target" position={Position.Top} className="!bg-slate-500 !border-slate-600 !w-2 !h-2" />

      {/* Phase badge */}
      <div
        className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
        style={{ backgroundColor: d.color }}
      >
        {d.executionPhase + 1}
      </div>

      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-lg leading-none">{d.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-slate-200 truncate">{d.label}</div>
          <div className="text-[10px] font-medium truncate" style={{ color: d.color }}>{d.kind}</div>
        </div>
      </div>

      {/* Badges row */}
      <div className="flex gap-1 mt-1.5 flex-wrap">
        {d.resourceType === 'externalRef' && (
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">external</span>
        )}
        {d.isConditional && (
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-300">conditional</span>
        )}
        {d.hasReadinessGate && (
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300">readyWhen</span>
        )}
        {d.isOnCriticalPath && (
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-900/40 text-orange-300">critical</span>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-slate-500 !border-slate-600 !w-2 !h-2" />
    </div>
  );
}

export const ResourceNode = memo(ResourceNodeComponent);
