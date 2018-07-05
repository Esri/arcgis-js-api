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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function i(t){return t&&t.release&&"function"==typeof t.release}function o(t){return t&&t.acquire&&"function"==typeof t.acquire}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,i,o){void 0===i&&(i=1),void 0===o&&(o=0),this.acquireFunction=t,this.releaseFunction=e,this.growthSize=i,this._pool=new Array(o),this._set=new Set,this._initialSize=o;for(var s=0;s<o;s++)this._pool[s]=this.acquireFunction();this.growthSize=Math.max(i,1)}return t.prototype.acquire=function(){var t;if(0===this._pool.length)for(var e=this.growthSize,i=0;i<e;i++)this._pool[i]=this.acquireFunction();return t=this._pool.shift(),o(t)&&t.acquire(),this._set.delete(t),t},t.prototype.release=function(t){t&&!this._set.has(t)&&(this.releaseFunction?this.releaseFunction(t):i(t)&&t.release(),this._pool.push(t),this._set.add(t))},t.prototype.prune=function(){if(!(this._pool.length<=this._initialSize))for(var t;this._initialSize>this._pool.length;)t=this._pool.shift(),this._set.delete(t),t.dispose&&"function"==typeof t.dispose&&t.dispose()},t}();e.default=s});