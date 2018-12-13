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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/scheduling","../../../../core/accessorSupport/decorators"],function(e,t,i,n,o,s,r){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._onGoingGraphic=null,i._onGoingPromise=null,i._scheduledNextHandle=null,i._timestamp=Date.now(),i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!==this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){this._onGoingGraphic&&this._onGoingGraphic.graphic===e&&(this._onGoingPromise.cancel(),this._onGoingGraphic=this._onGoingPromise=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingGraphic=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingGraphic&&this._onGoingGraphic.graphic===e},t.prototype.push=function(e,t,i){this._queue.has(e)||(this._queue.set(e,{graphic:e,addOrUpdate:t,timestamp:i||this._timestamp}),this._scheduleNext(),this.notifyChange("updating"))},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingGraphic;if(e){var t=e.graphic,i=e.addOrUpdate;this.push(t,i,this._timestamp)}},t.prototype._finalize=function(){this._onGoingGraphic=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingGraphic||(this._scheduledNextHandle=s.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingGraphic)return void(this._scheduledNextHandle=null);this._scheduledNextHandle=null;var e=this._peek(),t=e.graphic,i=e.addOrUpdate;this._queue.delete(t),this._onGoingGraphic=e,this._onGoingPromise=this.process(t,i,this._timestamp),this._onGoingPromise.then(this._finalize,this._finalize),this.notifyChange("updating")},t.prototype._peek=function(){var e=this,t=Number.NEGATIVE_INFINITY,i=null;return this._queue.forEach(function(n,o){var s=e._timestamp-n.timestamp;isNaN(s)?i=n:s===t?i=n:s>t&&(t=s,i=n)}),i},n([r.property({readOnly:!0})],t.prototype,"length",null),n([r.property({readOnly:!0})],t.prototype,"updating",null),n([r.property({constructOnly:!0})],t.prototype,"process",void 0),t=n([r.subclass()],t)}(r.declared(o));t.default=h});