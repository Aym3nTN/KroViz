'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useReactFlow } from '@xyflow/react';
import ELK from 'elkjs/lib/elk.bundled.js';
import type { ResourceGraph } from '@/engine/graph/types';
import type { Node, Edge } from '@xyflow/react';
import { LAYOUT } from '@/lib/constants';
import { getResourceStyle, DEPENDENCY_TYPE_STYLES } from '@/lib/colors';

const elk = new ELK();

interface LayoutOptions {
  direction: 'DOWN' | 'RIGHT';
}

/**
 * Hook that uses ELK.js to compute node positions for React Flow.
 */
export function useGraphLayout() {
  const { setNodes, setEdges, fitView } = useReactFlow();
  const layoutInProgress = useRef(false);

  const applyLayout = useCallback(
    async (graph: ResourceGraph | null, options: LayoutOptions) => {
      if (!graph || graph.nodes.length === 0 || layoutInProgress.current) return;
      layoutInProgress.current = true;

      try {
        const elkGraph = {
          id: 'root',
          layoutOptions: {
            'elk.algorithm': 'layered',
            'elk.direction': options.direction,
            'elk.layered.spacing.nodeNodeBetweenLayers': '100',
            'elk.spacing.nodeNode': '60',
            'elk.edgeRouting': 'ORTHOGONAL',
            'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX',
            'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
          },
          children: graph.nodes.map((node) => ({
            id: node.id,
            width: LAYOUT.nodeWidth,
            height: LAYOUT.nodeHeight,
          })),
          edges: graph.edges.map((edge) => ({
            id: edge.id,
            sources: [edge.target], // target = dependency (source of the arrow)
            targets: [edge.source], // source = dependent (where arrow points)
          })),
        };

        const layoutedGraph = await elk.layout(elkGraph);

        const rfNodes: Node[] = graph.nodes.map((node) => {
          const elkNode = layoutedGraph.children?.find((n) => n.id === node.id);
          const style = getResourceStyle(node.kind, node.resourceType === 'externalRef');
          return {
            id: node.id,
            type: 'resourceNode',
            position: { x: elkNode?.x ?? 0, y: elkNode?.y ?? 0 },
            data: {
              ...node,
              color: style.color,
              bgColor: style.bgColor,
              borderColor: style.borderColor,
              icon: style.icon,
            },
          };
        });

        const rfEdges: Edge[] = graph.edges.map((edge) => {
          const depStyle = DEPENDENCY_TYPE_STYLES[edge.dependencyType] || DEPENDENCY_TYPE_STYLES['cel-reference'];
          return {
            id: edge.id,
            source: edge.target, // dependency
            target: edge.source, // dependent
            type: 'dependencyEdge',
            data: {
              ...edge,
              color: depStyle.color,
              dashArray: depStyle.dashArray,
              typeLabel: depStyle.label,
            },
            animated: edge.isOnCriticalPath,
          };
        });

        setNodes(rfNodes);
        setEdges(rfEdges);
        setTimeout(() => fitView({ padding: 0.15, duration: 400 }), 100);
      } catch (e) {
        console.error('ELK layout error:', e);
      } finally {
        layoutInProgress.current = false;
      }
    },
    [setNodes, setEdges, fitView]
  );

  return { applyLayout };
}
