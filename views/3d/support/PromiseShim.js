// COPYRIGHT © 2016 Esri
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

define(["require","exports"],function(e,t){"use strict";function r(e,t,r){setTimeout(e,0,t,r)}function n(e){return null!=e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}var i;!function(e){e[e.Pending=0]="Pending",e[e.Rejected=1]="Rejected",e[e.Resolved=2]="Resolved"}(i||(i={}));var o=function(){function e(e){var t=this;this.init(i.Pending),e(function(e){return t.resolve(e)},function(e){return t.reject(e)})}return e.prototype.then=function(t,r){if(this.state===i.Pending){var n=e.pending(t,r);return this._addToChain(n),n}return this.state===i.Resolved?null!=t?e.tryResolveAsync(t,this.value):e.resolve(this.value):this.state===i.Rejected?null!=r?e.tryResolveAsync(r,this.error):e.reject(this.error):void 0},e.prototype["catch"]=function(e){return this.then(null,e)},e.resolve=function(t){if(t instanceof e)return t;if(n(t)){var r=Object.create(e.prototype);return r.init(i.Pending),t.then(function(e){r.resolve(e)},function(e){r.reject(e)}),r}var o=Object.create(e.prototype);return o.init(i.Resolved,t),o},e.reject=function(t){var r=Object.create(e.prototype);return r.init(i.Rejected,null,t),r},e.all=function(t){var r=t.length;if(0===r)return e.resolve([]);for(var n=t.map(e.resolve),i=e.pending(),o=function(){0===--r&&i.resolve(n.map(e.getValue))},s=function(e){i.reject(e)},l=0,c=n;l<c.length;l++){var a=c[l];a.then(o,s)}return i},e.prototype.init=function(e,t,r,n,i){void 0===t&&(t=null),void 0===r&&(r=null),void 0===n&&(n=null),void 0===i&&(i=null),this.state=e,this.value=t,this.error=r,this.callback=n,this.errback=i,this.firstPromise=null,this.chainedPromise=null},e.pending=function(t,r){var n=Object.create(e.prototype);return n.init(i.Pending,null,null,t,r),n},e.getValue=function(e){return e.value},e.prototype._unchain=function(){this.chainedPromise=null,this.callback=null,this.errback=null},e.prototype._addToChain=function(e){e.chainedPromise=this.firstPromise,this.firstPromise=e},e.tryResolveAsync=function(t,n){var o=Object.create(e.prototype);return o.init(i.Pending),r(function(){o.tryResolve(t,n)}),o},e.prototype.tryResolve=function(e,t){try{var r=e(t);this.resolve(r)}catch(n){console.error(n.stack instanceof Error?n.stack:n),this.reject(n)}},e.prototype.resolve=function(t){var r=this;this.state===i.Pending?t instanceof e?t.state===i.Pending?(this._unchain(),t._addToChain(this)):t.state===i.Resolved?this.resolve(t.value):t.state===i.Rejected&&this.reject(t.error):n(t)?t.then(function(e){r.resolve(e)},function(e){r.reject(e)}):(this.state=i.Resolved,this.value=t,this.resolveHandlers()):console.error("Error: Promise is already resolved")},e.prototype.reject=function(e){this.state===i.Pending?(this.state=i.Rejected,this.error=e,this.rejectHandlers()):console.error("Error: Promise is already resolved")},e.prototype.resolveHandlers=function(){this.callResolveHandlers(this.firstPromise),this.firstPromise=null},e.prototype.callResolveHandlers=function(e){null!=e&&(this.callResolveHandlers(e.chainedPromise),null!=e.callback?e.tryResolve(e.callback,this.value):e.resolve(this.value))},e.prototype.rejectHandlers=function(){this.callRejectHandlers(this.firstPromise),this.firstPromise=null},e.prototype.callRejectHandlers=function(e){null!=e&&(this.callRejectHandlers(e.chainedPromise),null!=e.errback?e.tryResolve(e.errback,this.error):e.reject(this.error))},e}();return o});