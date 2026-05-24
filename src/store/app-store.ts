'use client';

import { create } from 'zustand';
import type { ParsedRGD, ParseError } from '@/engine/parser/types';
import type { ResourceGraph } from '@/engine/graph/types';
import type { ImpactAnalysis } from '@/engine/graph/types';

interface AppState {
  // Editor
  yamlContent: string;
  setYamlContent: (content: string) => void;
  cursorLine: number;
  setCursorLine: (line: number) => void;
  highlightedLines: { start: number; end: number } | null;
  setHighlightedLines: (lines: { start: number; end: number } | null) => void;

  // Parsed data
  parsedRGD: ParsedRGD | null;
  setParsedRGD: (rgd: ParsedRGD | null) => void;
  resourceGraph: ResourceGraph | null;
  setResourceGraph: (graph: ResourceGraph | null) => void;
  parseErrors: ParseError[];
  setParseErrors: (errors: ParseError[]) => void;

  // Graph UI
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
  highlightedNodeIds: Set<string>;
  setHighlightedNodeIds: (ids: Set<string>) => void;
  hoveredNodeId: string | null;
  setHoveredNodeId: (id: string | null) => void;
  layoutDirection: 'DOWN' | 'RIGHT';
  setLayoutDirection: (dir: 'DOWN' | 'RIGHT') => void;

  // Timeline
  currentPhase: number;
  setCurrentPhase: (phase: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;

  // UI
  viewMode: 'graph' | 'timeline' | 'diff';
  setViewMode: (mode: 'graph' | 'timeline' | 'diff') => void;
  showDetailPanel: boolean;
  setShowDetailPanel: (show: boolean) => void;
  splitRatio: number;
  setSplitRatio: (ratio: number) => void;
  showImpactAnalysis: boolean;
  setShowImpactAnalysis: (show: boolean) => void;
  impactTarget: string | null;
  setImpactTarget: (id: string | null) => void;
  impactResult: ImpactAnalysis | null;
  setImpactResult: (result: ImpactAnalysis | null) => void;

  // Diff
  diffYamlContent: string;
  setDiffYamlContent: (content: string) => void;

  // Search/filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterKinds: Set<string>;
  setFilterKinds: (kinds: Set<string>) => void;

  // Sample
  activeSample: string | null;
  setActiveSample: (sample: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  yamlContent: '',
  setYamlContent: (content) => set({ yamlContent: content }),
  cursorLine: 1,
  setCursorLine: (line) => set({ cursorLine: line }),
  highlightedLines: null,
  setHighlightedLines: (lines) => set({ highlightedLines: lines }),

  parsedRGD: null,
  setParsedRGD: (rgd) => set({ parsedRGD: rgd }),
  resourceGraph: null,
  setResourceGraph: (graph) => set({ resourceGraph: graph }),
  parseErrors: [],
  setParseErrors: (errors) => set({ parseErrors: errors }),

  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  highlightedNodeIds: new Set(),
  setHighlightedNodeIds: (ids) => set({ highlightedNodeIds: ids }),
  hoveredNodeId: null,
  setHoveredNodeId: (id) => set({ hoveredNodeId: id }),
  layoutDirection: 'DOWN',
  setLayoutDirection: (dir) => set({ layoutDirection: dir }),

  currentPhase: -1,
  setCurrentPhase: (phase) => set({ currentPhase: phase }),
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  playbackSpeed: 1,
  setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),

  viewMode: 'graph',
  setViewMode: (mode) => set({ viewMode: mode }),
  showDetailPanel: false,
  setShowDetailPanel: (show) => set({ showDetailPanel: show }),
  splitRatio: 0.38,
  setSplitRatio: (ratio) => set({ splitRatio: ratio }),
  showImpactAnalysis: false,
  setShowImpactAnalysis: (show) => set({ showImpactAnalysis: show }),
  impactTarget: null,
  setImpactTarget: (id) => set({ impactTarget: id }),
  impactResult: null,
  setImpactResult: (result) => set({ impactResult: result }),

  diffYamlContent: '',
  setDiffYamlContent: (content) => set({ diffYamlContent: content }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  filterKinds: new Set(),
  setFilterKinds: (kinds) => set({ filterKinds: kinds }),

  activeSample: null,
  setActiveSample: (sample) => set({ activeSample: sample }),
}));
