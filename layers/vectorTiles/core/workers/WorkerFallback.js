// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","dojo/has","../global","./utils"],(function(e,r,s,t,n){var i=function(){var e=this,r=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((function(s){e[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r[s].apply(r,e)}}))},o=t.MutationObserver||t.WebKitMutationObserver,a=function(){var e;if(t.process&&t.process.nextTick)e=function(e){t.process.nextTick(e)};else if(t.Promise)e=function(e){t.Promise.resolve().then(e)};else if(o){var r=[],s=document.createElement("div");new o((function(){for(;r.length>0;)r.shift()()})).observe(s,{attributes:!0}),e=function(e){r.push(e),s.setAttribute("queueStatus","1")}}return e}();return function(){function r(){this._dispatcher=new i,this._isInitialized=!1,this._workerPostMessage({type:n.MessageType.HANDSHAKE})}return r.prototype.terminate=function(){},Object.defineProperty(r.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),r.prototype.postMessage=function(e,r){var s=this;a((function(){s._workerMessageHandler(new MessageEvent("message",{data:e}))}))},r.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},r.prototype.addEventListener=function(e,r,s){this._dispatcher.addEventListener(e,r,s)},r.prototype.removeEventListener=function(e,r,s){this._dispatcher.removeEventListener(e,r,s)},r.prototype._workerPostMessage=function(e,r){var s=this;a((function(){s.dispatchEvent(new MessageEvent("message",{data:e}))}))},r.prototype._workerMessageHandler=function(r){var t=this,i=n.receiveMessage(r);if(i){var o=i.jobId;switch(i.type){case n.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:n.MessageType.CONFIGURED});break;case n.MessageType.OPEN:var a=i.modulePath;s("esri-webpack")?e(["esri/core/workers/RemoteClient","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker","esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",a],(function(e,r,s,i,a,c,d,u){var p;switch(u){case"esri/views/vectorTiles/WorkerTileHandler":p=r;break;case"esri/views/2d/layers/features/Pipeline":p=s;break;case"esri/views/3d/layers/PointCloudWorker":p=i;break;case"esri/views/3d/layers/SceneLayerWorker":p=a;break;case"esri/layers/graphics/sources/support/CSVSourceWorker":p=c;break;case"esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":p=d;break;default:p=u}var l=e.connect(p);t._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:l})})):e(["./RemoteClient",a],(function(e,r){var s=e.connect(r);t._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:s})}))}}},r}()}));