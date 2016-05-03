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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports"],function(){"use strict";function e(e,t,r){setTimeout(e,0,t,r)}function t(e){return null!=e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}var r;!function(e){e[e.Pending=0]="Pending",e[e.Rejected=1]="Rejected",e[e.Resolved=2]="Resolved"}(r||(r={}));var n=function(){function n(e){var t=this;this.init(r.Pending),e(function(e){return t.resolve(e)},function(e){return t.reject(e)})}return n.prototype.then=function(e,t){if(this.state===r.Pending){var i=n.pending(e,t);return this._addToChain(i),i}return this.state===r.Resolved?null!=e?n.tryResolveAsync(e,this.value):n.resolve(this.value):this.state===r.Rejected?null!=t?n.tryResolveAsync(t,this.error):n.reject(this.error):void 0},n.prototype["catch"]=function(e){return this.then(null,e)},n.resolve=function(e){if(e instanceof n)return e;if(t(e)){var i=Object.create(n.prototype);return i.init(r.Pending),e.then(function(e){i.resolve(e)},function(e){i.reject(e)}),i}var o=Object.create(n.prototype);return o.init(r.Resolved,e),o},n.reject=function(e){var t=Object.create(n.prototype);return t.init(r.Rejected,null,e),t},n.all=function(e){var t=e.length;if(0===t)return n.resolve([]);for(var r=e.map(n.resolve),i=n.pending(),o=function(){0===--t&&i.resolve(r.map(n.getValue))},s=function(e){i.reject(e)},l=0,c=r;l<c.length;l++){var a=c[l];a.then(o,s)}return i},n.prototype.init=function(e,t,r,n,i){void 0===t&&(t=null),void 0===r&&(r=null),void 0===n&&(n=null),void 0===i&&(i=null),this.state=e,this.value=t,this.error=r,this.callback=n,this.errback=i,this.firstPromise=null,this.chainedPromise=null},n.pending=function(e,t){var i=Object.create(n.prototype);return i.init(r.Pending,null,null,e,t),i},n.getValue=function(e){return e.value},n.prototype._unchain=function(){this.chainedPromise=null,this.callback=null,this.errback=null},n.prototype._addToChain=function(e){e.chainedPromise=this.firstPromise,this.firstPromise=e},n.tryResolveAsync=function(t,i){var o=Object.create(n.prototype);return o.init(r.Pending),e(function(){o.tryResolve(t,i)}),o},n.prototype.tryResolve=function(e,t){try{var r=e(t);this.resolve(r)}catch(n){console.error(n.stack instanceof Error?n.stack:n),this.reject(n)}},n.prototype.resolve=function(e){var i=this;this.state===r.Pending?e instanceof n?e.state===r.Pending?(this._unchain(),e._addToChain(this)):e.state===r.Resolved?this.resolve(e.value):e.state===r.Rejected&&this.reject(e.error):t(e)?e.then(function(e){i.resolve(e)},function(e){i.reject(e)}):(this.state=r.Resolved,this.value=e,this.resolveHandlers()):console.error("Error: Promise is already resolved")},n.prototype.reject=function(e){this.state===r.Pending?(this.state=r.Rejected,this.error=e,this.rejectHandlers()):console.error("Error: Promise is already resolved")},n.prototype.resolveHandlers=function(){this.callResolveHandlers(this.firstPromise),this.firstPromise=null},n.prototype.callResolveHandlers=function(e){null!=e&&(this.callResolveHandlers(e.chainedPromise),null!=e.callback?e.tryResolve(e.callback,this.value):e.resolve(this.value))},n.prototype.rejectHandlers=function(){this.callRejectHandlers(this.firstPromise),this.firstPromise=null},n.prototype.callRejectHandlers=function(e){null!=e&&(this.callRejectHandlers(e.chainedPromise),null!=e.errback?e.tryResolve(e.errback,this.error):e.reject(this.error))},n}();return n});