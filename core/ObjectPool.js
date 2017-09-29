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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(t,i){function e(t){return t&&t.release&&"function"==typeof t.release}function o(t){return t&&t.acquire&&"function"==typeof t.acquire}var n=function(){function t(){}return t}(),s=function(){function t(t,i,e,o,n){void 0===o&&(o=1),void 0===n&&(n=0),this.classConstructor=t,this.acquireFunctionOrWithConstructor=i,this.releaseFunction=e,this.growthSize=o,i===!0?this.acquireFunction=this._constructorAcquireFunction:"function"==typeof i&&(this.acquireFunction=i),this._pool=new Array(n),this._set=new Set,this._initialSize=n;for(var s=0;n>s;s++)this._pool[s]=new this.classConstructor;this.growthSize=Math.max(o,1)}return t.prototype.acquire=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var e,s=this.classConstructor||n;if(0===this._pool.length)for(var r=this.growthSize,u=0;r>u;u++)this._pool[u]=new s;return e=this._pool.shift(),this.acquireFunction?this.acquireFunction.apply(this,[e].concat(t)):o(e)&&e.acquire.apply(e,t),this._set["delete"](e),e},t.prototype.release=function(t){t&&!this._set.has(t)&&(this.releaseFunction?this.releaseFunction(t):e(t)&&t.release(),this._pool.push(t),this._set.add(t))},t.prototype.prune=function(){if(!(this._pool.length<=this._initialSize))for(var t;this._initialSize>this._pool.length;)t=this._pool.shift(),this._set["delete"](t),t.dispose&&"function"==typeof t.dispose&&t.dispose()},t.prototype._constructorAcquireFunction=function(t){for(var i=[],e=1;e<arguments.length;e++)i[e-1]=arguments[e];(o=this.classConstructor).call.apply(o,[t].concat(i));var o},t}();return s});