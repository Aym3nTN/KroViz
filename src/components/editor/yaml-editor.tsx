'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useAppStore } from '@/store/app-store';

const Editor = dynamic(() => import('@monaco-editor/react').then(mod => mod.default), { ssr: false });

export function YamlEditor() {
  const yamlContent = useAppStore((s) => s.yamlContent);
  const setYamlContent = useAppStore((s) => s.setYamlContent);
  const setCursorLine = useAppStore((s) => s.setCursorLine);
  const highlightedLines = useAppStore((s) => s.highlightedLines);
  const parseErrors = useAppStore((s) => s.parseErrors);

  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const decorationRef = useRef<any>(null);

  const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Define custom dark theme
    monaco.editor.defineTheme('kroviz-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'key', foreground: 'a78bfa' },
        { token: 'string', foreground: '6ee7b7' },
        { token: 'number', foreground: '93c5fd' },
        { token: 'comment', foreground: '475569' },
      ],
      colors: {
        'editor.background': '#0f0f17',
        'editor.foreground': '#e2e8f0',
        'editor.lineHighlightBackground': '#1e1e3a',
        'editor.selectionBackground': '#7c3aed40',
        'editorLineNumber.foreground': '#334155',
        'editorLineNumber.activeForeground': '#7c3aed',
        'editor.inactiveSelectionBackground': '#7c3aed20',
        'editorCursor.foreground': '#a78bfa',
        'editorWidget.background': '#1a1a2e',
        'editorWidget.border': '#334155',
        'scrollbar.shadow': '#0f0f1700',
        'scrollbarSlider.background': '#334155',
        'scrollbarSlider.hoverBackground': '#475569',
      },
    });
    monaco.editor.setTheme('kroviz-dark');

    // Track cursor position
    editor.onDidChangeCursorPosition((e: any) => {
      setCursorLine(e.position.lineNumber);
    });
  }, [setCursorLine]);

  // Highlight lines when graph node is selected
  useEffect(() => {
    const editor = editorRef.current;
    const monaco = monacoRef.current;
    if (!editor || !monaco) return;

    if (decorationRef.current) {
      decorationRef.current.clear();
    }

    if (highlightedLines) {
      decorationRef.current = editor.createDecorationsCollection([
        {
          range: new monaco.Range(highlightedLines.start, 1, highlightedLines.end, 1),
          options: {
            isWholeLine: true,
            className: 'highlighted-yaml-line',
            linesDecorationsClassName: 'highlighted-yaml-gutter',
          },
        },
      ]);
      editor.revealLineInCenter(highlightedLines.start);
    }
  }, [highlightedLines]);

  // Show parse errors as markers
  useEffect(() => {
    const monaco = monacoRef.current;
    const editor = editorRef.current;
    if (!monaco || !editor) return;

    const model = editor.getModel();
    if (!model) return;

    const markers = parseErrors
      .filter(e => e.location)
      .map(e => ({
        severity: monaco.MarkerSeverity.Error,
        message: e.message,
        startLineNumber: e.location!.startLine,
        startColumn: e.location!.startColumn || 1,
        endLineNumber: e.location!.endLine,
        endColumn: e.location!.endColumn || 100,
      }));

    monaco.editor.setModelMarkers(model, 'kroviz', markers);
  }, [parseErrors]);

  return (
    <div className="h-full">
      <Editor
        height="100%"
        language="yaml"
        theme="kroviz-dark"
        value={yamlContent}
        onChange={(value) => setYamlContent(value || '')}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 13,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          lineNumbers: 'on',
          renderLineHighlight: 'line',
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          padding: { top: 12 },
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
          },
        }}
      />
    </div>
  );
}
