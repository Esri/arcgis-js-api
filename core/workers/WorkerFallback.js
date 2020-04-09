// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../global","./RemoteClient","./utils","@dojo/framework/shim/Promise"],(function(e,t,r,n,s,o,i){var a=function(){var e=this,t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((function(r){e[r]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t[r].apply(t,e)}}))},u=s.MutationObserver||s.WebKitMutationObserver,c=function(){var e;if(s.process&&s.process.nextTick)e=function(e){s.process.nextTick(e)};else if(s.Promise)e=function(e){s.Promise.resolve().then(e)};else if(u){var t=[],r=document.createElement("div");new u((function(){for(;t.length>0;)t.shift()()})).observe(r,{attributes:!0}),e=function(e){t.push(e),r.setAttribute("queueStatus","1")}}return e}(),d=function(){var e=s.MessageEvent;try{new e("message",{data:null})}catch(e){return function(e,t){void 0===t&&(t={});var r=t.data,n=t.bubbles,s=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=document.createEvent("Event");return a.initEvent(e,s,i),a.data=r,a}}return function(t,r){return new e(t,r)}}();return function(){function t(){this._dispatcher=new a,this._isInitialized=!1,this._workerPostMessage({type:i.MessageType.HANDSHAKE})}return t.prototype.terminate=function(){},Object.defineProperty(t.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),t.prototype.postMessage=function(e){var t=this;c((function(){t._workerMessageHandler(d("message",{data:e}))}))},t.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},t.prototype.addEventListener=function(e,t,r){this._dispatcher.addEventListener(e,t,r)},t.prototype.removeEventListener=function(e,t,r){this._dispatcher.removeEventListener(e,t,r)},t.prototype._workerPostMessage=function(e){var t=this;c((function(){t.dispatchEvent(d("message",{data:e}))}))},t.prototype._workerMessageHandler=function(t){return n(this,void 0,void 0,(function(){var n,s,a,u,c;return r(this,(function(r){switch(r.label){case 0:if(!(n=i.receiveMessage(t)))return[2];switch(n.type){case i.MessageType.CONFIGURE:return[3,1];case i.MessageType.OPEN:return[3,2]}return[3,6];case 1:return this._isInitialized||this._workerPostMessage({type:i.MessageType.CONFIGURED}),[3,6];case 2:return s=n.modulePath,a=n.jobId,[4,o.loadWorker(s)];case 3:return(u=r.sent())?[3,5]:[4,new Promise((function(t,r){e([s],t,r)}))];case 4:u=r.sent(),r.label=5;case 5:return c=o.connect(u),this._workerPostMessage({type:i.MessageType.OPENED,jobId:a,data:c}),[3,6];case 6:return[2]}}))}))},t}()}));