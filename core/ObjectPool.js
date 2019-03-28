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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(t,o){function i(t){return t&&t.release&&"function"==typeof t.release}function n(t){return t&&t.acquire&&"function"==typeof t.acquire}var r=function(){function t(){}return t}();return function(){function t(t,o,i,n,r){void 0===n&&(n=1),void 0===r&&(r=0),this.classConstructor=t,this.acquireFunctionOrWithConstructor=o,this.releaseFunction=i,this.growthSize=n,!0===o?this.acquireFunction=this._constructorAcquireFunction:"function"==typeof o&&(this.acquireFunction=o),this._pool=new Array(r),this._initialSize=r;for(var e=0;e<r;e++)this._pool[e]=new this.classConstructor;this.growthSize=Math.max(n,1)}return t.prototype.destroy=function(){this.prune(0),this._pool=null},t.prototype.acquire=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var i,e=this.classConstructor||r;if(0===this._pool.length)for(var s=this.growthSize,c=0;c<s;c++)this._pool[c]=new e;return i=this._pool.pop(),this.acquireFunction?this.acquireFunction.apply(this,[i].concat(t)):n(i)&&i.acquire.apply(i,t),i},t.prototype.release=function(t){t&&(this.releaseFunction?this.releaseFunction(t):i(t)&&t.release(),this._pool.push(t))},t.prototype.prune=function(t){if(void 0===t&&(t=this._initialSize),!(t>=this._pool.length)){for(var o=t;o<this._pool.length;++o){var i=this._pool[o];this._dispose(i)}this._pool.length=t}},t.prototype._dispose=function(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()},t.prototype._constructorAcquireFunction=function(t){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var n;(n=this.classConstructor).call.apply(n,[t].concat(o))},t}()});