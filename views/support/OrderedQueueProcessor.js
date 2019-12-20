// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","./QueueProcessor"],function(e,t,r,o,s,u){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.item=e,this.promise=t,this.deferred=s.createDeferred(),this.status=0,this.value=null,this.error=null}return e}(),n=function(){function e(e){this._queue=[],this._queueMap=new Map,this._processor=new u.QueueProcessor(e)}return e.prototype.destroy=function(){this.clear(),this._processor.destroy()},Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.length},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){var t=this._queueMap.get(e);t&&(0===t.status?this._processor.abort(e):(t.status=1,t.error=s.createAbortError()))},e.prototype.clear=function(){this._queue.length=0,this._queueMap.clear(),this._processor.clear()},e.prototype.get=function(e){return o(this,void 0,void 0,function(){var t;return r(this,function(r){return t=this._queueMap.get(e),[2,t?t.promise:void 0]})})},e.prototype.isOngoing=function(e){return this._processor.isOngoing(e)},e.prototype.has=function(e){return this._queueMap.has(e)},e.prototype.pause=function(){this._processor.pause()},e.prototype.resume=function(){this._processor.resume()},e.prototype.reset=function(){this._processor.reset()},e.prototype.push=function(e){return o(this,void 0,void 0,function(){var t,o,s=this;return r(this,function(r){return t=this._processor.push(e),o=new i(e,t),this._queue.push(o),this._queueMap.set(e,o),t.then(function(e){return s._success(o,e)},function(e){return s._error(o,e)}),[2,o.deferred.promise]})})},e.prototype._success=function(e,t){e.status=2,e.value=t,this._drain()},e.prototype._error=function(e,t){e.status=1,e.error=t,this._drain()},e.prototype._drain=function(){for(;;){var e=this._queue[0];if(!e||0===e.status)return;this._queue.shift(),this._queueMap.delete(e.item),2===e.status?e.deferred.resolve(e.value):e.deferred.reject(e.error)}},e}();t.OrderedQueueProcessor=n});