'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { StatusBar } from '@/components/layout/status-bar';
import { SplitPane } from '@/components/layout/split-pane';
import { EditorPanel } from '@/components/editor/editor-panel';
import { GraphPanel } from '@/components/graph/graph-panel';
import { TimelineView } from '@/components/timeline/timeline-view';
import { DiffPanel } from '@/components/panels/diff-panel';
import { ResourceDetail } from '@/components/panels/resource-detail';
import { ImpactPanel } from '@/components/panels/impact-panel';
import { useRgdParser } from '@/hooks/use-rgd-parser';
import { useEditorSync } from '@/hooks/use-editor-sync';
import { useAppStore } from '@/store/app-store';
import { SAMPLE_RGDS } from '@/lib/constants';

export default function Home() {
  const viewMode = useAppStore((s) => s.viewMode);
  const setYamlContent = useAppStore((s) => s.setYamlContent);
  const setActiveSample = useAppStore((s) => s.setActiveSample);

  // Wire up parser and editor sync
  useRgdParser();
  useEditorSync();

  // Load default sample on mount
  useEffect(() => {
    const defaultSample = SAMPLE_RGDS[2]; // WordPress - good complexity
    fetch(defaultSample.file)
      .then(res => res.text())
      .then(text => {
        setYamlContent(text);
        setActiveSample(defaultSample.id);
      })
      .catch(() => {
        // Fallback - load simple sample
        fetch(SAMPLE_RGDS[0].file)
          .then(res => res.text())
          .then(text => {
            setYamlContent(text);
            setActiveSample(SAMPLE_RGDS[0].id);
          })
          .catch(console.error);
      });
  }, [setYamlContent, setActiveSample]);

  const renderRightPanel = () => {
    switch (viewMode) {
      case 'timeline':
        return <TimelineView />;
      case 'diff':
        return <DiffPanel />;
      default:
        return <GraphPanel />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 min-h-0 relative">
        <SplitPane
          left={<EditorPanel />}
          right={
            <div className="relative h-full">
              {renderRightPanel()}
              <ResourceDetail />
              <ImpactPanel />
            </div>
          }
        />
      </main>
      <StatusBar />
    </div>
  );
}
