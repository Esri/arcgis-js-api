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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib"],(function(t,i,e){"use strict";function o(t){return t&&t.acquire&&"function"==typeof t.acquire}return function(){function t(t,i,e,o,n){if(void 0===o&&(o=1),void 0===n&&(n=0),this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(n),this._initialSize=n,this.ctor)for(var s=0;s<n;s++)this._pool[s]=new this.ctor;this.allocationSize=Math.max(o,1)}return t.prototype.destroy=function(){this.prune(0)},t.prototype.acquire=function(){for(var i,n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var r=this.ctor;if(t.test.disabled)i=new r;else{if(0===this._pool.length)for(var p=this.allocationSize,a=0;a<p;a++)this._pool[a]=new r;i=this._pool.pop()}return this.acquireFunction?this.acquireFunction.apply(this,e.__spreadArrays([i],n)):o(i)&&i.acquire.apply(i,n),i},t.prototype.release=function(i){i&&!t.test.disabled&&(this.releaseFunction?this.releaseFunction(i):function(t){return t&&t.release&&"function"==typeof t.release}(i)&&i.release(),this._pool.push(i))},t.prototype.prune=function(t){if(void 0===t&&(t=this._initialSize),!(t>=this._pool.length)){for(var i=t;i<this._pool.length;++i){var e=this._pool[i];this._dispose(e)}this._pool.length=t}},t.prototype._dispose=function(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()},t.test={disabled:!1},t}()}));