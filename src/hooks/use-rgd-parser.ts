'use client';

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/store/app-store';
import { parseRGD } from '@/engine/parser';
import { buildResourceGraph } from '@/engine/graph';

/**
 * Hook that watches yamlContent and parses it into a ResourceGraph.
 * Debounces parsing by 300ms.
 */
export function useRgdParser() {
  const yamlContent = useAppStore((s) => s.yamlContent);
  const setParsedRGD = useAppStore((s) => s.setParsedRGD);
  const setResourceGraph = useAppStore((s) => s.setResourceGraph);
  const setParseErrors = useAppStore((s) => s.setParseErrors);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!yamlContent.trim()) {
      setParsedRGD(null);
      setResourceGraph(null);
      setParseErrors([]);
      return;
    }

    timerRef.current = setTimeout(() => {
      try {
        const parsed = parseRGD(yamlContent);
        setParsedRGD(parsed);
        setParseErrors(parsed.errors);

        if (parsed.resources.length > 0 && parsed.errors.filter(e => e.severity === 'error').length === 0) {
          const graph = buildResourceGraph(parsed);
          setResourceGraph(graph);
        } else {
          setResourceGraph(null);
        }
      } catch (e) {
        console.error('Parse error:', e);
        setParseErrors([{ message: (e as Error).message, severity: 'error' }]);
        setParsedRGD(null);
        setResourceGraph(null);
      }
    }, 300);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [yamlContent, setParsedRGD, setResourceGraph, setParseErrors]);
}
