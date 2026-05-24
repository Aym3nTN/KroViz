'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/app-store';

/**
 * Hook for bidirectional sync between editor cursor and graph selection.
 */
export function useEditorSync() {
  const cursorLine = useAppStore((s) => s.cursorLine);
  const parsedRGD = useAppStore((s) => s.parsedRGD);
  const selectedNodeId = useAppStore((s) => s.selectedNodeId);
  const setHighlightedLines = useAppStore((s) => s.setHighlightedLines);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);

  // When cursor moves in editor → find resource at that line → select it
  useEffect(() => {
    if (!parsedRGD) return;

    const resource = parsedRGD.resources.find(
      (r) => cursorLine >= r.sourceLocation.startLine && cursorLine <= r.sourceLocation.endLine
    );

    if (resource && resource.id !== selectedNodeId) {
      // Don't auto-select to avoid fighting with graph clicks
      // Just update highlighting
    }
  }, [cursorLine, parsedRGD, selectedNodeId]);

  // When a graph node is selected → highlight its YAML lines
  useEffect(() => {
    if (!selectedNodeId || !parsedRGD) {
      setHighlightedLines(null);
      return;
    }

    const resource = parsedRGD.resources.find((r) => r.id === selectedNodeId);
    if (resource) {
      setHighlightedLines({
        start: resource.sourceLocation.startLine,
        end: resource.sourceLocation.endLine,
      });
    }
  }, [selectedNodeId, parsedRGD, setHighlightedLines]);
}
