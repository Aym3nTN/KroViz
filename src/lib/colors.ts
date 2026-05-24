/**
 * Resource type color palette and icons for graph visualization.
 * Each Kubernetes resource kind gets a unique color and icon.
 */

export interface ResourceStyle {
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  label: string;
}

export const RESOURCE_STYLES: Record<string, ResourceStyle> = {
  Deployment: {
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.5)',
    icon: '⟳',
    label: 'Deployment',
  },
  StatefulSet: {
    color: '#2563eb',
    bgColor: 'rgba(37, 99, 235, 0.1)',
    borderColor: 'rgba(37, 99, 235, 0.5)',
    icon: '⊞',
    label: 'StatefulSet',
  },
  DaemonSet: {
    color: '#1d4ed8',
    bgColor: 'rgba(29, 78, 216, 0.1)',
    borderColor: 'rgba(29, 78, 216, 0.5)',
    icon: '⊡',
    label: 'DaemonSet',
  },
  Service: {
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.5)',
    icon: '◎',
    label: 'Service',
  },
  ConfigMap: {
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    borderColor: 'rgba(6, 182, 212, 0.5)',
    icon: '⚙',
    label: 'ConfigMap',
  },
  Secret: {
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.5)',
    icon: '🔐',
    label: 'Secret',
  },
  Ingress: {
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.5)',
    icon: '⇥',
    label: 'Ingress',
  },
  Namespace: {
    color: '#6366f1',
    bgColor: 'rgba(99, 102, 241, 0.1)',
    borderColor: 'rgba(99, 102, 241, 0.5)',
    icon: '▣',
    label: 'Namespace',
  },
  PersistentVolumeClaim: {
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)',
    borderColor: 'rgba(236, 72, 153, 0.5)',
    icon: '⛁',
    label: 'PVC',
  },
  NetworkPolicy: {
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.5)',
    icon: '⛊',
    label: 'NetworkPolicy',
  },
  ResourceQuota: {
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.5)',
    icon: '◈',
    label: 'ResourceQuota',
  },
  ServiceAccount: {
    color: '#14b8a6',
    bgColor: 'rgba(20, 184, 166, 0.1)',
    borderColor: 'rgba(20, 184, 166, 0.5)',
    icon: '⊕',
    label: 'ServiceAccount',
  },
  Role: {
    color: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.1)',
    borderColor: 'rgba(168, 85, 247, 0.5)',
    icon: '⊗',
    label: 'Role',
  },
  RoleBinding: {
    color: '#d946ef',
    bgColor: 'rgba(217, 70, 239, 0.1)',
    borderColor: 'rgba(217, 70, 239, 0.5)',
    icon: '⊘',
    label: 'RoleBinding',
  },
  HorizontalPodAutoscaler: {
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.1)',
    borderColor: 'rgba(14, 165, 233, 0.5)',
    icon: '⇅',
    label: 'HPA',
  },
  Job: {
    color: '#84cc16',
    bgColor: 'rgba(132, 204, 22, 0.1)',
    borderColor: 'rgba(132, 204, 22, 0.5)',
    icon: '▶',
    label: 'Job',
  },
  CronJob: {
    color: '#65a30d',
    bgColor: 'rgba(101, 163, 13, 0.1)',
    borderColor: 'rgba(101, 163, 13, 0.5)',
    icon: '⏰',
    label: 'CronJob',
  },
};

/** Default style for unknown resource kinds */
export const DEFAULT_RESOURCE_STYLE: ResourceStyle = {
  color: '#94a3b8',
  bgColor: 'rgba(148, 163, 184, 0.1)',
  borderColor: 'rgba(148, 163, 184, 0.5)',
  icon: '◻',
  label: 'Resource',
};

/** External ref style override */
export const EXTERNAL_REF_STYLE: Partial<ResourceStyle> = {
  borderColor: 'rgba(148, 163, 184, 0.7)',
  icon: '⇢',
};

/** Get the style for a resource kind */
export function getResourceStyle(kind: string, isExternalRef: boolean = false): ResourceStyle {
  const base = RESOURCE_STYLES[kind] || { ...DEFAULT_RESOURCE_STYLE, label: kind };
  if (isExternalRef) {
    return {
      ...base,
      borderColor: EXTERNAL_REF_STYLE.borderColor || base.borderColor,
      icon: EXTERNAL_REF_STYLE.icon || base.icon,
    };
  }
  return base;
}

/** Dependency type styles */
export const DEPENDENCY_TYPE_STYLES: Record<string, { color: string; dashArray: string; label: string }> = {
  'cel-reference': { color: '#7c3aed', dashArray: '0', label: 'CEL Reference' },
  'env-var': { color: '#06b6d4', dashArray: '0', label: 'Env Variable' },
  'volume-mount': { color: '#ec4899', dashArray: '0', label: 'Volume Mount' },
  'selector': { color: '#f59e0b', dashArray: '5 5', label: 'Selector' },
  'namespace': { color: '#6366f1', dashArray: '0', label: 'Namespace' },
  'service-binding': { color: '#8b5cf6', dashArray: '5 5', label: 'Service Binding' },
  'secret-ref': { color: '#f59e0b', dashArray: '0', label: 'Secret Ref' },
  'configmap-ref': { color: '#06b6d4', dashArray: '0', label: 'ConfigMap Ref' },
  'conditional': { color: '#94a3b8', dashArray: '3 3', label: 'Conditional' },
};

/** Estimated reconciliation durations by resource kind (seconds) */
export const ESTIMATED_DURATIONS: Record<string, number> = {
  Namespace: 2,
  ConfigMap: 1,
  Secret: 1,
  PersistentVolumeClaim: 5,
  ServiceAccount: 1,
  Role: 1,
  RoleBinding: 1,
  NetworkPolicy: 2,
  Deployment: 10,
  StatefulSet: 15,
  DaemonSet: 10,
  Service: 3,
  Ingress: 5,
  HorizontalPodAutoscaler: 2,
  Job: 30,
  CronJob: 2,
  ResourceQuota: 1,
};

export const DEFAULT_ESTIMATED_DURATION = 5;
