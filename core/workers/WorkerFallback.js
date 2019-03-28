// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../global","../has","./utils"],function(e,r,t,s,n){var i=function(){function e(){var e=this,r=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(t){e[t]=function(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];return r[t].apply(r,e)}})}return e}(),o=t.MutationObserver||t.WebKitMutationObserver,a=function(){var e;if(t.process&&t.process.nextTick)e=function(e){t.process.nextTick(e)};else if(t.Promise)e=function(e){t.Promise.resolve().then(e)};else if(o){var r=[],s=document.createElement("div"),n=new o(function(){for(;r.length>0;)r.shift()()});n.observe(s,{attributes:!0}),e=function(e){r.push(e),s.setAttribute("queueStatus","1")}}return e}(),c=function(){var e=t.MessageEvent;try{new e("message",{data:null})}catch(e){return function(e,r){void 0===r&&(r={});var t=r.data,s=r.bubbles,n=void 0!==s&&s,i=r.cancelable,o=void 0!==i&&i,a=document.createEvent("Event");return a.initEvent(e,n,o),a.data=t,a}}return function(r,t){return new e(r,t)}}();return function(){function r(){this._dispatcher=new i,this._isInitialized=!1,this._workerPostMessage({type:n.MessageType.HANDSHAKE})}return r.prototype.terminate=function(){},Object.defineProperty(r.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),r.prototype.postMessage=function(e,r){var t=this;a(function(){t._workerMessageHandler(c("message",{data:e}))})},r.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},r.prototype.addEventListener=function(e,r,t){this._dispatcher.addEventListener(e,r,t)},r.prototype.removeEventListener=function(e,r,t){this._dispatcher.removeEventListener(e,r,t)},r.prototype._workerPostMessage=function(e,r){var t=this;a(function(){t.dispatchEvent(c("message",{data:e}))})},r.prototype._workerMessageHandler=function(r){var t=this,i=n.receiveMessage(r);if(i){var o=i.jobId;switch(i.type){case n.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:n.MessageType.CONFIGURED});break;case n.MessageType.OPEN:var a=i.modulePath;s("esri-webpack")?e(["esri/core/workers/RemoteClient","esri/tasks/operations/PBFWorker","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker","esri/layers/support/LercWorker","esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",a],function(e,r,s,i,a,c,u,d,p,l){var v;switch(l){case"esri/tasks/operations/PBFWorker":v=r;break;case"esri/views/vectorTiles/WorkerTileHandler":v=s;break;case"esri/views/2d/layers/features/Pipeline":v=i;break;case"esri/views/3d/layers/PointCloudWorker":v=a;break;case"esri/views/3d/layers/SceneLayerWorker":v=c;break;case"esri/layers/graphics/sources/support/CSVSourceWorker":v=u;break;case"esri/layers/support/LercWorker":v=d;break;case"esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":v=p;break;default:v=l}var g=e.connect(v);t._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:g})}):e(["esri/core/workers/RemoteClient",a],function(e,r){var s=e.connect(r);t._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:s})})}}},r}()});