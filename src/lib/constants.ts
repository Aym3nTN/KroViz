/**
 * App-wide constants for KROViz.
 */

/** Sample RGD metadata */
export const SAMPLE_RGDS = [
  {
    id: 'web-app',
    name: 'Web Application',
    description: 'Simple Deployment + Service + Ingress with ConfigMap',
    file: '/samples/web-app.yaml',
    resourceCount: 4,
    complexity: 'simple' as const,
  },
  {
    id: 'coredns',
    name: 'CoreDNS Deployment',
    description: 'ConfigMap → Deployment → Service chain',
    file: '/samples/coredns.yaml',
    resourceCount: 3,
    complexity: 'simple' as const,
  },
  {
    id: 'wordpress',
    name: 'WordPress Stack',
    description: 'WordPress + MySQL with Secrets, PVCs, and diamond dependencies',
    file: '/samples/wordpress.yaml',
    resourceCount: 8,
    complexity: 'medium' as const,
  },
  {
    id: 'multi-tenant',
    name: 'Multi-Tenant Platform',
    description: 'Namespace, RBAC, NetworkPolicy, Deployment, Service, HPA',
    file: '/samples/multi-tenant.yaml',
    resourceCount: 10,
    complexity: 'complex' as const,
  },
  {
    id: 'complex-app',
    name: 'Microservices Platform',
    description: 'Full stack with Postgres, Redis, API, Worker, External Config',
    file: '/samples/complex-app.yaml',
    resourceCount: 14,
    complexity: 'complex' as const,
  },
] as const;

/** Keyboard shortcuts */
export const KEYBOARD_SHORTCUTS = {
  fitView: 'Ctrl+Shift+F',
  toggleLayout: 'Ctrl+Shift+L',
  search: 'Ctrl+K',
  escape: 'Escape',
  nextPhase: 'ArrowRight',
  prevPhase: 'ArrowLeft',
  togglePlay: 'Space',
} as const;

/** Animation durations (ms) */
export const ANIMATION = {
  panelSlide: 300,
  nodeHighlight: 200,
  phaseTransition: 500,
  debounceMs: 300,
  edgeFlow: 3,
} as const;

/** Layout constraints */
export const LAYOUT = {
  minSplitRatio: 0.2,
  maxSplitRatio: 0.8,
  defaultSplitRatio: 0.4,
  nodeWidth: 220,
  nodeHeight: 80,
  headerHeight: 56,
  statusBarHeight: 32,
} as const;
