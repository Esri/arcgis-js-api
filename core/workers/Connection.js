// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../Logger","../promiseUtils","../accessorSupport/utils"],function(t,e,n,r,i){var o=n.getLogger("esri.core.workers.Connection");return function(){function t(t){this._clientIdx=0,this._clients=t}return t.prototype.broadcast=function(t,e,n){for(var r=[],i=0,o=this._clients;i<o.length;i++){var s=o[i];r.push(s.invoke(t,e,n))}return r},t.prototype.close=function(){for(var t=0,e=this._clients;t<e.length;t++){e[t].close()}this._clients=[]},t.prototype.getAvailableClient=function(){var t;return this._clients.some(function(e){return!e.isBusy()&&(t=e,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,t=this._clients[this._clientIdx]),t},t.prototype.invoke=function(t,e,n){var i=null;return Array.isArray(n)?(o.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),i={transferList:n}):i=n,this._clients&&this._clients.length?this.getAvailableClient().invoke(t,e,i):r.reject(new Error("Connection closed"))},t.prototype.on=function(t,e){var n=this._clients.map(function(n){return n.on(t,e)});return i.handlesGroup(n)},t.prototype.openPorts=function(){return this._clients.map(function(t){return t.openPort()})},t}()});