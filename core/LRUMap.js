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

define(["require","exports"],function(e,t){var i=function(){function e(e,t){if(void 0===e&&(e=0),this.sizeOfFunction=function(){return 1},this._sizeOf=0,this._cache=new Map,this._queue=[],0>=e)throw new Error("LRU cache size must be bigger than zero!");this._maxSize=e,t&&(t.disposeFunction&&(this.disposeFunction=t.disposeFunction),t.sizeOfFunction&&(this.sizeOfFunction=t.sizeOfFunction))}return Object.defineProperty(e.prototype,"length",{get:function(){return this._cache.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._sizeOf},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keys",{get:function(){return this._queue.slice()},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this;this._queue.length=0,this.disposeFunction&&this._cache.forEach(function(t,i){e.disposeFunction(i,t)}),this._cache.clear(),this._sizeOf=0},e.prototype["delete"]=function(e){var t=this._cache.get(e);return this._cache["delete"](e)?(this._sizeOf-=this.sizeOfFunction(t),this.disposeFunction&&this.disposeFunction(e,t),this._queue.splice(this._queue.indexOf(e),1),!0):!1},e.prototype.forEach=function(e,t){this._cache.forEach(e,t)},e.prototype.get=function(e){var t=this._cache.get(e);if(void 0!==t)return this._queue.splice(this._queue.indexOf(e),1),this._queue.unshift(e),t},e.prototype.has=function(e){return this._cache.has(e)},e.prototype.set=function(e,t){var i=this.get(e);return void 0!==i?this._sizeOf-=this.sizeOfFunction(i):this._queue.unshift(e),this._sizeOf+=this.sizeOfFunction(t),this._cache.set(e,t),this._collect(),this},e.prototype._collect=function(){for(;this._queue.length&&this._sizeOf>this._maxSize;){var e=this._queue.pop(),t=this._cache.get(e);this._cache["delete"](e)&&(this._sizeOf-=this.sizeOfFunction(t),this.disposeFunction&&this.disposeFunction(e,t))}},e}();return i});