// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var n=function(){return this}(),r=function(){function e(){var e=this,t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(n){e[n]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];return t[n].apply(t,e)}})}return e}(),s=n.MutationObserver||n.WebKitMutationObserver,o=function(){var e;if(n.process&&n.process.nextTick)e=function(e){n.process.nextTick(e)};else if(n.Promise)e=function(e){n.Promise.resolve().then(e)};else if(s){var t=[],r=document.createElement("div"),o=new s(function(){for(;t.length>0;)t.shift()()});o.observe(r,{attributes:!0}),e=function(e){t.push(e),r.setAttribute("queueStatus","1")}}return e}(),i=function(){function t(){this._dispatcher=new r,this._connections={},this._outgoingStaticMessages={},this._isInitialized=!1,this._workerPostMessage({type:"<worker-loaded>"})}return t.prototype.terminate=function(){this._connections={}},Object.defineProperty(t.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),t.prototype.postMessage=function(e,t){var n=this;o(function(){n._workerMessageHandler(new MessageEvent("message",{data:e}))})},t.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},t.prototype.addEventListener=function(e,t,n){this._dispatcher.addEventListener(e,t,n)},t.prototype.removeEventListener=function(e,t,n){this._dispatcher.removeEventListener(e,t,n)},t.prototype._workerPostMessage=function(e,t){var n=this;o(function(){n.dispatchEvent(new MessageEvent("message",{data:e}))})},t.prototype._workerMessageHandler=function(t){var n=this,r=t.data;if(r){var s=r.connection,o=r.type;if("<configure>"===o)this._isInitialized||this._workerPostMessage({type:"<worker-configured>"});else if("<open-connection>"===o){var i=r.data.path,a=r.id;if(this._connections[s])return void this._workerPostMessage({type:"<response>",id:a,connection:s});e(["./WorkerConnection",i],function(e,t){n._connections[s]=new e(t,{postMessage:function(e,t){return n._workerPostMessage(e,t)}},s),n._workerPostMessage({type:"<response>",id:a,data:{connection:s},error:void 0})})}else if("<close-connection>"===o)this._connections[s]&&delete this._connections[s];else if("<static-message>"===o){var c=r.id;if(this._outgoingStaticMessages[c]){var u=this._outgoingStaticMessages[c];delete this._outgoingStaticMessages[c],r.error?u.reject(r.error):u.resolve(r.data)}}else if(o){var d=this._connections[s];d&&d.proxy.message(t)}}},t}();return i});