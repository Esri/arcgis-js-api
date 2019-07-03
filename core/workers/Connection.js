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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../Logger","../promiseUtils"],function(t,e,n,i){var r=n.getLogger("esri.core.workers.Connection");return function(){function t(t){this._clientIdx=0,this._clients=t}return t.prototype.broadcast=function(t,e,n){for(var i=[],r=0,o=this._clients;r<o.length;r++){var s=o[r];i.push(s.invoke(t,e,n))}return i},t.prototype.close=function(){for(var t=0,e=this._clients;t<e.length;t++){e[t].close()}this._clients=[]},t.prototype.getAvailableClient=function(){var t;return this._clients.some(function(e){return!e.isBusy()&&(t=e,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,t=this._clients[this._clientIdx]),t},t.prototype.invoke=function(t,e,n){var o=null;return Array.isArray(n)?(r.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),o={transferList:n}):o=n,this._clients&&this._clients.length?this.getAvailableClient().invoke(t,e,o):i.reject(new Error("Connection closed"))},t.prototype.openPorts=function(){return i.all(this._clients.map(function(t){return t.openPort()}))},t}()});