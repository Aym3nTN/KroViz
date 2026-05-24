(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
'use client';
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        yamlContent: '',
        setYamlContent: (content)=>set({
                yamlContent: content
            }),
        cursorLine: 1,
        setCursorLine: (line)=>set({
                cursorLine: line
            }),
        highlightedLines: null,
        setHighlightedLines: (lines)=>set({
                highlightedLines: lines
            }),
        parsedRGD: null,
        setParsedRGD: (rgd)=>set({
                parsedRGD: rgd
            }),
        resourceGraph: null,
        setResourceGraph: (graph)=>set({
                resourceGraph: graph
            }),
        parseErrors: [],
        setParseErrors: (errors)=>set({
                parseErrors: errors
            }),
        selectedNodeId: null,
        setSelectedNodeId: (id)=>set({
                selectedNodeId: id
            }),
        highlightedNodeIds: new Set(),
        setHighlightedNodeIds: (ids)=>set({
                highlightedNodeIds: ids
            }),
        hoveredNodeId: null,
        setHoveredNodeId: (id)=>set({
                hoveredNodeId: id
            }),
        layoutDirection: 'DOWN',
        setLayoutDirection: (dir)=>set({
                layoutDirection: dir
            }),
        currentPhase: -1,
        setCurrentPhase: (phase)=>set({
                currentPhase: phase
            }),
        isPlaying: false,
        setIsPlaying: (playing)=>set({
                isPlaying: playing
            }),
        playbackSpeed: 1,
        setPlaybackSpeed: (speed)=>set({
                playbackSpeed: speed
            }),
        viewMode: 'graph',
        setViewMode: (mode)=>set({
                viewMode: mode
            }),
        showDetailPanel: false,
        setShowDetailPanel: (show)=>set({
                showDetailPanel: show
            }),
        splitRatio: 0.38,
        setSplitRatio: (ratio)=>set({
                splitRatio: ratio
            }),
        showImpactAnalysis: false,
        setShowImpactAnalysis: (show)=>set({
                showImpactAnalysis: show
            }),
        impactTarget: null,
        setImpactTarget: (id)=>set({
                impactTarget: id
            }),
        impactResult: null,
        setImpactResult: (result)=>set({
                impactResult: result
            }),
        diffYamlContent: '',
        setDiffYamlContent: (content)=>set({
                diffYamlContent: content
            }),
        searchQuery: '',
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        filterKinds: new Set(),
        setFilterKinds: (kinds)=>set({
                filterKinds: kinds
            }),
        activeSample: null,
        setActiveSample: (sample)=>set({
                activeSample: sample
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Header() {
    _s();
    const viewMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Header.useAppStore[viewMode]": (s)=>s.viewMode
    }["Header.useAppStore[viewMode]"]);
    const setViewMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Header.useAppStore[setViewMode]": (s)=>s.setViewMode
    }["Header.useAppStore[setViewMode]"]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Header.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["Header.useAppStore[resourceGraph]"]);
    const tabs = [
        {
            id: 'graph',
            label: 'Graph',
            icon: '⬡'
        },
        {
            id: 'timeline',
            label: 'Timeline',
            icon: '⏱'
        },
        {
            id: 'diff',
            label: 'Diff',
            icon: '⇄'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center h-14 px-4 bg-[#0d0d15] border-b border-slate-800/50 flex-shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2.5 mr-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-900/30",
                        children: "K"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm font-bold text-slate-100 tracking-tight",
                                children: "KROViz"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-slate-500 -mt-0.5",
                                children: "RGD Dependency Visualizer"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-0.5 bg-[#1a1a2e] rounded-lg p-0.5 border border-slate-700/30",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode(tab.id),
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === tab.id ? 'bg-violet-600/20 text-violet-300 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`,
                        id: `tab-${tab.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                children: tab.icon
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            resourceGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 ml-auto text-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Resources",
                        value: resourceGraph.stats.totalResources,
                        color: "text-violet-400"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Dependencies",
                        value: resourceGraph.stats.totalEdges,
                        color: "text-cyan-400"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Phases",
                        value: resourceGraph.stats.executionPhases,
                        color: "text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    resourceGraph.criticalPath.path.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                        label: "Critical Path",
                        value: `${resourceGraph.criticalPath.totalDuration}s`,
                        color: "text-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    resourceGraph.hasCycles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-400 font-medium px-2 py-0.5 rounded bg-red-900/20 border border-red-700/30",
                        children: "⚠ Cycles Detected"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Header, "HIeFPMrL3Bs0/bi7Ox7cEcXIckw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = Header;
function Stat({ label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-semibold ${color}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c1 = Stat;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "Stat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBar",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function StatusBar() {
    _s();
    const parsedRGD = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "StatusBar.useAppStore[parsedRGD]": (s)=>s.parsedRGD
    }["StatusBar.useAppStore[parsedRGD]"]);
    const parseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "StatusBar.useAppStore[parseErrors]": (s)=>s.parseErrors
    }["StatusBar.useAppStore[parseErrors]"]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "StatusBar.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["StatusBar.useAppStore[resourceGraph]"]);
    const cursorLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "StatusBar.useAppStore[cursorLine]": (s)=>s.cursorLine
    }["StatusBar.useAppStore[cursorLine]"]);
    const errorCount = parseErrors.filter((e)=>e.severity === 'error').length;
    const warningCount = parsedRGD?.warnings.length || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center h-7 px-3 bg-[#0d0d15] border-t border-slate-800/50 text-[10px] text-slate-500 flex-shrink-0 gap-4",
        children: [
            errorCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-400",
                children: [
                    "✕ ",
                    errorCount,
                    " error",
                    errorCount > 1 ? 's' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this) : parsedRGD ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-500",
                children: "✓ Valid RGD"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "No input"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            warningCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-amber-400",
                children: [
                    "⚠ ",
                    warningCount,
                    " warning",
                    warningCount > 1 ? 's' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            resourceGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.totalResources,
                            " resources"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.totalEdges,
                            " deps"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.executionPhases,
                            " phases"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-auto",
                children: [
                    "Ln ",
                    cursorLine
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            parsedRGD?.metadata.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-slate-400",
                children: parsedRGD.metadata.name
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(StatusBar, "xyEbFc9BmV1zB52YTNjRaxo+7h8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = StatusBar;
var _c;
__turbopack_context__.k.register(_c, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * App-wide constants for KROViz.
 */ /** Sample RGD metadata */ __turbopack_context__.s([
    "ANIMATION",
    ()=>ANIMATION,
    "KEYBOARD_SHORTCUTS",
    ()=>KEYBOARD_SHORTCUTS,
    "LAYOUT",
    ()=>LAYOUT,
    "SAMPLE_RGDS",
    ()=>SAMPLE_RGDS
]);
const SAMPLE_RGDS = [
    {
        id: 'web-app',
        name: 'Web Application',
        description: 'Simple Deployment + Service + Ingress with ConfigMap',
        file: '/samples/web-app.yaml',
        resourceCount: 4,
        complexity: 'simple'
    },
    {
        id: 'coredns',
        name: 'CoreDNS Deployment',
        description: 'ConfigMap → Deployment → Service chain',
        file: '/samples/coredns.yaml',
        resourceCount: 3,
        complexity: 'simple'
    },
    {
        id: 'wordpress',
        name: 'WordPress Stack',
        description: 'WordPress + MySQL with Secrets, PVCs, and diamond dependencies',
        file: '/samples/wordpress.yaml',
        resourceCount: 8,
        complexity: 'medium'
    },
    {
        id: 'multi-tenant',
        name: 'Multi-Tenant Platform',
        description: 'Namespace, RBAC, NetworkPolicy, Deployment, Service, HPA',
        file: '/samples/multi-tenant.yaml',
        resourceCount: 10,
        complexity: 'complex'
    },
    {
        id: 'complex-app',
        name: 'Microservices Platform',
        description: 'Full stack with Postgres, Redis, API, Worker, External Config',
        file: '/samples/complex-app.yaml',
        resourceCount: 14,
        complexity: 'complex'
    }
];
const KEYBOARD_SHORTCUTS = {
    fitView: 'Ctrl+Shift+F',
    toggleLayout: 'Ctrl+Shift+L',
    search: 'Ctrl+K',
    escape: 'Escape',
    nextPhase: 'ArrowRight',
    prevPhase: 'ArrowLeft',
    togglePlay: 'Space'
};
const ANIMATION = {
    panelSlide: 300,
    nodeHighlight: 200,
    phaseTransition: 500,
    debounceMs: 300,
    edgeFlow: 3
};
const LAYOUT = {
    minSplitRatio: 0.2,
    maxSplitRatio: 0.8,
    defaultSplitRatio: 0.4,
    nodeWidth: 220,
    nodeHeight: 80,
    headerHeight: 56,
    statusBarHeight: 32
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplitPane",
    ()=>SplitPane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SplitPane({ left, right }) {
    _s();
    const splitRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "SplitPane.useAppStore[splitRatio]": (s)=>s.splitRatio
    }["SplitPane.useAppStore[splitRatio]"]);
    const setSplitRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "SplitPane.useAppStore[setSplitRatio]": (s)=>s.setSplitRatio
    }["SplitPane.useAppStore[setSplitRatio]"]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplitPane.useCallback[handleMouseDown]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["SplitPane.useCallback[handleMouseDown]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitPane.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "SplitPane.useEffect.handleMouseMove": (e)=>{
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const ratio = (e.clientX - rect.left) / rect.width;
                    setSplitRatio(Math.max(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT"].minSplitRatio, Math.min(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT"].maxSplitRatio, ratio)));
                }
            }["SplitPane.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "SplitPane.useEffect.handleMouseUp": ()=>setIsDragging(false)
            }["SplitPane.useEffect.handleMouseUp"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            return ({
                "SplitPane.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                }
            })["SplitPane.useEffect"];
        }
    }["SplitPane.useEffect"], [
        isDragging,
        setSplitRatio
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "flex h-full relative",
        style: {
            cursor: isDragging ? 'col-resize' : undefined
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: `${splitRatio * 100}%`
                },
                className: "h-full overflow-hidden",
                children: left
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: handleMouseDown,
                className: `w-[3px] cursor-col-resize relative group flex-shrink-0 ${isDragging ? 'bg-violet-500' : 'bg-slate-700/50 hover:bg-violet-500/50'} transition-colors`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 rounded-full opacity-0 group-hover:opacity-100 bg-violet-500/20 transition-opacity"
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: `${(1 - splitRatio) * 100}%`
                },
                className: "h-full overflow-hidden",
                children: right
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(SplitPane, "srieB7NC9JZbC67SkMEdeS0+3w4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = SplitPane;
var _c;
__turbopack_context__.k.register(_c, "SplitPane");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputToolbar",
    ()=>InputToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function InputToolbar() {
    _s();
    const setYamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "InputToolbar.useAppStore[setYamlContent]": (s)=>s.setYamlContent
    }["InputToolbar.useAppStore[setYamlContent]"]);
    const setActiveSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "InputToolbar.useAppStore[setActiveSample]": (s)=>s.setActiveSample
    }["InputToolbar.useAppStore[setActiveSample]"]);
    const activeSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "InputToolbar.useAppStore[activeSample]": (s)=>s.activeSample
    }["InputToolbar.useAppStore[activeSample]"]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputToolbar.useCallback[loadSample]": async (sampleId)=>{
            const sample = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"].find({
                "InputToolbar.useCallback[loadSample].sample": (s)=>s.id === sampleId
            }["InputToolbar.useCallback[loadSample].sample"]);
            if (!sample) return;
            try {
                const res = await fetch(sample.file);
                const text = await res.text();
                setYamlContent(text);
                setActiveSample(sampleId);
            } catch (e) {
                console.error('Failed to load sample:', e);
            }
        }
    }["InputToolbar.useCallback[loadSample]"], [
        setYamlContent,
        setActiveSample
    ]);
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputToolbar.useCallback[handleFileUpload]": (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ({
                "InputToolbar.useCallback[handleFileUpload]": (ev)=>{
                    const text = ev.target?.result;
                    setYamlContent(text);
                    setActiveSample(null);
                }
            })["InputToolbar.useCallback[handleFileUpload]"];
            reader.readAsText(file);
        }
    }["InputToolbar.useCallback[handleFileUpload]"], [
        setYamlContent,
        setActiveSample
    ]);
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputToolbar.useCallback[handleClear]": ()=>{
            setYamlContent('');
            setActiveSample(null);
        }
    }["InputToolbar.useCallback[handleClear]"], [
        setYamlContent,
        setActiveSample
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: activeSample || '',
                onChange: (e)=>e.target.value && loadSample(e.target.value),
                className: "px-2.5 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 border border-slate-600/50 focus:outline-none focus:border-violet-500/50 cursor-pointer",
                id: "sample-selector",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Load sample..."
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: s.id,
                            children: [
                                s.name,
                                " (",
                                s.resourceCount,
                                " resources)"
                            ]
                        }, s.id, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".yaml,.yml",
                onChange: handleFileUpload,
                className: "hidden",
                id: "file-upload"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>fileInputRef.current?.click(),
                className: "px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors",
                id: "upload-btn",
                children: "📁 Upload"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClear,
                className: "px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-400 hover:text-slate-200 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors ml-auto",
                id: "clear-btn",
                children: "Clear"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(InputToolbar, "yf6dJ9eve8dm65Uii1Sn6ALAeh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = InputToolbar;
var _c;
__turbopack_context__.k.register(_c, "InputToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/yaml-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YamlEditor",
    ()=>YamlEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.default), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/kroviz/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Editor;
function YamlEditor() {
    _s();
    const yamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "YamlEditor.useAppStore[yamlContent]": (s)=>s.yamlContent
    }["YamlEditor.useAppStore[yamlContent]"]);
    const setYamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "YamlEditor.useAppStore[setYamlContent]": (s)=>s.setYamlContent
    }["YamlEditor.useAppStore[setYamlContent]"]);
    const setCursorLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "YamlEditor.useAppStore[setCursorLine]": (s)=>s.setCursorLine
    }["YamlEditor.useAppStore[setCursorLine]"]);
    const highlightedLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "YamlEditor.useAppStore[highlightedLines]": (s)=>s.highlightedLines
    }["YamlEditor.useAppStore[highlightedLines]"]);
    const parseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "YamlEditor.useAppStore[parseErrors]": (s)=>s.parseErrors
    }["YamlEditor.useAppStore[parseErrors]"]);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monacoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const decorationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleEditorDidMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "YamlEditor.useCallback[handleEditorDidMount]": (editor, monaco)=>{
            editorRef.current = editor;
            monacoRef.current = monaco;
            // Define custom dark theme
            monaco.editor.defineTheme('kroviz-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    {
                        token: 'key',
                        foreground: 'a78bfa'
                    },
                    {
                        token: 'string',
                        foreground: '6ee7b7'
                    },
                    {
                        token: 'number',
                        foreground: '93c5fd'
                    },
                    {
                        token: 'comment',
                        foreground: '475569'
                    }
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
                    'scrollbarSlider.hoverBackground': '#475569'
                }
            });
            monaco.editor.setTheme('kroviz-dark');
            // Track cursor position
            editor.onDidChangeCursorPosition({
                "YamlEditor.useCallback[handleEditorDidMount]": (e)=>{
                    setCursorLine(e.position.lineNumber);
                }
            }["YamlEditor.useCallback[handleEditorDidMount]"]);
        }
    }["YamlEditor.useCallback[handleEditorDidMount]"], [
        setCursorLine
    ]);
    // Highlight lines when graph node is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YamlEditor.useEffect": ()=>{
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
                            linesDecorationsClassName: 'highlighted-yaml-gutter'
                        }
                    }
                ]);
                editor.revealLineInCenter(highlightedLines.start);
            }
        }
    }["YamlEditor.useEffect"], [
        highlightedLines
    ]);
    // Show parse errors as markers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YamlEditor.useEffect": ()=>{
            const monaco = monacoRef.current;
            const editor = editorRef.current;
            if (!monaco || !editor) return;
            const model = editor.getModel();
            if (!model) return;
            const markers = parseErrors.filter({
                "YamlEditor.useEffect.markers": (e)=>e.location
            }["YamlEditor.useEffect.markers"]).map({
                "YamlEditor.useEffect.markers": (e)=>({
                        severity: monaco.MarkerSeverity.Error,
                        message: e.message,
                        startLineNumber: e.location.startLine,
                        startColumn: e.location.startColumn || 1,
                        endLineNumber: e.location.endLine,
                        endColumn: e.location.endColumn || 100
                    })
            }["YamlEditor.useEffect.markers"]);
            monaco.editor.setModelMarkers(model, 'kroviz', markers);
        }
    }["YamlEditor.useEffect"], [
        parseErrors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Editor, {
            height: "100%",
            language: "yaml",
            theme: "kroviz-dark",
            value: yamlContent,
            onChange: (value)=>setYamlContent(value || ''),
            onMount: handleEditorDidMount,
            options: {
                minimap: {
                    enabled: false
                },
                fontSize: 13,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                lineNumbers: 'on',
                renderLineHighlight: 'line',
                smoothScrolling: true,
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: 'on',
                padding: {
                    top: 12
                },
                overviewRulerLanes: 0,
                hideCursorInOverviewRuler: true,
                scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6
                }
            }
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/yaml-editor.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/yaml-editor.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(YamlEditor, "GN3b2Z83t+vf7zI3mbXzoGEn9Gc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c1 = YamlEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "Editor");
__turbopack_context__.k.register(_c1, "YamlEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorPanel",
    ()=>EditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$input$2d$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/input-toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$yaml$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/yaml-editor.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function EditorPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0f0f17]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$input$2d$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputToolbar"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$yaml$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YamlEditor"], {}, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = EditorPanel;
var _c;
__turbopack_context__.k.register(_c, "EditorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceNode",
    ()=>ResourceNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ResourceNodeComponent({ data, id }) {
    _s();
    const d = data;
    const selectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceNodeComponent.useAppStore[selectedNodeId]": (s)=>s.selectedNodeId
    }["ResourceNodeComponent.useAppStore[selectedNodeId]"]);
    const highlightedNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceNodeComponent.useAppStore[highlightedNodeIds]": (s)=>s.highlightedNodeIds
    }["ResourceNodeComponent.useAppStore[highlightedNodeIds]"]);
    const currentPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceNodeComponent.useAppStore[currentPhase]": (s)=>s.currentPhase
    }["ResourceNodeComponent.useAppStore[currentPhase]"]);
    const isSelected = selectedNodeId === id;
    const isHighlighted = highlightedNodeIds.size === 0 || highlightedNodeIds.has(id);
    const isDimmed = highlightedNodeIds.size > 0 && !highlightedNodeIds.has(id);
    const isCurrentPhase = currentPhase >= 0 && d.executionPhase === currentPhase;
    const isPastPhase = currentPhase >= 0 && d.executionPhase < currentPhase;
    const isFuturePhase = currentPhase >= 0 && d.executionPhase > currentPhase;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        relative px-3 py-2.5 rounded-xl border-2 min-w-[200px] transition-all duration-200 cursor-pointer
        ${isSelected ? 'ring-2 ring-violet-400 ring-offset-2 ring-offset-[#0f0f17] scale-105' : ''}
        ${isDimmed ? 'opacity-30' : 'opacity-100'}
        ${isCurrentPhase ? 'ring-2 ring-emerald-400 ring-offset-1 ring-offset-[#0f0f17]' : ''}
        ${isPastPhase ? 'opacity-60' : ''}
        ${isFuturePhase && currentPhase >= 0 ? 'opacity-40' : ''}
      `,
        style: {
            background: isDimmed ? '#1a1a2e' : d.bgColor,
            borderColor: isSelected ? d.color : d.borderColor,
            boxShadow: d.isOnCriticalPath && !isDimmed ? `0 0 20px ${d.color}40, 0 0 40px ${d.color}20` : isSelected ? `0 0 15px ${d.color}30` : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top,
                className: "!bg-slate-500 !border-slate-600 !w-2 !h-2"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white",
                style: {
                    backgroundColor: d.color
                },
                children: d.executionPhase + 1
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg leading-none",
                        children: d.icon
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-semibold text-slate-200 truncate",
                                children: d.label
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-medium truncate",
                                style: {
                                    color: d.color
                                },
                                children: d.kind
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 mt-1.5 flex-wrap",
                children: [
                    d.resourceType === 'externalRef' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300",
                        children: "external"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    d.isConditional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-300",
                        children: "conditional"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    d.hasReadinessGate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300",
                        children: "readyWhen"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    d.isOnCriticalPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] px-1.5 py-0.5 rounded bg-orange-900/40 text-orange-300",
                        children: "critical"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom,
                className: "!bg-slate-500 !border-slate-600 !w-2 !h-2"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ResourceNodeComponent, "DiuBvCllVgj8f1cQbFJMVCkAGGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = ResourceNodeComponent;
const ResourceNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ResourceNodeComponent);
_c1 = ResourceNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResourceNodeComponent");
__turbopack_context__.k.register(_c1, "ResourceNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DependencyEdge",
    ()=>DependencyEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function DependencyEdgeComponent({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, selected }) {
    const d = data;
    const [edgePath, labelX, labelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmoothStepPath"])({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: 16
    });
    const strokeWidth = d?.isOnCriticalPath ? 2.5 : 1.5;
    const color = selected ? '#a78bfa' : d?.color || '#7c3aed';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BaseEdge"], {
                id: id,
                path: edgePath,
                style: {
                    strokeWidth,
                    stroke: color,
                    strokeDasharray: d?.dashArray === '0' ? undefined : d?.dashArray,
                    filter: d?.isOnCriticalPath ? `drop-shadow(0 0 4px ${color})` : undefined
                }
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                r: "3",
                fill: color,
                opacity: 0.8,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                    dur: "3s",
                    repeatCount: "indefinite",
                    path: edgePath
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            selected && d?.typeLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EdgeLabelRenderer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all'
                    },
                    className: "px-2 py-1 rounded-md text-[10px] font-medium border border-slate-600 bg-[#1a1a2e] text-slate-300 shadow-lg",
                    children: d.typeLabel
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = DependencyEdgeComponent;
const DependencyEdge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(DependencyEdgeComponent);
_c1 = DependencyEdge;
var _c, _c1;
__turbopack_context__.k.register(_c, "DependencyEdgeComponent");
__turbopack_context__.k.register(_c1, "DependencyEdge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/dag.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Directed Acyclic Graph (DAG) data structure for resource dependency graphs.
 * 
 * @module dag
 */ __turbopack_context__.s([
    "DAG",
    ()=>DAG
]);
class DAG {
    /** Forward adjacency list: node → nodes it depends ON (outgoing edges from dependent TO dependency) */ adjacency = new Map();
    /** Reverse adjacency list: node → nodes that depend on it */ reverseAdjacency = new Map();
    /** All node IDs */ nodeSet = new Set();
    /** Add a node to the graph */ addNode(id) {
        this.nodeSet.add(id);
        if (!this.adjacency.has(id)) {
            this.adjacency.set(id, new Set());
        }
        if (!this.reverseAdjacency.has(id)) {
            this.reverseAdjacency.set(id, new Set());
        }
    }
    /** 
   * Add a directed edge: source depends on target.
   * Edge goes from source → target (source needs target).
   */ addEdge(source, target) {
        this.addNode(source);
        this.addNode(target);
        this.adjacency.get(source).add(target);
        this.reverseAdjacency.get(target).add(source);
    }
    /** Get all nodes */ getNodes() {
        return Array.from(this.nodeSet);
    }
    /** Get the number of nodes */ get size() {
        return this.nodeSet.size;
    }
    /** Check if a node exists */ hasNode(id) {
        return this.nodeSet.has(id);
    }
    /** Get dependencies of a node (what it depends on) */ getDependencies(id) {
        return Array.from(this.adjacency.get(id) || []);
    }
    /** Get dependents of a node (what depends on it) */ getDependents(id) {
        return Array.from(this.reverseAdjacency.get(id) || []);
    }
    /** Get in-degree (number of dependencies) */ getInDegree(id) {
        return this.adjacency.get(id)?.size || 0;
    }
    /** Get out-degree (number of dependents) */ getOutDegree(id) {
        return this.reverseAdjacency.get(id)?.size || 0;
    }
    /** Get root nodes (no dependencies — in-degree 0) */ getRoots() {
        return this.getNodes().filter((id)=>this.getInDegree(id) === 0);
    }
    /** Get leaf nodes (no dependents — out-degree 0) */ getLeaves() {
        return this.getNodes().filter((id)=>this.getOutDegree(id) === 0);
    }
    /** Get forward adjacency list */ getAdjacencyList() {
        return new Map(this.adjacency);
    }
    /** Get reverse adjacency list */ getReverseAdjacencyList() {
        return new Map(this.reverseAdjacency);
    }
    /**
   * Compute upstream (all transitive dependencies) and downstream (all transitive dependents)
   * subgraphs for a given node.
   */ getSubgraph(nodeId) {
        return {
            upstream: this.getUpstream(nodeId),
            downstream: this.getDownstream(nodeId)
        };
    }
    /** Get all transitive dependencies (upstream) of a node using BFS */ getUpstream(nodeId) {
        const visited = new Set();
        const queue = [
            ...this.getDependencies(nodeId)
        ];
        while(queue.length > 0){
            const current = queue.shift();
            if (visited.has(current)) continue;
            visited.add(current);
            queue.push(...this.getDependencies(current));
        }
        return Array.from(visited);
    }
    /** Get all transitive dependents (downstream) of a node using BFS */ getDownstream(nodeId) {
        const visited = new Set();
        const queue = [
            ...this.getDependents(nodeId)
        ];
        while(queue.length > 0){
            const current = queue.shift();
            if (visited.has(current)) continue;
            visited.add(current);
            queue.push(...this.getDependents(current));
        }
        return Array.from(visited);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowCanvas",
    ()=>FlowCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$resource$2d$node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/resource-node.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$dependency$2d$edge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/dependency-edge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/dag.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// IMPORTANT: Define outside component for stable references
const nodeTypes = {
    resourceNode: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$resource$2d$node$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceNode"]
};
const edgeTypes = {
    dependencyEdge: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$dependency$2d$edge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DependencyEdge"]
};
function FlowCanvas() {
    _s();
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"])([]);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"])([]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "FlowCanvas.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["FlowCanvas.useAppStore[resourceGraph]"]);
    const setSelectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "FlowCanvas.useAppStore[setSelectedNodeId]": (s)=>s.setSelectedNodeId
    }["FlowCanvas.useAppStore[setSelectedNodeId]"]);
    const setShowDetailPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "FlowCanvas.useAppStore[setShowDetailPanel]": (s)=>s.setShowDetailPanel
    }["FlowCanvas.useAppStore[setShowDetailPanel]"]);
    const setHighlightedNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "FlowCanvas.useAppStore[setHighlightedNodeIds]": (s)=>s.setHighlightedNodeIds
    }["FlowCanvas.useAppStore[setHighlightedNodeIds]"]);
    const setHoveredNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "FlowCanvas.useAppStore[setHoveredNodeId]": (s)=>s.setHoveredNodeId
    }["FlowCanvas.useAppStore[setHoveredNodeId]"]);
    const onNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlowCanvas.useCallback[onNodeClick]": (_, node)=>{
            setSelectedNodeId(node.id);
            setShowDetailPanel(true);
        }
    }["FlowCanvas.useCallback[onNodeClick]"], [
        setSelectedNodeId,
        setShowDetailPanel
    ]);
    const onNodeMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlowCanvas.useCallback[onNodeMouseEnter]": (_, node)=>{
            setHoveredNodeId(node.id);
            if (resourceGraph) {
                const dag = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAG"]();
                for (const n of resourceGraph.nodes)dag.addNode(n.id);
                for (const e of resourceGraph.edges)dag.addEdge(e.source, e.target);
                const upstream = dag.getUpstream(node.id);
                const downstream = dag.getDownstream(node.id);
                setHighlightedNodeIds(new Set([
                    node.id,
                    ...upstream,
                    ...downstream
                ]));
            }
        }
    }["FlowCanvas.useCallback[onNodeMouseEnter]"], [
        resourceGraph,
        setHoveredNodeId,
        setHighlightedNodeIds
    ]);
    const onNodeMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlowCanvas.useCallback[onNodeMouseLeave]": ()=>{
            setHoveredNodeId(null);
            setHighlightedNodeIds(new Set());
        }
    }["FlowCanvas.useCallback[onNodeMouseLeave]"], [
        setHoveredNodeId,
        setHighlightedNodeIds
    ]);
    const onPaneClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlowCanvas.useCallback[onPaneClick]": ()=>{
            setSelectedNodeId(null);
            setShowDetailPanel(false);
            setHighlightedNodeIds(new Set());
        }
    }["FlowCanvas.useCallback[onPaneClick]"], [
        setSelectedNodeId,
        setShowDetailPanel,
        setHighlightedNodeIds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
        nodes: nodes,
        edges: edges,
        onNodesChange: onNodesChange,
        onEdgesChange: onEdgesChange,
        nodeTypes: nodeTypes,
        edgeTypes: edgeTypes,
        onNodeClick: onNodeClick,
        onNodeMouseEnter: onNodeMouseEnter,
        onNodeMouseLeave: onNodeMouseLeave,
        onPaneClick: onPaneClick,
        fitView: true,
        minZoom: 0.1,
        maxZoom: 2,
        proOptions: {
            hideAttribution: true
        },
        className: "bg-[#0f0f17]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                variant: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Dots,
                color: "#1e1e3a",
                gap: 20,
                size: 1
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                className: "!bg-[#1a1a2e] !border-slate-700 !shadow-lg [&>button]:!bg-[#242440] [&>button]:!border-slate-600 [&>button]:!text-slate-300 [&>button:hover]:!bg-[#2d2d50]"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                nodeColor: (node)=>node.data?.color || '#7c3aed',
                maskColor: "rgba(15, 15, 23, 0.8)",
                className: "!bg-[#1a1a2e] !border-slate-700",
                pannable: true,
                zoomable: true
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(FlowCanvas, "O4INXzmltEu9ieEU0jMFNPumJtU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEdgesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = FlowCanvas;
;
var _c;
__turbopack_context__.k.register(_c, "FlowCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphToolbar",
    ()=>GraphToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function GraphToolbar() {
    _s();
    const layoutDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[layoutDirection]": (s)=>s.layoutDirection
    }["GraphToolbar.useAppStore[layoutDirection]"]);
    const setLayoutDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[setLayoutDirection]": (s)=>s.setLayoutDirection
    }["GraphToolbar.useAppStore[setLayoutDirection]"]);
    const searchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[searchQuery]": (s)=>s.searchQuery
    }["GraphToolbar.useAppStore[searchQuery]"]);
    const setSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[setSearchQuery]": (s)=>s.setSearchQuery
    }["GraphToolbar.useAppStore[setSearchQuery]"]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["GraphToolbar.useAppStore[resourceGraph]"]);
    const showImpactAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[showImpactAnalysis]": (s)=>s.showImpactAnalysis
    }["GraphToolbar.useAppStore[showImpactAnalysis]"]);
    const setShowImpactAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphToolbar.useAppStore[setShowImpactAnalysis]": (s)=>s.setShowImpactAnalysis
    }["GraphToolbar.useAppStore[setShowImpactAnalysis]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLayoutDirection(layoutDirection === 'DOWN' ? 'RIGHT' : 'DOWN'),
                className: "px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 transition-colors",
                title: "Toggle layout direction",
                id: "layout-toggle",
                children: layoutDirection === 'DOWN' ? '↕ Vertical' : '↔ Horizontal'
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 max-w-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        placeholder: "Search resources...",
                        className: "w-full px-3 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 placeholder-slate-500 border border-slate-600/50 focus:outline-none focus:border-violet-500/50 transition-colors",
                        id: "resource-search"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSearchQuery(''),
                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            resourceGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-[10px] text-slate-500 ml-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.totalResources,
                            " resources"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.totalEdges,
                            " dependencies"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            resourceGraph.stats.executionPhases,
                            " phases"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowImpactAnalysis(!showImpactAnalysis),
                className: `px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${showImpactAnalysis ? 'bg-red-900/30 text-red-300 border-red-700/50' : 'bg-[#242440] text-slate-300 border-slate-600/50 hover:bg-[#2d2d50]'}`,
                id: "impact-toggle",
                children: "💥 Impact"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(GraphToolbar, "f1wfCJEAZAzj04hA+VX1pYMbinc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = GraphToolbar;
var _c;
__turbopack_context__.k.register(_c, "GraphToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Resource type color palette and icons for graph visualization.
 * Each Kubernetes resource kind gets a unique color and icon.
 */ __turbopack_context__.s([
    "DEFAULT_ESTIMATED_DURATION",
    ()=>DEFAULT_ESTIMATED_DURATION,
    "DEFAULT_RESOURCE_STYLE",
    ()=>DEFAULT_RESOURCE_STYLE,
    "DEPENDENCY_TYPE_STYLES",
    ()=>DEPENDENCY_TYPE_STYLES,
    "ESTIMATED_DURATIONS",
    ()=>ESTIMATED_DURATIONS,
    "EXTERNAL_REF_STYLE",
    ()=>EXTERNAL_REF_STYLE,
    "RESOURCE_STYLES",
    ()=>RESOURCE_STYLES,
    "getResourceStyle",
    ()=>getResourceStyle
]);
const RESOURCE_STYLES = {
    Deployment: {
        color: '#3b82f6',
        bgColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        icon: '⟳',
        label: 'Deployment'
    },
    StatefulSet: {
        color: '#2563eb',
        bgColor: 'rgba(37, 99, 235, 0.1)',
        borderColor: 'rgba(37, 99, 235, 0.5)',
        icon: '⊞',
        label: 'StatefulSet'
    },
    DaemonSet: {
        color: '#1d4ed8',
        bgColor: 'rgba(29, 78, 216, 0.1)',
        borderColor: 'rgba(29, 78, 216, 0.5)',
        icon: '⊡',
        label: 'DaemonSet'
    },
    Service: {
        color: '#8b5cf6',
        bgColor: 'rgba(139, 92, 246, 0.1)',
        borderColor: 'rgba(139, 92, 246, 0.5)',
        icon: '◎',
        label: 'Service'
    },
    ConfigMap: {
        color: '#06b6d4',
        bgColor: 'rgba(6, 182, 212, 0.1)',
        borderColor: 'rgba(6, 182, 212, 0.5)',
        icon: '⚙',
        label: 'ConfigMap'
    },
    Secret: {
        color: '#f59e0b',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 0.5)',
        icon: '🔐',
        label: 'Secret'
    },
    Ingress: {
        color: '#10b981',
        bgColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.5)',
        icon: '⇥',
        label: 'Ingress'
    },
    Namespace: {
        color: '#6366f1',
        bgColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        icon: '▣',
        label: 'Namespace'
    },
    PersistentVolumeClaim: {
        color: '#ec4899',
        bgColor: 'rgba(236, 72, 153, 0.1)',
        borderColor: 'rgba(236, 72, 153, 0.5)',
        icon: '⛁',
        label: 'PVC'
    },
    NetworkPolicy: {
        color: '#ef4444',
        bgColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: 'rgba(239, 68, 68, 0.5)',
        icon: '⛊',
        label: 'NetworkPolicy'
    },
    ResourceQuota: {
        color: '#f97316',
        bgColor: 'rgba(249, 115, 22, 0.1)',
        borderColor: 'rgba(249, 115, 22, 0.5)',
        icon: '◈',
        label: 'ResourceQuota'
    },
    ServiceAccount: {
        color: '#14b8a6',
        bgColor: 'rgba(20, 184, 166, 0.1)',
        borderColor: 'rgba(20, 184, 166, 0.5)',
        icon: '⊕',
        label: 'ServiceAccount'
    },
    Role: {
        color: '#a855f7',
        bgColor: 'rgba(168, 85, 247, 0.1)',
        borderColor: 'rgba(168, 85, 247, 0.5)',
        icon: '⊗',
        label: 'Role'
    },
    RoleBinding: {
        color: '#d946ef',
        bgColor: 'rgba(217, 70, 239, 0.1)',
        borderColor: 'rgba(217, 70, 239, 0.5)',
        icon: '⊘',
        label: 'RoleBinding'
    },
    HorizontalPodAutoscaler: {
        color: '#0ea5e9',
        bgColor: 'rgba(14, 165, 233, 0.1)',
        borderColor: 'rgba(14, 165, 233, 0.5)',
        icon: '⇅',
        label: 'HPA'
    },
    Job: {
        color: '#84cc16',
        bgColor: 'rgba(132, 204, 22, 0.1)',
        borderColor: 'rgba(132, 204, 22, 0.5)',
        icon: '▶',
        label: 'Job'
    },
    CronJob: {
        color: '#65a30d',
        bgColor: 'rgba(101, 163, 13, 0.1)',
        borderColor: 'rgba(101, 163, 13, 0.5)',
        icon: '⏰',
        label: 'CronJob'
    }
};
const DEFAULT_RESOURCE_STYLE = {
    color: '#94a3b8',
    bgColor: 'rgba(148, 163, 184, 0.1)',
    borderColor: 'rgba(148, 163, 184, 0.5)',
    icon: '◻',
    label: 'Resource'
};
const EXTERNAL_REF_STYLE = {
    borderColor: 'rgba(148, 163, 184, 0.7)',
    icon: '⇢'
};
function getResourceStyle(kind, isExternalRef = false) {
    const base = RESOURCE_STYLES[kind] || {
        ...DEFAULT_RESOURCE_STYLE,
        label: kind
    };
    if (isExternalRef) {
        return {
            ...base,
            borderColor: EXTERNAL_REF_STYLE.borderColor || base.borderColor,
            icon: EXTERNAL_REF_STYLE.icon || base.icon
        };
    }
    return base;
}
const DEPENDENCY_TYPE_STYLES = {
    'cel-reference': {
        color: '#7c3aed',
        dashArray: '0',
        label: 'CEL Reference'
    },
    'env-var': {
        color: '#06b6d4',
        dashArray: '0',
        label: 'Env Variable'
    },
    'volume-mount': {
        color: '#ec4899',
        dashArray: '0',
        label: 'Volume Mount'
    },
    'selector': {
        color: '#f59e0b',
        dashArray: '5 5',
        label: 'Selector'
    },
    'namespace': {
        color: '#6366f1',
        dashArray: '0',
        label: 'Namespace'
    },
    'service-binding': {
        color: '#8b5cf6',
        dashArray: '5 5',
        label: 'Service Binding'
    },
    'secret-ref': {
        color: '#f59e0b',
        dashArray: '0',
        label: 'Secret Ref'
    },
    'configmap-ref': {
        color: '#06b6d4',
        dashArray: '0',
        label: 'ConfigMap Ref'
    },
    'conditional': {
        color: '#94a3b8',
        dashArray: '3 3',
        label: 'Conditional'
    }
};
const ESTIMATED_DURATIONS = {
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
    ResourceQuota: 1
};
const DEFAULT_ESTIMATED_DURATION = 5;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-graph-layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGraphLayout",
    ()=>useGraphLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$elkjs$2f$lib$2f$elk$2e$bundled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/elkjs/lib/elk.bundled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const elk = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$elkjs$2f$lib$2f$elk$2e$bundled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
function useGraphLayout() {
    _s();
    const { setNodes, setEdges, fitView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const layoutInProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const applyLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGraphLayout.useCallback[applyLayout]": async (graph, options)=>{
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
                        'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP'
                    },
                    children: graph.nodes.map({
                        "useGraphLayout.useCallback[applyLayout]": (node)=>({
                                id: node.id,
                                width: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT"].nodeWidth,
                                height: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYOUT"].nodeHeight
                            })
                    }["useGraphLayout.useCallback[applyLayout]"]),
                    edges: graph.edges.map({
                        "useGraphLayout.useCallback[applyLayout]": (edge)=>({
                                id: edge.id,
                                sources: [
                                    edge.target
                                ],
                                targets: [
                                    edge.source
                                ]
                            })
                    }["useGraphLayout.useCallback[applyLayout]"])
                };
                const layoutedGraph = await elk.layout(elkGraph);
                const rfNodes = graph.nodes.map({
                    "useGraphLayout.useCallback[applyLayout].rfNodes": (node)=>{
                        const elkNode = layoutedGraph.children?.find({
                            "useGraphLayout.useCallback[applyLayout].rfNodes": (n)=>n.id === node.id
                        }["useGraphLayout.useCallback[applyLayout].rfNodes"]);
                        const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceStyle"])(node.kind, node.resourceType === 'externalRef');
                        return {
                            id: node.id,
                            type: 'resourceNode',
                            position: {
                                x: elkNode?.x ?? 0,
                                y: elkNode?.y ?? 0
                            },
                            data: {
                                ...node,
                                color: style.color,
                                bgColor: style.bgColor,
                                borderColor: style.borderColor,
                                icon: style.icon
                            }
                        };
                    }
                }["useGraphLayout.useCallback[applyLayout].rfNodes"]);
                const rfEdges = graph.edges.map({
                    "useGraphLayout.useCallback[applyLayout].rfEdges": (edge)=>{
                        const depStyle = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPENDENCY_TYPE_STYLES"][edge.dependencyType] || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPENDENCY_TYPE_STYLES"]['cel-reference'];
                        return {
                            id: edge.id,
                            source: edge.target,
                            target: edge.source,
                            type: 'dependencyEdge',
                            data: {
                                ...edge,
                                color: depStyle.color,
                                dashArray: depStyle.dashArray,
                                typeLabel: depStyle.label
                            },
                            animated: edge.isOnCriticalPath
                        };
                    }
                }["useGraphLayout.useCallback[applyLayout].rfEdges"]);
                setNodes(rfNodes);
                setEdges(rfEdges);
                setTimeout({
                    "useGraphLayout.useCallback[applyLayout]": ()=>fitView({
                            padding: 0.15,
                            duration: 400
                        })
                }["useGraphLayout.useCallback[applyLayout]"], 100);
            } catch (e) {
                console.error('ELK layout error:', e);
            } finally{
                layoutInProgress.current = false;
            }
        }
    }["useGraphLayout.useCallback[applyLayout]"], [
        setNodes,
        setEdges,
        fitView
    ]);
    return {
        applyLayout
    };
}
_s(useGraphLayout, "zAaNkrdaa/kCYxf9IyGHSJjRp3A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphPanel",
    ()=>GraphPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$flow$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/flow-canvas.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$graph$2d$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$graph$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-graph-layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function GraphPanelInner() {
    _s();
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphPanelInner.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["GraphPanelInner.useAppStore[resourceGraph]"]);
    const layoutDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "GraphPanelInner.useAppStore[layoutDirection]": (s)=>s.layoutDirection
    }["GraphPanelInner.useAppStore[layoutDirection]"]);
    const { applyLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$graph$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGraphLayout"])();
    const { setNodes, setEdges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraphPanelInner.useEffect": ()=>{
            if (resourceGraph) {
                applyLayout(resourceGraph, {
                    direction: layoutDirection
                });
            } else {
                setNodes([]);
                setEdges([]);
            }
        }
    }["GraphPanelInner.useEffect"], [
        resourceGraph,
        layoutDirection,
        applyLayout,
        setNodes,
        setEdges
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0f0f17]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$graph$2d$toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphToolbar"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$flow$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FlowCanvas"], {}, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    !resourceGraph && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-3 opacity-30",
                                    children: "⬡"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500",
                                    children: "Paste or load an RGD to visualize"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-600 mt-1",
                                    children: "The dependency graph will appear here"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(GraphPanelInner, "MnOku/h2BATlOxQsIKFTIw8+SxQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$graph$2d$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGraphLayout"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"]
    ];
});
_c = GraphPanelInner;
function GraphPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphPanelInner, {}, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = GraphPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "GraphPanelInner");
__turbopack_context__.k.register(_c1, "GraphPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineView",
    ()=>TimelineView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TimelineView() {
    _s();
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["TimelineView.useAppStore[resourceGraph]"]);
    const currentPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[currentPhase]": (s)=>s.currentPhase
    }["TimelineView.useAppStore[currentPhase]"]);
    const setCurrentPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[setCurrentPhase]": (s)=>s.setCurrentPhase
    }["TimelineView.useAppStore[setCurrentPhase]"]);
    const isPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[isPlaying]": (s)=>s.isPlaying
    }["TimelineView.useAppStore[isPlaying]"]);
    const setIsPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[setIsPlaying]": (s)=>s.setIsPlaying
    }["TimelineView.useAppStore[setIsPlaying]"]);
    const playbackSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[playbackSpeed]": (s)=>s.playbackSpeed
    }["TimelineView.useAppStore[playbackSpeed]"]);
    const setPlaybackSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[setPlaybackSpeed]": (s)=>s.setPlaybackSpeed
    }["TimelineView.useAppStore[setPlaybackSpeed]"]);
    const setSelectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[setSelectedNodeId]": (s)=>s.setSelectedNodeId
    }["TimelineView.useAppStore[setSelectedNodeId]"]);
    const setShowDetailPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TimelineView.useAppStore[setShowDetailPanel]": (s)=>s.setShowDetailPanel
    }["TimelineView.useAppStore[setShowDetailPanel]"]);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phases = resourceGraph?.executionPlan.phases || [];
    const totalPhases = phases.length;
    const criticalPathSet = new Set(resourceGraph?.criticalPath.path || []);
    const nodeMap = new Map(resourceGraph?.nodes.map((n)=>[
            n.id,
            n
        ]) || []);
    // Auto-play
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineView.useEffect": ()=>{
            if (isPlaying && totalPhases > 0) {
                intervalRef.current = setInterval({
                    "TimelineView.useEffect": ()=>{
                        const prev = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().currentPhase;
                        const next = prev + 1;
                        if (next >= totalPhases) {
                            setIsPlaying(false);
                            setCurrentPhase(totalPhases - 1);
                        } else {
                            setCurrentPhase(next);
                        }
                    }
                }["TimelineView.useEffect"], 1500 / playbackSpeed);
            }
            return ({
                "TimelineView.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["TimelineView.useEffect"];
        }
    }["TimelineView.useEffect"], [
        isPlaying,
        totalPhases,
        playbackSpeed,
        setCurrentPhase,
        setIsPlaying
    ]);
    const handleNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimelineView.useCallback[handleNodeClick]": (nodeId)=>{
            setSelectedNodeId(nodeId);
            setShowDetailPanel(true);
        }
    }["TimelineView.useCallback[handleNodeClick]"], [
        setSelectedNodeId,
        setShowDetailPanel
    ]);
    if (!resourceGraph || phases.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full text-slate-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl mb-3 opacity-30",
                        children: "⏱"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Load an RGD to view the execution timeline"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0f0f17]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-3 bg-[#1a1a2e] border-b border-slate-700/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPhase(Math.max(-1, currentPhase - 1)),
                        className: "px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 disabled:opacity-30",
                        disabled: currentPhase <= -1,
                        children: "◀ Prev"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsPlaying(!isPlaying),
                        className: `px-3 py-1 rounded text-xs font-medium border transition-colors ${isPlaying ? 'bg-violet-900/30 text-violet-300 border-violet-700/50' : 'bg-[#242440] text-slate-300 border-slate-600/50 hover:bg-[#2d2d50]'}`,
                        children: isPlaying ? '⏸ Pause' : '▶ Play'
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPhase(Math.min(totalPhases - 1, currentPhase + 1)),
                        className: "px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 hover:bg-[#2d2d50] border border-slate-600/50 disabled:opacity-30",
                        disabled: currentPhase >= totalPhases - 1,
                        children: "Next ▶"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setCurrentPhase(-1);
                            setIsPlaying(false);
                        },
                        className: "px-2 py-1 rounded text-xs bg-[#242440] text-slate-400 hover:text-slate-200 border border-slate-600/50",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-slate-500",
                                children: "Speed:"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            [
                                1,
                                2,
                                4
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPlaybackSpeed(s),
                                    className: `px-1.5 py-0.5 rounded text-[10px] ${playbackSpeed === s ? 'bg-violet-600 text-white' : 'bg-[#242440] text-slate-400'}`,
                                    children: [
                                        s,
                                        "x"
                                    ]
                                }, s, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto text-xs text-slate-500",
                        children: currentPhase >= 0 ? `Phase ${currentPhase + 1} of ${totalPhases}` : `${totalPhases} phases`
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1.5 rounded-full bg-[#242440] overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-300",
                            style: {
                                width: currentPhase >= 0 ? `${(currentPhase + 1) / totalPhases * 100}%` : '0%'
                            }
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 min-w-max",
                    children: phases.map((phase)=>{
                        const isCurrent = phase.phase === currentPhase;
                        const isPast = currentPhase >= 0 && phase.phase < currentPhase;
                        const isFuture = currentPhase >= 0 && phase.phase > currentPhase;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col min-w-[200px] rounded-xl border transition-all duration-300 ${isCurrent ? 'border-violet-500/50 bg-violet-950/20 shadow-lg shadow-violet-900/20' : isPast ? 'border-emerald-800/30 bg-emerald-950/10 opacity-70' : isFuture ? 'border-slate-700/30 bg-[#1a1a2e]/50 opacity-50' : 'border-slate-700/30 bg-[#1a1a2e]/50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-3 py-2 border-b text-center ${isCurrent ? 'border-violet-700/30' : 'border-slate-700/30'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs font-semibold ${isCurrent ? 'text-violet-300' : isPast ? 'text-emerald-400' : 'text-slate-400'}`,
                                            children: [
                                                "Phase ",
                                                phase.phase + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-slate-500 mt-0.5",
                                            children: [
                                                "~",
                                                phase.estimatedDuration,
                                                "s • ",
                                                phase.resourceIds.length,
                                                " resource",
                                                phase.resourceIds.length > 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        phase.resourceIds.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-cyan-600 mt-0.5",
                                            children: "⚡ parallel"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                            lineNumber: 156,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 flex flex-col gap-2",
                                    children: phase.resourceIds.map((id)=>{
                                        const node = nodeMap.get(id);
                                        if (!node) return null;
                                        const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceStyle"])(node.kind, node.resourceType === 'externalRef');
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNodeClick(id),
                                            className: `flex items-center gap-2 px-2.5 py-2 rounded-lg border text-left transition-all ${isCurrent ? 'border-violet-600/30 bg-violet-950/30' : isPast ? 'border-emerald-800/20 bg-emerald-950/20' : 'border-slate-700/20 bg-[#242440]/50'} hover:brightness-125`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: style.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-medium text-slate-200 truncate",
                                                            children: id
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] truncate",
                                                            style: {
                                                                color: style.color
                                                            },
                                                            children: node.kind
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 25
                                                }, this),
                                                criticalPathSet.has(id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] px-1 py-0.5 rounded bg-orange-900/30 text-orange-300",
                                                    children: "crit"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 27
                                                }, this),
                                                isPast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-500 text-xs",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, id, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                            lineNumber: 168,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, phase.phase, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(TimelineView, "4NApW1L9r5Dw68l/oRp0T3J2huQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = TimelineView;
var _c;
__turbopack_context__.k.register(_c, "TimelineView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/cel-analyzer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CEL Expression Analyzer for KRO ResourceGraphDefinitions.
 *
 * Extracts and parses CEL expressions (`${...}`) embedded in YAML values.
 * Handles complex CEL syntax including ternary operators, optional access,
 * `.orValue()`, `base64.decode()`, and array indexing.
 *
 * @module cel-analyzer
 */ __turbopack_context__.s([
    "extractCelExpressions",
    ()=>extractCelExpressions,
    "extractRawExpressions",
    ()=>extractRawExpressions,
    "parseCelReference",
    ()=>parseCelReference
]);
/** Regex pattern to match CEL expressions: ${...} */ const CEL_EXPRESSION_REGEX = /\$\{([^}]+)\}/g;
function parseCelReference(expression) {
    const cleaned = expression.trim();
    // Handle ternary expressions — parse the primary (first non-conditional) reference
    // e.g., `someCondition ? ${resourceA.field} : "default"`
    // We extract references from all parts of the ternary, but return the first "interesting" one.
    if (cleaned.includes('?') && cleaned.includes(':')) {
        const primaryRef = extractPrimaryFromTernary(cleaned);
        if (primaryRef) {
            return primaryRef;
        }
    }
    // Strip function calls: `.orValue(...)`, `base64.decode(...)`, `size(...)` etc.
    const withoutFunctions = stripFunctionCalls(cleaned);
    // Strip optional access: `.?` → `.`
    const withoutOptional = withoutFunctions.replace(/\.\?/g, '.');
    // Strip array indexing: `[0]`, `[*]` etc.
    const withoutArrayIndex = withoutOptional.replace(/\[\d+\]/g, '').replace(/\[\*\]/g, '');
    // Now parse the cleaned dot-path
    return parseSimpleReference(withoutArrayIndex.trim());
}
function extractCelExpressions(value, yamlPath) {
    const results = [];
    walkValue(value, yamlPath, results);
    return results;
}
function extractRawExpressions(str) {
    const matches = [];
    // Reset regex state
    CEL_EXPRESSION_REGEX.lastIndex = 0;
    let match;
    while((match = CEL_EXPRESSION_REGEX.exec(str)) !== null){
        matches.push(match[1]);
    }
    return matches;
}
// ─── Internal Helpers ────────────────────────────────────────────────────────
/**
 * Recursively walk a value and extract CEL expressions.
 */ function walkValue(value, yamlPath, results) {
    if (value === null || value === undefined) {
        return;
    }
    if (typeof value === 'string') {
        extractFromString(value, yamlPath, results);
        return;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return;
    }
    if (Array.isArray(value)) {
        for(let i = 0; i < value.length; i++){
            walkValue(value[i], `${yamlPath}[${i}]`, results);
        }
        return;
    }
    if (typeof value === 'object') {
        const obj = value;
        for (const key of Object.keys(obj)){
            const childPath = yamlPath ? `${yamlPath}.${key}` : key;
            walkValue(obj[key], childPath, results);
        }
    }
}
/**
 * Extract CEL expressions from a string value.
 */ function extractFromString(str, yamlPath, results) {
    const rawExpressions = extractRawExpressions(str);
    for (const raw of rawExpressions){
        const parsed = parseCelReference(raw);
        const context = buildContext(yamlPath);
        results.push({
            raw,
            full: `\${${raw}}`,
            referencedResourceId: parsed.resourceId,
            fieldPath: parsed.fieldPath,
            context,
            referenceType: parsed.referenceType
        });
    }
}
/**
 * Build a CelExpressionContext from a YAML path string.
 */ function buildContext(yamlPath) {
    const lowerPath = yamlPath.toLowerCase();
    return {
        yamlPath,
        isEnvVar: /\.env\b/.test(lowerPath) || /\.env\[/.test(lowerPath),
        isVolume: lowerPath.includes('volume') || lowerPath.includes('volumemount') || lowerPath.includes('configmap.name') || lowerPath.includes('secret.secretname'),
        isSelector: lowerPath.includes('selector'),
        isCondition: lowerPath.includes('includewhen') || lowerPath.includes('readywhen')
    };
}
/**
 * Parse a simple dot-path reference (after all CEL syntax has been stripped).
 */ function parseSimpleReference(path) {
    if (!path || path.length === 0) {
        return {
            resourceId: null,
            fieldPath: '',
            referenceType: 'unknown'
        };
    }
    const segments = splitDotPath(path);
    if (segments.length === 0) {
        return {
            resourceId: null,
            fieldPath: path,
            referenceType: 'unknown'
        };
    }
    const root = segments[0];
    const rest = segments.slice(1).join('.');
    // Schema spec reference: schema.spec.*
    if (root === 'schema' && segments.length > 1 && segments[1] === 'spec') {
        return {
            resourceId: null,
            fieldPath: segments.slice(2).join('.') || 'spec',
            referenceType: 'schema-spec'
        };
    }
    // Schema metadata reference: schema.metadata.*
    if (root === 'schema' && segments.length > 1 && segments[1] === 'metadata') {
        return {
            resourceId: null,
            fieldPath: segments.slice(2).join('.') || 'metadata',
            referenceType: 'schema-metadata'
        };
    }
    // Schema without further qualifier (fallback)
    if (root === 'schema') {
        return {
            resourceId: null,
            fieldPath: rest || 'schema',
            referenceType: 'schema-spec'
        };
    }
    // Self reference: self.*
    if (root === 'self') {
        return {
            resourceId: null,
            fieldPath: rest || 'self',
            referenceType: 'self'
        };
    }
    // Cross-resource reference: resourceId.*
    return {
        resourceId: root,
        fieldPath: rest || root,
        referenceType: 'resource'
    };
}
/**
 * Split a dot-path into segments, respecting array indexing.
 * e.g., "spec.containers[0].env" → ["spec", "containers[0]", "env"]
 * We strip the array indices later, so keep them for now.
 */ function splitDotPath(path) {
    // Split by dots but not within brackets
    const segments = [];
    let current = '';
    let bracketDepth = 0;
    for (const char of path){
        if (char === '[') {
            bracketDepth++;
            current += char;
        } else if (char === ']') {
            bracketDepth--;
            current += char;
        } else if (char === '.' && bracketDepth === 0) {
            if (current.length > 0) {
                segments.push(current);
            }
            current = '';
        } else {
            current += char;
        }
    }
    if (current.length > 0) {
        segments.push(current);
    }
    return segments;
}
/**
 * Strip function calls from a CEL expression while preserving the reference path.
 *
 * Examples:
 * - `base64.decode(resource.field)` → `resource.field`
 * - `resource.field.orValue("default")` → `resource.field`
 * - `size(resource.field)` → `resource.field`
 */ function stripFunctionCalls(expr) {
    let result = expr.trim();
    let changed = true;
    while(changed){
        changed = false;
        // Strip trailing method calls: `.orValue(...)`, `.map(...)`, etc.
        const trailingPattern = /\.(orValue|map|filter|exists|all|exists_one|size)\s*\([^)]*\)$/;
        const trailingMatch = result.match(trailingPattern);
        if (trailingMatch) {
            result = result.substring(0, result.length - trailingMatch[0].length).trim();
            changed = true;
            continue;
        }
        // Strip wrapping function calls: `function(inner)` → inner
        const wrappingFuncPattern = /^(?:base64\.decode|base64\.encode|size|int|uint|double|string|bool|type|duration|timestamp)\s*\((.+)\)$/;
        const wrappingMatch = result.match(wrappingFuncPattern);
        if (wrappingMatch) {
            result = wrappingMatch[1].trim();
            changed = true;
            continue;
        }
    }
    return result;
}
/**
 * Extract the primary reference from a ternary expression.
 * For `condition ? exprA : exprB`, we try to parse all parts and return
 * the first cross-resource or schema reference found.
 */ function extractPrimaryFromTernary(expr) {
    // Find the top-level `?` and `:` — be careful about nested ternaries
    const qIndex = findTopLevelChar(expr, '?');
    if (qIndex === -1) return null;
    const colonIndex = findTopLevelChar(expr.substring(qIndex + 1), ':');
    if (colonIndex === -1) return null;
    const condition = expr.substring(0, qIndex).trim();
    const trueBranch = expr.substring(qIndex + 1, qIndex + 1 + colonIndex).trim();
    const falseBranch = expr.substring(qIndex + 1 + colonIndex + 1).trim();
    // Try each part — prefer the condition or true branch which typically has the interesting reference
    const candidates = [
        condition,
        trueBranch,
        falseBranch
    ];
    let fallback = null;
    for (const candidate of candidates){
        // Strip quotes — if it's a literal string, skip
        const trimmed = candidate.replace(/^["']|["']$/g, '').trim();
        if (!trimmed || /^[0-9]+$/.test(trimmed) || trimmed === 'true' || trimmed === 'false') {
            continue;
        }
        // Check if this looks like a reference path (contains dots, starts with a word char)
        if (/^[a-zA-Z_]/.test(trimmed) && trimmed.includes('.')) {
            const parsed = parseSimpleReference(stripFunctionCalls(trimmed.replace(/\.\?/g, '.').replace(/\[\d+\]/g, '')));
            if (parsed.referenceType === 'resource') {
                return parsed;
            }
            if (parsed.referenceType !== 'unknown' && !fallback) {
                fallback = parsed;
            }
        }
    }
    return fallback;
}
/**
 * Find the index of a character at the top level (not nested in parens/brackets/quotes).
 */ function findTopLevelChar(expr, char) {
    let parenDepth = 0;
    let bracketDepth = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    for(let i = 0; i < expr.length; i++){
        const c = expr[i];
        const prev = i > 0 ? expr[i - 1] : '';
        if (c === "'" && !inDoubleQuote && prev !== '\\') {
            inSingleQuote = !inSingleQuote;
        } else if (c === '"' && !inSingleQuote && prev !== '\\') {
            inDoubleQuote = !inDoubleQuote;
        } else if (!inSingleQuote && !inDoubleQuote) {
            if (c === '(') parenDepth++;
            else if (c === ')') parenDepth--;
            else if (c === '[') bracketDepth++;
            else if (c === ']') bracketDepth--;
            else if (c === char && parenDepth === 0 && bracketDepth === 0) {
                return i;
            }
        }
    }
    return -1;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/schema-parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SimpleSchema parser for KRO ResourceGraphDefinition schema fields.
 * Parses the `spec.schema.spec` and `spec.schema.status` sections.
 * 
 * @module schema-parser
 */ __turbopack_context__.s([
    "parseSchemaFields",
    ()=>parseSchemaFields,
    "parseStatusMappings",
    ()=>parseStatusMappings
]);
function parseSchemaFields(spec, parentPath = '') {
    const fields = [];
    for (const [name, value] of Object.entries(spec)){
        const path = parentPath ? `${parentPath}.${name}` : name;
        if (typeof value === 'string') {
            fields.push(parseFieldDeclaration(name, path, value));
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Nested object - recurse
            const children = parseSchemaFields(value, path);
            fields.push({
                name,
                path,
                type: 'object',
                required: false,
                children
            });
        }
    }
    return fields;
}
function parseStatusMappings(status) {
    const mappings = [];
    for (const [field, value] of Object.entries(status)){
        if (typeof value === 'string') {
            const celMatch = value.match(/\$\{([^}]+)\}/);
            const expression = celMatch ? celMatch[1] : value;
            // Extract referenced resource from the expression
            let referencedResource;
            const parts = expression.split('.');
            if (parts.length > 0 && parts[0] !== 'schema' && parts[0] !== 'self') {
                referencedResource = parts[0];
            }
            mappings.push({
                field,
                expression,
                referencedResource
            });
        } else if (typeof value === 'object' && value !== null) {
            // Nested status - flatten with dot notation
            const nested = flattenStatusObject(value, field);
            mappings.push(...nested);
        }
    }
    return mappings;
}
// ─── Internal Helpers ────────────────────────────────────────────────────────
/**
 * Parse a single field declaration string.
 * Format: `type | marker1=value marker2=value`
 */ function parseFieldDeclaration(name, path, declaration) {
    const parts = declaration.split('|').map((p)=>p.trim());
    const typeStr = parts[0];
    const markersStr = parts.slice(1).join('|').trim();
    const type = parseFieldType(typeStr);
    const markers = markersStr ? parseMarkers(markersStr) : {};
    return {
        name,
        path,
        type,
        required: markers.required === 'true' || markers.required === true,
        default: parseDefaultValue(markers.default, type),
        description: markers.description,
        enum: markers.enum ? String(markers.enum).split(',').map((s)=>s.trim()) : undefined,
        minimum: markers.minimum !== undefined ? Number(markers.minimum) : undefined,
        maximum: markers.maximum !== undefined ? Number(markers.maximum) : undefined,
        pattern: markers.pattern,
        minLength: markers.minLength !== undefined ? Number(markers.minLength) : undefined,
        maxLength: markers.maxLength !== undefined ? Number(markers.maxLength) : undefined,
        immutable: markers.immutable === 'true' || markers.immutable === true
    };
}
/**
 * Parse a type string into a SchemaFieldType.
 */ function parseFieldType(typeStr) {
    const t = typeStr.trim().toLowerCase();
    if (t === 'string') return 'string';
    if (t === 'integer' || t === 'int') return 'integer';
    if (t === 'boolean' || t === 'bool') return 'boolean';
    if (t === 'float' || t === 'double' || t === 'number') return 'float';
    if (t === 'object') return 'object';
    if (t === '[]string') return 'string[]';
    if (t === '[]integer' || t === '[]int') return 'integer[]';
    if (t === '[]boolean' || t === '[]bool') return 'boolean[]';
    if (t === '[]float' || t === '[]double') return 'float[]';
    if (t === '[]object') return 'object[]';
    if (t.startsWith('map[string]string')) return 'map[string]string';
    if (t.startsWith('map[string]integer') || t.startsWith('map[string]int')) return 'map[string]integer';
    return 'unknown';
}
/**
 * Parse marker string into key-value pairs.
 * Format: `marker1=value1 marker2=value2` or `marker1="quoted value"`
 */ function parseMarkers(markersStr) {
    const markers = {};
    // Match key=value pairs, handling quoted values
    const regex = /(\w+)\s*=\s*(?:"([^"]*)"|([\w.,/*-]+))/g;
    let match;
    while((match = regex.exec(markersStr)) !== null){
        const key = match[1];
        const value = match[2] !== undefined ? match[2] : match[3];
        markers[key] = value;
    }
    return markers;
}
/**
 * Parse a default value to the appropriate type.
 */ function parseDefaultValue(value, type) {
    if (value === undefined || value === null) return undefined;
    const strVal = String(value);
    switch(type){
        case 'integer':
            return parseInt(strVal, 10);
        case 'float':
            return parseFloat(strVal);
        case 'boolean':
            return strVal === 'true';
        case 'string':
            // Strip surrounding quotes if present
            return strVal.replace(/^["']|["']$/g, '');
        default:
            return strVal;
    }
}
/**
 * Flatten a nested status object into dot-notation mappings.
 */ function flattenStatusObject(obj, prefix) {
    const mappings = [];
    for (const [key, value] of Object.entries(obj)){
        const field = `${prefix}.${key}`;
        if (typeof value === 'string') {
            const celMatch = value.match(/\$\{([^}]+)\}/);
            const expression = celMatch ? celMatch[1] : value;
            let referencedResource;
            const parts = expression.split('.');
            if (parts.length > 0 && parts[0] !== 'schema' && parts[0] !== 'self') {
                referencedResource = parts[0];
            }
            mappings.push({
                field,
                expression,
                referencedResource
            });
        } else if (typeof value === 'object' && value !== null) {
            mappings.push(...flattenStatusObject(value, field));
        }
    }
    return mappings;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/rgd-parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseRGD",
    ()=>parseRGD
]);
/**
 * RGD Parser — Parses KRO ResourceGraphDefinition YAML into a typed structure.
 * 
 * This is the main entry point for parsing. It validates the RGD structure,
 * extracts resources, and enriches them with CEL expression analysis.
 * 
 * @module rgd-parser
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/js-yaml/dist/js-yaml.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$cel$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/cel-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$schema$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/schema-parser.ts [app-client] (ecmascript)");
;
;
;
function parseRGD(yamlString) {
    const errors = [];
    const warnings = [];
    // Step 1: Parse YAML
    let raw;
    try {
        raw = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].load(yamlString);
    } catch (e) {
        const yamlError = e;
        errors.push({
            message: `YAML parse error: ${yamlError.message}`,
            severity: 'error',
            location: yamlError.mark ? {
                startLine: yamlError.mark.line + 1,
                endLine: yamlError.mark.line + 1,
                startColumn: yamlError.mark.column,
                endColumn: yamlError.mark.column
            } : undefined
        });
        return {
            rawYaml: yamlString,
            metadata: {
                name: '',
                apiVersion: '',
                kind: '',
                namespace: undefined
            },
            schema: {
                apiVersion: '',
                kind: '',
                group: 'kro.run',
                scope: 'Namespaced',
                specFields: [],
                statusMappings: []
            },
            resources: [],
            errors,
            warnings
        };
    }
    if (!raw || typeof raw !== 'object') {
        errors.push({
            message: 'YAML did not parse to an object',
            severity: 'error'
        });
        return emptyResult(yamlString, errors, warnings);
    }
    // Step 2: Validate structure
    validateStructure(raw, errors, warnings);
    // Step 3: Extract metadata
    const metadata = extractMetadata(raw);
    // Step 4: Parse schema
    const schema = extractSchema(raw, errors);
    // Step 5: Parse resources
    const resourceLocations = computeResourceLocations(yamlString);
    const resources = extractResources(raw, resourceLocations, errors, warnings);
    return {
        rawYaml: yamlString,
        metadata,
        schema,
        resources,
        errors,
        warnings
    };
}
// ─── Structure Validation ────────────────────────────────────────────────────
function validateStructure(raw, errors, warnings) {
    if (raw.apiVersion !== 'kro.run/v1alpha1') {
        if (!raw.apiVersion) {
            errors.push({
                message: 'Missing apiVersion. Expected "kro.run/v1alpha1"',
                severity: 'error'
            });
        } else {
            warnings.push({
                message: `Unexpected apiVersion "${raw.apiVersion}". Expected "kro.run/v1alpha1"`,
                severity: 'warning'
            });
        }
    }
    if (raw.kind !== 'ResourceGraphDefinition') {
        if (!raw.kind) {
            errors.push({
                message: 'Missing kind. Expected "ResourceGraphDefinition"',
                severity: 'error'
            });
        } else {
            warnings.push({
                message: `Unexpected kind "${raw.kind}". Expected "ResourceGraphDefinition"`,
                severity: 'warning'
            });
        }
    }
    if (!raw.metadata?.name) {
        warnings.push({
            message: 'Missing metadata.name',
            severity: 'warning'
        });
    }
    if (!raw.spec) {
        errors.push({
            message: 'Missing spec section',
            severity: 'error'
        });
        return;
    }
    if (!raw.spec.schema) {
        errors.push({
            message: 'Missing spec.schema section',
            severity: 'error'
        });
    }
    if (!raw.spec.resources || !Array.isArray(raw.spec.resources)) {
        errors.push({
            message: 'Missing or invalid spec.resources array',
            severity: 'error'
        });
    }
}
// ─── Metadata Extraction ─────────────────────────────────────────────────────
function extractMetadata(raw) {
    return {
        name: raw.metadata?.name || '',
        namespace: raw.metadata?.namespace,
        apiVersion: raw.apiVersion || '',
        kind: raw.kind || '',
        labels: raw.metadata?.labels,
        annotations: raw.metadata?.annotations
    };
}
// ─── Schema Extraction ───────────────────────────────────────────────────────
function extractSchema(raw, errors) {
    const schemaRaw = raw.spec?.schema;
    if (!schemaRaw) {
        return {
            apiVersion: '',
            kind: '',
            group: 'kro.run',
            scope: 'Namespaced',
            specFields: [],
            statusMappings: []
        };
    }
    let specFields = [];
    let statusMappings = [];
    try {
        if (schemaRaw.spec && typeof schemaRaw.spec === 'object') {
            specFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$schema$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSchemaFields"])(schemaRaw.spec);
        }
    } catch (e) {
        errors.push({
            message: `Error parsing schema spec: ${e.message}`,
            severity: 'error'
        });
    }
    try {
        if (schemaRaw.status && typeof schemaRaw.status === 'object') {
            statusMappings = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$schema$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStatusMappings"])(schemaRaw.status);
        }
    } catch (e) {
        errors.push({
            message: `Error parsing schema status: ${e.message}`,
            severity: 'error'
        });
    }
    return {
        apiVersion: schemaRaw.apiVersion || '',
        kind: schemaRaw.kind || '',
        group: schemaRaw.group || 'kro.run',
        scope: schemaRaw.scope || 'Namespaced',
        specFields,
        statusMappings
    };
}
// ─── Resource Extraction ─────────────────────────────────────────────────────
function extractResources(raw, locations, errors, warnings) {
    const rawResources = raw.spec?.resources;
    if (!rawResources || !Array.isArray(rawResources)) {
        return [];
    }
    const resources = [];
    const seenIds = new Set();
    for(let i = 0; i < rawResources.length; i++){
        const rawRes = rawResources[i];
        if (!rawRes || typeof rawRes !== 'object') {
            errors.push({
                message: `Resource at index ${i} is not an object`,
                severity: 'error'
            });
            continue;
        }
        // Validate ID
        if (!rawRes.id) {
            errors.push({
                message: `Resource at index ${i} is missing an id`,
                severity: 'error'
            });
            continue;
        }
        if (seenIds.has(rawRes.id)) {
            errors.push({
                message: `Duplicate resource id "${rawRes.id}"`,
                severity: 'error',
                resourceId: rawRes.id
            });
            continue;
        }
        seenIds.add(rawRes.id);
        // Validate ID format (lowerCamelCase, no hyphens)
        if (rawRes.id.includes('-')) {
            warnings.push({
                message: `Resource id "${rawRes.id}" contains hyphens. KRO requires lowerCamelCase IDs (hyphens are interpreted as subtraction in CEL).`,
                severity: 'warning',
                resourceId: rawRes.id
            });
        }
        // Determine resource type
        const isTemplate = !!rawRes.template;
        const isExternalRef = !!rawRes.externalRef;
        if (!isTemplate && !isExternalRef) {
            errors.push({
                message: `Resource "${rawRes.id}" has neither template nor externalRef`,
                severity: 'error',
                resourceId: rawRes.id
            });
            continue;
        }
        // Extract apiVersion and kind
        let apiVersion = '';
        let kind = '';
        let templateMetadata = {};
        if (isTemplate && rawRes.template) {
            apiVersion = rawRes.template.apiVersion || '';
            kind = rawRes.template.kind || '';
            const meta = rawRes.template.metadata;
            templateMetadata = {
                name: meta?.name,
                namespace: meta?.namespace,
                labels: meta?.labels,
                annotations: meta?.annotations
            };
        } else if (isExternalRef && rawRes.externalRef) {
            apiVersion = rawRes.externalRef.apiVersion || '';
            kind = rawRes.externalRef.kind || '';
            templateMetadata = {
                name: rawRes.externalRef.metadata?.name,
                namespace: rawRes.externalRef.metadata?.namespace
            };
        }
        // Extract CEL expressions from template
        let celExpressions = [];
        if (isTemplate && rawRes.template) {
            celExpressions = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$cel$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCelExpressions"])(rawRes.template, 'template');
        }
        // Extract CEL from includeWhen
        const includeWhen = rawRes.includeWhen || [];
        for (const expr of includeWhen){
            if (typeof expr === 'string') {
                const conditionExprs = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$cel$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCelExpressions"])(expr, 'includeWhen');
                celExpressions.push(...conditionExprs.map((e)=>({
                        ...e,
                        context: {
                            ...e.context,
                            isCondition: true
                        }
                    })));
            }
        }
        // Extract CEL from readyWhen
        const readyWhen = rawRes.readyWhen || [];
        for (const expr of readyWhen){
            if (typeof expr === 'string') {
                const readyExprs = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$cel$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCelExpressions"])(expr, 'readyWhen');
                celExpressions.push(...readyExprs.map((e)=>({
                        ...e,
                        context: {
                            ...e.context,
                            isCondition: true
                        }
                    })));
            }
        }
        // Get source location
        const sourceLocation = locations.get(rawRes.id) || {
            startLine: 1,
            endLine: 1,
            startColumn: 0,
            endColumn: 0
        };
        resources.push({
            id: rawRes.id,
            resourceType: isTemplate ? 'template' : 'externalRef',
            apiVersion,
            kind,
            templateMetadata,
            template: isTemplate ? rawRes.template : undefined,
            externalRef: isExternalRef && rawRes.externalRef ? {
                apiVersion: rawRes.externalRef.apiVersion,
                kind: rawRes.externalRef.kind,
                name: rawRes.externalRef.metadata?.name || '',
                namespace: rawRes.externalRef.metadata?.namespace
            } : undefined,
            includeWhen: includeWhen.map(String),
            readyWhen: readyWhen.map(String),
            celExpressions,
            sourceLocation
        });
    }
    return resources;
}
// ─── Source Location Computation ─────────────────────────────────────────────
/**
 * Compute YAML source locations for each resource by scanning the raw YAML string.
 * Finds `- id: resourceName` patterns and estimates the range of each resource block.
 */ function computeResourceLocations(yamlString) {
    const locations = new Map();
    const lines = yamlString.split('\n');
    // Find all `- id: <name>` lines (resource starts)
    const resourceStarts = [];
    for(let i = 0; i < lines.length; i++){
        const match = lines[i].match(/^(\s*)- id:\s*(\S+)/);
        if (match) {
            resourceStarts.push({
                id: match[2],
                line: i + 1,
                indent: match[1].length
            });
        }
    }
    // For each resource, find where it ends (next resource at same indent or end of file)
    for(let i = 0; i < resourceStarts.length; i++){
        const start = resourceStarts[i];
        const nextStart = resourceStarts[i + 1];
        const endLine = nextStart ? nextStart.line - 1 : lines.length;
        locations.set(start.id, {
            startLine: start.line,
            endLine,
            startColumn: start.indent,
            endColumn: 0
        });
    }
    return locations;
}
// ─── Helpers ─────────────────────────────────────────────────────────────────
function emptyResult(yamlString, errors, warnings) {
    return {
        rawYaml: yamlString,
        metadata: {
            name: '',
            apiVersion: '',
            kind: '',
            namespace: undefined
        },
        schema: {
            apiVersion: '',
            kind: '',
            group: 'kro.run',
            scope: 'Namespaced',
            specFields: [],
            statusMappings: []
        },
        resources: [],
        errors,
        warnings
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/rgd-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$cel$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/cel-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$schema$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/schema-parser.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/dependency/inference-engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Dependency Inference Engine for KRO ResourceGraphDefinitions.
 * 
 * Analyzes CEL expressions across all resources to infer dependency relationships.
 * Classifies dependencies by type (env-var, volume-mount, secret-ref, etc.).
 * 
 * @module inference-engine
 */ __turbopack_context__.s([
    "inferDependencies",
    ()=>inferDependencies
]);
function inferDependencies(rgd) {
    const resourceIds = new Set(rgd.resources.map((r)=>r.id));
    const dependencyMap = new Map();
    for (const resource of rgd.resources){
        const resourceDeps = inferResourceDependencies(resource, resourceIds);
        for (const dep of resourceDeps){
            const key = `${dep.source}->${dep.target}`;
            const existing = dependencyMap.get(key);
            if (existing) {
                // Merge references into existing dependency
                existing.references.push(...dep.references);
                // Upgrade type if needed (more specific wins)
                if (getTypeSpecificity(dep.type) > getTypeSpecificity(existing.type)) {
                    existing.type = dep.type;
                }
                existing.description = generateDescription(existing.source, existing.target, existing.type, existing.references, rgd);
            } else {
                dep.description = generateDescription(dep.source, dep.target, dep.type, dep.references, rgd);
                dependencyMap.set(key, dep);
            }
        }
    }
    const dependencies = Array.from(dependencyMap.values());
    // Compute roots and leaves
    const hasIncoming = new Set();
    const hasOutgoing = new Set();
    for (const dep of dependencies){
        hasOutgoing.add(dep.source);
        hasIncoming.add(dep.target);
    }
    const rootResources = rgd.resources.map((r)=>r.id).filter((id)=>!hasIncoming.has(id));
    const leafResources = rgd.resources.map((r)=>r.id).filter((id)=>!hasOutgoing.has(id));
    // Type breakdown
    const typeBreakdown = {
        'cel-reference': 0,
        'env-var': 0,
        'volume-mount': 0,
        'selector': 0,
        'namespace': 0,
        'service-binding': 0,
        'secret-ref': 0,
        'configmap-ref': 0,
        'conditional': 0
    };
    for (const dep of dependencies){
        typeBreakdown[dep.type] = (typeBreakdown[dep.type] || 0) + 1;
    }
    return {
        dependencies,
        rootResources,
        leafResources,
        totalEdges: dependencies.length,
        typeBreakdown
    };
}
// ─── Internal ────────────────────────────────────────────────────────────────
/**
 * Infer dependencies for a single resource from its CEL expressions.
 */ function inferResourceDependencies(resource, validResourceIds) {
    const depsMap = new Map();
    for (const expr of resource.celExpressions){
        // Only care about cross-resource references
        if (expr.referenceType !== 'resource' || !expr.referencedResourceId) {
            continue;
        }
        const targetId = expr.referencedResourceId;
        // Validate the referenced resource exists
        if (!validResourceIds.has(targetId)) {
            continue;
        }
        // Don't create self-dependencies
        if (targetId === resource.id) {
            continue;
        }
        const depType = classifyDependencyType(expr);
        const reference = {
            expression: expr.full,
            sourceContext: expr.context.yamlPath,
            targetField: expr.fieldPath
        };
        const key = `${resource.id}->${targetId}`;
        const existing = depsMap.get(key);
        if (existing) {
            existing.references.push(reference);
            if (getTypeSpecificity(depType) > getTypeSpecificity(existing.type)) {
                existing.type = depType;
            }
        } else {
            depsMap.set(key, {
                source: resource.id,
                target: targetId,
                type: depType,
                references: [
                    reference
                ],
                description: ''
            });
        }
    }
    return Array.from(depsMap.values());
}
/**
 * Classify a dependency type based on the CEL expression context.
 */ function classifyDependencyType(expr) {
    const path = expr.context.yamlPath.toLowerCase();
    // Condition-based dependency (includeWhen/readyWhen)
    if (expr.context.isCondition) {
        return 'conditional';
    }
    // Secret reference (valueFrom.secretKeyRef)
    if (path.includes('secretkeyref') || path.includes('valuefrom') && path.includes('secret')) {
        return 'secret-ref';
    }
    // ConfigMap reference (valueFrom.configMapKeyRef)
    if (path.includes('configmapkeyref') || path.includes('valuefrom') && path.includes('configmap')) {
        return 'configmap-ref';
    }
    // Environment variable context
    if (expr.context.isEnvVar) {
        return 'env-var';
    }
    // Volume mount context
    if (expr.context.isVolume) {
        return 'volume-mount';
    }
    // Namespace reference
    if (path.includes('namespace') && expr.fieldPath.includes('metadata.name')) {
        return 'namespace';
    }
    // Selector context
    if (expr.context.isSelector) {
        return 'selector';
    }
    // Service binding (service referencing another resource's name in backend)
    if (path.includes('backend') || path.includes('servicename') || path.includes('service') && path.includes('name')) {
        return 'service-binding';
    }
    // Default: general CEL reference
    return 'cel-reference';
}
/**
 * Get specificity ranking for dependency types (higher = more specific).
 */ function getTypeSpecificity(type) {
    const specificity = {
        'cel-reference': 1,
        'conditional': 2,
        'namespace': 3,
        'selector': 3,
        'env-var': 4,
        'service-binding': 4,
        'configmap-ref': 5,
        'secret-ref': 5,
        'volume-mount': 5
    };
    return specificity[type] || 0;
}
/**
 * Generate a human-readable description for a dependency.
 */ function generateDescription(sourceId, targetId, type, references, rgd) {
    const sourceRes = rgd.resources.find((r)=>r.id === sourceId);
    const targetRes = rgd.resources.find((r)=>r.id === targetId);
    const sourceKind = sourceRes?.kind || 'Resource';
    const targetKind = targetRes?.kind || 'Resource';
    switch(type){
        case 'secret-ref':
            return `${sourceKind} "${sourceId}" reads secrets from ${targetKind} "${targetId}" via secretKeyRef`;
        case 'configmap-ref':
            return `${sourceKind} "${sourceId}" reads config from ${targetKind} "${targetId}" via configMapKeyRef`;
        case 'env-var':
            return `${sourceKind} "${sourceId}" injects environment variables from ${targetKind} "${targetId}"`;
        case 'volume-mount':
            return `${sourceKind} "${sourceId}" mounts ${targetKind} "${targetId}" as a volume`;
        case 'namespace':
            return `${sourceKind} "${sourceId}" is created in the namespace defined by ${targetKind} "${targetId}"`;
        case 'selector':
            return `${sourceKind} "${sourceId}" selects pods/resources matching ${targetKind} "${targetId}"`;
        case 'service-binding':
            return `${sourceKind} "${sourceId}" routes traffic to ${targetKind} "${targetId}"`;
        case 'conditional':
            return `${sourceKind} "${sourceId}" conditionally depends on ${targetKind} "${targetId}"`;
        case 'cel-reference':
        default:
            {
                const fields = references.map((r)=>r.targetField).filter(Boolean).slice(0, 3);
                const fieldStr = fields.length > 0 ? ` (${fields.join(', ')})` : '';
                return `${sourceKind} "${sourceId}" references ${targetKind} "${targetId}"${fieldStr}`;
            }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/diff/rgd-differ.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RGD Differ — computes structural differences between two ResourceGraphDefinitions.
 * @module rgd-differ
 */ __turbopack_context__.s([
    "diffRGDs",
    ()=>diffRGDs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$dependency$2f$inference$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/dependency/inference-engine.ts [app-client] (ecmascript)");
;
function diffRGDs(oldRgd, newRgd) {
    const schemaChanges = diffSchema(oldRgd, newRgd);
    const resourceChanges = diffResources(oldRgd, newRgd);
    const dependencyChanges = diffDependencies(oldRgd, newRgd);
    const stats = {
        resourcesAdded: resourceChanges.filter((c)=>c.type === 'added').length,
        resourcesRemoved: resourceChanges.filter((c)=>c.type === 'removed').length,
        resourcesModified: resourceChanges.filter((c)=>c.type === 'modified').length,
        dependenciesAdded: dependencyChanges.filter((c)=>c.type === 'added').length,
        dependenciesRemoved: dependencyChanges.filter((c)=>c.type === 'removed').length,
        schemaFieldsAdded: schemaChanges.filter((c)=>c.type === 'added').length,
        schemaFieldsRemoved: schemaChanges.filter((c)=>c.type === 'removed').length,
        schemaFieldsModified: schemaChanges.filter((c)=>c.type === 'modified').length
    };
    const isIdentical = schemaChanges.length === 0 && resourceChanges.length === 0 && dependencyChanges.length === 0;
    return {
        isIdentical,
        schemaChanges,
        resourceChanges,
        dependencyChanges,
        stats
    };
}
function diffSchema(oldRgd, newRgd) {
    const changes = [];
    const oldFields = new Map(oldRgd.schema.specFields.map((f)=>[
            f.path,
            f
        ]));
    const newFields = new Map(newRgd.schema.specFields.map((f)=>[
            f.path,
            f
        ]));
    for (const [path, field] of newFields){
        if (!oldFields.has(path)) {
            changes.push({
                type: 'added',
                field: path,
                newValue: field.type,
                description: `Added field "${path}" (${field.type})`
            });
        } else {
            const oldField = oldFields.get(path);
            if (oldField.type !== field.type || oldField.required !== field.required || JSON.stringify(oldField.default) !== JSON.stringify(field.default)) {
                changes.push({
                    type: 'modified',
                    field: path,
                    oldValue: oldField.type,
                    newValue: field.type,
                    description: `Modified field "${path}": ${oldField.type} → ${field.type}`
                });
            }
        }
    }
    for (const [path] of oldFields){
        if (!newFields.has(path)) {
            changes.push({
                type: 'removed',
                field: path,
                oldValue: oldFields.get(path)?.type,
                description: `Removed field "${path}"`
            });
        }
    }
    return changes;
}
function diffResources(oldRgd, newRgd) {
    const changes = [];
    const oldResources = new Map(oldRgd.resources.map((r)=>[
            r.id,
            r
        ]));
    const newResources = new Map(newRgd.resources.map((r)=>[
            r.id,
            r
        ]));
    for (const [id, newRes] of newResources){
        if (!oldResources.has(id)) {
            changes.push({
                type: 'added',
                resourceId: id,
                kind: newRes.kind,
                description: `Added ${newRes.kind} "${id}"`
            });
        } else {
            const oldRes = oldResources.get(id);
            const fieldChanges = diffResourceTemplates(oldRes.template || {}, newRes.template || {});
            if (fieldChanges.length > 0 || oldRes.kind !== newRes.kind) {
                changes.push({
                    type: 'modified',
                    resourceId: id,
                    kind: newRes.kind,
                    fieldChanges,
                    description: `Modified ${newRes.kind} "${id}" (${fieldChanges.length} field change(s))`
                });
            }
        }
    }
    for (const [id, oldRes] of oldResources){
        if (!newResources.has(id)) {
            changes.push({
                type: 'removed',
                resourceId: id,
                kind: oldRes.kind,
                description: `Removed ${oldRes.kind} "${id}"`
            });
        }
    }
    return changes;
}
function diffResourceTemplates(oldTemplate, newTemplate, prefix = '') {
    const changes = [];
    const allKeys = new Set([
        ...Object.keys(oldTemplate),
        ...Object.keys(newTemplate)
    ]);
    for (const key of allKeys){
        const path = prefix ? `${prefix}.${key}` : key;
        const oldVal = oldTemplate[key];
        const newVal = newTemplate[key];
        if (oldVal === undefined && newVal !== undefined) {
            changes.push({
                path,
                newValue: newVal,
                type: 'added'
            });
        } else if (oldVal !== undefined && newVal === undefined) {
            changes.push({
                path,
                oldValue: oldVal,
                type: 'removed'
            });
        } else if (typeof oldVal === 'object' && typeof newVal === 'object' && oldVal && newVal && !Array.isArray(oldVal) && !Array.isArray(newVal)) {
            changes.push(...diffResourceTemplates(oldVal, newVal, path));
        } else if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
            changes.push({
                path,
                oldValue: oldVal,
                newValue: newVal,
                type: 'modified'
            });
        }
    }
    return changes;
}
function diffDependencies(oldRgd, newRgd) {
    const changes = [];
    const oldDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$dependency$2f$inference$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferDependencies"])(oldRgd);
    const newDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$dependency$2f$inference$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferDependencies"])(newRgd);
    const oldDepKeys = new Map(oldDeps.dependencies.map((d)=>[
            `${d.source}->${d.target}`,
            d
        ]));
    const newDepKeys = new Map(newDeps.dependencies.map((d)=>[
            `${d.source}->${d.target}`,
            d
        ]));
    for (const [key, dep] of newDepKeys){
        if (!oldDepKeys.has(key)) {
            changes.push({
                type: 'added',
                source: dep.source,
                target: dep.target,
                newType: dep.type,
                description: `New dependency: ${dep.source} → ${dep.target} (${dep.type})`
            });
        } else {
            const oldDep = oldDepKeys.get(key);
            if (oldDep.type !== dep.type) {
                changes.push({
                    type: 'modified',
                    source: dep.source,
                    target: dep.target,
                    oldType: oldDep.type,
                    newType: dep.type,
                    description: `Changed dependency type: ${dep.source} → ${dep.target} from ${oldDep.type} to ${dep.type}`
                });
            }
        }
    }
    for (const [key, dep] of oldDepKeys){
        if (!newDepKeys.has(key)) {
            changes.push({
                type: 'removed',
                source: dep.source,
                target: dep.target,
                oldType: dep.type,
                description: `Removed dependency: ${dep.source} → ${dep.target}`
            });
        }
    }
    return changes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/diff/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$diff$2f$rgd$2d$differ$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/diff/rgd-differ.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiffPanel",
    ()=>DiffPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/rgd-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$diff$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/diff/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$diff$2f$rgd$2d$differ$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/diff/rgd-differ.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.default), {
    loadableGenerated: {
        modules: [
            "[project]/.gemini/antigravity/scratch/kroviz/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Editor;
function DiffPanel() {
    _s();
    const yamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "DiffPanel.useAppStore[yamlContent]": (s)=>s.yamlContent
    }["DiffPanel.useAppStore[yamlContent]"]);
    const parsedRGD = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "DiffPanel.useAppStore[parsedRGD]": (s)=>s.parsedRGD
    }["DiffPanel.useAppStore[parsedRGD]"]);
    const diffYamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "DiffPanel.useAppStore[diffYamlContent]": (s)=>s.diffYamlContent
    }["DiffPanel.useAppStore[diffYamlContent]"]);
    const setDiffYamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "DiffPanel.useAppStore[setDiffYamlContent]": (s)=>s.setDiffYamlContent
    }["DiffPanel.useAppStore[setDiffYamlContent]"]);
    const [targetParsedRGD, setTargetParsedRGD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [targetParseErrors, setTargetParseErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [diffResult, setDiffResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDiffTab, setActiveDiffTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('resources');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const monacoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Parse comparison YAML on change (debounced)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffPanel.useEffect": ()=>{
            if (!diffYamlContent.trim()) {
                setTargetParsedRGD(null);
                setTargetParseErrors([]);
                setDiffResult(null);
                return;
            }
            const timer = setTimeout({
                "DiffPanel.useEffect.timer": ()=>{
                    try {
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRGD"])(diffYamlContent);
                        setTargetParsedRGD(parsed);
                        setTargetParseErrors(parsed.errors);
                    } catch (e) {
                        console.error('Diff parse error:', e);
                        setTargetParseErrors([
                            {
                                message: e.message,
                                severity: 'error'
                            }
                        ]);
                        setTargetParsedRGD(null);
                    }
                }
            }["DiffPanel.useEffect.timer"], 300);
            return ({
                "DiffPanel.useEffect": ()=>clearTimeout(timer)
            })["DiffPanel.useEffect"];
        }
    }["DiffPanel.useEffect"], [
        diffYamlContent
    ]);
    // Compute diff when either parsed RGD changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffPanel.useEffect": ()=>{
            if (!parsedRGD || !targetParsedRGD) {
                setDiffResult(null);
                return;
            }
            try {
                const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$diff$2f$rgd$2d$differ$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffRGDs"])(parsedRGD, targetParsedRGD);
                setDiffResult(diff);
            } catch (e) {
                console.error('Diff computation error:', e);
                setDiffResult(null);
            }
        }
    }["DiffPanel.useEffect"], [
        parsedRGD,
        targetParsedRGD
    ]);
    // Load a sample RGD into the comparison editor
    const loadTargetSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiffPanel.useCallback[loadTargetSample]": async (sampleId)=>{
            const sample = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"].find({
                "DiffPanel.useCallback[loadTargetSample].sample": (s)=>s.id === sampleId
            }["DiffPanel.useCallback[loadTargetSample].sample"]);
            if (!sample) return;
            try {
                const res = await fetch(sample.file);
                const text = await res.text();
                setDiffYamlContent(text);
            } catch (e) {
                console.error('Failed to load sample for diff:', e);
            }
        }
    }["DiffPanel.useCallback[loadTargetSample]"], [
        setDiffYamlContent
    ]);
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiffPanel.useCallback[handleFileUpload]": (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ({
                "DiffPanel.useCallback[handleFileUpload]": (ev)=>{
                    const text = ev.target?.result;
                    setDiffYamlContent(text);
                }
            })["DiffPanel.useCallback[handleFileUpload]"];
            reader.readAsText(file);
        }
    }["DiffPanel.useCallback[handleFileUpload]"], [
        setDiffYamlContent
    ]);
    const handleEditorDidMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DiffPanel.useCallback[handleEditorDidMount]": (editor, monaco)=>{
            editorRef.current = editor;
            monacoRef.current = monaco;
            monaco.editor.setTheme('kroviz-dark');
        }
    }["DiffPanel.useCallback[handleEditorDidMount]"], []);
    // Set local editor markers for syntax/schema errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiffPanel.useEffect": ()=>{
            const monaco = monacoRef.current;
            const editor = editorRef.current;
            if (!monaco || !editor) return;
            const model = editor.getModel();
            if (!model) return;
            const markers = targetParseErrors.filter({
                "DiffPanel.useEffect.markers": (e)=>e.location
            }["DiffPanel.useEffect.markers"]).map({
                "DiffPanel.useEffect.markers": (e)=>({
                        severity: monaco.MarkerSeverity.Error,
                        message: e.message,
                        startLineNumber: e.location.startLine,
                        startColumn: e.location.startColumn || 1,
                        endLineNumber: e.location.endLine,
                        endColumn: e.location.endColumn || 100
                    })
            }["DiffPanel.useEffect.markers"]);
            monaco.editor.setModelMarkers(model, 'kroviz-diff', markers);
        }
    }["DiffPanel.useEffect"], [
        targetParseErrors
    ]);
    const loadSampleDiff = ()=>{
        // Load a modified version of WordPress or Web App as comparison
        if (activeSampleName() === 'wordpress') {
            loadTargetSample('web-app');
        } else {
            loadTargetSample('wordpress');
        }
    };
    const activeSampleName = ()=>{
        const activeSampleId = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().activeSample;
        return activeSampleId || 'custom';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0f0f17] text-slate-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2.5 bg-[#121222] border-b border-slate-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold tracking-tight text-violet-300",
                                children: "⇄ Structural Differ"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full font-mono uppercase",
                                children: "Live"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: (!diffYamlContent || !yamlContent) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: loadSampleDiff,
                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-900/20 transition-all",
                            children: "⚡ Fast Compare (Load WordPress vs Web-App)"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 grid grid-cols-2 divide-x divide-slate-800/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-2 bg-[#17172a] border-b border-slate-800/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-medium text-slate-400 uppercase tracking-wider mr-2",
                                        children: "Compare Target"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        onChange: (e)=>e.target.value && loadTargetSample(e.target.value),
                                        className: "px-2.5 py-1 py-1.5 rounded-lg text-xs bg-[#242440] text-slate-300 border border-slate-600/30 focus:outline-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Load Target Sample..."
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s.id,
                                                    children: s.name
                                                }, s.id, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: ".yaml,.yml",
                                        onChange: handleFileUpload,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "px-2.5 py-1.5 rounded-lg text-xs bg-[#242440] hover:bg-[#2d2d50] text-slate-300 border border-slate-600/30 transition-colors",
                                        children: "📁 Upload"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    diffYamlContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDiffYamlContent(''),
                                        className: "px-2 py-1 rounded text-xs text-slate-400 hover:text-slate-200 ml-auto",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-h-0 relative",
                                children: diffYamlContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Editor, {
                                    height: "100%",
                                    language: "yaml",
                                    theme: "kroviz-dark",
                                    value: diffYamlContent,
                                    onChange: (value)=>setDiffYamlContent(value || ''),
                                    onMount: handleEditorDidMount,
                                    options: {
                                        minimap: {
                                            enabled: false
                                        },
                                        fontSize: 12,
                                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                        scrollBeyondLastLine: false,
                                        wordWrap: 'on',
                                        lineNumbers: 'on',
                                        renderLineHighlight: 'line',
                                        scrollbar: {
                                            verticalScrollbarSize: 6,
                                            horizontalScrollbarSize: 6
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full p-6 text-center text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl mb-4 opacity-20",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-slate-300 mb-1",
                                            children: "Load or paste comparison YAML"
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs max-w-xs leading-relaxed",
                                            children: "Select a template sample or upload a YAML file here to run a direct structural comparison against your active RGD editor on the left."
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full overflow-hidden bg-[#0a0a0f]",
                        children: !diffResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full text-center p-6 text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl mb-4 opacity-25",
                                    children: "⇄"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-slate-300 mb-1",
                                    children: "Awaiting Comparison RGD"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs max-w-xs leading-relaxed",
                                    children: "Provide another ResourceGraphDefinition on the left side of this pane to trigger the live structural difference analysis."
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-[#141426]/60 border-b border-slate-800/80 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
                                                    children: "Structural Comparison"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                diffResult.isIdentical ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded",
                                                    children: "✓ Identical"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold px-2 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded",
                                                    children: "⚡ Modified"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffStatCard, {
                                                    label: "Resources",
                                                    added: diffResult.stats.resourcesAdded,
                                                    removed: diffResult.stats.resourcesRemoved,
                                                    modified: diffResult.stats.resourcesModified
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffStatCard, {
                                                    label: "Dependencies",
                                                    added: diffResult.stats.dependenciesAdded,
                                                    removed: diffResult.stats.dependenciesRemoved,
                                                    modified: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffStatCard, {
                                                    label: "Schema Fields",
                                                    added: diffResult.stats.schemaFieldsAdded,
                                                    removed: diffResult.stats.schemaFieldsRemoved,
                                                    modified: diffResult.stats.schemaFieldsModified
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 bg-[#121220] px-3 py-1.5 border-b border-slate-800/50 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                                            active: activeDiffTab === 'resources',
                                            onClick: ()=>setActiveDiffTab('resources'),
                                            label: "Resource Changes",
                                            count: diffResult.resourceChanges.length
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                                            active: activeDiffTab === 'dependencies',
                                            onClick: ()=>setActiveDiffTab('dependencies'),
                                            label: "Dependency Changes",
                                            count: diffResult.dependencyChanges.length
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                                            active: activeDiffTab === 'schema',
                                            onClick: ()=>setActiveDiffTab('schema'),
                                            label: "Schema Changes",
                                            count: diffResult.schemaChanges.length
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 custom-scrollbar",
                                    children: [
                                        diffResult.isIdentical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center py-12 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl mb-3",
                                                    children: "🎉"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-xs font-semibold text-slate-300",
                                                    children: "RGD Templates are Identical"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 max-w-xs mt-1",
                                                    children: "No differences were found in the schema, resources, label selectors, or internal dependencies!"
                                                }, void 0, false, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        !diffResult.isIdentical && activeDiffTab === 'resources' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: diffResult.resourceChanges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 text-center py-6",
                                                children: "No resource changes detected."
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                lineNumber: 325,
                                                columnNumber: 23
                                            }, this) : diffResult.resourceChanges.map((change, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono font-semibold text-slate-200",
                                                                    children: change.resourceId
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded",
                                                                            children: change.kind
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeType, {
                                                                            type: change.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                            lineNumber: 335,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400 leading-normal",
                                                            children: change.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 27
                                                        }, this),
                                                        change.fieldChanges && change.fieldChanges.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 border-t border-slate-800/80 pt-2 flex flex-col gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider",
                                                                    children: "Template Field Changes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 31
                                                                }, this),
                                                                change.fieldChanges.map((fc, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] font-mono flex flex-col gap-0.5 pl-2 border-l border-slate-800",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-400",
                                                                                        children: fc.path
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                        lineNumber: 349,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[9px] uppercase font-bold text-slate-500 px-1 bg-slate-800 rounded",
                                                                                        children: fc.type
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                        lineNumber: 350,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                lineNumber: 348,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 flex-wrap",
                                                                                children: [
                                                                                    fc.oldValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "line-through text-red-400 max-w-[150px] truncate bg-red-950/20 px-1 rounded",
                                                                                        children: JSON.stringify(fc.oldValue)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                        lineNumber: 356,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    fc.oldValue !== undefined && fc.newValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-600",
                                                                                        children: "→"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                        lineNumber: 360,
                                                                                        columnNumber: 96
                                                                                    }, this),
                                                                                    fc.newValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-emerald-400 max-w-[150px] truncate bg-emerald-950/20 px-1 rounded",
                                                                                        children: JSON.stringify(fc.newValue)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                        lineNumber: 362,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                                lineNumber: 354,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, k, true, {
                                                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 323,
                                            columnNumber: 19
                                        }, this),
                                        !diffResult.isIdentical && activeDiffTab === 'dependencies' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: diffResult.dependencyChanges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 text-center py-6",
                                                children: "No dependency changes detected."
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                lineNumber: 380,
                                                columnNumber: 23
                                            }, this) : diffResult.dependencyChanges.map((change, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1.5 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-mono font-semibold text-slate-200",
                                                                            children: change.source
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                            lineNumber: 386,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 text-xs",
                                                                            children: "➔"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-mono font-semibold text-slate-200",
                                                                            children: change.target
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                            lineNumber: 388,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-400",
                                                                    children: change.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeType, {
                                                            type: change.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this),
                                        !diffResult.isIdentical && activeDiffTab === 'schema' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: diffResult.schemaChanges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 text-center py-6",
                                                children: "No schema changes detected."
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                lineNumber: 402,
                                                columnNumber: 23
                                            }, this) : diffResult.schemaChanges.map((change, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-[#131324] border border-slate-800/60 rounded-xl flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono font-semibold text-violet-300",
                                                                    children: change.field
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeType, {
                                                                    type: change.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-400",
                                                            children: change.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(DiffPanel, "CES2Z9eCOrICXtUO8H9k9IV4g8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c1 = DiffPanel;
function DiffStatCard({ label, added, removed, modified }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1c1c38] rounded-xl p-3 border border-slate-800/50 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider",
                children: label
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold text-slate-100",
                        children: added + removed + modified
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-[9px] font-semibold",
                        children: [
                            added > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400",
                                children: [
                                    "+",
                                    added
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 434,
                                columnNumber: 25
                            }, this),
                            removed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: [
                                    "-",
                                    removed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 435,
                                columnNumber: 27
                            }, this),
                            modified > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-amber-400",
                                children: [
                                    "~",
                                    modified
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 436,
                                columnNumber: 28
                            }, this),
                            added === 0 && removed === 0 && modified === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                                lineNumber: 437,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_c2 = DiffStatCard;
function TabBtn({ active, onClick, label, count }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${active ? 'bg-violet-600/15 text-violet-300 border border-violet-500/25' : 'text-slate-500 hover:text-slate-300 border border-transparent'}`,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-[9px] px-1.5 py-0.5 rounded-full font-mono ${active ? 'bg-violet-500/20 text-violet-300' : 'bg-slate-800 text-slate-500'}`,
                children: count
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
        lineNumber: 446,
        columnNumber: 5
    }, this);
}
_c3 = TabBtn;
function BadgeType({ type }) {
    switch(type){
        case 'added':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
                children: "ADDED"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 468,
                columnNumber: 9
            }, this);
        case 'removed':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/25",
                children: "REMOVED"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, this);
        case 'modified':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25",
                children: "MODIFIED"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx",
                lineNumber: 480,
                columnNumber: 9
            }, this);
    }
}
_c4 = BadgeType;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Editor");
__turbopack_context__.k.register(_c1, "DiffPanel");
__turbopack_context__.k.register(_c2, "DiffStatCard");
__turbopack_context__.k.register(_c3, "TabBtn");
__turbopack_context__.k.register(_c4, "BadgeType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceDetail",
    ()=>ResourceDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/js-yaml/dist/js-yaml.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ResourceDetail() {
    _s();
    const selectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[selectedNodeId]": (s)=>s.selectedNodeId
    }["ResourceDetail.useAppStore[selectedNodeId]"]);
    const showDetailPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[showDetailPanel]": (s)=>s.showDetailPanel
    }["ResourceDetail.useAppStore[showDetailPanel]"]);
    const setShowDetailPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[setShowDetailPanel]": (s)=>s.setShowDetailPanel
    }["ResourceDetail.useAppStore[setShowDetailPanel]"]);
    const setSelectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[setSelectedNodeId]": (s)=>s.setSelectedNodeId
    }["ResourceDetail.useAppStore[setSelectedNodeId]"]);
    const setHighlightedLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[setHighlightedLines]": (s)=>s.setHighlightedLines
    }["ResourceDetail.useAppStore[setHighlightedLines]"]);
    const parsedRGD = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[parsedRGD]": (s)=>s.parsedRGD
    }["ResourceDetail.useAppStore[parsedRGD]"]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ResourceDetail.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["ResourceDetail.useAppStore[resourceGraph]"]);
    if (!showDetailPanel || !selectedNodeId || !parsedRGD || !resourceGraph) return null;
    const resource = parsedRGD.resources.find((r)=>r.id === selectedNodeId);
    const graphNode = resourceGraph.nodes.find((n)=>n.id === selectedNodeId);
    if (!resource || !graphNode) return null;
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceStyle"])(resource.kind, resource.resourceType === 'externalRef');
    // Find upstream and downstream
    const upstreamEdges = resourceGraph.edges.filter((e)=>e.source === selectedNodeId);
    const downstreamEdges = resourceGraph.edges.filter((e)=>e.target === selectedNodeId);
    const handleClose = ()=>{
        setShowDetailPanel(false);
        setSelectedNodeId(null);
        setHighlightedLines(null);
    };
    const handleNodeLink = (nodeId)=>{
        setSelectedNodeId(nodeId);
        const res = parsedRGD.resources.find((r)=>r.id === nodeId);
        if (res) {
            setHighlightedLines({
                start: res.sourceLocation.startLine,
                end: res.sourceLocation.endLine
            });
        }
    };
    let templateYaml = '';
    try {
        if (resource.template) {
            templateYaml = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$js$2d$yaml$2f$dist$2f$js$2d$yaml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dump(resource.template, {
                indent: 2,
                lineWidth: -1
            });
        }
    } catch  {
        templateYaml = '';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 right-0 w-[360px] h-full bg-[#12121f] border-l border-slate-700/50 z-50 overflow-auto shadow-2xl animate-slide-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 bg-[#12121f] border-b border-slate-700/30 px-4 py-3 flex items-center gap-3 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: style.icon
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-slate-200 truncate",
                                children: resource.id
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                style: {
                                    color: style.color
                                },
                                children: resource.kind
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "text-slate-500 hover:text-slate-300 text-lg",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "API Version",
                                value: resource.apiVersion
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Kind",
                                value: resource.kind
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Type",
                                value: resource.resourceType
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Phase",
                                value: `${graphNode.executionPhase + 1}`
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Duration",
                                value: `~${graphNode.estimatedDuration}s`
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            graphNode.metadata.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Name",
                                value: graphNode.metadata.name
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 70,
                                columnNumber: 39
                            }, this),
                            graphNode.metadata.namespace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                label: "Namespace",
                                value: graphNode.metadata.namespace
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 71,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5 flex-wrap",
                        children: [
                            graphNode.isOnCriticalPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: "Critical Path",
                                color: "orange"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 76,
                                columnNumber: 42
                            }, this),
                            graphNode.isConditional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: "Conditional",
                                color: "amber"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 77,
                                columnNumber: 39
                            }, this),
                            graphNode.hasReadinessGate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: "Readiness Gate",
                                color: "blue"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 78,
                                columnNumber: 42
                            }, this),
                            resource.resourceType === 'externalRef' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                text: "External Ref",
                                color: "slate"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 79,
                                columnNumber: 55
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    upstreamEdges.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: `Dependencies (${upstreamEdges.length})`,
                        children: upstreamEdges.map((e)=>{
                            const depStyle = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPENDENCY_TYPE_STYLES"][e.dependencyType];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNodeLink(e.target),
                                className: "flex items-center gap-2 w-full text-left px-2 py-1.5 rounded hover:bg-[#242440] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            backgroundColor: depStyle?.color || '#7c3aed'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-300 flex-1",
                                        children: e.target
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: depStyle?.label
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    downstreamEdges.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: `Dependents (${downstreamEdges.length})`,
                        children: downstreamEdges.map((e)=>{
                            const depStyle = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPENDENCY_TYPE_STYLES"][e.dependencyType];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNodeLink(e.source),
                                className: "flex items-center gap-2 w-full text-left px-2 py-1.5 rounded hover:bg-[#242440] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            backgroundColor: depStyle?.color || '#7c3aed'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-300 flex-1",
                                        children: e.source
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: depStyle?.label
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    resource.celExpressions.filter((e)=>e.referenceType === 'resource').length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "CEL References",
                        children: resource.celExpressions.filter((e)=>e.referenceType === 'resource').map((expr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-mono text-violet-300 bg-[#242440] px-2 py-1 rounded mb-1 break-all",
                                children: expr.full
                            }, i, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    resource.includeWhen.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "includeWhen",
                        children: resource.includeWhen.map((cond, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-mono text-amber-300 bg-[#242440] px-2 py-1 rounded mb-1",
                                children: cond
                            }, i, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    resource.readyWhen.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "readyWhen",
                        children: resource.readyWhen.map((cond, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-mono text-blue-300 bg-[#242440] px-2 py-1 rounded mb-1",
                                children: cond
                            }, i, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    templateYaml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Template",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-[10px] font-mono text-slate-400 bg-[#0a0a14] p-2 rounded-lg overflow-auto max-h-[300px] whitespace-pre-wrap",
                            children: templateYaml
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ResourceDetail, "qsdIc5wSMezHLrh/9FXYeN7ASzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = ResourceDetail;
function Section({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5",
                children: title
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c1 = Section;
function InfoRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center text-xs py-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-300 font-mono text-[11px]",
                children: value
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c2 = InfoRow;
function Badge({ text, color }) {
    const colors = {
        orange: 'bg-orange-900/30 text-orange-300 border-orange-700/30',
        amber: 'bg-amber-900/30 text-amber-300 border-amber-700/30',
        blue: 'bg-blue-900/30 text-blue-300 border-blue-700/30',
        slate: 'bg-slate-700/30 text-slate-300 border-slate-600/30',
        red: 'bg-red-900/30 text-red-300 border-red-700/30',
        emerald: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-[9px] px-1.5 py-0.5 rounded border ${colors[color] || colors.slate}`,
        children: text
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_c3 = Badge;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ResourceDetail");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "InfoRow");
__turbopack_context__.k.register(_c3, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/topological-sort.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Topological Sort using Kahn's algorithm.
 * Groups resources into execution phases where each phase's resources
 * can be reconciled in parallel.
 * 
 * @module topological-sort
 */ __turbopack_context__.s([
    "topologicalSort",
    ()=>topologicalSort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
;
function topologicalSort(dag, resources) {
    const resourceMap = new Map(resources.map((r)=>[
            r.id,
            r
        ]));
    const nodes = dag.getNodes();
    // Compute in-degrees (dependencies count)
    const inDegree = new Map();
    for (const node of nodes){
        inDegree.set(node, dag.getInDegree(node));
    }
    // Initialize with roots (in-degree 0)
    let currentPhaseNodes = nodes.filter((n)=>inDegree.get(n) === 0);
    const phases = [];
    const processed = new Set();
    let phaseNum = 0;
    while(currentPhaseNodes.length > 0){
        // Compute phase duration (max of resource durations in this phase)
        const phaseDuration = Math.max(...currentPhaseNodes.map((id)=>{
            const res = resourceMap.get(id);
            const kind = res?.kind || '';
            return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTIMATED_DURATIONS"][kind] || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ESTIMATED_DURATION"];
        }));
        phases.push({
            phase: phaseNum,
            resourceIds: [
                ...currentPhaseNodes
            ],
            estimatedDuration: phaseDuration,
            isOnCriticalPath: false
        });
        // Mark as processed
        for (const node of currentPhaseNodes){
            processed.add(node);
        }
        // Find next phase: reduce in-degrees and find new zero in-degree nodes
        const nextPhaseNodes = [];
        for (const node of currentPhaseNodes){
            for (const dependent of dag.getDependents(node)){
                if (processed.has(dependent)) continue;
                const newDegree = (inDegree.get(dependent) || 0) - 1;
                inDegree.set(dependent, newDegree);
                // Only add if ALL dependencies are now processed (in-degree is effectively 0 among unprocessed)
                if (newDegree <= 0 && !processed.has(dependent)) {
                    // Verify all dependencies are actually processed
                    const allDepsProcessed = dag.getDependencies(dependent).every((d)=>processed.has(d));
                    if (allDepsProcessed) {
                        nextPhaseNodes.push(dependent);
                    }
                }
            }
        }
        // Deduplicate next phase nodes
        currentPhaseNodes = [
            ...new Set(nextPhaseNodes)
        ];
        phaseNum++;
    }
    // Check for unprocessed nodes (cycle indication)
    const unprocessed = nodes.filter((n)=>!processed.has(n));
    if (unprocessed.length > 0) {
        // Add remaining as a final "blocked" phase
        phases.push({
            phase: phaseNum,
            resourceIds: unprocessed,
            estimatedDuration: 0,
            isOnCriticalPath: false
        });
    }
    const estimatedTotalDuration = phases.reduce((sum, p)=>sum + p.estimatedDuration, 0);
    return {
        phases,
        estimatedTotalDuration,
        totalPhases: phases.length
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/critical-path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Critical Path analysis for resource dependency graphs.
 * Finds the longest weighted path through the DAG.
 * 
 * @module critical-path
 */ __turbopack_context__.s([
    "computeCriticalPath",
    ()=>computeCriticalPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
;
function computeCriticalPath(dag, resources) {
    const nodes = dag.getNodes();
    if (nodes.length === 0) {
        return {
            path: [],
            totalDuration: 0,
            bottleneck: null
        };
    }
    const durationMap = new Map();
    for (const r of resources){
        durationMap.set(r.id, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTIMATED_DURATIONS"][r.kind] || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ESTIMATED_DURATION"]);
    }
    // Dynamic programming: compute longest path ending at each node
    const longestTo = new Map();
    const predecessorOnPath = new Map();
    // Process in topological order (roots first)
    const topoOrder = topologicalOrder(dag);
    for (const node of topoOrder){
        const nodeDuration = durationMap.get(node) || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ESTIMATED_DURATION"];
        const deps = dag.getDependencies(node);
        if (deps.length === 0) {
            // Root node
            longestTo.set(node, nodeDuration);
            predecessorOnPath.set(node, null);
        } else {
            // Find the dependency with the longest path
            let maxPredDuration = 0;
            let maxPred = null;
            for (const dep of deps){
                const depDuration = longestTo.get(dep) || 0;
                if (depDuration > maxPredDuration) {
                    maxPredDuration = depDuration;
                    maxPred = dep;
                }
            }
            longestTo.set(node, maxPredDuration + nodeDuration);
            predecessorOnPath.set(node, maxPred);
        }
    }
    // Find the node with the longest total path
    let maxNode = null;
    let maxDuration = 0;
    for (const [node, duration] of longestTo){
        if (duration > maxDuration) {
            maxDuration = duration;
            maxNode = node;
        }
    }
    if (!maxNode) {
        return {
            path: [],
            totalDuration: 0,
            bottleneck: null
        };
    }
    // Trace back the path
    const path = [];
    let current = maxNode;
    while(current !== null){
        path.unshift(current);
        current = predecessorOnPath.get(current) || null;
    }
    // Find bottleneck (single resource with longest duration on the path)
    let bottleneck = null;
    let maxSingleDuration = 0;
    for (const nodeId of path){
        const d = durationMap.get(nodeId) || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ESTIMATED_DURATION"];
        if (d > maxSingleDuration) {
            maxSingleDuration = d;
            bottleneck = nodeId;
        }
    }
    return {
        path,
        totalDuration: maxDuration,
        bottleneck
    };
}
/**
 * Simple topological ordering using Kahn's algorithm (returns flat list).
 */ function topologicalOrder(dag) {
    const nodes = dag.getNodes();
    const inDegree = new Map();
    for (const node of nodes){
        inDegree.set(node, dag.getInDegree(node));
    }
    const queue = nodes.filter((n)=>inDegree.get(n) === 0);
    const order = [];
    while(queue.length > 0){
        const node = queue.shift();
        order.push(node);
        for (const dependent of dag.getDependents(node)){
            const newDeg = (inDegree.get(dependent) || 0) - 1;
            inDegree.set(dependent, newDeg);
            if (newDeg === 0) {
                queue.push(dependent);
            }
        }
    }
    // Append any remaining nodes (in case of cycles)
    for (const node of nodes){
        if (!order.includes(node)) {
            order.push(node);
        }
    }
    return order;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/cycle-detector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cycle detection in directed graphs using DFS.
 * @module cycle-detector
 */ __turbopack_context__.s([
    "detectCycles",
    ()=>detectCycles
]);
function detectCycles(dag) {
    const nodes = dag.getNodes();
    const visited = new Set();
    const inStack = new Set();
    const cycles = [];
    for (const node of nodes){
        if (!visited.has(node)) {
            dfs(node, dag, visited, inStack, [], cycles);
        }
    }
    return cycles;
}
/**
 * DFS traversal with back-edge detection for cycle finding.
 */ function dfs(node, dag, visited, inStack, path, cycles) {
    visited.add(node);
    inStack.add(node);
    path.push(node);
    for (const dep of dag.getDependencies(node)){
        if (!visited.has(dep)) {
            dfs(dep, dag, visited, inStack, path, cycles);
        } else if (inStack.has(dep)) {
            // Found a back-edge → cycle
            const cycleStart = path.indexOf(dep);
            if (cycleStart !== -1) {
                const cycle = path.slice(cycleStart).concat(dep);
                // Avoid duplicate cycles (normalize by starting from smallest ID)
                const normalized = normalizeCycle(cycle);
                if (!cycles.some((c)=>c.join(',') === normalized.join(','))) {
                    cycles.push(normalized);
                }
            }
        }
    }
    path.pop();
    inStack.delete(node);
}
/**
 * Normalize a cycle for deduplication by rotating to start from the smallest ID.
 */ function normalizeCycle(cycle) {
    if (cycle.length <= 1) return cycle;
    // Remove the trailing duplicate (cycle closer)
    const unique = cycle.slice(0, -1);
    if (unique.length === 0) return cycle;
    // Find the index of the smallest element
    let minIdx = 0;
    for(let i = 1; i < unique.length; i++){
        if (unique[i] < unique[minIdx]) {
            minIdx = i;
        }
    }
    // Rotate to start from the smallest
    const rotated = [
        ...unique.slice(minIdx),
        ...unique.slice(0, minIdx)
    ];
    return [
        ...rotated,
        rotated[0]
    ]; // Add back the cycle closer
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/impact-analyzer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Impact Analyzer — simulates resource failure and computes cascading impact.
 * @module impact-analyzer
 */ __turbopack_context__.s([
    "analyzeImpact",
    ()=>analyzeImpact
]);
function analyzeImpact(dag, failedResourceId, allResourceIds) {
    if (!dag.hasNode(failedResourceId)) {
        return {
            failedResource: failedResourceId,
            directlyBlocked: [],
            transitivelyBlocked: [],
            degraded: [],
            unaffected: allResourceIds.filter((id)=>id !== failedResourceId),
            severity: 'none',
            summary: `Resource "${failedResourceId}" not found in the graph.`,
            impactChain: []
        };
    }
    // Get all downstream (transitive dependents)
    const allDownstream = dag.getDownstream(failedResourceId);
    const directDependents = dag.getDependents(failedResourceId);
    const directlyBlocked = directDependents;
    const transitivelyBlocked = allDownstream.filter((id)=>!directDependents.includes(id));
    // Everything not downstream and not the failed resource is unaffected
    const affectedSet = new Set([
        failedResourceId,
        ...allDownstream
    ]);
    const unaffected = allResourceIds.filter((id)=>!affectedSet.has(id));
    // Build impact chain
    const impactChain = [];
    // BFS to build chain with depth
    const visited = new Set();
    const queue = [
        {
            id: failedResourceId,
            depth: 0,
            path: [
                failedResourceId
            ]
        }
    ];
    while(queue.length > 0){
        const { id, depth, path } = queue.shift();
        if (visited.has(id)) continue;
        visited.add(id);
        const impact = id === failedResourceId ? 'failed' : directDependents.includes(id) ? 'blocked' : 'blocked';
        impactChain.push({
            resourceId: id,
            impact,
            depth,
            path: [
                ...path
            ]
        });
        for (const dependent of dag.getDependents(id)){
            if (!visited.has(dependent)) {
                queue.push({
                    id: dependent,
                    depth: depth + 1,
                    path: [
                        ...path,
                        dependent
                    ]
                });
            }
        }
    }
    // Add unaffected nodes
    for (const id of unaffected){
        impactChain.push({
            resourceId: id,
            impact: 'unaffected',
            depth: -1,
            path: []
        });
    }
    // Compute severity
    const totalResources = allResourceIds.length;
    const affectedCount = allDownstream.length + 1; // +1 for the failed resource itself
    const severity = computeSeverity(affectedCount, totalResources);
    const summary = generateSummary(failedResourceId, directlyBlocked, transitivelyBlocked, unaffected, severity);
    return {
        failedResource: failedResourceId,
        directlyBlocked,
        transitivelyBlocked,
        degraded: [],
        unaffected,
        severity,
        summary,
        impactChain
    };
}
function computeSeverity(affected, total) {
    if (total === 0) return 'none';
    const ratio = affected / total;
    if (ratio >= 0.8) return 'critical';
    if (ratio >= 0.5) return 'high';
    if (ratio >= 0.25) return 'medium';
    if (ratio > 0) return 'low';
    return 'none';
}
function generateSummary(failedId, directlyBlocked, transitivelyBlocked, unaffected, severity) {
    const totalBlocked = directlyBlocked.length + transitivelyBlocked.length;
    if (totalBlocked === 0) {
        return `Failure of "${failedId}" has no downstream impact. It is a leaf resource.`;
    }
    const parts = [
        `Failure of "${failedId}" would block ${totalBlocked} resource(s).`
    ];
    if (directlyBlocked.length > 0) {
        parts.push(`Directly blocked: ${directlyBlocked.join(', ')}.`);
    }
    if (transitivelyBlocked.length > 0) {
        parts.push(`Cascading impact: ${transitivelyBlocked.join(', ')}.`);
    }
    if (unaffected.length > 0) {
        parts.push(`${unaffected.length} resource(s) would be unaffected.`);
    }
    parts.push(`Severity: ${severity.toUpperCase()}.`);
    return parts.join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/graph-builder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Graph Builder — orchestrates all graph analysis modules to produce a ResourceGraph.
 * 
 * This is the main entry point that takes a ParsedRGD and produces a fully analyzed
 * ResourceGraph with nodes, edges, execution plan, critical path, and statistics.
 * 
 * @module graph-builder
 */ __turbopack_context__.s([
    "buildResourceGraph",
    ()=>buildResourceGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$dependency$2f$inference$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/dependency/inference-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/dag.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$topological$2d$sort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/topological-sort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$critical$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/critical-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$cycle$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/cycle-detector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function buildResourceGraph(rgd) {
    // Step 1: Infer dependencies
    const depAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$dependency$2f$inference$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferDependencies"])(rgd);
    // Step 2: Build DAG
    const dag = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAG"]();
    for (const resource of rgd.resources){
        dag.addNode(resource.id);
    }
    for (const dep of depAnalysis.dependencies){
        dag.addEdge(dep.source, dep.target);
    }
    // Step 3: Detect cycles
    const cycles = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$cycle$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectCycles"])(dag);
    const hasCycles = cycles.length > 0;
    // Step 4: Topological sort (produces execution phases)
    const executionPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$topological$2d$sort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topologicalSort"])(dag, rgd.resources);
    // Step 5: Compute critical path
    const criticalPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$critical$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeCriticalPath"])(dag, rgd.resources);
    const criticalPathSet = new Set(criticalPath.path);
    // Mark critical path phases
    for (const phase of executionPlan.phases){
        phase.isOnCriticalPath = phase.resourceIds.some((id)=>criticalPathSet.has(id));
    }
    // Step 6: Build phase map (resource → phase number)
    const phaseMap = new Map();
    for (const phase of executionPlan.phases){
        for (const id of phase.resourceIds){
            phaseMap.set(id, phase.phase);
        }
    }
    // Step 7: Map to GraphNodes
    const nodes = rgd.resources.map((resource)=>({
            id: resource.id,
            kind: resource.kind,
            apiVersion: resource.apiVersion,
            resourceType: resource.resourceType,
            label: resource.id,
            executionPhase: phaseMap.get(resource.id) ?? 0,
            isOnCriticalPath: criticalPathSet.has(resource.id),
            isConditional: resource.includeWhen.length > 0,
            hasReadinessGate: resource.readyWhen.length > 0,
            estimatedDuration: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTIMATED_DURATIONS"][resource.kind] || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ESTIMATED_DURATION"],
            inDegree: dag.getInDegree(resource.id),
            outDegree: dag.getOutDegree(resource.id),
            metadata: {
                name: resource.templateMetadata.name,
                namespace: resource.templateMetadata.namespace,
                labels: resource.templateMetadata.labels
            }
        }));
    // Step 8: Map to GraphEdges
    const edges = depAnalysis.dependencies.map((dep)=>({
            id: `${dep.source}->${dep.target}`,
            source: dep.source,
            target: dep.target,
            dependencyType: dep.type,
            label: dep.description,
            isOnCriticalPath: criticalPathSet.has(dep.source) && criticalPathSet.has(dep.target),
            references: dep.references.map((r)=>r.expression)
        }));
    // Step 9: Compute statistics
    const kindDistribution = {};
    for (const r of rgd.resources){
        kindDistribution[r.kind] = (kindDistribution[r.kind] || 0) + 1;
    }
    const maxWidth = executionPlan.phases.reduce((max, phase)=>Math.max(max, phase.resourceIds.length), 0);
    const stats = {
        totalResources: rgd.resources.length,
        templateResources: rgd.resources.filter((r)=>r.resourceType === 'template').length,
        externalRefResources: rgd.resources.filter((r)=>r.resourceType === 'externalRef').length,
        conditionalResources: rgd.resources.filter((r)=>r.includeWhen.length > 0).length,
        totalEdges: edges.length,
        executionPhases: executionPlan.totalPhases,
        kindDistribution,
        maxDepth: executionPlan.totalPhases,
        maxWidth
    };
    return {
        nodes,
        edges,
        executionPlan,
        criticalPath,
        hasCycles,
        cycles,
        stats
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/dag.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$topological$2d$sort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/topological-sort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$critical$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/critical-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$cycle$2d$detector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/cycle-detector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$impact$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/impact-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$graph$2d$builder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/graph-builder.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpactPanel",
    ()=>ImpactPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$impact$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/impact-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/dag.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ImpactPanel() {
    _s();
    const showImpactAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[showImpactAnalysis]": (s)=>s.showImpactAnalysis
    }["ImpactPanel.useAppStore[showImpactAnalysis]"]);
    const resourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[resourceGraph]": (s)=>s.resourceGraph
    }["ImpactPanel.useAppStore[resourceGraph]"]);
    const impactTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[impactTarget]": (s)=>s.impactTarget
    }["ImpactPanel.useAppStore[impactTarget]"]);
    const setImpactTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[setImpactTarget]": (s)=>s.setImpactTarget
    }["ImpactPanel.useAppStore[setImpactTarget]"]);
    const impactResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[impactResult]": (s)=>s.impactResult
    }["ImpactPanel.useAppStore[impactResult]"]);
    const setImpactResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[setImpactResult]": (s)=>s.setImpactResult
    }["ImpactPanel.useAppStore[setImpactResult]"]);
    const setHighlightedNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "ImpactPanel.useAppStore[setHighlightedNodeIds]": (s)=>s.setHighlightedNodeIds
    }["ImpactPanel.useAppStore[setHighlightedNodeIds]"]);
    const handleSelectResource = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImpactPanel.useCallback[handleSelectResource]": (resourceId)=>{
            if (!resourceGraph) return;
            setImpactTarget(resourceId);
            const dag = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$dag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAG"]();
            for (const n of resourceGraph.nodes)dag.addNode(n.id);
            for (const e of resourceGraph.edges)dag.addEdge(e.source, e.target);
            const allIds = resourceGraph.nodes.map({
                "ImpactPanel.useCallback[handleSelectResource].allIds": (n)=>n.id
            }["ImpactPanel.useCallback[handleSelectResource].allIds"]);
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$impact$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeImpact"])(dag, resourceId, allIds);
            setImpactResult(result);
            // Highlight affected nodes
            const affected = new Set([
                resourceId,
                ...result.directlyBlocked,
                ...result.transitivelyBlocked
            ]);
            setHighlightedNodeIds(affected);
        }
    }["ImpactPanel.useCallback[handleSelectResource]"], [
        resourceGraph,
        setImpactTarget,
        setImpactResult,
        setHighlightedNodeIds
    ]);
    if (!showImpactAnalysis || !resourceGraph) return null;
    const severityColors = {
        critical: 'bg-red-900/40 text-red-300 border-red-700/40',
        high: 'bg-orange-900/40 text-orange-300 border-orange-700/40',
        medium: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
        low: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
        none: 'bg-slate-700/40 text-slate-300 border-slate-600/40'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-0 right-0 h-[280px] bg-[#12121f] border-t border-slate-700/50 z-40 overflow-auto shadow-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs font-semibold text-slate-300",
                            children: "💥 Failure Impact Simulation"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: impactTarget || '',
                            onChange: (e)=>e.target.value && handleSelectResource(e.target.value),
                            className: "px-2 py-1 rounded text-xs bg-[#242440] text-slate-300 border border-slate-600/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select resource to fail..."
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                resourceGraph.nodes.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: n.id,
                                        children: [
                                            n.id,
                                            " (",
                                            n.kind,
                                            ")"
                                        ]
                                    }, n.id, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        impactResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-[10px] px-2 py-0.5 rounded border ${severityColors[impactResult.severity]}`,
                            children: impactResult.severity.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                impactResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-semibold text-red-400 mb-1.5",
                                    children: "Failed"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceBadge, {
                                    id: impactResult.failedResource,
                                    nodes: resourceGraph.nodes,
                                    status: "failed"
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-semibold text-orange-400 mb-1.5",
                                    children: [
                                        "Blocked (",
                                        impactResult.directlyBlocked.length + impactResult.transitivelyBlocked.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 max-h-[160px] overflow-auto",
                                    children: [
                                        impactResult.directlyBlocked.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceBadge, {
                                                id: id,
                                                nodes: resourceGraph.nodes,
                                                status: "direct"
                                            }, id, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)),
                                        impactResult.transitivelyBlocked.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceBadge, {
                                                id: id,
                                                nodes: resourceGraph.nodes,
                                                status: "cascade"
                                            }, id, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-semibold text-emerald-400 mb-1.5",
                                    children: [
                                        "Unaffected (",
                                        impactResult.unaffected.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 max-h-[160px] overflow-auto",
                                    children: impactResult.unaffected.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceBadge, {
                                            id: id,
                                            nodes: resourceGraph.nodes,
                                            status: "ok"
                                        }, id, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this),
                impactResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-500 mt-3 leading-relaxed",
                    children: impactResult.summary
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ImpactPanel, "852YdnpHM9De7McNANTwZA0LX30=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = ImpactPanel;
function ResourceBadge({ id, nodes, status }) {
    const node = nodes.find((n)=>n.id === id);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceStyle"])(node?.kind || '', node?.resourceType === 'externalRef');
    const statusColors = {
        failed: 'border-red-700/30 bg-red-950/30',
        direct: 'border-orange-700/30 bg-orange-950/30',
        cascade: 'border-amber-700/30 bg-amber-950/20',
        ok: 'border-emerald-800/30 bg-emerald-950/20'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1.5 px-2 py-1 rounded border ${statusColors[status] || ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                children: style.icon
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-slate-300 truncate",
                children: id
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[8px] ml-auto",
                style: {
                    color: style.color
                },
                children: node?.kind
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c1 = ResourceBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImpactPanel");
__turbopack_context__.k.register(_c1, "ResourceBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-rgd-parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRgdParser",
    ()=>useRgdParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/parser/rgd-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$graph$2d$builder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/engine/graph/graph-builder.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useRgdParser() {
    _s();
    const yamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useRgdParser.useAppStore[yamlContent]": (s)=>s.yamlContent
    }["useRgdParser.useAppStore[yamlContent]"]);
    const setParsedRGD = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useRgdParser.useAppStore[setParsedRGD]": (s)=>s.setParsedRGD
    }["useRgdParser.useAppStore[setParsedRGD]"]);
    const setResourceGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useRgdParser.useAppStore[setResourceGraph]": (s)=>s.setResourceGraph
    }["useRgdParser.useAppStore[setResourceGraph]"]);
    const setParseErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useRgdParser.useAppStore[setParseErrors]": (s)=>s.setParseErrors
    }["useRgdParser.useAppStore[setParseErrors]"]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRgdParser.useEffect": ()=>{
            if (timerRef.current) clearTimeout(timerRef.current);
            if (!yamlContent.trim()) {
                setParsedRGD(null);
                setResourceGraph(null);
                setParseErrors([]);
                return;
            }
            timerRef.current = setTimeout({
                "useRgdParser.useEffect": ()=>{
                    try {
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$parser$2f$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRGD"])(yamlContent);
                        setParsedRGD(parsed);
                        setParseErrors(parsed.errors);
                        if (parsed.resources.length > 0 && parsed.errors.filter({
                            "useRgdParser.useEffect": (e)=>e.severity === 'error'
                        }["useRgdParser.useEffect"]).length === 0) {
                            const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$engine$2f$graph$2f$graph$2d$builder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildResourceGraph"])(parsed);
                            setResourceGraph(graph);
                        } else {
                            setResourceGraph(null);
                        }
                    } catch (e) {
                        console.error('Parse error:', e);
                        setParseErrors([
                            {
                                message: e.message,
                                severity: 'error'
                            }
                        ]);
                        setParsedRGD(null);
                        setResourceGraph(null);
                    }
                }
            }["useRgdParser.useEffect"], 300);
            return ({
                "useRgdParser.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["useRgdParser.useEffect"];
        }
    }["useRgdParser.useEffect"], [
        yamlContent,
        setParsedRGD,
        setResourceGraph,
        setParseErrors
    ]);
}
_s(useRgdParser, "VB+qHGkRLH88BKKi2alK2CnOeMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-editor-sync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEditorSync",
    ()=>useEditorSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useEditorSync() {
    _s();
    const cursorLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useEditorSync.useAppStore[cursorLine]": (s)=>s.cursorLine
    }["useEditorSync.useAppStore[cursorLine]"]);
    const parsedRGD = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useEditorSync.useAppStore[parsedRGD]": (s)=>s.parsedRGD
    }["useEditorSync.useAppStore[parsedRGD]"]);
    const selectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useEditorSync.useAppStore[selectedNodeId]": (s)=>s.selectedNodeId
    }["useEditorSync.useAppStore[selectedNodeId]"]);
    const setHighlightedLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useEditorSync.useAppStore[setHighlightedLines]": (s)=>s.setHighlightedLines
    }["useEditorSync.useAppStore[setHighlightedLines]"]);
    const setSelectedNodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "useEditorSync.useAppStore[setSelectedNodeId]": (s)=>s.setSelectedNodeId
    }["useEditorSync.useAppStore[setSelectedNodeId]"]);
    // When cursor moves in editor → find resource at that line → select it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorSync.useEffect": ()=>{
            if (!parsedRGD) return;
            const resource = parsedRGD.resources.find({
                "useEditorSync.useEffect.resource": (r)=>cursorLine >= r.sourceLocation.startLine && cursorLine <= r.sourceLocation.endLine
            }["useEditorSync.useEffect.resource"]);
            if (resource && resource.id !== selectedNodeId) {
            // Don't auto-select to avoid fighting with graph clicks
            // Just update highlighting
            }
        }
    }["useEditorSync.useEffect"], [
        cursorLine,
        parsedRGD,
        selectedNodeId
    ]);
    // When a graph node is selected → highlight its YAML lines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEditorSync.useEffect": ()=>{
            if (!selectedNodeId || !parsedRGD) {
                setHighlightedLines(null);
                return;
            }
            const resource = parsedRGD.resources.find({
                "useEditorSync.useEffect.resource": (r)=>r.id === selectedNodeId
            }["useEditorSync.useEffect.resource"]);
            if (resource) {
                setHighlightedLines({
                    start: resource.sourceLocation.startLine,
                    end: resource.sourceLocation.endLine
                });
            }
        }
    }["useEditorSync.useEffect"], [
        selectedNodeId,
        parsedRGD,
        setHighlightedLines
    ]);
}
_s(useEditorSync, "KxWfwEhU2xRPSk6FygegZMvUpgw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$split$2d$pane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/layout/split-pane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$editor$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/editor/editor-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$graph$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/graph/graph-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$timeline$2f$timeline$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/timeline/timeline-view.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$diff$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/diff-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$resource$2d$detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/resource-detail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$impact$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/components/panels/impact-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-rgd-parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$editor$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/hooks/use-editor-sync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/store/app-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const viewMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Home.useAppStore[viewMode]": (s)=>s.viewMode
    }["Home.useAppStore[viewMode]"]);
    const setYamlContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Home.useAppStore[setYamlContent]": (s)=>s.setYamlContent
    }["Home.useAppStore[setYamlContent]"]);
    const setActiveSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "Home.useAppStore[setActiveSample]": (s)=>s.setActiveSample
    }["Home.useAppStore[setActiveSample]"]);
    // Wire up parser and editor sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRgdParser"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$editor$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSync"])();
    // Load default sample on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const defaultSample = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"][2]; // WordPress - good complexity
            fetch(defaultSample.file).then({
                "Home.useEffect": (res)=>res.text()
            }["Home.useEffect"]).then({
                "Home.useEffect": (text)=>{
                    setYamlContent(text);
                    setActiveSample(defaultSample.id);
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": ()=>{
                    // Fallback - load simple sample
                    fetch(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"][0].file).then({
                        "Home.useEffect": (res)=>res.text()
                    }["Home.useEffect"]).then({
                        "Home.useEffect": (text)=>{
                            setYamlContent(text);
                            setActiveSample(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_RGDS"][0].id);
                        }
                    }["Home.useEffect"]).catch(console.error);
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], [
        setYamlContent,
        setActiveSample
    ]);
    const renderRightPanel = ()=>{
        switch(viewMode){
            case 'timeline':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$timeline$2f$timeline$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineView"], {}, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 16
                }, this);
            case 'diff':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$diff$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiffPanel"], {}, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$graph$2f$graph$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphPanel"], {}, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                    lineNumber: 55,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-h-0 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$split$2d$pane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitPane"], {
                    left: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$editor$2f$editor$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorPanel"], {}, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    right: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full",
                        children: [
                            renderRightPanel(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$resource$2d$detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceDetail"], {}, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$panels$2f$impact$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImpactPanel"], {}, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$components$2f$layout$2f$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kroviz/src/app/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Home, "smDjjJmZAXK7zbjbn/F4QvQvdtM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$store$2f$app$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$rgd$2d$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRgdParser"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$src$2f$hooks$2f$use$2d$editor$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSync"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_gemini_antigravity_scratch_kroviz_src_0gw4~hj._.js.map