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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/lang","dojo/_base/array"],function(e,t,s){var r=e(null,{constructor:function(){this._requestIds={},this._queue=[]},add:function(e,t){this.contains(e)||(this._requestIds[e]=t,this._queue.push(t))},contains:function(e){return null!=this._requestIds[e]},get:function(e){for(var t,s=[];!this.isEmpty()&&s.length<e;)t=this._queue.pop(),delete this._requestIds[t.id],s.push(t);return s},remove:function(e){if(!this.contains(e))return null;var t=this._requestIds[e];return this._queue.splice(s.indexOf(this._queue,t),1),delete this._requestIds[e],t},isEmpty:function(){return 0===this._queue.length}}),i=e(null,{constructor:function(e){e=t.mixin({loaders:{},contentType:"img",activeRequests:{},numActiveRequests:0,maxActiveRequests:10},e||{}),t.mixin(this,e),this._requestLoadHandler=this._requestLoadHandler.bind(this),this._requestErrorHandler=this._requestErrorHandler.bind(this),this.queue||(this.queue=new r)},paused:!1,pause:function(){this.paused=!0},resume:function(){this.paused=!1,this._next()},load:function(e){var t=e.id;return this.activeRequests[t]||this.queue.contains(t)||(this.queue.add(t,e),this._next()),t},cancel:function(e){var t;this.queue.contains(e)?(t=this.queue.remove(e),this._requestErrorHandler({request:t,canceled:!0})):this.activeRequests[e]&&this.activeRequests[e].cancel()},dispose:function(e){var t=e.contentType||this.contentType,s=this.getLoader(t);s&&s.dispose&&s.dispose(e.data)},registerLoader:function(e,r){t.isArray(e)?s.forEach(e,function(e){this.registerLoader(e,r)}):this.loaders[e.toLowerCase()]=r},getLoader:function(e){e=e.toLowerCase();var t=i.getLoader(e),s=this.loaders[e];return s||t?s||t:null},_next:function(){this.paused||(this.queue.isEmpty()?0===this.numActiveRequests&&(this.running=!1):this.numActiveRequests<this.maxActiveRequests&&this._loadRequests(this.queue.get(this.maxActiveRequests-this.numActiveRequests)))},_loadRequests:function(e){var t,s,r=e.length;for(s=0;r>s;s++)t=e[s],this._loadRequest(t)},_loadRequest:function(e){var t,s=e.contentType||this.contentType,r=this.getLoader(s);this.numActiveRequests++,s?r?(t=r.load(e,this._requestLoadHandler,this._requestErrorHandler),t&&(this.activeRequests[e.id]=t)):(e.error="No loader for contentType:"+s,this._requestErrorHandler({request:e})):(e.error="contentType not set",this._requestErrorHandler({request:e}))},_requestLoadHandler:function(e){this.numActiveRequests--,this.activeRequests[e.request.id]&&delete this.activeRequests[e.request.id],e.canceled?e.request.errorCallback.call(this,e):e.request.loadCallback.call(this,e),this._next()},_requestErrorHandler:function(e){this.activeRequests[e.request.id]&&(this.numActiveRequests--,delete this.activeRequests[e.request.id]),e.request.errorCallback.call(null,e),this._next()}});i.loaders={},i.registerLoader=function(e,r){t.isArray(e)?s.forEach(e,function(e){i.registerLoader(e,r)}):i.loaders[e.toLowerCase()]=r},i.getLoader=function(e){return e=e.toLowerCase(),void 0!==i.loaders[e]?i.loaders[e]:void 0};var n={load:function(e,t,s){var r=document.createElement("img");return r.setAttribute("alt",""),r.onload=function(s){r.onload=r.onerror=null,s.canceled||t.call(this,{request:e,data:r})},r.onerror=function(t){r.onload=r.onerror=null,s.call(this,{request:e,error:t})},r.src=e.url,{cancel:function(){r.onload=r.onerror=null,s.call(this,{request:e,canceled:!0})}}}};return i.registerLoader("img",n),i});