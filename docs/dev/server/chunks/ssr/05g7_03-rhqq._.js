module.exports = [
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAssetToken: null,
    getAssetTokenQuery: null,
    getDeploymentId: null,
    getDeploymentIdQuery: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAssetToken: function() {
        return getAssetToken;
    },
    getAssetTokenQuery: function() {
        return getAssetTokenQuery;
    },
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQuery: function() {
        return getDeploymentIdQuery;
    }
});
let deploymentId;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    // Client side: replaced with globalThis.NEXT_DEPLOYMENT_ID
    // Server side: left as is or replaced with a string or replaced with false
    deploymentId = ("TURBOPACK compile-time value", false) || undefined;
}
function getDeploymentId() {
    return deploymentId;
}
function getDeploymentIdQuery(ampersand = false) {
    let id = getDeploymentId();
    if (id) {
        return `${ampersand ? '&' : '?'}dpl=${id}`;
    }
    return '';
}
function getAssetToken() {
    return ("TURBOPACK compile-time value", "") || ("TURBOPACK compile-time value", false);
}
function getAssetTokenQuery(ampersand = false) {
    let id = getAssetToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getState()), [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getInitialState()), [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore,
    "default",
    ()=>vanilla
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P(".gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/vanilla.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const destroy = ()=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
        }
        listeners.clear();
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe,
        destroy
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.");
    }
    return createStore(createState);
};
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/traditional.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
;
const { useDebugValue } = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f40$xyflow$2f$react$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/shallow.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shallow,
    "shallow",
    ()=>shallow$1
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P(".gemini/antigravity/scratch/kroviz/node_modules/@xyflow/react/node_modules/zustand/esm/shallow.mjs")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
function shallow$1(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    if (objA instanceof Map && objB instanceof Map) {
        if (objA.size !== objB.size) return false;
        for (const [key, value] of objA){
            if (!Object.is(value, objB.get(key))) {
                return false;
            }
        }
        return true;
    }
    if (objA instanceof Set && objB instanceof Set) {
        if (objA.size !== objB.size) return false;
        for (const value of objA){
            if (!objB.has(value)) {
                return false;
            }
        }
        return true;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) {
        return false;
    }
    for (const keyA of keysA){
        if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
            return false;
        }
    }
    return true;
}
var shallow = (objA, objB)=>{
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`.");
    }
    return shallow$1(objA, objB);
};
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/classcat/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>cc
]);
function cc(names) {
    if (typeof names === "string" || typeof names === "number") return "" + names;
    let out = "";
    if (Array.isArray(names)) {
        for(let i = 0, tmp; i < names.length; i++){
            if ((tmp = cc(names[i])) !== "") {
                out += (out && " ") + tmp;
            }
        }
    } else {
        for(let k in names){
            if (names[k]) out += (out && " ") + k;
        }
    }
    return out;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i){
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
const __TURBOPACK__default__export__ = dispatch;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function none() {}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(select) {
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
__turbopack_context__.s([
    "default",
    ()=>array
]);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function empty() {
    return [];
}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)");
;
;
;
function arrayAll(select) {
    return function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select.apply(this, arguments));
    };
}
function __TURBOPACK__default__export__(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "childMatcher",
    ()=>childMatcher,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(selector) {
    return function() {
        return this.matches(selector);
    };
}
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectChild.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
function __TURBOPACK__default__export__(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectChildren.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
function __TURBOPACK__default__export__(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(update) {
    return new Array(update.length);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterNode",
    ()=>EnterNode,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](this._enter || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return function() {
        return x;
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/constant.js [app-ssr] (ecmascript)");
;
;
;
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i){
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i){
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i){
        if (node = group[i]) {
            keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
            if (nodeByKeyValue.has(keyValue)) {
                exit[i] = node;
            } else {
                nodeByKeyValue.set(keyValue, node);
            }
        }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i){
        if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
            exit[i] = node;
        }
    }
}
function datum(node) {
    return node.__data__;
}
function __TURBOPACK__default__export__(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0){
            if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
    }
    update = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/exit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/sparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](this._exit || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/join.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else {
        enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](merges, this._parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/order.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;){
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/sort.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"](sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/call.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/nodes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return Array.from(this);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
    }
    return null;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/size.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/empty.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return !this.node();
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/each.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "xhtml",
    ()=>xhtml
]);
var xhtml = "http://www.w3.org/1999/xhtml";
const __TURBOPACK__default__export__ = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasOwnProperty(prefix) ? {
        space: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/attr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "styleValue",
    ()=>styleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)");
;
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/property.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function __TURBOPACK__default__export__(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/classed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/raise.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(raise);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/lower.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function __TURBOPACK__default__export__() {
    return this.each(lower);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespaces.js [app-ssr] (ecmascript)");
;
;
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xhtml"] && document.documentElement.namespaceURI === __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xhtml"] ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function __TURBOPACK__default__export__(name) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/append.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/insert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/creator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
;
;
function constantNull() {
    return null;
}
function __TURBOPACK__default__export__(name, before) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/remove.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(remove);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/clone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function __TURBOPACK__default__export__(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/datum.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/on.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j){
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
            } else {
                on[++i] = o;
            }
        }
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) for(var j = 0, m = on.length; j < m; ++j){
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function __TURBOPACK__default__export__(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j){
            for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) {
                    return o.value;
                }
            }
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/dispatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/window.js [app-ssr] (ecmascript)");
;
function dispatchEvent(node, type, params) {
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function __TURBOPACK__default__export__(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function* __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) yield node;
        }
    }
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Selection",
    ()=>Selection,
    "default",
    ()=>__TURBOPACK__default__export__,
    "root",
    ()=>root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectChild.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/selectChildren.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/filter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/enter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/exit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/join.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/order.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/sort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/call.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/nodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/each.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/attr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/property.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/classed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/raise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/lower.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/append.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/insert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/remove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/datum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/on.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/dispatch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/iterator.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChild: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChildren: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    data: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    enter: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    exit: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    join: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selection: selection_selection,
    order: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    sort: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    call: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    nodes: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    node: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    empty: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    each: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    property: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    classed: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    raise: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    lower: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    append: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    insert: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    clone: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    datum: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    on: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    dispatch: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = selection;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(selector) {
    return typeof selector === "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"]([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Selection"]([
        [
            selector
        ]
    ], __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["root"]);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/sourceEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/sourceEvent.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(event, node) {
    event = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namespace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript) <export default as matcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript) <export default as selector>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript) <export default as selectorAll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectorAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript) <export styleValue as style>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "style",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nonpassive",
    ()=>nonpassive,
    "nonpassivecapture",
    ()=>nonpassivecapture,
    "nopropagation",
    ()=>nopropagation
]);
const nonpassive = {
    passive: false
};
const nonpassivecapture = {
    capture: true,
    passive: false
};
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "yesdrag",
    ()=>yesdrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(view) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
    } else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
    } else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DragEvent
]);
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        subject: {
            value: subject,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        identifier: {
            value: identifier,
            enumerable: true,
            configurable: true
        },
        active: {
            value: active,
            enumerable: true,
            configurable: true
        },
        x: {
            value: x,
            enumerable: true,
            configurable: true
        },
        y: {
            value: y,
            enumerable: true,
            configurable: true
        },
        dx: {
            value: dx,
            enumerable: true,
            configurable: true
        },
        dy: {
            value: dy,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/noevent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/event.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function defaultContainer() {
    return this.parentNode;
}
function defaultSubject(event, d) {
    return d == null ? {
        x: event.x,
        y: event.y
    } : d;
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassive"]).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
        if (touchending || !filter.call(this, event, d)) return;
        var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag", mousemoved, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]).on("mouseup.drag", mouseupped, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonpassivecapture"]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
    }
    function mousemoved(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        if (!mousemoving) {
            var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
    }
    function mouseupped(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag mouseup.drag", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yesdrag"])(event.view, mousemoving);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
        if (!filter.call(this, event, d)) return;
        var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("start", event, touches[i]);
            }
        }
    }
    function touchmoved(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
                gesture("drag", event, touches[i]);
            }
        }
    }
    function touchended(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, 500); // Ghost clicks are delayed!
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("end", event, touches[i]);
            }
        }
    }
    function beforestart(that, container, event, d, identifier, touch) {
        var dispatch = listeners.copy(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), dx, dy, s;
        if ((s = subject.call(that, new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("beforestart", {
            sourceEvent: event,
            target: drag,
            identifier,
            active,
            x: p[0],
            y: p[1],
            dx: 0,
            dy: 0,
            dispatch
        }), d)) == null) return;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return function gesture(type, event, touch) {
            var p0 = p, n;
            switch(type){
                case "start":
                    gestures[identifier] = gesture, n = active++;
                    break;
                case "end":
                    delete gestures[identifier], --active; // falls through
                case "drag":
                    p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), n = active;
                    break;
            }
            dispatch.call(type, that, new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: event,
                subject: s,
                target: drag,
                identifier,
                active: n,
                x: p[0] + dx,
                y: p[1] + dy,
                dx: p[0] - p0[0],
                dy: p[1] - p0[1],
                dispatch
            }), d);
        };
    }
    drag.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_), drag) : container;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript) <export default as drag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/drag.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export default as dragDisable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragDisable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export yesdrag as dragEnable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragEnable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yesdrag"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const __TURBOPACK__default__export__ = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript) <export default as interpolateZoom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateZoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/decompose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "identity",
    ()=>identity
]);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function __TURBOPACK__default__export__(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCss",
    ()=>parseCss,
    "parseSvg",
    ()=>parseSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/decompose.js [app-ssr] (ecmascript)");
;
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
    value = value.matrix;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateTransformCss",
    ()=>interpolateTransformCss,
    "interpolateTransformSvg",
    ()=>interpolateTransformSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/parse.js [app-ssr] (ecmascript)");
;
;
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
        }
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
        }
    }
    function skewX(a, b, s, q) {
        if (a !== b) {
            q.push({
                i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
        }
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSvg"], ", ", ")", ")");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript) <export default as interpolateNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basis",
    ()=>basis,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function __TURBOPACK__default__export__(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/basisClosed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["basis"])((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nogamma,
    "gamma",
    ()=>gamma,
    "hue",
    ()=>hue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/constant.js [app-ssr] (ecmascript)");
;
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "rgbBasis",
    ()=>rgbBasis,
    "rgbBasisClosed",
    ()=>rgbBasisClosed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/basis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/basisClosed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/color.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = function rgbGamma(y) {
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gamma"])(y);
    function rgb(start, end) {
        var r = color((start = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(start)).r, (end = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rgb"])(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var rgbBasisClosed = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript) <export default as interpolateRgb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
;
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function __TURBOPACK__default__export__(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript) <export default as interpolateString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/numberArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isNumberArray",
    ()=>isNumberArray
]);
function __TURBOPACK__default__export__(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genericArray",
    ()=>genericArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/numberArray.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(a, b) {
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberArray"])(b) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : genericArray)(a, b);
}
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/date.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/object.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/value.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b){
        if (k in a) {
            i[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[k], b[k]);
        } else {
            c[k] = b[k];
        }
    }
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/value.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript) <export default as color>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/array.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/date.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/numberArray.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function __TURBOPACK__default__export__(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(b) : (t === "number" ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : t === "string" ? (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"])(b)) ? (b = c, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : b instanceof __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"] ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : b instanceof Date ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberArray"])(b) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$numberArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : Array.isArray(b) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genericArray"] : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a, b);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/value.js [app-ssr] (ecmascript) <export default as interpolate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/value.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "now",
    ()=>now,
    "timer",
    ()=>timer,
    "timerFlush",
    ()=>timerFlush
]);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timer"];
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript) <export default as timeout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATED",
    ()=>CREATED,
    "ENDED",
    ()=>ENDED,
    "ENDING",
    ()=>ENDING,
    "RUNNING",
    ()=>RUNNING,
    "SCHEDULED",
    ()=>SCHEDULED,
    "STARTED",
    ()=>STARTED,
    "STARTING",
    ()=>STARTING,
    "default",
    ()=>__TURBOPACK__default__export__,
    "get",
    ()=>get,
    "init",
    ()=>init,
    "set",
    ()=>set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timeout.js [app-ssr] (ecmascript) <export default as timeout>");
;
;
var emptyOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function __TURBOPACK__default__export__(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
}
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timer"])(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i){
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
            }
        }
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n){
            tween[i].call(node, t);
        }
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STARTING"] && schedule.state < __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDING"];
        schedule.state = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDED"];
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/interrupt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    return this.each(function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, name);
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "tweenValue",
    ()=>tweenValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1 = tween1.slice();
                    tween1.splice(i, 1);
                    break;
                }
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1[i] = t;
                    break;
                }
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function __TURBOPACK__default__export__(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) {
                return t.value;
            }
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id).value[name];
    };
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript) <export default as color>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/number.js [app-ssr] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/rgb.js [app-ssr] (ecmascript) <export default as interpolateRgb>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/string.js [app-ssr] (ecmascript) <export default as interpolateString>");
;
;
function __TURBOPACK__default__export__(a, b) {
    var c;
    return (typeof b === "number" ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"] : b instanceof __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"] ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"] : (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"])(b)) ? (b = c, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"]) : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__["interpolateString"])(a, b);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/attr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)");
;
;
;
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name), i = fullname === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateTransformSvg"] : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/attrTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/namespace.js [app-ssr] (ecmascript) <export default as namespace>");
;
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/delay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function delayFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"])(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"])(this, id).delay = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).delay;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/duration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function durationFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).duration = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).duration;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/ease.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).ease = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).ease;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/easeVarying.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id).ease = v;
    };
}
function __TURBOPACK__default__export__(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/matcher.js [app-ssr] (ecmascript) <export default as matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__["matcher"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, this._name, this._id);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](merges, this._parents, this._name, this._id);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/on.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"] : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"];
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/remove.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function __TURBOPACK__default__export__() {
    return this.on("end.remove", removeFunction(this._id));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/select.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selector.js [app-ssr] (ecmascript) <export default as selector>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__["selector"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(subgroup[i], name, id, i, subgroup, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, name, id);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/selectAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selectorAll.js [app-ssr] (ecmascript) <export default as selectorAll>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__["selectorAll"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id), k = 0, l = children.length; k < l; ++k){
                    if (child = children[k]) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(child, name, id, k, children, inherit);
                    }
                }
                subgroups.push(children);
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](subgroups, parents, name, id);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/selection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
;
var Selection = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.constructor;
function __TURBOPACK__default__export__() {
    return new Selection(this._groups, this._parents);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/style.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/transform/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/style.js [app-ssr] (ecmascript) <export styleValue as style>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/interpolate.js [app-ssr] (ecmascript)");
;
;
;
;
;
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), string1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    var i = (name += "") === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolateTransformCss"] : __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/styleTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
;
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function __TURBOPACK__default__export__(value) {
    return this.tween("text", typeof value === "function" ? textFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tweenValue"])(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/textTween.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    var name = this._name, id0 = this._id, id1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                var inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(node, id0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id1);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/end.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
;
function __TURBOPACK__default__export__() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition,
    "default",
    ()=>transition,
    "newId",
    ()=>newId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/attr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/attrTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/delay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/duration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/ease.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/easeVarying.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/filter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/on.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/remove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/select.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/selectAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/selection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/styleTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/textTween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/tween.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/end.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"])().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    selection: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    transition: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attrTween: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    styleTween: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    textTween: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tween: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    delay: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    duration: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ease: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    easeVarying: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    end: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/transition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/transition/schedule.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript) <export cubicInOut as easeCubicInOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-timer/src/timer.js [app-ssr] (ecmascript)");
;
;
;
;
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__["easeCubicInOut"]
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) {
            throw new Error(`transition ${id} not found`);
        }
    }
    return timing;
}
function __TURBOPACK__default__export__(name) {
    var id, timing;
    if (name instanceof __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"]) {
        id = name._id, name = name._name;
    } else {
        id = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newId"])(), (timing = defaultTiming).time = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["now"])(), name = name == null ? null : name + "";
    }
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, name, id, i, group, timing || inherit(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id);
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/selection/index.js [app-ssr] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/interrupt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/transition.js [app-ssr] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.interrupt = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.transition = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/selection/index.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript) <export default as interrupt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interrupt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/define.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "extend",
    ()=>extend
]);
function __TURBOPACK__default__export__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Color",
    ()=>Color,
    "Rgb",
    ()=>Rgb,
    "brighter",
    ()=>brighter,
    "darker",
    ()=>darker,
    "default",
    ()=>color,
    "hsl",
    ()=>hsl,
    "hslConvert",
    ()=>hslConvert,
    "rgb",
    ()=>rgb,
    "rgbConvert",
    ()=>rgbConvert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/define.js [app-ssr] (ecmascript)");
;
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null) // invalid hex
     : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Rgb, rgb, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Hsl, hsl, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript) <export default as color>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-color/src/color.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicIn",
    ()=>cubicIn,
    "cubicInOut",
    ()=>cubicInOut,
    "cubicOut",
    ()=>cubicOut
]);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript) <export cubicInOut as easeCubicInOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeCubicInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicInOut"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-ease/src/cubic.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/constant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZoomEvent
]);
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transform",
    ()=>Transform,
    "default",
    ()=>transform,
    "identity",
    ()=>identity
]);
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/noevent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nopropagation",
    ()=>nopropagation
]);
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-dispatch/src/dispatch.js [app-ssr] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export default as dragDisable>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-drag/src/nodrag.js [app-ssr] (ecmascript) <export yesdrag as dragEnable>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-interpolate/src/zoom.js [app-ssr] (ecmascript) <export default as interpolateZoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-selection/src/pointer.js [app-ssr] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-transition/src/interrupt.js [app-ssr] (ecmascript) <export default as interrupt>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/constant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/noevent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"];
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__["interpolateZoom"], listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
            schedule(collection, transform, point, event);
        } else {
            selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        }
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this.that).datum();
            listeners.call(type, this.that, new __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__["dragDisable"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
        g.start();
        function mousemoved(event) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__["dragEnable"])(event.view, g.moved);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        if (duration > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript) <export default as zoom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/zoom.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript) <export identity as zoomIdentity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoomIdentity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript) <export default as zoomTransform>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoomTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kroviz$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kroviz/node_modules/d3-zoom/src/transform.js [app-ssr] (ecmascript)");
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/.gemini/antigravity/scratch/kroviz/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/.gemini/antigravity/scratch/kroviz/node_modules/js-yaml/dist/js-yaml.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_SCHEMA",
    ()=>CORE_SCHEMA,
    "DEFAULT_SCHEMA",
    ()=>DEFAULT_SCHEMA,
    "FAILSAFE_SCHEMA",
    ()=>FAILSAFE_SCHEMA,
    "JSON_SCHEMA",
    ()=>JSON_SCHEMA,
    "Schema",
    ()=>Schema,
    "Type",
    ()=>Type,
    "YAMLException",
    ()=>YAMLException,
    "default",
    ()=>jsYaml,
    "dump",
    ()=>dump,
    "load",
    ()=>load,
    "loadAll",
    ()=>loadAll,
    "safeDump",
    ()=>safeDump,
    "safeLoad",
    ()=>safeLoad,
    "safeLoadAll",
    ()=>safeLoadAll,
    "types",
    ()=>types
]);
/*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */ function isNothing(subject) {
    return typeof subject === 'undefined' || subject === null;
}
function isObject(subject) {
    return typeof subject === 'object' && subject !== null;
}
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function repeat(string, count) {
    var result = '', cycle;
    for(cycle = 0; cycle < count; cycle += 1){
        result += string;
    }
    return result;
}
function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
};
// YAML error class. http://stackoverflow.com/questions/8458984
function formatError(exception, compact) {
    var where = '', message = exception.reason || '(unknown reason)';
    if (!exception.mark) return message;
    if (exception.mark.name) {
        where += 'in "' + exception.mark.name + '" ';
    }
    where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';
    if (!compact && exception.mark.snippet) {
        where += '\n\n' + exception.mark.snippet;
    }
    return message + ' ' + where;
}
function YAMLException$1(reason, mark) {
    // Super constructor
    Error.call(this);
    this.name = 'YAMLException';
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    // Include stack trace in error object
    if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
    } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = new Error().stack || '';
    }
}
// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
    return this.name + ': ' + formatError(this, compact);
};
var exception = YAMLException$1;
// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = '';
    var tail = '';
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
        head = ' ... ';
        lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
        tail = ' ...';
        lineEnd = position + maxHalfLength - tail.length;
    }
    return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
        pos: position - lineStart + head.length // relative position
    };
}
function padStart(string, max) {
    return common.repeat(' ', max - string.length) + string;
}
function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer) return null;
    if (!options.maxLength) options.maxLength = 79;
    if (typeof options.indent !== 'number') options.indent = 1;
    if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
    if (typeof options.linesAfter !== 'number') options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [
        0
    ];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while(match = re.exec(mark.buffer)){
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
            foundLineNo = lineStarts.length - 2;
        }
    }
    if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
    var result = '', i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for(i = 1; i <= options.linesBefore; i++){
        if (foundLineNo - i < 0) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
        result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + ' | ' + line.str + '\n' + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + ' | ' + line.str + '\n';
    result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';
    for(i = 1; i <= options.linesAfter; i++){
        if (foundLineNo + i >= lineEnds.length) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
        result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + ' | ' + line.str + '\n';
    }
    return result.replace(/\n$/, '');
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
    'kind',
    'multi',
    'resolve',
    'construct',
    'instanceOf',
    'predicate',
    'represent',
    'representName',
    'defaultStyle',
    'styleAliases'
];
var YAML_NODE_KINDS = [
    'scalar',
    'sequence',
    'mapping'
];
function compileStyleAliases(map) {
    var result = {};
    if (map !== null) {
        Object.keys(map).forEach(function(style) {
            map[style].forEach(function(alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}
function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    // TODO: Add tag format check.
    this.options = options; // keep original options in case user wants to extend this type later
    this.tag = tag;
    this.kind = options['kind'] || null;
    this.resolve = options['resolve'] || function() {
        return true;
    };
    this.construct = options['construct'] || function(data) {
        return data;
    };
    this.instanceOf = options['instanceOf'] || null;
    this.predicate = options['predicate'] || null;
    this.represent = options['represent'] || null;
    this.representName = options['representName'] || null;
    this.defaultStyle = options['defaultStyle'] || null;
    this.multi = options['multi'] || false;
    this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}
var type = Type$1;
/*eslint-disable max-len*/ function compileList(schema, name) {
    var result = [];
    schema[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
                newIndex = previousIndex;
            }
        });
        result[newIndex] = currentType;
    });
    return result;
}
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, index, length;
    function collectType(type) {
        if (type.multi) {
            result.multi[type.kind].push(type);
            result.multi['fallback'].push(type);
        } else {
            result[type.kind][type.tag] = result['fallback'][type.tag] = type;
        }
    }
    for(index = 0, length = arguments.length; index < length; index += 1){
        arguments[index].forEach(collectType);
    }
    return result;
}
function Schema$1(definition) {
    return this.extend(definition);
}
Schema$1.prototype.extend = function extend(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) {
        // Schema.extend(type)
        explicit.push(definition);
    } else if (Array.isArray(definition)) {
        // Schema.extend([ type1, type2, ... ])
        explicit = explicit.concat(definition);
    } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
        if (definition.implicit) implicit = implicit.concat(definition.implicit);
        if (definition.explicit) explicit = explicit.concat(definition.explicit);
    } else {
        throw new exception('Schema.extend argument should be a Type, [ Type ], ' + 'or a schema definition ({ implicit: [...], explicit: [...] })');
    }
    implicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
        }
        if (type$1.loadKind && type$1.loadKind !== 'scalar') {
            throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
        }
        if (type$1.multi) {
            throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
        }
    });
    explicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
        }
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, 'implicit');
    result.compiledExplicit = compileList(result, 'explicit');
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
};
var schema = Schema$1;
var str = new type('tag:yaml.org,2002:str', {
    kind: 'scalar',
    construct: function(data) {
        return data !== null ? data : '';
    }
});
var seq = new type('tag:yaml.org,2002:seq', {
    kind: 'sequence',
    construct: function(data) {
        return data !== null ? data : [];
    }
});
var map = new type('tag:yaml.org,2002:map', {
    kind: 'mapping',
    construct: function(data) {
        return data !== null ? data : {};
    }
});
var failsafe = new schema({
    explicit: [
        str,
        seq,
        map
    ]
});
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === '~' || max === 4 && (data === 'null' || data === 'Null' || data === 'NULL');
}
function constructYamlNull() {
    return null;
}
function isNull(object) {
    return object === null;
}
var _null = new type('tag:yaml.org,2002:null', {
    kind: 'scalar',
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function() {
            return '~';
        },
        lowercase: function() {
            return 'null';
        },
        uppercase: function() {
            return 'NULL';
        },
        camelcase: function() {
            return 'Null';
        },
        empty: function() {
            return '';
        }
    },
    defaultStyle: 'lowercase'
});
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === 'true' || data === 'True' || data === 'TRUE') || max === 5 && (data === 'false' || data === 'False' || data === 'FALSE');
}
function constructYamlBoolean(data) {
    return data === 'true' || data === 'True' || data === 'TRUE';
}
function isBoolean(object) {
    return Object.prototype.toString.call(object) === '[object Boolean]';
}
var bool = new type('tag:yaml.org,2002:bool', {
    kind: 'scalar',
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function(object) {
            return object ? 'true' : 'false';
        },
        uppercase: function(object) {
            return object ? 'TRUE' : 'FALSE';
        },
        camelcase: function(object) {
            return object ? 'True' : 'False';
        }
    },
    defaultStyle: 'lowercase'
});
function isHexCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */  || 0x41 /* A */  <= c && c <= 0x46 /* F */  || 0x61 /* a */  <= c && c <= 0x66 /* f */ ;
}
function isOctCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x37 /* 7 */ ;
}
function isDecCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ;
}
function resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    // sign
    if (ch === '-' || ch === '+') {
        ch = data[++index];
    }
    if (ch === '0') {
        // 0
        if (index + 1 === max) return true;
        ch = data[++index];
        // base 2, base 8, base 16
        if (ch === 'b') {
            // base 2
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === '_') continue;
                if (ch !== '0' && ch !== '1') return false;
                hasDigits = true;
            }
            return hasDigits && ch !== '_';
        }
        if (ch === 'x') {
            // base 16
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === '_') continue;
                if (!isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== '_';
        }
        if (ch === 'o') {
            // base 8
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === '_') continue;
                if (!isOctCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== '_';
        }
    }
    // base 10 (except 0)
    // value should not start with `_`;
    if (ch === '_') return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === '_') continue;
        if (!isDecCode(data.charCodeAt(index))) {
            return false;
        }
        hasDigits = true;
    }
    // Should have digits and should not end with `_`
    if (!hasDigits || ch === '_') return false;
    return true;
}
function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf('_') !== -1) {
        value = value.replace(/_/g, '');
    }
    ch = value[0];
    if (ch === '-' || ch === '+') {
        if (ch === '-') sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === '0') return 0;
    if (ch === '0') {
        if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
        if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
        if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
}
function isInteger(object) {
    return Object.prototype.toString.call(object) === '[object Number]' && object % 1 === 0 && !common.isNegativeZero(object);
}
var int = new type('tag:yaml.org,2002:int', {
    kind: 'scalar',
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: function(obj) {
            return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1);
        },
        octal: function(obj) {
            return obj >= 0 ? '0o' + obj.toString(8) : '-0o' + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
            return obj.toString(10);
        },
        /* eslint-disable max-len */ hexadecimal: function(obj) {
            return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: 'decimal',
    styleAliases: {
        binary: [
            2,
            'bin'
        ],
        octal: [
            8,
            'oct'
        ],
        decimal: [
            10,
            'dec'
        ],
        hexadecimal: [
            16,
            'hex'
        ]
    }
});
var YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
'^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' + // .2e4, .2
// special case, seems not from spec
'|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' + // .inf
'|[-+]?\\.(?:inf|Inf|INF)' + // .nan
'|\\.(?:nan|NaN|NAN))$');
function resolveYamlFloat(data) {
    if (data === null) return false;
    if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === '_') {
        return false;
    }
    return true;
}
function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, '').toLowerCase();
    sign = value[0] === '-' ? -1 : 1;
    if ('+-'.indexOf(value[0]) >= 0) {
        value = value.slice(1);
    }
    if (value === '.inf') {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === '.nan') {
        return NaN;
    }
    return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
        switch(style){
            case 'lowercase':
                return '.nan';
            case 'uppercase':
                return '.NAN';
            case 'camelcase':
                return '.NaN';
        }
    } else if (Number.POSITIVE_INFINITY === object) {
        switch(style){
            case 'lowercase':
                return '.inf';
            case 'uppercase':
                return '.INF';
            case 'camelcase':
                return '.Inf';
        }
    } else if (Number.NEGATIVE_INFINITY === object) {
        switch(style){
            case 'lowercase':
                return '-.inf';
            case 'uppercase':
                return '-.INF';
            case 'camelcase':
                return '-.Inf';
        }
    } else if (common.isNegativeZero(object)) {
        return '-0.0';
    }
    res = object.toString(10);
    // JS stringifier can build scientific format without dots: 5e-100,
    // while YAML requres dot: 5.e-100. Fix it with simple hack
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}
function isFloat(object) {
    return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type('tag:yaml.org,2002:float', {
    kind: 'scalar',
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: 'lowercase'
});
var json = failsafe.extend({
    implicit: [
        _null,
        bool,
        int,
        float
    ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + // [1] year
'-([0-9][0-9])' + // [2] month
'-([0-9][0-9])$'); // [3] day
var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + // [1] year
'-([0-9][0-9]?)' + // [2] month
'-([0-9][0-9]?)' + // [3] day
'(?:[Tt]|[ \\t]+)' + // ...
'([0-9][0-9]?)' + // [4] hour
':([0-9][0-9])' + // [5] minute
':([0-9][0-9])' + // [6] second
'(?:\\.([0-9]*))?' + // [7] fraction
'(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
'(?::([0-9][0-9]))?))?$'); // [11] tz_minute
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error('Date resolve error');
    // match: [1] year [2] month [3] day
    year = +match[1];
    month = +match[2] - 1; // JS month starts with 0
    day = +match[3];
    if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
    }
    // match: [4] hour [5] minute [6] second [7] fraction
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3){
            fraction += '0';
        }
        fraction = +fraction;
    }
    // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
        if (match[9] === '-') delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
function representYamlTimestamp(object /*, style*/ ) {
    return object.toISOString();
}
var timestamp = new type('tag:yaml.org,2002:timestamp', {
    kind: 'scalar',
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
    return data === '<<' || data === null;
}
var merge = new type('tag:yaml.org,2002:merge', {
    kind: 'scalar',
    resolve: resolveYamlMerge
});
/*eslint-disable no-bitwise*/ // [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
    // Convert one by one.
    for(idx = 0; idx < max; idx++){
        code = map.indexOf(data.charAt(idx));
        // Skip CR/LF
        if (code > 64) continue;
        // Fail on illegal characters
        if (code < 0) return false;
        bitlen += 6;
    }
    // If there are any bits left, source was corrupted
    return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ''), max = input.length, map = BASE64_MAP, bits = 0, result = [];
    // Collect by 6*4 bits (3 bytes)
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 0xFF);
            result.push(bits >> 8 & 0xFF);
            result.push(bits & 0xFF);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
    }
    // Dump tail
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 0xFF);
        result.push(bits >> 8 & 0xFF);
        result.push(bits & 0xFF);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 0xFF);
        result.push(bits >> 2 & 0xFF);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 0xFF);
    }
    return new Uint8Array(result);
}
function representYamlBinary(object /*, style*/ ) {
    var result = '', bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
    // Convert every three bytes to 4 ASCII characters.
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map[bits >> 18 & 0x3F];
            result += map[bits >> 12 & 0x3F];
            result += map[bits >> 6 & 0x3F];
            result += map[bits & 0x3F];
        }
        bits = (bits << 8) + object[idx];
    }
    // Dump tail
    tail = max % 3;
    if (tail === 0) {
        result += map[bits >> 18 & 0x3F];
        result += map[bits >> 12 & 0x3F];
        result += map[bits >> 6 & 0x3F];
        result += map[bits & 0x3F];
    } else if (tail === 2) {
        result += map[bits >> 10 & 0x3F];
        result += map[bits >> 4 & 0x3F];
        result += map[bits << 2 & 0x3F];
        result += map[64];
    } else if (tail === 1) {
        result += map[bits >> 2 & 0x3F];
        result += map[bits << 4 & 0x3F];
        result += map[64];
        result += map[64];
    }
    return result;
}
function isBinary(obj) {
    return Object.prototype.toString.call(obj) === '[object Uint8Array]';
}
var binary = new type('tag:yaml.org,2002:binary', {
    kind: 'scalar',
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if (_toString$2.call(pair) !== '[object Object]') return false;
        for(pairKey in pair){
            if (_hasOwnProperty$3.call(pair, pairKey)) {
                if (!pairHasKey) pairHasKey = true;
                else return false;
            }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
var omap = new type('tag:yaml.org,2002:omap', {
    kind: 'sequence',
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if (_toString$1.call(pair) !== '[object Object]') return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
var pairs = new type('tag:yaml.org,2002:pairs', {
    kind: 'sequence',
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object){
        if (_hasOwnProperty$2.call(object, key)) {
            if (object[key] !== null) return false;
        }
    }
    return true;
}
function constructYamlSet(data) {
    return data !== null ? data : {};
}
var set = new type('tag:yaml.org,2002:set', {
    kind: 'mapping',
    resolve: resolveYamlSet,
    construct: constructYamlSet
});
var _default = core.extend({
    implicit: [
        timestamp,
        merge
    ],
    explicit: [
        binary,
        omap,
        pairs,
        set
    ]
});
/*eslint-disable max-len,no-use-before-define*/ var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
    return c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_WHITE_SPACE(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */ ;
}
function is_WS_OR_EOL(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */  || c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_FLOW_INDICATOR(c) {
    return c === 0x2C /* , */  || c === 0x5B /* [ */  || c === 0x5D /* ] */  || c === 0x7B /* { */  || c === 0x7D /* } */ ;
}
function fromHexCode(c) {
    var lc;
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    /*eslint-disable no-bitwise*/ lc = c | 0x20;
    if (0x61 /* a */  <= lc && lc <= 0x66 /* f */ ) {
        return lc - 0x61 + 10;
    }
    return -1;
}
function escapedHexLen(c) {
    if (c === 0x78 /* x */ ) {
        return 2;
    }
    if (c === 0x75 /* u */ ) {
        return 4;
    }
    if (c === 0x55 /* U */ ) {
        return 8;
    }
    return 0;
}
function fromDecimalCode(c) {
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    return -1;
}
function simpleEscapeSequence(c) {
    /* eslint-disable indent */ return c === 0x30 /* 0 */  ? '\x00' : c === 0x61 /* a */  ? '\x07' : c === 0x62 /* b */  ? '\x08' : c === 0x74 /* t */  ? '\x09' : c === 0x09 /* Tab */  ? '\x09' : c === 0x6E /* n */  ? '\x0A' : c === 0x76 /* v */  ? '\x0B' : c === 0x66 /* f */  ? '\x0C' : c === 0x72 /* r */  ? '\x0D' : c === 0x65 /* e */  ? '\x1B' : c === 0x20 /* Space */  ? ' ' : c === 0x22 /* " */  ? '\x22' : c === 0x2F /* / */  ? '/' : c === 0x5C /* \ */  ? '\x5C' : c === 0x4E /* N */  ? '\x85' : c === 0x5F /* _ */  ? '\xA0' : c === 0x4C /* L */  ? '\u2028' : c === 0x50 /* P */  ? '\u2029' : '';
}
function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
        return String.fromCharCode(c);
    }
    // Encode UTF-16 surrogate pair
    // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
    return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}
// set a property of a literal object, while protecting against prototype pollution,
// see https://github.com/nodeca/js-yaml/issues/164 for more details
function setProperty(object, key, value) {
    // used for this specific key only because Object.defineProperty is slow
    if (key === '__proto__') {
        Object.defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: value
        });
    } else {
        object[key] = value;
    }
}
var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for(var i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
    this.input = input;
    this.filename = options['filename'] || null;
    this.schema = options['schema'] || _default;
    this.onWarning = options['onWarning'] || null;
    // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
    // if such documents have no explicit %YAML directive
    this.legacy = options['legacy'] || false;
    this.json = options['json'] || false;
    this.listener = options['listener'] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    // position of first leading tab in the current line,
    // used to make sure there are no tabs in the indentation
    this.firstTabInLine = -1;
    this.documents = [];
/*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/ }
function generateError(state, message) {
    var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
}
function throwError(state, message) {
    throw generateError(state, message);
}
function throwWarning(state, message) {
    if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
    }
}
var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
            throwError(state, 'duplication of %YAML directive');
        }
        if (args.length !== 1) {
            throwError(state, 'YAML directive accepts exactly one argument');
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
            throwError(state, 'ill-formed argument of the YAML directive');
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
            throwError(state, 'unacceptable YAML version of the document');
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
            throwWarning(state, 'unsupported YAML version of the document');
        }
    },
    TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
            throwError(state, 'TAG directive accepts exactly two arguments');
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
        }
        if (_hasOwnProperty$1.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
        }
        try {
            prefix = decodeURIComponent(prefix);
        } catch (err) {
            throwError(state, 'tag prefix is malformed: ' + prefix);
        }
        state.tagMap[handle] = prefix;
    }
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
            for(_position = 0, _length = _result.length; _position < _length; _position += 1){
                _character = _result.charCodeAt(_position);
                if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
                    throwError(state, 'expected valid JSON character');
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, 'the stream contains non-printable characters');
        }
        state.result += _result;
    }
}
function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
        throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
    }
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!_hasOwnProperty$1.call(destination, key)) {
            setProperty(destination, key, source[key]);
            overridableKeys[key] = true;
        }
    }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    // The output is a plain object here, so keys can only be strings.
    // We need to convert keyNode to a string, but doing so can hang the process
    // (deeply nested arrays that explode exponentially using aliases).
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) {
                throwError(state, 'nested arrays are not supported inside keys');
            }
            if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
                keyNode[index] = '[object Object]';
            }
        }
    }
    // Avoid code execution in load() via toString property
    // (still use its own toString for arrays, timestamps,
    // and whatever user schema extensions happen to have @@toStringTag)
    if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
        keyNode = '[object Object]';
    }
    keyNode = String(keyNode);
    if (_result === null) {
        _result = {};
    }
    if (keyTag === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(valueNode)) {
            for(index = 0, quantity = valueNode.length; index < quantity; index += 1){
                mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
        } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
        }
    } else {
        if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.lineStart = startLineStart || state.lineStart;
            state.position = startPos || state.position;
            throwError(state, 'duplicated mapping key');
        }
        setProperty(_result, keyNode, valueNode);
        delete overridableKeys[keyNode];
    }
    return _result;
}
function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x0A /* LF */ ) {
        state.position++;
    } else if (ch === 0x0D /* CR */ ) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A /* LF */ ) {
            state.position++;
        }
    } else {
        throwError(state, 'a line break is expected');
    }
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        while(is_WHITE_SPACE(ch)){
            if (ch === 0x09 /* Tab */  && state.firstTabInLine === -1) {
                state.firstTabInLine = state.position;
            }
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (ch !== 0x0A /* LF */  && ch !== 0x0D /* CR */  && ch !== 0)
        }
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while(ch === 0x20 /* Space */ ){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, 'deficient indentation');
    }
    return lineBreaks;
}
function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    // Condition state.position === state.lineStart is tested
    // in parent on each call, for efficiency. No needs to test here again.
    if ((ch === 0x2D /* - */  || ch === 0x2E /* . */ ) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
        }
    }
    return false;
}
function writeFoldedLines(state, count) {
    if (count === 1) {
        state.result += ' ';
    } else if (count > 1) {
        state.result += common.repeat('\n', count - 1);
    }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 /* # */  || ch === 0x26 /* & */  || ch === 0x2A /* * */  || ch === 0x21 /* ! */  || ch === 0x7C /* | */  || ch === 0x3E /* > */  || ch === 0x27 /* ' */  || ch === 0x22 /* " */  || ch === 0x25 /* % */  || ch === 0x40 /* @ */  || ch === 0x60 /* ` */ ) {
        return false;
    }
    if (ch === 0x3F /* ? */  || ch === 0x2D /* - */ ) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
        }
    }
    state.kind = 'scalar';
    state.result = '';
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 0x3A /* : */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                break;
            }
        } else if (ch === 0x23 /* # */ ) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
                break;
            }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
        } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
        return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x27 /* ' */ ) {
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x27 /* ' */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 0x27 /* ' */ ) {
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else {
                return true;
            }
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a single quoted scalar');
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, 'unexpected end of the stream within a single quoted scalar');
}
function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x22 /* " */ ) {
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x22 /* " */ ) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 0x5C /* \ */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
                skipSeparationSpace(state, false, nodeIndent);
            // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) {
                        hexResult = (hexResult << 4) + tmp;
                    } else {
                        throwError(state, 'expected hexadecimal character');
                    }
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else {
                throwError(state, 'unknown escape sequence');
            }
            captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, 'unexpected end of the document within a double quoted scalar');
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, 'unexpected end of the stream within a double quoted scalar');
}
function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x5B /* [ */ ) {
        terminator = 0x5D; /* ] */ 
        isMapping = false;
        _result = [];
    } else if (ch === 0x7B /* { */ ) {
        terminator = 0x7D; /* } */ 
        isMapping = true;
        _result = {};
    } else {
        return false;
    }
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while(ch !== 0){
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? 'mapping' : 'sequence';
            state.result = _result;
            return true;
        } else if (!readNext) {
            throwError(state, 'missed comma between flow collection entries');
        } else if (ch === 0x2C /* , */ ) {
            // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
            throwError(state, "expected the node content, but found ','");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 0x3F /* ? */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line; // Save the current line.
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 0x3A /* : */ ) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        } else {
            _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 0x2C /* , */ ) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else {
            readNext = false;
        }
    }
    throwError(state, 'unexpected end of the stream within a flow collection');
}
function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x7C /* | */ ) {
        folding = false;
    } else if (ch === 0x3E /* > */ ) {
        folding = true;
    } else {
        return false;
    }
    state.kind = 'scalar';
    state.result = '';
    while(ch !== 0){
        ch = state.input.charCodeAt(++state.position);
        if (ch === 0x2B /* + */  || ch === 0x2D /* - */ ) {
            if (CHOMPING_CLIP === chomping) {
                chomping = ch === 0x2B /* + */  ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
                throwError(state, 'repeat of a chomping mode identifier');
            }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
                throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
            } else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else {
                throwError(state, 'repeat of an indentation width identifier');
            }
        } else {
            break;
        }
    }
    if (is_WHITE_SPACE(ch)) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (is_WHITE_SPACE(ch))
        if (ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (!is_EOL(ch) && ch !== 0)
        }
    }
    while(ch !== 0){
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20 /* Space */ ){
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        // End of the scalar.
        if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
                state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) {
                    state.result += '\n';
                }
            }
            break;
        }
        // Folded style: use fancy rules to handle line breaks.
        if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                // except for the first content line (cf. Example 8.1)
                state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
            // End of more-indented block.
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat('\n', emptyLines + 1);
            // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
                if (didReadContent) {
                    state.result += ' ';
                }
            // Several line breaks - perceive as different lines.
            } else {
                state.result += common.repeat('\n', emptyLines);
            }
        // Literal style: just add exact number of line breaks between content lines.
        } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while(!is_EOL(ch) && ch !== 0){
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}
function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    // there is a leading tab before this token, so it can't be a block sequence/mapping;
    // it can still be flow sequence/mapping or a scalar
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, 'tab characters must not be used in indentation');
        }
        if (ch !== 0x2D /* - */ ) {
            break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
            break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, 'bad indentation of a sequence entry');
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'sequence';
        state.result = _result;
        return true;
    }
    return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    // there is a leading tab before this token, so it can't be a block sequence/mapping;
    // it can still be flow sequence/mapping or a scalar
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (!atExplicitKey && state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, 'tab characters must not be used in indentation');
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // Save the current line.
        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F /* ? */  || ch === 0x3A /* : */ ) && is_WS_OR_EOL(following)) {
            if (ch === 0x3F /* ? */ ) {
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                // i.e. 0x3A/* : */ === character after the explicit key.
                atExplicitKey = false;
                allowCompact = true;
            } else {
                throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
            }
            state.position += 1;
            ch = following;
        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
            if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                break;
            }
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while(is_WHITE_SPACE(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 0x3A /* : */ ) {
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) {
                        throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
                    }
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) {
                    throwError(state, 'can not read an implicit mapping pair; a colon is missed');
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true; // Keep the result of `composeNode`.
                }
            } else if (detected) {
                throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
            } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; // Keep the result of `composeNode`.
            }
        }
        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (atExplicitKey) {
                _keyLine = state.line;
                _keyLineStart = state.lineStart;
                _keyPos = state.position;
            }
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) {
                    keyNode = state.result;
                } else {
                    valueNode = state.result;
                }
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, 'bad indentation of a mapping entry');
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    //
    // Epilogue.
    //
    // Special case: last mapping's node contains only the key in explicit notation.
    if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    }
    // Expose the resulting mapping.
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'mapping';
        state.result = _result;
    }
    return detected;
}
function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x21 /* ! */ ) return false;
    if (state.tag !== null) {
        throwError(state, 'duplication of a tag property');
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x3C /* < */ ) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21 /* ! */ ) {
        isNamed = true;
        tagHandle = '!!';
        ch = state.input.charCodeAt(++state.position);
    } else {
        tagHandle = '!';
    }
    _position = state.position;
    if (isVerbatim) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (ch !== 0 && ch !== 0x3E /* > */ )
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else {
            throwError(state, 'unexpected end of the stream within a verbatim tag');
        }
    } else {
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            if (ch === 0x21 /* ! */ ) {
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                        throwError(state, 'named tag handle cannot contain such characters');
                    }
                    isNamed = true;
                    _position = state.position + 1;
                } else {
                    throwError(state, 'tag suffix cannot contain exclamation marks');
                }
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, 'tag suffix cannot contain flow indicator characters');
        }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, 'tag name cannot contain such characters: ' + tagName);
    }
    try {
        tagName = decodeURIComponent(tagName);
    } catch (err) {
        throwError(state, 'tag name is malformed: ' + tagName);
    }
    if (isVerbatim) {
        state.tag = tagName;
    } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === '!') {
        state.tag = '!' + tagName;
    } else if (tagHandle === '!!') {
        state.tag = 'tag:yaml.org,2002:' + tagName;
    } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
}
function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x26 /* & */ ) return false;
    if (state.anchor !== null) {
        throwError(state, 'duplication of an anchor property');
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, 'name of an anchor node must contain at least one character');
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
}
function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x2A /* * */ ) return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, 'name of an alias node must contain at least one character');
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type, flowIndent, blockIndent;
    if (state.listener !== null) {
        state.listener('open', state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
                indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
            }
        }
    }
    if (indentStatus === 1) {
        while(readTagProperty(state) || readAnchorProperty(state)){
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                allowBlockCollections = allowBlockStyles;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            } else {
                allowBlockCollections = false;
            }
        }
    }
    if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
        } else {
            flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                hasContent = true;
            } else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                    hasContent = true;
                } else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) {
                        throwError(state, 'alias node should not have any properties');
                    }
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) {
                        state.tag = '?';
                    }
                }
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
    }
    if (state.tag === null) {
        if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
        }
    } else if (state.tag === '?') {
        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only automatically assigned to plain scalars.
        //
        // We only need to check kind conformity in case user explicitly assigns '?'
        // tag, for example like this: "!<?> [0]"
        //
        if (state.result !== null && state.kind !== 'scalar') {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
        }
        for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
                state.result = type.construct(state.result);
                state.tag = type.tag;
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
                break;
            }
        }
    } else if (state.tag !== '!') {
        if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
            type = state.typeMap[state.kind || 'fallback'][state.tag];
        } else {
            // looking for multi type
            type = null;
            typeList = state.typeMap.multi[state.kind || 'fallback'];
            for(typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1){
                if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                    type = typeList[typeIndex];
                    break;
                }
            }
        }
        if (!type) {
            throwError(state, 'unknown tag !<' + state.tag + '>');
        }
        if (state.result !== null && type.kind !== state.kind) {
            throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
        }
        if (!type.resolve(state.result, state.tag)) {
            throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
        } else {
            state.result = type.construct(state.result, state.tag);
            if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
            }
        }
    }
    if (state.listener !== null) {
        state.listener('close', state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = Object.create(null);
    state.anchorMap = Object.create(null);
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 0x25 /* % */ ) {
            break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
            throwError(state, 'directive name must not be less than one character in length');
        }
        while(ch !== 0){
            while(is_WHITE_SPACE(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 0x23 /* # */ ) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (ch !== 0 && !is_EOL(ch))
                break;
            }
            if (is_EOL(ch)) break;
            _position = state.position;
            while(ch !== 0 && !is_WS_OR_EOL(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D /* - */  && state.input.charCodeAt(state.position + 1) === 0x2D /* - */  && state.input.charCodeAt(state.position + 2) === 0x2D /* - */ ) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
        throwError(state, 'directives end mark is expected');
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, 'non-ASCII line breaks are interpreted as content');
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 0x2E /* . */ ) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) {
        throwError(state, 'end of the stream or a document separator is expected');
    } else {
        return;
    }
}
function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A /* LF */  && input.charCodeAt(input.length - 1) !== 0x0D /* CR */ ) {
            input += '\n';
        }
        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
            input = input.slice(1);
        }
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf('\0');
    if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, 'null byte is not allowed in input');
    }
    // Use 0 as string terminator. That significantly simplifies bounds check.
    state.input += '\0';
    while(state.input.charCodeAt(state.position) === 0x20 /* Space */ ){
        state.lineIndent += 1;
        state.position += 1;
    }
    while(state.position < state.length - 1){
        readDocument(state);
    }
    return state.documents;
}
function loadAll$1(input, iterator, options) {
    if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
        options = iterator;
        iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== 'function') {
        return documents;
    }
    for(var index = 0, length = documents.length; index < length; index += 1){
        iterator(documents[index]);
    }
}
function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
        /*eslint-disable no-undefined*/ return undefined;
    } else if (documents.length === 1) {
        return documents[0];
    }
    throw new exception('expected a single document in the stream, but found more');
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
    loadAll: loadAll_1,
    load: load_1
};
/*eslint-disable no-use-before-define*/ var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 0xFEFF;
var CHAR_TAB = 0x09; /* Tab */ 
var CHAR_LINE_FEED = 0x0A; /* LF */ 
var CHAR_CARRIAGE_RETURN = 0x0D; /* CR */ 
var CHAR_SPACE = 0x20; /* Space */ 
var CHAR_EXCLAMATION = 0x21; /* ! */ 
var CHAR_DOUBLE_QUOTE = 0x22; /* " */ 
var CHAR_SHARP = 0x23; /* # */ 
var CHAR_PERCENT = 0x25; /* % */ 
var CHAR_AMPERSAND = 0x26; /* & */ 
var CHAR_SINGLE_QUOTE = 0x27; /* ' */ 
var CHAR_ASTERISK = 0x2A; /* * */ 
var CHAR_COMMA = 0x2C; /* , */ 
var CHAR_MINUS = 0x2D; /* - */ 
var CHAR_COLON = 0x3A; /* : */ 
var CHAR_EQUALS = 0x3D; /* = */ 
var CHAR_GREATER_THAN = 0x3E; /* > */ 
var CHAR_QUESTION = 0x3F; /* ? */ 
var CHAR_COMMERCIAL_AT = 0x40; /* @ */ 
var CHAR_LEFT_SQUARE_BRACKET = 0x5B; /* [ */ 
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */ 
var CHAR_GRAVE_ACCENT = 0x60; /* ` */ 
var CHAR_LEFT_CURLY_BRACKET = 0x7B; /* { */ 
var CHAR_VERTICAL_LINE = 0x7C; /* | */ 
var CHAR_RIGHT_CURLY_BRACKET = 0x7D; /* } */ 
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';
var DEPRECATED_BOOLEANS_SYNTAX = [
    'y',
    'Y',
    'yes',
    'Yes',
    'YES',
    'on',
    'On',
    'ON',
    'n',
    'N',
    'no',
    'No',
    'NO',
    'off',
    'Off',
    'OFF'
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema, map) {
    var result, keys, index, length, tag, style, type;
    if (map === null) return {};
    result = {};
    keys = Object.keys(map);
    for(index = 0, length = keys.length; index < length; index += 1){
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === '!!') {
            tag = 'tag:yaml.org,2002:' + tag.slice(2);
        }
        type = schema.compiledTypeMap['fallback'][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}
function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 0xFF) {
        handle = 'x';
        length = 2;
    } else if (character <= 0xFFFF) {
        handle = 'u';
        length = 4;
    } else if (character <= 0xFFFFFFFF) {
        handle = 'U';
        length = 8;
    } else {
        throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
    }
    return '\\' + handle + common.repeat('0', length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1, QUOTING_TYPE_DOUBLE = 2;
function State(options) {
    this.schema = options['schema'] || _default;
    this.indent = Math.max(1, options['indent'] || 2);
    this.noArrayIndent = options['noArrayIndent'] || false;
    this.skipInvalid = options['skipInvalid'] || false;
    this.flowLevel = common.isNothing(options['flowLevel']) ? -1 : options['flowLevel'];
    this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
    this.sortKeys = options['sortKeys'] || false;
    this.lineWidth = options['lineWidth'] || 80;
    this.noRefs = options['noRefs'] || false;
    this.noCompatMode = options['noCompatMode'] || false;
    this.condenseFlow = options['condenseFlow'] || false;
    this.quotingType = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
    this.forceQuotes = options['forceQuotes'] || false;
    this.replacer = typeof options['replacer'] === 'function' ? options['replacer'] : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = '';
    this.duplicates = [];
    this.usedDuplicates = null;
}
// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
    var ind = common.repeat(' ', spaces), position = 0, next = -1, result = '', line, length = string.length;
    while(position < length){
        next = string.indexOf('\n', position);
        if (next === -1) {
            line = string.slice(position);
            position = length;
        } else {
            line = string.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== '\n') result += ind;
        result += line;
    }
    return result;
}
function generateNextLine(state, level) {
    return '\n' + common.repeat(' ', state.indent * level);
}
function testImplicitResolving(state, str) {
    var index, length, type;
    for(index = 0, length = state.implicitTypes.length; index < length; index += 1){
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
            return true;
        }
    }
    return false;
}
// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}
// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
    return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== CHAR_BOM || 0x10000 <= c && c <= 0x10FFFF;
}
// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
    return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
    var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
    var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
    return (// ns-plain-safe
    inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP // false on '#'
     && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
     || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar; // change to true on ':[^ ]'
}
// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
    // Uses a subset of ns-char - c-indicator
    // where ns-char = nb-char - s-white.
    // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
    return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) // - s-white
     && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
    // just not whitespace or colon, it will be checked to be plain character later
    return !isWhitespace(c) && c !== CHAR_COLON;
}
// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
    var first = string.charCodeAt(pos), second;
    if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
    }
    return first;
}
// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
    var i;
    var char = 0;
    var prevChar = null;
    var hasLineBreak = false;
    var hasFoldableLine = false; // only checked if shouldTrackWidth
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1; // count the first line correctly
    var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
    if (singleLineOnly || forceQuotes) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for(i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
    } else {
        // Case: block styles permitted.
        for(i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                // Check if any line can be folded.
                if (shouldTrackWidth) {
                    hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
    }
    // Although every style can represent \n without escaping, prefer block styles
    // for multiline, since they're more readable and they don't add empty lines.
    // Also prefer folding a super-long line.
    if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
            return STYLE_PLAIN;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    // Edge case: block indentation indicator can only have one digit.
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
    }
    // At this point we know block styles are valid.
    // Prefer literal style unless we want to fold.
    if (!forceQuotes) {
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
    state.dump = function() {
        if (string.length === 0) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
        }
        if (!state.noCompatMode) {
            if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
                return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
            }
        }
        var indent = state.indent * Math.max(1, level); // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string) {
            return testImplicitResolving(state, string);
        }
        switch(chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)){
            case STYLE_PLAIN:
                return string;
            case STYLE_SINGLE:
                return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return '|' + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
                return '>' + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string) + '"';
            default:
                throw new exception('impossible error: invalid scalar style');
        }
    }();
}
// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';
    // note the special case: the string '\n' counts as a "trailing" empty line.
    var clip = string[string.length - 1] === '\n';
    var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
    var chomp = keep ? '+' : clip ? '' : '-';
    return indentIndicator + chomp + '\n';
}
// (See the note for writeScalar.)
function dropEndingNewline(string) {
    return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}
// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
    // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
    // unless they're before or after a more-indented line, or at the very
    // beginning or end, in which case $k$ maps to $k$.
    // Therefore, parse each chunk as newline(s) followed by a content line.
    var lineRe = /(\n+)([^\n]*)/g;
    // first line (possibly an empty line)
    var result = function() {
        var nextLF = string.indexOf('\n');
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
    }();
    // If we haven't reached the first content line yet, don't add an extra \n.
    var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
    var moreIndented;
    // rest of the lines
    var match;
    while(match = lineRe.exec(string)){
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === ' ';
        result += prefix + (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}
// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
    if (line === '' || line[0] === ' ') return line;
    // Since a more-indented line adds a \n, breaks can't be followed by a space.
    var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
    var match;
    // start is an inclusive index. end, curr, and next are exclusive.
    var start = 0, end, curr = 0, next = 0;
    var result = '';
    // Invariants: 0 <= start <= length-1.
    //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
    // Inside the loop:
    //   A match implies length >= 2, so curr and next are <= length-2.
    while(match = breakRe.exec(line)){
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
            end = curr > start ? curr : next; // derive end <= length-2
            result += '\n' + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1; // derive start <= length-1
        }
        curr = next;
    }
    // By the invariants, start <= length-1, so there is something left over.
    // It is either the whole string or a part starting from non-whitespace.
    result += '\n';
    // Insert a break if the remainder is too long and there is a break available.
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1); // drop extra \n joiner
}
// Escapes a double-quoted string.
function escapeString(string) {
    var result = '';
    var char = 0;
    var escapeSeq;
    for(var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
        char = codePointAt(string, i);
        escapeSeq = ESCAPE_SEQUENCES[char];
        if (!escapeSeq && isPrintable(char)) {
            result += string[i];
            if (char >= 0x10000) result += string[i + 1];
        } else {
            result += escapeSeq || encodeHex(char);
        }
    }
    return result;
}
function writeFlowSequence(state, level, object) {
    var _result = '', _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        // Write only valid elements, put null instead of invalid elements.
        if (writeNode(state, level, value, false, false) || typeof value === 'undefined' && writeNode(state, level, null, false, false)) {
            if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = '[' + _result + ']';
}
function writeBlockSequence(state, level, object, compact) {
    var _result = '', _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        // Write only valid elements, put null instead of invalid elements.
        if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === 'undefined' && writeNode(state, level + 1, null, true, true, false, true)) {
            if (!compact || _result !== '') {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += '-';
            } else {
                _result += '- ';
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || '[]'; // Empty sequence if no valid values.
}
function writeFlowMapping(state, level, object) {
    var _result = '', _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = '';
        if (_result !== '') pairBuffer += ', ';
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level, objectKey, false, false)) {
            continue; // Skip this pair because of invalid key;
        }
        if (state.dump.length > 1024) pairBuffer += '? ';
        pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');
        if (!writeNode(state, level, objectValue, false, false)) {
            continue; // Skip this pair because of invalid value.
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = '{' + _result + '}';
}
function writeBlockMapping(state, level, object, compact) {
    var _result = '', _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    // Allow sorting keys so that the output file is deterministic
    if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
    } else if (typeof state.sortKeys === 'function') {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        // Something is wrong
        throw new exception('sortKeys must be a boolean or a function');
    }
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = '';
        if (!compact || _result !== '') {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; // Skip this pair because of invalid key.
        }
        explicitPair = state.tag !== null && state.tag !== '?' || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += '?';
            } else {
                pairBuffer += '? ';
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; // Skip this pair because of invalid value.
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ':';
        } else {
            pairBuffer += ': ';
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}
function detectType(state, object, explicit) {
    var _result, typeList, index, length, type, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for(index = 0, length = typeList.length; index < length; index += 1){
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === 'object' && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
            if (explicit) {
                if (type.multi && type.representName) {
                    state.tag = type.representName(object);
                } else {
                    state.tag = type.tag;
                }
            } else {
                state.tag = '?';
            }
            if (type.represent) {
                style = state.styleMap[type.tag] || type.defaultStyle;
                if (_toString.call(type.represent) === '[object Function]') {
                    _result = type.represent(object, style);
                } else if (_hasOwnProperty.call(type.represent, style)) {
                    _result = type.represent[style](object, style);
                } else {
                    throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}
// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
        detectType(state, object, true);
    }
    var type = _toString.call(state.dump);
    var inblock = block;
    var tagStr;
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type === '[object Object]' || type === '[object Array]', duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== '?' || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = '*ref_' + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === '[object Object]') {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
                }
            }
        } else if (type === '[object Array]') {
            if (block && state.dump.length !== 0) {
                if (state.noArrayIndent && !isblockseq && level > 0) {
                    writeBlockSequence(state, level - 1, state.dump, compact);
                } else {
                    writeBlockSequence(state, level, state.dump, compact);
                }
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, level, state.dump);
                if (duplicate) {
                    state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
                }
            }
        } else if (type === '[object String]') {
            if (state.tag !== '?') {
                writeScalar(state, state.dump, level, iskey, inblock);
            }
        } else if (type === '[object Undefined]') {
            return false;
        } else {
            if (state.skipInvalid) return false;
            throw new exception('unacceptable kind of an object to dump ' + type);
        }
        if (state.tag !== null && state.tag !== '?') {
            // Need to encode all characters except those allowed by the spec:
            //
            // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
            // [36] ns-hex-digit    ::=  ns-dec-digit
            //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
            // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
            // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
            // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
            //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
            //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
            //
            // Also need to encode '!' because it has special meaning (end of tag prefix).
            //
            tagStr = encodeURI(state.tag[0] === '!' ? state.tag.slice(1) : state.tag).replace(/!/g, '%21');
            if (state.tag[0] === '!') {
                tagStr = '!' + tagStr;
            } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
                tagStr = '!!' + tagStr.slice(18);
            } else {
                tagStr = '!<' + tagStr + '>';
            }
            state.dump = tagStr + ' ' + state.dump;
        }
    }
    return true;
}
function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for(index = 0, length = duplicatesIndexes.length; index < length; index += 1){
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === 'object') {
        index = objects.indexOf(object);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object);
            if (Array.isArray(object)) {
                for(index = 0, length = object.length; index < length; index += 1){
                    inspectNode(object[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object);
                for(index = 0, length = objectKeyList.length; index < length; index += 1){
                    inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}
function dump$1(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs) getDuplicateReferences(input, state);
    var value = input;
    if (state.replacer) {
        value = state.replacer.call({
            '': value
        }, '', value);
    }
    if (writeNode(state, 0, value, true, true)) return state.dump + '\n';
    return '';
}
var dump_1 = dump$1;
var dumper = {
    dump: dump_1
};
function renamed(from, to) {
    return function() {
        throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' + 'Use yaml.' + to + ' instead, which is now safe by default.');
    };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;
// Re-export all types in case user wants to create custom schema
var types = {
    binary: binary,
    float: float,
    map: map,
    null: _null,
    pairs: pairs,
    set: set,
    timestamp: timestamp,
    bool: bool,
    int: int,
    merge: merge,
    omap: omap,
    seq: seq,
    str: str
};
// Removed functions from JS-YAML 3.0.x
var safeLoad = renamed('safeLoad', 'load');
var safeLoadAll = renamed('safeLoadAll', 'loadAll');
var safeDump = renamed('safeDump', 'dump');
var jsYaml = {
    Type: Type,
    Schema: Schema,
    FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
    JSON_SCHEMA: JSON_SCHEMA,
    CORE_SCHEMA: CORE_SCHEMA,
    DEFAULT_SCHEMA: DEFAULT_SCHEMA,
    load: load,
    loadAll: loadAll,
    dump: dump,
    YAMLException: YAMLException,
    types: types,
    safeLoad: safeLoad,
    safeLoadAll: safeLoadAll,
    safeDump: safeDump
};
;
}),
];

//# sourceMappingURL=05g7_03-rhqq._.js.map