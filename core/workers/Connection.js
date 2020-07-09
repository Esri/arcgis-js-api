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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../handleUtils","../Logger","../promiseUtils","./RemoteClient"],(function(e,t,n,i,r,o){var s=i.getLogger("esri.core.workers.Connection");return function(){function e(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}return Object.defineProperty(e.prototype,"closed",{get:function(){return!this._clients||!this._clients.length},enumerable:!0,configurable:!0}),e.prototype.open=function(e,t){var n=this;return r.create((function(i,s){var l=!0,c=function(e){r.throwIfAborted(t.signal),l&&(l=!1,e())};n._clients.length=e.length,n._clientPromises.length=e.length;for(var h=function(l){var h=e[l];if(r.isThenable(h))return n._clientPromises[l]=h.then((function(e){return n._clients[l]=new o(e,t),c(i),n._clients[l]}),(function(){return c(s),null})),"continue";n._clients[l]=new o(h,t),n._clientPromises[l]=r.resolve(n._clients[l]),c(i)},u=0;u<e.length;++u)h(u)}))},e.prototype.broadcast=function(e,t,n){for(var i=new Array(this._clientPromises.length),r=0;r<this._clientPromises.length;++r){var o=this._clientPromises[r];i[r]=o.then((function(i){return i.invoke(e,t,n)}))}return i},e.prototype.close=function(){for(var e=0,t=this._clientPromises;e<t.length;e++){t[e].then((function(e){return e.close()}))}this._clients.length=0,this._clientPromises.length=0},e.prototype.getAvailableClient=function(){for(var e,t=0;t<this._clients.length;++t){var n=this._clients[t];if(n){if(!n.isBusy())return r.resolve(n)}else(e=e||[]).push(this._clientPromises[t])}return e?r.first(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,r.resolve(this._clients[this._clientIdx]))},e.prototype.invoke=function(e,t,n){var i=null;return Array.isArray(n)?(s.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),i={transferList:n}):i=n,this.closed?r.reject(new Error("Connection closed")):this.getAvailableClient().then((function(n){return n.invoke(e,t,i)}))},e.prototype.on=function(e,t){var i=this;return r.all(this._clientPromises).then((function(){return n.handlesGroup(i._clients.map((function(n){return n.on(e,t)})))}))},e.prototype.openPorts=function(){var e=this;return r.create((function(t){for(var n=new Array(e._clientPromises.length),i=n.length,r=function(r){e._clientPromises[r].then((function(e){n[r]=e.openPort(),0==--i&&t(n)}))},o=0;o<e._clientPromises.length;++o)r(o)}))},e}()}));