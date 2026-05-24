'use client';

import React from 'react';
import { InputToolbar } from './input-toolbar';
import { YamlEditor } from './yaml-editor';

export function EditorPanel() {
  return (
    <div className="flex flex-col h-full bg-[#0f0f17]">
      <InputToolbar />
      <div className="flex-1 min-h-0">
        <YamlEditor />
      </div>
    </div>
  );
}
