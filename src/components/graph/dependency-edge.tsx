'use client';

import React, { memo } from 'react';
import { BaseEdge, getSmoothStepPath, EdgeLabelRenderer, type EdgeProps } from '@xyflow/react';

interface DependencyEdgeData {
  color: string;
  dashArray: string;
  typeLabel: string;
  isOnCriticalPath: boolean;
  dependencyType: string;
}

function DependencyEdgeComponent({
  id, sourceX, sourceY, targetX, targetY,
  sourcePosition, targetPosition, data, selected,
}: EdgeProps) {
  const d = data as unknown as DependencyEdgeData;

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX, sourceY, sourcePosition,
    targetX, targetY, targetPosition,
    borderRadius: 16,
  });

  const strokeWidth = d?.isOnCriticalPath ? 2.5 : 1.5;
  const color = selected ? '#a78bfa' : (d?.color || '#7c3aed');

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          strokeWidth,
          stroke: color,
          strokeDasharray: d?.dashArray === '0' ? undefined : d?.dashArray,
          filter: d?.isOnCriticalPath ? `drop-shadow(0 0 4px ${color})` : undefined,
        }}
      />
      {/* Animated flow dot */}
      <circle r="3" fill={color} opacity={0.8}>
        <animateMotion dur="3s" repeatCount="indefinite" path={edgePath} />
      </circle>
      {/* Label on hover/select */}
      {selected && d?.typeLabel && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'all',
            }}
            className="px-2 py-1 rounded-md text-[10px] font-medium border border-slate-600 bg-[#1a1a2e] text-slate-300 shadow-lg"
          >
            {d.typeLabel}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

export const DependencyEdge = memo(DependencyEdgeComponent);
