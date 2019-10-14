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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(t,e){return function(){function t(t){void 0===t&&(t=1),this._seed=t}return Object.defineProperty(t.prototype,"seed",{set:function(e){this._seed=null==e?Math.random()*t._m:e},enumerable:!0,configurable:!0}),t.prototype.getInt=function(){return this._seed=(t._a*this._seed+t._c)%t._m,this._seed},t.prototype.getFloat=function(){return this.getInt()/(t._m-1)},t.prototype.getIntRange=function(t,e){return Math.round(this.getFloatRange(t,e))},t.prototype.getFloatRange=function(e,n){var o=n-e,r=this.getInt()/t._m;return e+Math.floor(r*o)},t._m=2147483647,t._a=48271,t._c=0,t}()});