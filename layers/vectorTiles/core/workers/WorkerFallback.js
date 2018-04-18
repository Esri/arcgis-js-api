// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/has","../global","./utils"],function(e,r,t,s,n){var i=function(){function e(){var e=this,r=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(t){e[t]=function(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];return r[t].apply(r,e)}})}return e}(),o=s.MutationObserver||s.WebKitMutationObserver,a=function(){var e;if(s.process&&s.process.nextTick)e=function(e){s.process.nextTick(e)};else if(s.Promise)e=function(e){s.Promise.resolve().then(e)};else if(o){var r=[],t=document.createElement("div"),n=new o(function(){for(;r.length>0;)r.shift()()});n.observe(t,{attributes:!0}),e=function(e){r.push(e),t.setAttribute("queueStatus","1")}}return e}();return function(){function r(){this._dispatcher=new i,this._isInitialized=!1,this._workerPostMessage({type:n.MessageType.HANDSHAKE})}return r.prototype.terminate=function(){},Object.defineProperty(r.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),r.prototype.postMessage=function(e,r){var t=this;a(function(){t._workerMessageHandler(new MessageEvent("message",{data:e}))})},r.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},r.prototype.addEventListener=function(e,r,t){this._dispatcher.addEventListener(e,r,t)},r.prototype.removeEventListener=function(e,r,t){this._dispatcher.removeEventListener(e,r,t)},r.prototype._workerPostMessage=function(e,r){var t=this;a(function(){t.dispatchEvent(new MessageEvent("message",{data:e}))})},r.prototype._workerMessageHandler=function(r){var s=this,i=n.receiveMessage(r);if(i){var o=i.jobId;switch(i.type){case n.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:n.MessageType.CONFIGURED});break;case n.MessageType.OPEN:var a=i.modulePath;t("esri-webpack")?e(["esri/core/workers/RemoteClient","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker",a],function(e,r,t,i,a,c,u){var d;switch(u){case"esri/views/vectorTiles/WorkerTileHandler":d=r;break;case"esri/views/2d/layers/features/Pipeline":d=t;break;case"esri/views/3d/layers/PointCloudWorker":d=i;break;case"esri/views/3d/layers/SceneLayerWorker":d=a;break;case"esri/layers/graphics/sources/support/CSVSourceWorker":d=c;break;default:d=u}var p=e.connect(d);s._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:p})}):e(["esri/core/workers/RemoteClient",a],function(e,r){var t=e.connect(r);s._workerPostMessage({type:n.MessageType.OPENED,jobId:o,data:t})})}}},r}()});