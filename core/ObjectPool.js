// COPYRIGHT © 2017 Esri
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

define(["require","exports"],function(t,n){function e(t){return t&&t.release&&"function"==typeof t.release}function i(t){return t&&t.acquire&&"function"==typeof t.acquire}var r=function(){function t(){}return t}(),o=function(){function t(t,n,e,i,r){void 0===i&&(i=1),void 0===r&&(r=0),this.classConstructor=t,this.acquireFunctionOrWithConstructor=n,this.releaseFunction=e,this.growthSize=i,n===!0?this.acquireFunction=this._constructorAcquireFunction:"function"==typeof n&&(this.acquireFunction=n),this._pool=new Array(r),this._set=new Set;for(var o=0;r>o;o++)this._pool[o]=new this.classConstructor;this.growthSize=Math.max(i,1)}return t.prototype.acquire=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e,o=this.classConstructor||r;if(0===this._pool.length)for(var s=this.growthSize,u=0;s>u;u++)this._pool[u]=new o;return e=this._pool.shift(),this.acquireFunction?this.acquireFunction.apply(this,[e].concat(t)):i(e)&&e.acquire.apply(e,t),this._set["delete"](e),e},t.prototype.release=function(t){t&&!this._set.has(t)&&(this.releaseFunction?this.releaseFunction(t):e(t)&&t.release(),this._pool.push(t),this._set.add(t))},t.prototype._constructorAcquireFunction=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];(i=this.classConstructor).call.apply(i,[t].concat(n));var i},t}();return o});