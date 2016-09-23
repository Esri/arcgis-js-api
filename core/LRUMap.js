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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var i=function(){function e(e,t){if(void 0===e&&(e=0),this.disposeFunction=t,this._cache=new Map,this._queue=[],0>=e)throw new Error("LRU cache size must be bigger than zero!");this._maxSize=e}return e.prototype.clear=function(){var e=this;this._queue.length=0,this.disposeFunction&&this._cache.forEach(function(t,i){e.disposeFunction(i,t)}),this._cache.clear()},e.prototype["delete"]=function(e){var t=this._cache.get(e);return this._cache["delete"](e)?(this.disposeFunction&&this.disposeFunction(e,t),this._queue.splice(this._queue.indexOf(e),1),!0):!1},e.prototype.forEach=function(e,t){this._cache.forEach(e,t)},e.prototype.get=function(e){var t=this._cache.get(e);if(t)return this._queue.splice(this._queue.indexOf(e),1),this._queue.unshift(e),t},e.prototype.has=function(e){return this._cache.has(e)},e.prototype.set=function(e,t){var i=this.get(e);return null!==i?void this._cache.set(e,t):(this._collect(),this._cache.set(e,t),this._queue.unshift(e),this)},e.prototype._collect=function(){if(this._queue.length&&!(this._queue.length<this._maxSize)){var e=this._queue.pop(),t=this._cache.get(e);this._cache["delete"](e)&&this.disposeFunction&&this.disposeFunction(e,t)}},e}();return i});