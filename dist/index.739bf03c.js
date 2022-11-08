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
})({"cVgJb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
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

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _pymJs = require("pym.js");
var _pymJsDefault = parcelHelpers.interopDefault(_pymJs);
const { history , title , location  } = window;
const $ = (selector)=>document.querySelector(selector);
const setQueryParams = (params)=>{
    history.replaceState(null, title, `?${params.toString()}`);
};
const getQueryParams = ()=>new URLSearchParams(location.search.slice(1));
const setWidth = (width)=>{
    $("#graphic").style.width = `${width}px`;
    const params = getQueryParams();
    params.set("width", width);
    setQueryParams(params);
};
// https://www.freecodecamp.org/news/javascript-debounce-example/
function debounce(func, timeout = 300) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}
window.onload = async ()=>{
    const graphic = $("#graphic");
    // Set the width on load if exists
    const params = getQueryParams();
    const { entries  } = await require("f6213b555e533be0");
    let entry = params.get("entry") ?? Object.keys(entries)[0];
    if (!Object.hasOwn(entries, entry)) {
        params.delete("entry");
        setQueryParams(params);
        entry = Object.keys(entries)[0];
    }
    let parent = new (0, _pymJsDefault.default).Parent("graphic", `./graphic/${entry}`, {});
    const viewRaw = $("#view-raw");
    viewRaw.href = `./graphic/${entry}`;
    const urlInput = $("#url-input");
    urlInput.value = `${location.origin + location.pathname}graphic/${entry}`;
    urlInput.size = urlInput.value.length;
    const entrypointSelect = $("#entrypoint-select");
    Object.keys(entries).forEach((key)=>{
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        if (key === entry) option.selected = true;
        entrypointSelect.appendChild(option);
    });
    entrypointSelect.disabled = Object.keys(entries).length <= 1;
    entrypointSelect.addEventListener("change", (e)=>{
        urlInput.value = `${location.origin + location.pathname}graphic/${e.target.value}`;
        urlInput.size = urlInput.value.length;
        viewRaw.href = `./graphic/${e.target.value}`;
        params.set("entry", e.target.value);
        setQueryParams(params);
        parent.remove();
        parent = new (0, _pymJsDefault.default).Parent("graphic", `./graphic/${e.target.value}`, {});
    });
    if (params.has("width")) setWidth(params.get("width"));
    const resizeObserver = new ResizeObserver(debounce(([e])=>{
        setWidth(e.contentRect.width);
    }));
    resizeObserver.observe(graphic);
    $("#desktop-preview").addEventListener("click", ()=>{
        setWidth(780);
    });
    $("#small-mobile-preview").addEventListener("click", ()=>{
        setWidth(288);
    });
    $("#large-mobile-preview").addEventListener("click", ()=>{
        setWidth(338);
    });
    const copyButton = $("#copy-url-button");
    copyButton.addEventListener("click", ()=>{
        urlInput.select();
        urlInput.setSelectionRange(0, urlInput.value.length);
        document.execCommand("copy");
        copyButton.innerHTML = "Copied!";
    });
    $("#download-png").addEventListener("click", ()=>{
        parent.sendMessage("download", JSON.stringify({
            format: "png",
            width: graphic.clientWidth
        }));
    });
    $("#download-svg").addEventListener("click", ()=>{
        parent.sendMessage("download", JSON.stringify({
            format: "svg",
            width: graphic.clientWidth
        }));
    });
};

},{"pym.js":"21u1Q","f6213b555e533be0":"lAj79","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21u1Q":[function(require,module,exports) {
/*! pym.js - v1.3.2 - 2018-02-13 */ /*
* Pym.js is library that resizes an iframe based on the width of the parent and the resulting height of the child.
* Check out the docs at http://blog.apps.npr.org/pym.js/ or the readme at README.md for usage.
*/ /** @module pym */ (function(factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else if (module.exports) module.exports = factory();
    else window.pym = factory.call(this);
})(function() {
    var MESSAGE_DELIMITER = "xPYMx";
    var lib = {};
    /**
    * Create and dispatch a custom pym event
    *
    * @method _raiseCustomEvent
    * @inner
    *
    * @param {String} eventName
    */ var _raiseCustomEvent = function(eventName) {
        var event = document.createEvent("Event");
        event.initEvent("pym:" + eventName, true, true);
        document.dispatchEvent(event);
    };
    /**
    * Generic function for parsing URL params.
    * Via http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    *
    * @method _getParameterByName
    * @inner
    *
    * @param {String} name The name of the paramter to get from the URL.
    */ var _getParameterByName = function(name) {
        var regex = new RegExp("[\\?&]" + name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)");
        var results = regex.exec(location.search);
        if (results === null) return "";
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    /**
     * Check the message to make sure it comes from an acceptable xdomain.
     * Defaults to '*' but can be overriden in config.
     *
     * @method _isSafeMessage
     * @inner
     *
     * @param {Event} e The message event.
     * @param {Object} settings Configuration.
     */ var _isSafeMessage = function(e, settings) {
        if (settings.xdomain !== "*") {
            // If origin doesn't match our xdomain, return.
            if (!e.origin.match(new RegExp(settings.xdomain + "$"))) return;
        }
        // Ignore events that do not carry string data #151
        if (typeof e.data !== "string") return;
        return true;
    };
    var _isSafeUrl = function(url) {
        // Adapted from angular 2 url sanitizer
        var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;
        if (!url.match(SAFE_URL_PATTERN)) return;
        return true;
    };
    /**
     * Construct a message to send between frames.
     *
     * NB: We use string-building here because JSON message passing is
     * not supported in all browsers.
     *
     * @method _makeMessage
     * @inner
     *
     * @param {String} id The unique id of the message recipient.
     * @param {String} messageType The type of message to send.
     * @param {String} message The message to send.
     */ var _makeMessage = function(id, messageType, message) {
        var bits = [
            "pym",
            id,
            messageType,
            message
        ];
        return bits.join(MESSAGE_DELIMITER);
    };
    /**
     * Construct a regex to validate and parse messages.
     *
     * @method _makeMessageRegex
     * @inner
     *
     * @param {String} id The unique id of the message recipient.
     */ var _makeMessageRegex = function(id) {
        var bits = [
            "pym",
            id,
            "(\\S+)",
            "(.*)"
        ];
        return new RegExp("^" + bits.join(MESSAGE_DELIMITER) + "$");
    };
    /**
    * Underscore implementation of getNow
    *
    * @method _getNow
    * @inner
    *
    */ var _getNow = Date.now || function() {
        return new Date().getTime();
    };
    /**
    * Underscore implementation of throttle
    *
    * @method _throttle
    * @inner
    *
    * @param {function} func Throttled function
    * @param {number} wait Throttle wait time
    * @param {object} options Throttle settings
    */ var _throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : _getNow();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _getNow();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) timeout = setTimeout(later, remaining);
            return result;
        };
    };
    /**
     * Clean autoInit Instances: those that point to contentless iframes
     * @method _cleanAutoInitInstances
     * @inner
     */ var _cleanAutoInitInstances = function() {
        var length = lib.autoInitInstances.length;
        // Loop backwards to avoid index issues
        for(var idx = length - 1; idx >= 0; idx--){
            var instance = lib.autoInitInstances[idx];
            // If instance has been removed or is contentless then remove it
            if (instance.el.getElementsByTagName("iframe").length && instance.el.getElementsByTagName("iframe")[0].contentWindow) continue;
            else // Remove the reference to the removed or orphan instance
            lib.autoInitInstances.splice(idx, 1);
        }
    };
    /**
     * Store auto initialized Pym instances for further reference
     * @name module:pym#autoInitInstances
     * @type Array
     * @default []
     */ lib.autoInitInstances = [];
    /**
     * Initialize Pym for elements on page that have data-pym attributes.
     * Expose autoinit in case we need to call it from the outside
     * @instance
     * @method autoInit
     * @param {Boolean} doNotRaiseEvents flag to avoid sending custom events
     */ lib.autoInit = function(doNotRaiseEvents) {
        var elements = document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])");
        var length = elements.length;
        // Clean stored instances in case needed
        _cleanAutoInitInstances();
        for(var idx = 0; idx < length; ++idx){
            var element = elements[idx];
            /*
            * Mark automatically-initialized elements so they are not
            * re-initialized if the user includes pym.js more than once in the
            * same document.
            */ element.setAttribute("data-pym-auto-initialized", "");
            // Ensure elements have an id
            if (element.id === "") element.id = "pym-" + idx + "-" + Math.random().toString(36).substr(2, 5);
            var src = element.getAttribute("data-pym-src");
            // List of data attributes to configure the component
            // structure: {'attribute name': 'type'}
            var settings = {
                "xdomain": "string",
                "title": "string",
                "name": "string",
                "id": "string",
                "sandbox": "string",
                "allowfullscreen": "boolean",
                "parenturlparam": "string",
                "parenturlvalue": "string",
                "optionalparams": "boolean",
                "trackscroll": "boolean",
                "scrollwait": "number"
            };
            var config = {};
            for(var attribute in settings)// via https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute#Notes
            if (element.getAttribute("data-pym-" + attribute) !== null) switch(settings[attribute]){
                case "boolean":
                    config[attribute] = !(element.getAttribute("data-pym-" + attribute) === "false"); // jshint ignore:line
                    break;
                case "string":
                    config[attribute] = element.getAttribute("data-pym-" + attribute);
                    break;
                case "number":
                    var n = Number(element.getAttribute("data-pym-" + attribute));
                    if (!isNaN(n)) config[attribute] = n;
                    break;
                default:
                    console.err("unrecognized attribute type");
            }
            // Store references to autoinitialized pym instances
            var parent = new lib.Parent(element.id, src, config);
            lib.autoInitInstances.push(parent);
        }
        // Fire customEvent
        if (!doNotRaiseEvents) _raiseCustomEvent("pym-initialized");
        // Return stored autoinitalized pym instances
        return lib.autoInitInstances;
    };
    /**
     * The Parent half of a response iframe.
     *
     * @memberof module:pym
     * @class Parent
     * @param {String} id The id of the div into which the iframe will be rendered. sets {@link module:pym.Parent~id}
     * @param {String} url The url of the iframe source. sets {@link module:pym.Parent~url}
     * @param {Object} [config] Configuration for the parent instance. sets {@link module:pym.Parent~settings}
     * @param {string} [config.xdomain='*'] - xdomain to validate messages received
     * @param {string} [config.title] - if passed it will be assigned to the iframe title attribute
     * @param {string} [config.name] - if passed it will be assigned to the iframe name attribute
     * @param {string} [config.id] - if passed it will be assigned to the iframe id attribute
     * @param {boolean} [config.allowfullscreen] - if passed and different than false it will be assigned to the iframe allowfullscreen attribute
     * @param {string} [config.sandbox] - if passed it will be assigned to the iframe sandbox attribute (we do not validate the syntax so be careful!!)
     * @param {string} [config.parenturlparam] - if passed it will be override the default parentUrl query string parameter name passed to the iframe src
     * @param {string} [config.parenturlvalue] - if passed it will be override the default parentUrl query string parameter value passed to the iframe src
     * @param {string} [config.optionalparams] - if passed and different than false it will strip the querystring params parentUrl and parentTitle passed to the iframe src
     * @param {boolean} [config.trackscroll] - if passed it will activate scroll tracking on the parent
     * @param {number} [config.scrollwait] - if passed it will set the throttle wait in order to fire scroll messaging. Defaults to 100 ms.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe iFrame}
     */ lib.Parent = function(id, url, config) {
        /**
         * The id of the container element
         *
         * @memberof module:pym.Parent
         * @member {string} id
         * @inner
         */ this.id = id;
        /**
         * The url that will be set as the iframe's src
         *
         * @memberof module:pym.Parent
         * @member {String} url
         * @inner
         */ this.url = url;
        /**
         * The container DOM object
         *
         * @memberof module:pym.Parent
         * @member {HTMLElement} el
         * @inner
         */ this.el = document.getElementById(id);
        /**
         * The contained child iframe
         *
         * @memberof module:pym.Parent
         * @member {HTMLElement} iframe
         * @inner
         * @default null
         */ this.iframe = null;
        /**
         * The parent instance settings, updated by the values passed in the config object
         *
         * @memberof module:pym.Parent
         * @member {Object} settings
         * @inner
         */ this.settings = {
            xdomain: "*",
            optionalparams: true,
            parenturlparam: "parentUrl",
            parenturlvalue: window.location.href,
            trackscroll: false,
            scrollwait: 100
        };
        /**
         * RegularExpression to validate the received messages
         *
         * @memberof module:pym.Parent
         * @member {String} messageRegex
         * @inner
         */ this.messageRegex = _makeMessageRegex(this.id);
        /**
         * Stores the registered messageHandlers for each messageType
         *
         * @memberof module:pym.Parent
         * @member {Object} messageHandlers
         * @inner
         */ this.messageHandlers = {};
        // ensure a config object
        config = config || {};
        /**
         * Construct the iframe.
         *
         * @memberof module:pym.Parent
         * @method _constructIframe
         * @inner
         */ this._constructIframe = function() {
            // Calculate the width of this element.
            var width = this.el.offsetWidth.toString();
            // Create an iframe element attached to the document.
            this.iframe = document.createElement("iframe");
            // Save fragment id
            var hash = "";
            var hashIndex = this.url.indexOf("#");
            if (hashIndex > -1) {
                hash = this.url.substring(hashIndex, this.url.length);
                this.url = this.url.substring(0, hashIndex);
            }
            // If the URL contains querystring bits, use them.
            // Otherwise, just create a set of valid params.
            if (this.url.indexOf("?") < 0) this.url += "?";
            else this.url += "&";
            // Append the initial width as a querystring parameter
            // and optional params if configured to do so
            this.iframe.src = this.url + "initialWidth=" + width + "&childId=" + this.id;
            if (this.settings.optionalparams) {
                this.iframe.src += "&parentTitle=" + encodeURIComponent(document.title);
                this.iframe.src += "&" + this.settings.parenturlparam + "=" + encodeURIComponent(this.settings.parenturlvalue);
            }
            this.iframe.src += hash;
            // Set some attributes to this proto-iframe.
            this.iframe.setAttribute("width", "100%");
            this.iframe.setAttribute("scrolling", "no");
            this.iframe.setAttribute("marginheight", "0");
            this.iframe.setAttribute("frameborder", "0");
            if (this.settings.title) this.iframe.setAttribute("title", this.settings.title);
            if (this.settings.allowfullscreen !== undefined && this.settings.allowfullscreen !== false) this.iframe.setAttribute("allowfullscreen", "");
            if (this.settings.sandbox !== undefined && typeof this.settings.sandbox === "string") this.iframe.setAttribute("sandbox", this.settings.sandbox);
            if (this.settings.id) {
                if (!document.getElementById(this.settings.id)) this.iframe.setAttribute("id", this.settings.id);
            }
            if (this.settings.name) this.iframe.setAttribute("name", this.settings.name);
            // Replace the child content if needed
            // (some CMSs might strip out empty elements)
            while(this.el.firstChild)this.el.removeChild(this.el.firstChild);
            // Append the iframe to our element.
            this.el.appendChild(this.iframe);
            // Add an event listener that will handle redrawing the child on resize.
            window.addEventListener("resize", this._onResize);
            // Add an event listener that will send the child the viewport.
            if (this.settings.trackscroll) window.addEventListener("scroll", this._throttleOnScroll);
        };
        /**
         * Send width on resize.
         *
         * @memberof module:pym.Parent
         * @method _onResize
         * @inner
         */ this._onResize = (function() {
            this.sendWidth();
            if (this.settings.trackscroll) this.sendViewportAndIFramePosition();
        }).bind(this);
        /**
         * Send viewport and iframe info on scroll.
         *
         * @memberof module:pym.Parent
         * @method _onScroll
         * @inner
         */ this._onScroll = (function() {
            this.sendViewportAndIFramePosition();
        }).bind(this);
        /**
         * Fire all event handlers for a given message type.
         *
         * @memberof module:pym.Parent
         * @method _fire
         * @inner
         *
         * @param {String} messageType The type of message.
         * @param {String} message The message data.
         */ this._fire = function(messageType, message) {
            if (messageType in this.messageHandlers) for(var i = 0; i < this.messageHandlers[messageType].length; i++)this.messageHandlers[messageType][i].call(this, message);
        };
        /**
         * Remove this parent from the page and unbind it's event handlers.
         *
         * @memberof module:pym.Parent
         * @method remove
         * @instance
         */ this.remove = function() {
            window.removeEventListener("message", this._processMessage);
            window.removeEventListener("resize", this._onResize);
            this.el.removeChild(this.iframe);
            // _cleanAutoInitInstances in case this parent was autoInitialized
            _cleanAutoInitInstances();
        };
        /**
         * Process a new message from the child.
         *
         * @memberof module:pym.Parent
         * @method _processMessage
         * @inner
         *
         * @param {Event} e A message event.
         */ this._processMessage = (function(e) {
            // First, punt if this isn't from an acceptable xdomain.
            if (!_isSafeMessage(e, this.settings)) return;
            // Discard object messages, we only care about strings
            if (typeof e.data !== "string") return;
            // Grab the message from the child and parse it.
            var match = e.data.match(this.messageRegex);
            // If there's no match or too many matches in the message, punt.
            if (!match || match.length !== 3) return false;
            var messageType = match[1];
            var message = match[2];
            this._fire(messageType, message);
        }).bind(this);
        /**
         * Resize iframe in response to new height message from child.
         *
         * @memberof module:pym.Parent
         * @method _onHeightMessage
         * @inner
         *
         * @param {String} message The new height.
         */ this._onHeightMessage = function(message) {
            /*
             * Handle parent height message from child.
             */ var height = parseInt(message);
            this.iframe.setAttribute("height", height + "px");
        };
        /**
         * Navigate parent to a new url.
         *
         * @memberof module:pym.Parent
         * @method _onNavigateToMessage
         * @inner
         *
         * @param {String} message The url to navigate to.
         */ this._onNavigateToMessage = function(message) {
            /*
             * Handle parent scroll message from child.
             */ if (!_isSafeUrl(message)) return;
            document.location.href = message;
        };
        /**
         * Scroll parent to a given child position.
         *
         * @memberof module:pym.Parent
         * @method _onScrollToChildPosMessage
         * @inner
         *
         * @param {String} message The offset inside the child page.
         */ this._onScrollToChildPosMessage = function(message) {
            // Get the child container position using getBoundingClientRect + pageYOffset
            // via https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
            var iframePos = document.getElementById(this.id).getBoundingClientRect().top + window.pageYOffset;
            var totalOffset = iframePos + parseInt(message);
            window.scrollTo(0, totalOffset);
        };
        /**
         * Bind a callback to a given messageType from the child.
         *
         * Reserved message names are: "height", "scrollTo" and "navigateTo".
         *
         * @memberof module:pym.Parent
         * @method onMessage
         * @instance
         *
         * @param {String} messageType The type of message being listened for.
         * @param {module:pym.Parent~onMessageCallback} callback The callback to invoke when a message of the given type is received.
         */ this.onMessage = function(messageType, callback) {
            if (!(messageType in this.messageHandlers)) this.messageHandlers[messageType] = [];
            this.messageHandlers[messageType].push(callback);
        };
        /**
         * @callback module:pym.Parent~onMessageCallback
         * @param {String} message The message data.
         */ /**
         * Send a message to the the child.
         *
         * @memberof module:pym.Parent
         * @method sendMessage
         * @instance
         *
         * @param {String} messageType The type of message to send.
         * @param {String} message The message data to send.
         */ this.sendMessage = function(messageType, message) {
            // When used alongside with pjax some references are lost
            if (this.el.getElementsByTagName("iframe").length) {
                if (this.el.getElementsByTagName("iframe")[0].contentWindow) this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(_makeMessage(this.id, messageType, message), "*");
                else // Contentless child detected remove listeners and iframe
                this.remove();
            }
        };
        /**
         * Transmit the current iframe width to the child.
         *
         * You shouldn't need to call this directly.
         *
         * @memberof module:pym.Parent
         * @method sendWidth
         * @instance
         */ this.sendWidth = function() {
            var width = this.el.offsetWidth.toString();
            this.sendMessage("width", width);
        };
        /**
         * Transmit the current viewport and iframe position to the child.
         * Sends viewport width, viewport height
         * and iframe bounding rect top-left-bottom-right
         * all separated by spaces
         *
         * You shouldn't need to call this directly.
         *
         * @memberof module:pym.Parent
         * @method sendViewportAndIFramePosition
         * @instance
         */ this.sendViewportAndIFramePosition = function() {
            var iframeRect = this.iframe.getBoundingClientRect();
            var vWidth = window.innerWidth || document.documentElement.clientWidth;
            var vHeight = window.innerHeight || document.documentElement.clientHeight;
            var payload = vWidth + " " + vHeight;
            payload += " " + iframeRect.top + " " + iframeRect.left;
            payload += " " + iframeRect.bottom + " " + iframeRect.right;
            this.sendMessage("viewport-iframe-position", payload);
        };
        // Add any overrides to settings coming from config.
        for(var key in config)this.settings[key] = config[key];
        /**
         * Throttled scroll function.
         *
         * @memberof module:pym.Parent
         * @method _throttleOnScroll
         * @inner
         */ this._throttleOnScroll = _throttle(this._onScroll.bind(this), this.settings.scrollwait);
        // Bind required message handlers
        this.onMessage("height", this._onHeightMessage);
        this.onMessage("navigateTo", this._onNavigateToMessage);
        this.onMessage("scrollToChildPos", this._onScrollToChildPosMessage);
        this.onMessage("parentPositionInfo", this.sendViewportAndIFramePosition);
        // Add a listener for processing messages from the child.
        window.addEventListener("message", this._processMessage, false);
        // Construct the iframe in the container element.
        this._constructIframe();
        return this;
    };
    /**
     * The Child half of a responsive iframe.
     *
     * @memberof module:pym
     * @class Child
     * @param {Object} [config] Configuration for the child instance. sets {@link module:pym.Child~settings}
     * @param {function} [config.renderCallback=null] Callback invoked after receiving a resize event from the parent, sets {@link module:pym.Child#settings.renderCallback}
     * @param {string} [config.xdomain='*'] - xdomain to validate messages received
     * @param {number} [config.polling=0] - polling frequency in milliseconds to send height to parent
     * @param {number} [config.id] - parent container id used when navigating the child iframe to a new page but we want to keep it responsive.
     * @param {string} [config.parenturlparam] - if passed it will be override the default parentUrl query string parameter name expected on the iframe src
     */ lib.Child = function(config) {
        /**
         * The initial width of the parent page
         *
         * @memberof module:pym.Child
         * @member {string} parentWidth
         * @inner
         */ this.parentWidth = null;
        /**
         * The id of the parent container
         *
         * @memberof module:pym.Child
         * @member {String} id
         * @inner
         */ this.id = null;
        /**
         * The title of the parent page from document.title.
         *
         * @memberof module:pym.Child
         * @member {String} parentTitle
         * @inner
         */ this.parentTitle = null;
        /**
         * The URL of the parent page from window.location.href.
         *
         * @memberof module:pym.Child
         * @member {String} parentUrl
         * @inner
         */ this.parentUrl = null;
        /**
         * The settings for the child instance. Can be overriden by passing a config object to the child constructor
         * i.e.: var pymChild = new pym.Child({renderCallback: render, xdomain: "\\*\.npr\.org"})
         *
         * @memberof module:pym.Child.settings
         * @member {Object} settings - default settings for the child instance
         * @inner
         */ this.settings = {
            renderCallback: null,
            xdomain: "*",
            polling: 0,
            parenturlparam: "parentUrl"
        };
        /**
         * The timerId in order to be able to stop when polling is enabled
         *
         * @memberof module:pym.Child
         * @member {String} timerId
         * @inner
         */ this.timerId = null;
        /**
         * RegularExpression to validate the received messages
         *
         * @memberof module:pym.Child
         * @member {String} messageRegex
         * @inner
         */ this.messageRegex = null;
        /**
         * Stores the registered messageHandlers for each messageType
         *
         * @memberof module:pym.Child
         * @member {Object} messageHandlers
         * @inner
         */ this.messageHandlers = {};
        // Ensure a config object
        config = config || {};
        /**
         * Bind a callback to a given messageType from the child.
         *
         * Reserved message names are: "width".
         *
         * @memberof module:pym.Child
         * @method onMessage
         * @instance
         *
         * @param {String} messageType The type of message being listened for.
         * @param {module:pym.Child~onMessageCallback} callback The callback to invoke when a message of the given type is received.
         */ this.onMessage = function(messageType, callback) {
            if (!(messageType in this.messageHandlers)) this.messageHandlers[messageType] = [];
            this.messageHandlers[messageType].push(callback);
        };
        /**
         * @callback module:pym.Child~onMessageCallback
         * @param {String} message The message data.
         */ /**
         * Fire all event handlers for a given message type.
         *
         * @memberof module:pym.Child
         * @method _fire
         * @inner
         *
         * @param {String} messageType The type of message.
         * @param {String} message The message data.
         */ this._fire = function(messageType, message) {
            /*
             * Fire all event handlers for a given message type.
             */ if (messageType in this.messageHandlers) for(var i = 0; i < this.messageHandlers[messageType].length; i++)this.messageHandlers[messageType][i].call(this, message);
        };
        /**
         * Process a new message from the parent.
         *
         * @memberof module:pym.Child
         * @method _processMessage
         * @inner
         *
         * @param {Event} e A message event.
         */ this._processMessage = (function(e) {
            /*
            * Process a new message from parent frame.
            */ // First, punt if this isn't from an acceptable xdomain.
            if (!_isSafeMessage(e, this.settings)) return;
            // Discard object messages, we only care about strings
            if (typeof e.data !== "string") return;
            // Get the message from the parent.
            var match = e.data.match(this.messageRegex);
            // If there's no match or it's a bad format, punt.
            if (!match || match.length !== 3) return;
            var messageType = match[1];
            var message = match[2];
            this._fire(messageType, message);
        }).bind(this);
        /**
         * Resize iframe in response to new width message from parent.
         *
         * @memberof module:pym.Child
         * @method _onWidthMessage
         * @inner
         *
         * @param {String} message The new width.
         */ this._onWidthMessage = function(message) {
            /*
             * Handle width message from the child.
             */ var width = parseInt(message);
            // Change the width if it's different.
            if (width !== this.parentWidth) {
                this.parentWidth = width;
                // Call the callback function if it exists.
                if (this.settings.renderCallback) this.settings.renderCallback(width);
                // Send the height back to the parent.
                this.sendHeight();
            }
        };
        /**
         * Send a message to the the Parent.
         *
         * @memberof module:pym.Child
         * @method sendMessage
         * @instance
         *
         * @param {String} messageType The type of message to send.
         * @param {String} message The message data to send.
         */ this.sendMessage = function(messageType, message) {
            /*
             * Send a message to the parent.
             */ window.parent.postMessage(_makeMessage(this.id, messageType, message), "*");
        };
        /**
         * Transmit the current iframe height to the parent.
         *
         * Call this directly in cases where you manually alter the height of the iframe contents.
         *
         * @memberof module:pym.Child
         * @method sendHeight
         * @instance
         */ this.sendHeight = (function() {
            // Get the child's height.
            var height = document.getElementsByTagName("body")[0].offsetHeight.toString();
            // Send the height to the parent.
            this.sendMessage("height", height);
            return height;
        }).bind(this);
        /**
         * Ask parent to send the current viewport and iframe position information
         *
         * @memberof module:pym.Child
         * @method sendHeight
         * @instance
         */ this.getParentPositionInfo = function() {
            // Send the height to the parent.
            this.sendMessage("parentPositionInfo");
        };
        /**
         * Scroll parent to a given element id.
         *
         * @memberof module:pym.Child
         * @method scrollParentTo
         * @instance
         *
         * @param {String} hash The id of the element to scroll to.
         */ this.scrollParentTo = function(hash) {
            this.sendMessage("navigateTo", "#" + hash);
        };
        /**
         * Navigate parent to a given url.
         *
         * @memberof module:pym.Child
         * @method navigateParentTo
         * @instance
         *
         * @param {String} url The url to navigate to.
         */ this.navigateParentTo = function(url) {
            this.sendMessage("navigateTo", url);
        };
        /**
         * Scroll parent to a given child element id.
         *
         * @memberof module:pym.Child
         * @method scrollParentToChildEl
         * @instance
         *
         * @param {String} id The id of the child element to scroll to.
         */ this.scrollParentToChildEl = function(id) {
            // Get the child element position using getBoundingClientRect + pageYOffset
            // via https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
            var topPos = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset;
            this.scrollParentToChildPos(topPos);
        };
        /**
         * Scroll parent to a particular child offset.
         *
         * @memberof module:pym.Child
         * @method scrollParentToChildPos
         * @instance
         *
         * @param {Number} pos The offset of the child element to scroll to.
         */ this.scrollParentToChildPos = function(pos) {
            this.sendMessage("scrollToChildPos", pos.toString());
        };
        /**
         * Mark Whether the child is embedded or not
         * executes a callback in case it was passed to the config
         *
         * @memberof module:pym.Child
         * @method _markWhetherEmbedded
         * @inner
         *
         * @param {module:pym.Child~onMarkedEmbeddedStatus} The callback to execute after determining whether embedded or not.
         */ var _markWhetherEmbedded = function(onMarkedEmbeddedStatus) {
            var htmlElement = document.getElementsByTagName("html")[0], newClassForHtml, originalHtmlClasses = htmlElement.className;
            try {
                if (window.self !== window.top) newClassForHtml = "embedded";
                else newClassForHtml = "not-embedded";
            } catch (e) {
                newClassForHtml = "embedded";
            }
            if (originalHtmlClasses.indexOf(newClassForHtml) < 0) {
                htmlElement.className = originalHtmlClasses ? originalHtmlClasses + " " + newClassForHtml : newClassForHtml;
                if (onMarkedEmbeddedStatus) onMarkedEmbeddedStatus(newClassForHtml);
                _raiseCustomEvent("marked-embedded");
            }
        };
        /**
         * @callback module:pym.Child~onMarkedEmbeddedStatus
         * @param {String} classname "embedded" or "not-embedded".
         */ /**
         * Unbind child event handlers and timers.
         *
         * @memberof module:pym.Child
         * @method remove
         * @instance
         */ this.remove = function() {
            window.removeEventListener("message", this._processMessage);
            if (this.timerId) clearInterval(this.timerId);
        };
        // Initialize settings with overrides.
        for(var key in config)this.settings[key] = config[key];
        // Identify what ID the parent knows this child as.
        this.id = _getParameterByName("childId") || config.id;
        this.messageRegex = new RegExp("^pym" + MESSAGE_DELIMITER + this.id + MESSAGE_DELIMITER + "(\\S+)" + MESSAGE_DELIMITER + "(.*)$");
        // Get the initial width from a URL parameter.
        var width = parseInt(_getParameterByName("initialWidth"));
        // Get the url of the parent frame
        this.parentUrl = _getParameterByName(this.settings.parenturlparam);
        // Get the title of the parent frame
        this.parentTitle = _getParameterByName("parentTitle");
        // Bind the required message handlers
        this.onMessage("width", this._onWidthMessage);
        // Set up a listener to handle any incoming messages.
        window.addEventListener("message", this._processMessage, false);
        // If there's a callback function, call it.
        if (this.settings.renderCallback) this.settings.renderCallback(width);
        // Send the initial height to the parent.
        this.sendHeight();
        // If we're configured to poll, create a setInterval to handle that.
        if (this.settings.polling) this.timerId = window.setInterval(this.sendHeight, this.settings.polling);
        _markWhetherEmbedded(config.onMarkedEmbeddedStatus);
        return this;
    };
    // Initialize elements with pym data attributes
    // if we are not in server configuration
    if (typeof document !== "undefined") lib.autoInit(true);
    return lib;
});

},{}],"lAj79":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("g05j8") + "config.5a1d99b7.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("ebWHc"));

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("../cacheLoader");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequire2f2b")

//# sourceMappingURL=index.739bf03c.js.map
