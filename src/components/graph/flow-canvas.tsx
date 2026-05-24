'use client';

import React, { useCallback } from 'react';
import {
  ReactFlow, MiniMap, Controls, Background, BackgroundVariant,
  useNodesState, useEdgesState,
  type Node, type Edge, type OnNodeDrag,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ResourceNode } from './resource-node';
import { DependencyEdge } from './dependency-edge';
import { useAppStore } from '@/store/app-store';
import { DAG } from '@/engine/graph/dag';

// IMPORTANT: Define outside component for stable references
const nodeTypes = { resourceNode: ResourceNode };
const edgeTypes = { dependencyEdge: DependencyEdge };

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const resourceGraph = useAppStore((s) => s.resourceGraph);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);
  const setShowDetailPanel = useAppStore((s) => s.setShowDetailPanel);
  const setHighlightedNodeIds = useAppStore((s) => s.setHighlightedNodeIds);
  const setHoveredNodeId = useAppStore((s) => s.setHoveredNodeId);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNodeId(node.id);
      setShowDetailPanel(true);
    },
    [setSelectedNodeId, setShowDetailPanel]
  );

  const onNodeMouseEnter = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setHoveredNodeId(node.id);
      if (resourceGraph) {
        const dag = new DAG();
        for (const n of resourceGraph.nodes) dag.addNode(n.id);
        for (const e of resourceGraph.edges) dag.addEdge(e.source, e.target);
        const upstream = dag.getUpstream(node.id);
        const downstream = dag.getDownstream(node.id);
        setHighlightedNodeIds(new Set([node.id, ...upstream, ...downstream]));
      }
    },
    [resourceGraph, setHoveredNodeId, setHighlightedNodeIds]
  );

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNodeId(null);
    setHighlightedNodeIds(new Set());
  }, [setHoveredNodeId, setHighlightedNodeIds]);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
    setShowDetailPanel(false);
    setHighlightedNodeIds(new Set());
  }, [setSelectedNodeId, setShowDetailPanel, setHighlightedNodeIds]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodeClick={onNodeClick}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseLeave={onNodeMouseLeave}
      onPaneClick={onPaneClick}
      fitView
      minZoom={0.1}
      maxZoom={2}
      proOptions={{ hideAttribution: true }}
      className="bg-[#0f0f17]"
    >
      <Background variant={BackgroundVariant.Dots} color="#1e1e3a" gap={20} size={1} />
      <Controls
        className="!bg-[#1a1a2e] !border-slate-700 !shadow-lg [&>button]:!bg-[#242440] [&>button]:!border-slate-600 [&>button]:!text-slate-300 [&>button:hover]:!bg-[#2d2d50]"
      />
      <MiniMap
        nodeColor={(node) => (node.data as { color?: string })?.color || '#7c3aed'}
        maskColor="rgba(15, 15, 23, 0.8)"
        className="!bg-[#1a1a2e] !border-slate-700"
        pannable
        zoomable
      />
    </ReactFlow>
  );
}

// Export setters for external use (layout hook)
export { useNodesState, useEdgesState };
