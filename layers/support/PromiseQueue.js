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

define(["require","exports","../../core/promiseUtils"],(function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this._tasks=new Array}return Object.defineProperty(t.prototype,"length",{get:function(){return this._tasks.length},enumerable:!0,configurable:!0}),t.prototype.push=function(t){var e=this;return r.create((function(r,n){return e._tasks.push(new s(r,n,t))}))},t.prototype.unshift=function(t){var e=this;return r.create((function(r,n){return e._tasks.unshift(new s(r,n,t))}))},t.prototype.process=function(){if(0===this._tasks.length)return!1;var t=this._tasks.shift();try{var e=t.callback();e&&"then"in e&&"function"==typeof e.then?e.then(t.resolve,t.reject):t.resolve(e)}catch(e){t.reject(e)}return!0},t.prototype.cancelAll=function(){for(var t=r.createAbortError(),e=0,n=this._tasks;e<n.length;e++){n[e].reject(t)}this._tasks.length=0},t}();e.default=n;var s=function(t,e,r){this.resolve=t,this.reject=e,this.callback=r}}));