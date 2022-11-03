// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9wwDe":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d6648f11113d4d41";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"82kuj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSvg", ()=>toSvg);
parcelHelpers.export(exports, "toCanvas", ()=>toCanvas);
parcelHelpers.export(exports, "toPixelData", ()=>toPixelData);
parcelHelpers.export(exports, "toPng", ()=>toPng);
parcelHelpers.export(exports, "toJpeg", ()=>toJpeg);
parcelHelpers.export(exports, "toBlob", ()=>toBlob);
parcelHelpers.export(exports, "getFontEmbedCSS", ()=>getFontEmbedCSS);
var _cloneNode = require("./clone-node");
var _embedImages = require("./embed-images");
var _applyStyle = require("./apply-style");
var _embedWebfonts = require("./embed-webfonts");
var _util = require("./util");
async function toSvg(node, options = {}) {
    const { width , height  } = (0, _util.getImageSize)(node, options);
    const clonedNode = await (0, _cloneNode.cloneNode)(node, options, true);
    await (0, _embedWebfonts.embedWebFonts)(clonedNode, options);
    await (0, _embedImages.embedImages)(clonedNode, options);
    (0, _applyStyle.applyStyle)(clonedNode, options);
    const datauri = await (0, _util.nodeToDataURL)(clonedNode, width, height);
    return datauri;
}
async function toCanvas(node, options = {}) {
    const { width , height  } = (0, _util.getImageSize)(node, options);
    const svg = await toSvg(node, options);
    const img = await (0, _util.createImage)(svg);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const ratio = options.pixelRatio || (0, _util.getPixelRatio)();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) (0, _util.checkCanvasDimensions)(canvas);
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
}
async function toPixelData(node, options = {}) {
    const { width , height  } = (0, _util.getImageSize)(node, options);
    const canvas = await toCanvas(node, options);
    const ctx = canvas.getContext("2d");
    return ctx.getImageData(0, 0, width, height).data;
}
async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
}
async function toJpeg(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL("image/jpeg", options.quality || 1);
}
async function toBlob(node, options = {}) {
    const canvas = await toCanvas(node, options);
    const blob = await (0, _util.canvasToBlob)(canvas);
    return blob;
}
async function getFontEmbedCSS(node, options = {}) {
    return (0, _embedWebfonts.getWebFontCSS)(node, options);
}

},{"./clone-node":"ldIWU","./embed-images":"be7N8","./apply-style":"iZ8fh","./embed-webfonts":"ipNqu","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldIWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cloneNode", ()=>cloneNode);
var _mimes = require("./mimes");
var _dataurl = require("./dataurl");
var _clonePseudos = require("./clone-pseudos");
var _util = require("./util");
async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === "data:,") return canvas.cloneNode(false);
    return (0, _util.createImage)(dataURL);
}
async function cloneVideoElement(video, options) {
    const poster = video.poster;
    const contentType = (0, _mimes.getMimeType)(poster);
    const dataURL = await (0, _dataurl.resourceToDataURL)(poster, contentType, options);
    return (0, _util.createImage)(dataURL);
}
async function cloneSingleNode(node, options) {
    if (node instanceof HTMLCanvasElement) return cloneCanvasElement(node);
    if (node instanceof HTMLVideoElement && node.poster) return cloneVideoElement(node, options);
    return node.cloneNode(false);
}
const isSlotElement = (node)=>node.tagName != null && node.tagName.toUpperCase() === "SLOT";
async function cloneChildren(nativeNode, clonedNode, options) {
    var _a;
    const children = isSlotElement(nativeNode) && nativeNode.assignedNodes ? (0, _util.toArray)(nativeNode.assignedNodes()) : (0, _util.toArray)(((_a = nativeNode.shadowRoot) !== null && _a !== void 0 ? _a : nativeNode).childNodes);
    if (children.length === 0 || nativeNode instanceof HTMLVideoElement) return clonedNode;
    await children.reduce((deferred, child)=>deferred.then(()=>cloneNode(child, options)).then((clonedChild)=>{
            if (clonedChild) clonedNode.appendChild(clonedChild);
        }), Promise.resolve());
    return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) return;
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
        targetStyle.cssText = sourceStyle.cssText;
        targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else (0, _util.toArray)(sourceStyle).forEach((name)=>{
        let value = sourceStyle.getPropertyValue(name);
        if (name === "font-size" && value.endsWith("px")) {
            const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
            value = `${reducedFont}px`;
        }
        targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
    });
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) clonedNode.innerHTML = nativeNode.value;
    if (nativeNode instanceof HTMLInputElement) clonedNode.setAttribute("value", nativeNode.value);
}
function cloneSelectValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLSelectElement) {
        const clonedSelect = clonedNode;
        const selectedOption = Array.from(clonedSelect.children).find((child)=>nativeNode.value === child.getAttribute("value"));
        if (selectedOption) selectedOption.setAttribute("selected", "");
    }
}
function decorate(nativeNode, clonedNode) {
    if (clonedNode instanceof Element) {
        cloneCSSStyle(nativeNode, clonedNode);
        (0, _clonePseudos.clonePseudoElements)(nativeNode, clonedNode);
        cloneInputValue(nativeNode, clonedNode);
        cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
}
async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) return null;
    return Promise.resolve(node).then((clonedNode)=>cloneSingleNode(clonedNode, options)).then((clonedNode)=>cloneChildren(node, clonedNode, options)).then((clonedNode)=>decorate(node, clonedNode));
}

},{"./mimes":"bintm","./dataurl":"a60cP","./clone-pseudos":"jPUJ4","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bintm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMimeType", ()=>getMimeType);
const WOFF = "application/font-woff";
const JPEG = "image/jpeg";
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml"
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a60cP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDataUrl", ()=>isDataUrl);
parcelHelpers.export(exports, "makeDataUrl", ()=>makeDataUrl);
parcelHelpers.export(exports, "fetchAsDataURL", ()=>fetchAsDataURL);
parcelHelpers.export(exports, "resourceToDataURL", ()=>resourceToDataURL);
function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
async function fetchAsDataURL(url, init, process) {
    const res = await fetch(url, init);
    if (res.status === 404) throw new Error(`Resource "${res.url}" not found`);
    const blob = await res.blob();
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = ()=>{
            try {
                resolve(process({
                    res,
                    result: reader.result
                }));
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsDataURL(blob);
    });
}
const cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, "");
    if (includeQueryParams) key = url;
    // font resource
    if (/ttf|otf|eot|woff2?/i.test(key)) key = key.replace(/.*\//, "");
    return contentType ? `[${contentType}]${key}` : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) return cache[cacheKey];
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) // eslint-disable-next-line no-param-reassign
    resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + new Date().getTime();
    let dataURL;
    try {
        const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res , result  })=>{
            if (!contentType) // eslint-disable-next-line no-param-reassign
            contentType = res.headers.get("Content-Type") || "";
            return getContentFromDataUrl(result);
        });
        dataURL = makeDataUrl(content, contentType);
    } catch (error) {
        dataURL = options.imagePlaceholder || "";
        let msg = `Failed to fetch resource: ${resourceUrl}`;
        if (error) msg = typeof error === "string" ? error : error.message;
        if (msg) console.warn(msg);
    }
    cache[cacheKey] = dataURL;
    return dataURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPUJ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clonePseudoElements", ()=>clonePseudoElements);
var _util = require("./util");
function formatCSSText(style) {
    const content = style.getPropertyValue("content");
    return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
}
function formatCSSProperties(style) {
    return (0, _util.toArray)(style).map((name)=>{
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return `${name}: ${value}${priority ? " !important" : ""};`;
    }).join(" ");
}
function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue("content");
    if (content === "" || content === "none") return;
    const className = (0, _util.uuid)();
    try {
        clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
        return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ":before");
    clonePseudoElement(nativeNode, clonedNode, ":after");
}

},{"./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIddd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveUrl", ()=>resolveUrl);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "getImageSize", ()=>getImageSize);
parcelHelpers.export(exports, "getPixelRatio", ()=>getPixelRatio);
parcelHelpers.export(exports, "checkCanvasDimensions", ()=>checkCanvasDimensions);
parcelHelpers.export(exports, "canvasToBlob", ()=>canvasToBlob);
parcelHelpers.export(exports, "createImage", ()=>createImage);
parcelHelpers.export(exports, "svgToDataURL", ()=>svgToDataURL);
parcelHelpers.export(exports, "nodeToDataURL", ()=>nodeToDataURL);
var process = require("process");
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) return url;
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) return window.location.protocol + url;
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) return url;
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) base.href = baseUrl;
    a.href = url;
    return a.href;
}
const uuid = (()=>{
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = ()=>// eslint-disable-next-line no-bitwise
        `0000${(Math.random() * 1679616 << 0).toString(36)}`.slice(-4);
    return ()=>{
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
function delay(ms) {
    return (args)=>new Promise((resolve)=>{
            setTimeout(()=>resolve(args), ms);
        });
}
function toArray(arrayLike) {
    const arr = [];
    for(let i = 0, l = arrayLike.length; i < l; i++)arr.push(arrayLike[i]);
    return arr;
}
function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace("px", "")) : 0;
}
function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return {
        width,
        height
    };
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    } catch (e) {
    // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) ratio = 1;
    }
    return ratio || window.devicePixelRatio || 1;
}
// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
const canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= canvasDimensionLimit / canvas.width;
                canvas.width = canvasDimensionLimit;
            } else {
                canvas.width *= canvasDimensionLimit / canvas.height;
                canvas.height = canvasDimensionLimit;
            }
        } else if (canvas.width > canvasDimensionLimit) {
            canvas.height *= canvasDimensionLimit / canvas.width;
            canvas.width = canvasDimensionLimit;
        } else {
            canvas.width *= canvasDimensionLimit / canvas.height;
            canvas.height = canvasDimensionLimit;
        }
    }
}
function canvasToBlob(canvas, options = {}) {
    if (canvas.toBlob) return new Promise((resolve)=>{
        canvas.toBlob(resolve, options.type ? options.type : "image/png", options.quality ? options.quality : 1);
    });
    return new Promise((resolve)=>{
        const binaryString = window.atob(canvas.toDataURL(options.type ? options.type : undefined, options.quality ? options.quality : undefined).split(",")[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for(let i = 0; i < len; i += 1)binaryArray[i] = binaryString.charCodeAt(i);
        resolve(new Blob([
            binaryArray
        ], {
            type: options.type ? options.type : "image/png"
        }));
    });
}
function createImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = reject;
        img.crossOrigin = "anonymous";
        img.decoding = "sync";
        img.src = url;
    });
}
async function svgToDataURL(svg) {
    return Promise.resolve().then(()=>new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html)=>`data:image/svg+xml;charset=utf-8,${html}`);
}
async function nodeToDataURL(node, width, height) {
    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    const foreignObject = document.createElementNS(xmlns, "foreignObject");
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.setAttribute("x", "0");
    foreignObject.setAttribute("y", "0");
    foreignObject.setAttribute("externalResourcesRequired", "true");
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
}

},{"process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"be7N8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "embedImages", ()=>embedImages);
var _embedResources = require("./embed-resources");
var _util = require("./util");
var _dataurl = require("./dataurl");
var _mimes = require("./mimes");
async function embedBackground(clonedNode, options) {
    var _a;
    const background = (_a = clonedNode.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue("background");
    if (background) {
        const cssString = await (0, _embedResources.embedResources)(background, null, options);
        clonedNode.style.setProperty("background", cssString, clonedNode.style.getPropertyPriority("background"));
    }
}
async function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement && !(0, _dataurl.isDataUrl)(clonedNode.src)) && !(clonedNode instanceof SVGImageElement && !(0, _dataurl.isDataUrl)(clonedNode.href.baseVal))) return;
    const url = clonedNode instanceof HTMLImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await (0, _dataurl.resourceToDataURL)(url, (0, _mimes.getMimeType)(url), options);
    await new Promise((resolve, reject)=>{
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        if (clonedNode instanceof HTMLImageElement) {
            clonedNode.srcset = "";
            clonedNode.src = dataURL;
        } else clonedNode.href.baseVal = dataURL;
    });
}
async function embedChildren(clonedNode, options) {
    const children = (0, _util.toArray)(clonedNode.childNodes);
    const deferreds = children.map((child)=>embedImages(child, options));
    await Promise.all(deferreds).then(()=>clonedNode);
}
async function embedImages(clonedNode, options) {
    if (clonedNode instanceof Element) {
        await embedBackground(clonedNode, options);
        await embedImageNode(clonedNode, options);
        await embedChildren(clonedNode, options);
    }
}

},{"./embed-resources":"7yOGJ","./util":"eIddd","./dataurl":"a60cP","./mimes":"bintm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7yOGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseURLs", ()=>parseURLs);
parcelHelpers.export(exports, "embed", ()=>embed);
parcelHelpers.export(exports, "shouldEmbed", ()=>shouldEmbed);
parcelHelpers.export(exports, "embedResources", ()=>embedResources);
var _util = require("./util");
var _mimes = require("./mimes");
var _dataurl = require("./dataurl");
const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
}
function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url)=>{
        urls.push(url);
        return raw;
    });
    return urls.filter((url)=>!(0, _dataurl.isDataUrl)(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
        const resolvedURL = baseURL ? (0, _util.resolveUrl)(resourceURL, baseURL) : resourceURL;
        const contentType = (0, _mimes.getMimeType)(resourceURL);
        let dataURL;
        if (getContentFromUrl) {
            const content = await getContentFromUrl(resolvedURL);
            dataURL = (0, _dataurl.makeDataUrl)(content, contentType);
        } else dataURL = await (0, _dataurl.resourceToDataURL)(resolvedURL, contentType, options);
        return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    } catch (error) {
    // pass
    }
    return cssText;
}
function filterPreferredFontFormat(str, { preferredFontFormat  }) {
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match)=>{
        // eslint-disable-next-line no-constant-condition
        while(true){
            const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
            if (!format) return "";
            if (format === preferredFontFormat) return `src: ${src};`;
        }
    });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) return cssText;
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url)=>deferred.then((css)=>embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
}

},{"./util":"eIddd","./mimes":"bintm","./dataurl":"a60cP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZ8fh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyle", ()=>applyStyle);
function applyStyle(node, options) {
    const { style  } = node;
    if (options.backgroundColor) style.backgroundColor = options.backgroundColor;
    if (options.width) style.width = `${options.width}px`;
    if (options.height) style.height = `${options.height}px`;
    const manual = options.style;
    if (manual != null) Object.keys(manual).forEach((key)=>{
        style[key] = manual[key];
    });
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipNqu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWebFontCSS", ()=>getWebFontCSS);
parcelHelpers.export(exports, "embedWebFonts", ()=>embedWebFonts);
var _util = require("./util");
var _dataurl = require("./dataurl");
var _embedResources = require("./embed-resources");
const cssFetchCache = {};
async function fetchCSS(url) {
    let cache = cssFetchCache[url];
    if (cache != null) return cache;
    const res = await fetch(url);
    const cssText = await res.text();
    cache = {
        url,
        cssText
    };
    cssFetchCache[url] = cache;
    return cache;
}
async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc)=>{
        let url = loc.replace(regexUrl, "$1");
        if (!url.startsWith("https://")) url = new URL(url, data.url).href;
        return (0, _dataurl.fetchAsDataURL)(url, options.fetchRequestInit, ({ result  })=>{
            cssText = cssText.replace(loc, `url(${result})`);
            return [
                loc,
                result
            ];
        });
    });
    return Promise.all(loadFonts).then(()=>cssText);
}
function parseCSS(source) {
    if (source == null) return [];
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, "");
    // eslint-disable-next-line prefer-regex-literals
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    // eslint-disable-next-line no-constant-condition
    while(true){
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) break;
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    // eslint-disable-next-line no-constant-condition
    while(true){
        let matches1 = importRegex.exec(cssText);
        if (matches1 === null) {
            matches1 = unifiedRegex.exec(cssText);
            if (matches1 === null) break;
            else importRegex.lastIndex = unifiedRegex.lastIndex;
        } else unifiedRegex.lastIndex = importRegex.lastIndex;
        result.push(matches1[0]);
    }
    return result;
}
async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    // First loop inlines imports
    styleSheets.forEach((sheet)=>{
        if ("cssRules" in sheet) try {
            (0, _util.toArray)(sheet.cssRules || []).forEach((item, index)=>{
                if (item.type === CSSRule.IMPORT_RULE) {
                    let importIndex = index + 1;
                    const url = item.href;
                    const deferred = fetchCSS(url).then((metadata)=>embedFonts(metadata, options)).then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                            try {
                                sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
                            } catch (error) {
                                console.error("Error inserting rule from remote css", {
                                    rule,
                                    error
                                });
                            }
                        })).catch((e)=>{
                        console.error("Error loading remote css", e.toString());
                    });
                    deferreds.push(deferred);
                }
            });
        } catch (e) {
            const inline = styleSheets.find((a)=>a.href == null) || document.styleSheets[0];
            if (sheet.href != null) deferreds.push(fetchCSS(sheet.href).then((metadata)=>embedFonts(metadata, options)).then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                    inline.insertRule(rule, sheet.cssRules.length);
                })).catch((err)=>{
                console.error("Error loading remote stylesheet", err.toString());
            }));
            console.error("Error inlining remote css file", e.toString());
        }
    });
    return Promise.all(deferreds).then(()=>{
        // Second loop parses rules
        styleSheets.forEach((sheet)=>{
            if ("cssRules" in sheet) try {
                (0, _util.toArray)(sheet.cssRules || []).forEach((item)=>{
                    ret.push(item);
                });
            } catch (e) {
                console.error(`Error while reading CSS rules from ${sheet.href}`, e.toString());
            }
        });
        return ret;
    });
}
function getWebFontRules(cssRules) {
    return cssRules.filter((rule)=>rule.type === CSSRule.FONT_FACE_RULE).filter((rule)=>(0, _embedResources.shouldEmbed)(rule.style.getPropertyValue("src")));
}
async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) throw new Error("Provided element is not within a Document");
    const styleSheets = (0, _util.toArray)(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
}
async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const cssTexts = await Promise.all(rules.map((rule)=>{
        const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return (0, _embedResources.embedResources)(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join("\n");
}
async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
    if (cssText) {
        const styleNode = document.createElement("style");
        const sytleContent = document.createTextNode(cssText);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        else clonedNode.appendChild(styleNode);
    }
}

},{"./util":"eIddd","./dataurl":"a60cP","./embed-resources":"7yOGJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9wwDe"], null, "parcelRequire2f2b")

//# sourceMappingURL=es.113d4d41.js.map
