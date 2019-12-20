// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports"],function(t,i){function o(t){return t&&t.release&&"function"==typeof t.release}function e(t){return t&&t.acquire&&"function"==typeof t.acquire}var n=function(){function t(){}return t}();return function(){function t(t,i,o,e,n){void 0===e&&(e=1),void 0===n&&(n=0),this.classConstructor=t,this.acquireFunctionOrWithConstructor=i,this.releaseFunction=o,this.growthSize=e,!0===i?this.acquireFunction=this._constructorAcquireFunction:"function"==typeof i&&(this.acquireFunction=i),this._pool=new Array(n),this._set=new Set,this._initialSize=n;for(var r=0;r<n;r++)this._pool[r]=new this.classConstructor;this.growthSize=Math.max(e,1)}return t.prototype.acquire=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var o,r=this.classConstructor||n;if(0===this._pool.length)for(var s=this.growthSize,c=0;c<s;c++)this._pool[c]=new r;return o=this._pool.shift(),this.acquireFunction?this.acquireFunction.apply(this,[o].concat(t)):e(o)&&o.acquire.apply(o,t),this._set.delete(o),o},t.prototype.release=function(t){t&&!this._set.has(t)&&(this.releaseFunction?this.releaseFunction(t):o(t)&&t.release(),this._pool.push(t),this._set.add(t))},t.prototype.prune=function(t){if(void 0===t&&(t=this._initialSize),!(this._pool.length<=t))for(var i;t>this._pool.length;)i=this._pool.shift(),this._set.delete(i),i.dispose&&"function"==typeof i.dispose&&i.dispose()},t.prototype._constructorAcquireFunction=function(t){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];(e=this.classConstructor).call.apply(e,[t].concat(i));var e},t}()});