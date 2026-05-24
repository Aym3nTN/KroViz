'use client';

import React, { useCallback, useRef } from 'react';
import { useAppStore } from '@/store/app-store';
import { SAMPLE_RGDS } from '@/lib/constants';

export function InputToolbar() {
  const setYamlContent = useAppStore((s) => s.setYamlContent);
  const setActiveSample = useAppStore((s) => s.setActiveSample);
  const activeSample = useAppStore((s) => s.activeSample);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadSample = useCallback(async (sampleId: string) => {
    const sample = SAMPLE_RGDS.find(s => s.id === sampleId);
    if (!sample) return;

    try {
      const res = await fetch(sample.file);
      const text = await res.text();
      setYamlContent(text);
      setActiveSample(sampleId);
    } catch (e) {
      console.error('Failed to load sample:', e);
    }
  }, [setYamlContent, setActiveSample]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setYamlContent(text);
      setActiveSample(null);
    };
    reader.readAsText(file);
  }, [setYamlContent, setActiveSample]);

  const handleClear = useCallback(() => {
    setYamlContent('');
    setActiveSample(null);
  }, [setYamlContent, setActiveSample]);

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50">
      {/* Sample selector */}
      <select
        value={activeSample || ''}
        onChange={(e) => e.target.value && loadSample(e.target.value)}
        className="px-2.5 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 border border-slate-600/50 focus:outline-none focus:border-violet-500/50 cursor-pointer"
        id="sample-selector"
      >
        <option value="">Load sample...</option>
        {SAMPLE_RGDS.map(s => (
          <option key={s.id} value={s.id}>
            {s.name} ({s.resourceCount} resources)
          </option>
        ))}
      </select>

      {/* File upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".yaml,.yml"
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors"
        id="upload-btn"
      >
        📁 Upload
      </button>

      {/* Clear */}
      <button
        onClick={handleClear}
        className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-400 hover:text-slate-200 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors ml-auto"
        id="clear-btn"
      >
        Clear
      </button>
    </div>
  );
}
