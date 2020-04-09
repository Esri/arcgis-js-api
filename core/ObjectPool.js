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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){var o=function(){};function s(t){return t&&t.acquire&&"function"==typeof t.acquire}return function(){function t(t,i,o,s,e){if(void 0===s&&(s=1),void 0===e&&(e=0),this.classConstructor=t,this.acquireFunctionOrWithConstructor=i,this.releaseFunction=o,this.growthSize=s,!0===i?this.acquireFunction=this._constructorAcquireFunction:"function"==typeof i&&(this.acquireFunction=i),this._pool=new Array(e),this._initialSize=e,this.classConstructor)for(var n=0;n<e;n++)this._pool[n]=new this.classConstructor;this.growthSize=Math.max(s,1)}return t.prototype.destroy=function(){this.prune(0)},t.prototype.acquire=function(){var i,e=this.classConstructor||o;if(t.test.disabled)i=new e;else{if(0===this._pool.length)for(var n=this.growthSize,r=0;r<n;r++)this._pool[r]=new e;i=this._pool.pop()}if(this.acquireFunction){for(r=arguments.length;r>0;r--)arguments[r]=arguments[r-1];arguments[0]=i,arguments.length++,this.acquireFunction.apply(this,arguments)}else s(i)&&i.acquire.apply(i,arguments);return i},t.prototype.release=function(i){i&&!t.test.disabled&&(this.releaseFunction?this.releaseFunction(i):function(t){return t&&t.release&&"function"==typeof t.release}(i)&&i.release(),this._pool.push(i))},t.prototype.prune=function(t){if(void 0===t&&(t=this._initialSize),!(t>=this._pool.length)){for(var i=t;i<this._pool.length;++i){var o=this._pool[i];this._dispose(o)}this._pool.length=t}},t.prototype._dispose=function(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()},t.prototype._constructorAcquireFunction=function(){this.classConstructor&&this.classConstructor.call.apply(this.classConstructor,arguments)},t.test={disabled:!1},t}()}));