'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useAppStore } from '@/store/app-store';
import { parseRGD } from '@/engine/parser';
import { diffRGDs } from '@/engine/diff';
import { SAMPLE_RGDS } from '@/lib/constants';
import type { ParsedRGD, ParseError } from '@/engine/parser/types';
import type { RGDDiff } from '@/engine/diff/types';

const Editor = dynamic(() => import('@monaco-editor/react').then(mod => mod.default), { ssr: false });

export function DiffPanel() {
  const yamlContent = useAppStore((s) => s.yamlContent);
  const parsedRGD = useAppStore((s) => s.parsedRGD);
  const diffYamlContent = useAppStore((s) => s.diffYamlContent);
  const setDiffYamlContent = useAppStore((s) => s.setDiffYamlContent);

  const [targetParsedRGD, setTargetParsedRGD] = useState<ParsedRGD | null>(null);
  const [targetParseErrors, setTargetParseErrors] = useState<ParseError[]>([]);
  const [diffResult, setDiffResult] = useState<RGDDiff | null>(null);
  const [activeDiffTab, setActiveDiffTab] = useState<'resources' | 'dependencies' | 'schema'>('resources');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);

  // Parse comparison YAML on change (debounced)
  useEffect(() => {
    if (!diffYamlContent.trim()) {
      setTargetParsedRGD(null);
      setTargetParseErrors([]);
      setDiffResult(null);
      return;
    }

    const timer = setTimeout(() => {
      try {
        const parsed = parseRGD(diffYamlContent);
        setTargetParsedRGD(parsed);
        setTargetParseErrors(parsed.errors);
      } catch (e) {
        console.error('Diff parse error:', e);
        setTargetParseErrors([{ message: (e as Error).message, severity: 'error' }]);
        setTargetParsedRGD(null);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [diffYamlContent]);

  // Compute diff when either parsed RGD changes
  useEffect(() => {
    if (!parsedRGD || !targetParsedRGD) {
      setDiffResult(null);
      return;
    }

    try {
      const diff = diffRGDs(parsedRGD, targetParsedRGD);
      setDiffResult(diff);
    } catch (e) {
      console.error('Diff computation error:', e);
      setDiffResult(null);
    }
  }, [parsedRGD, targetParsedRGD]);

  // Load a sample RGD into the comparison editor
  const loadTargetSample = useCallback(async (sampleId: string) => {
    const sample = SAMPLE_RGDS.find(s => s.id === sampleId);
    if (!sample) return;

    try {
      const res = await fetch(sample.file);
      const text = await res.text();
      setDiffYamlContent(text);
    } catch (e) {
      console.error('Failed to load sample for diff:', e);
    }
  }, [setDiffYamlContent]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setDiffYamlContent(text);
    };
    reader.readAsText(file);
  }, [setDiffYamlContent]);

  const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    monaco.editor.setTheme('kroviz-dark');
  }, []);

  // Set local editor markers for syntax/schema errors
  useEffect(() => {
    const monaco = monacoRef.current;
    const editor = editorRef.current;
    if (!monaco || !editor) return;

    const model = editor.getModel();
    if (!model) return;

    const markers = targetParseErrors
      .filter(e => e.location)
      .map(e => ({
        severity: monaco.MarkerSeverity.Error,
        message: e.message,
        startLineNumber: e.location!.startLine,
        startColumn: e.location!.startColumn || 1,
        endLineNumber: e.location!.endLine,
        endColumn: e.location!.endColumn || 100,
      }));

    monaco.editor.setModelMarkers(model, 'kroviz-diff', markers);
  }, [targetParseErrors]);

  const loadSampleDiff = () => {
    // Load a modified version of WordPress or Web App as comparison
    if (activeSampleName() === 'wordpress') {
      loadTargetSample('web-app');
    } else {
      loadTargetSample('wordpress');
    }
  };

  const activeSampleName = () => {
    const activeSampleId = useAppStore.getState().activeSample;
    return activeSampleId || 'custom';
  };

  return (
    <div className="flex flex-col h-full bg-[#0f0f17] text-slate-100 overflow-hidden">
      {/* Top Header of Diff View */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121222] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-violet-300">⇄ Structural Differ</span>
          <span className="text-[10px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full font-mono uppercase">
            Live
          </span>
        </div>
        <div className="flex items-center gap-2">
          {(!diffYamlContent || !yamlContent) && (
            <button
              onClick={loadSampleDiff}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-900/20 transition-all"
            >
              ⚡ Fast Compare (Load WordPress vs Web-App)
            </button>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-2 divide-x divide-slate-800/60">
        {/* Left Side: Target YAML input editor */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#17172a] border-b border-slate-800/50">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mr-2">Compare Target</span>
            <select
              onChange={(e) => e.target.value && loadTargetSample(e.target.value)}
              className="px-2.5 py-1 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 border border-slate-600/30 focus:outline-none cursor-pointer"
            >
              <option value="">Load Target Sample...</option>
              {SAMPLE_RGDS.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            <input
              ref={fileInputRef}
              type="file"
              accept=".yaml,.yml"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1.5 rounded-lg text-xs bg-[#242440] hover:bg-[#2d2d50] text-slate-300 border border-slate-600/30 transition-colors"
            >
              📁 Upload
            </button>

            {diffYamlContent && (
              <button
                onClick={() => setDiffYamlContent('')}
                className="px-2 py-1 rounded text-xs text-slate-400 hover:text-slate-200 ml-auto"
              >
                Clear
              </button>
            )}
          </div>

          {/* Editor Container */}
          <div className="flex-1 min-h-0 relative">
            {diffYamlContent ? (
              <Editor
                height="100%"
                language="yaml"
                theme="kroviz-dark"
                value={diffYamlContent}
                onChange={(value) => setDiffYamlContent(value || '')}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 12,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  renderLineHighlight: 'line',
                  scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6,
                  },
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-500">
                <div className="text-5xl mb-4 opacity-20">⚙️</div>
                <h4 className="text-sm font-semibold text-slate-300 mb-1">Load or paste comparison YAML</h4>
                <p className="text-xs max-w-xs leading-relaxed">
                  Select a template sample or upload a YAML file here to run a direct structural comparison against your active RGD editor on the left.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Diff Output */}
        <div className="flex flex-col h-full overflow-hidden bg-[#0a0a0f]">
          {!diffResult ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-500">
              <div className="text-5xl mb-4 opacity-25">⇄</div>
              <h4 className="text-sm font-semibold text-slate-300 mb-1">Awaiting Comparison RGD</h4>
              <p className="text-xs max-w-xs leading-relaxed">
                Provide another ResourceGraphDefinition on the left side of this pane to trigger the live structural difference analysis.
              </p>
            </div>
          ) : (
            <div className="flex flex-col h-full overflow-hidden">
              {/* High level stats */}
              <div className="p-4 bg-[#141426]/60 border-b border-slate-800/80 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Structural Comparison</h3>
                  {diffResult.isIdentical ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                      ✓ Identical
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded">
                      ⚡ Modified
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <DiffStatCard
                    label="Resources"
                    added={diffResult.stats.resourcesAdded}
                    removed={diffResult.stats.resourcesRemoved}
                    modified={diffResult.stats.resourcesModified}
                  />
                  <DiffStatCard
                    label="Dependencies"
                    added={diffResult.stats.dependenciesAdded}
                    removed={diffResult.stats.dependenciesRemoved}
                    modified={0}
                  />
                  <DiffStatCard
                    label="Schema Fields"
                    added={diffResult.stats.schemaFieldsAdded}
                    removed={diffResult.stats.schemaFieldsRemoved}
                    modified={diffResult.stats.schemaFieldsModified}
                  />
                </div>
              </div>

              {/* Tabs for detailed differences */}
              <div className="flex items-center gap-1 bg-[#121220] px-3 py-1.5 border-b border-slate-800/50 flex-shrink-0">
                <TabBtn
                  active={activeDiffTab === 'resources'}
                  onClick={() => setActiveDiffTab('resources')}
                  label="Resource Changes"
                  count={diffResult.resourceChanges.length}
                />
                <TabBtn
                  active={activeDiffTab === 'dependencies'}
                  onClick={() => setActiveDiffTab('dependencies')}
                  label="Dependency Changes"
                  count={diffResult.dependencyChanges.length}
                />
                <TabBtn
                  active={activeDiffTab === 'schema'}
                  onClick={() => setActiveDiffTab('schema')}
                  label="Schema Changes"
                  count={diffResult.schemaChanges.length}
                />
              </div>

              {/* Diff list container */}
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {diffResult.isIdentical && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <span className="text-4xl mb-3">🎉</span>
                    <h5 className="text-xs font-semibold text-slate-300">RGD Templates are Identical</h5>
                    <p className="text-[11px] text-slate-500 max-w-xs mt-1">
                      No differences were found in the schema, resources, label selectors, or internal dependencies!
                    </p>
                  </div>
                )}

                {!diffResult.isIdentical && activeDiffTab === 'resources' && (
                  <div className="flex flex-col gap-3">
                    {diffResult.resourceChanges.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-6">No resource changes detected.</p>
                    ) : (
                      diffResult.resourceChanges.map((change, i) => (
                        <div key={i} className="p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-slate-200">{change.resourceId}</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                                {change.kind}
                              </span>
                              <BadgeType type={change.type} />
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 leading-normal">{change.description}</p>

                          {/* Nested field changes */}
                          {change.fieldChanges && change.fieldChanges.length > 0 && (
                            <div className="mt-1 border-t border-slate-800/80 pt-2 flex flex-col gap-1.5">
                              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                                Template Field Changes:
                              </span>
                              {change.fieldChanges.map((fc, k) => (
                                <div key={k} className="text-[11px] font-mono flex flex-col gap-0.5 pl-2 border-l border-slate-800">
                                  <div className="flex items-center gap-2">
                                    <span className="text-slate-400">{fc.path}</span>
                                    <span className="text-[9px] uppercase font-bold text-slate-500 px-1 bg-slate-800 rounded">
                                      {fc.type}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    {fc.oldValue !== undefined && (
                                      <span className="line-through text-red-400 max-w-[150px] truncate bg-red-950/20 px-1 rounded">
                                        {JSON.stringify(fc.oldValue)}
                                      </span>
                                    )}
                                    {fc.oldValue !== undefined && fc.newValue !== undefined && <span className="text-slate-600">→</span>}
                                    {fc.newValue !== undefined && (
                                      <span className="text-emerald-400 max-w-[150px] truncate bg-emerald-950/20 px-1 rounded">
                                        {JSON.stringify(fc.newValue)}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                )}

                {!diffResult.isIdentical && activeDiffTab === 'dependencies' && (
                  <div className="flex flex-col gap-3">
                    {diffResult.dependencyChanges.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-6">No dependency changes detected.</p>
                    ) : (
                      diffResult.dependencyChanges.map((change, i) => (
                        <div key={i} className="p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span className="text-xs font-mono font-semibold text-slate-200">{change.source}</span>
                              <span className="text-slate-600 text-xs">➔</span>
                              <span className="text-xs font-mono font-semibold text-slate-200">{change.target}</span>
                            </div>
                            <p className="text-xs text-slate-400">{change.description}</p>
                          </div>
                          <BadgeType type={change.type} />
                        </div>
                      ))
                    )}
                  </div>
                )}

                {!diffResult.isIdentical && activeDiffTab === 'schema' && (
                  <div className="flex flex-col gap-3">
                    {diffResult.schemaChanges.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-6">No schema changes detected.</p>
                    ) : (
                      diffResult.schemaChanges.map((change, i) => (
                        <div key={i} className="p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex flex-col gap-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-violet-300">{change.field}</span>
                            <BadgeType type={change.type} />
                          </div>
                          <p className="text-xs text-slate-400">{change.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DiffStatCard({ label, added, removed, modified }: { label: string; added: number; removed: number; modified: number }) {
  return (
    <div className="bg-[#1c1c38] rounded-xl p-3 border border-slate-800/50 flex flex-col gap-1">
      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{label}</span>
      <div className="flex items-baseline gap-2.5">
        <span className="text-lg font-bold text-slate-100">
          {added + removed + modified}
        </span>
        <div className="flex items-center gap-1.5 text-[9px] font-semibold">
          {added > 0 && <span className="text-emerald-400">+{added}</span>}
          {removed > 0 && <span className="text-red-400">-{removed}</span>}
          {modified > 0 && <span className="text-amber-400">~{modified}</span>}
          {added === 0 && removed === 0 && modified === 0 && <span className="text-slate-500">0</span>}
        </div>
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, label, count }: { active: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
        active
          ? 'bg-violet-600/15 text-violet-300 border border-violet-500/25'
          : 'text-slate-500 hover:text-slate-300 border border-transparent'
      }`}
    >
      {label}
      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
        active ? 'bg-violet-500/20 text-violet-300' : 'bg-slate-800 text-slate-500'
      }`}>
        {count}
      </span>
    </button>
  );
}

function BadgeType({ type }: { type: 'added' | 'removed' | 'modified' }) {
  switch (type) {
    case 'added':
      return (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
          ADDED
        </span>
      );
    case 'removed':
      return (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/25">
          REMOVED
        </span>
      );
    case 'modified':
      return (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25">
          MODIFIED
        </span>
      );
  }
}
