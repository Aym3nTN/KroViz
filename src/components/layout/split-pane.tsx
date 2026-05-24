'use client';

import React, { useCallback, useRef, useEffect, useState } from 'react';
import { useAppStore } from '@/store/app-store';
import { LAYOUT } from '@/lib/constants';

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export function SplitPane({ left, right }: SplitPaneProps) {
  const splitRatio = useAppStore((s) => s.splitRatio);
  const setSplitRatio = useAppStore((s) => s.setSplitRatio);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      setSplitRatio(Math.max(LAYOUT.minSplitRatio, Math.min(LAYOUT.maxSplitRatio, ratio)));
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, setSplitRatio]);

  return (
    <div ref={containerRef} className="flex h-full relative" style={{ cursor: isDragging ? 'col-resize' : undefined }}>
      {/* Left panel */}
      <div style={{ width: `${splitRatio * 100}%` }} className="h-full overflow-hidden">
        {left}
      </div>

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className={`w-[3px] cursor-col-resize relative group flex-shrink-0 ${
          isDragging ? 'bg-violet-500' : 'bg-slate-700/50 hover:bg-violet-500/50'
        } transition-colors`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 rounded-full opacity-0 group-hover:opacity-100 bg-violet-500/20 transition-opacity" />
      </div>

      {/* Right panel */}
      <div style={{ width: `${(1 - splitRatio) * 100}%` }} className="h-full overflow-hidden">
        {right}
      </div>
    </div>
  );
}
