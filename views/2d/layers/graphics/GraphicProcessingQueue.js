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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/promiseUtils","../../../../core/scheduling","../../../../core/accessorSupport/decorators"],function(e,t,i,n,o,r,s,u){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._queueArray=[],i._onGoingGraphic=null,i._onGoingPromise=null,i._scheduledNextHandle=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queueArray.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queueArray.length>0||null!==this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){if(this._onGoingGraphic&&this._onGoingGraphic.graphic===e&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null),this._queue.has(e)){var t=this._queue.get(e);this._queue.delete(e);var i=this._queueArray.indexOf(t);this._queueArray.slice(i,1)}this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._queueArray.length=0,this._onGoingPromise&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingGraphic&&this._onGoingGraphic.graphic===e},t.prototype.push=function(e,t){if(!this._queue.has(e)){var i={graphic:e,addOrUpdate:t};this._queueArray.push(i),this._queue.set(e,i),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this.reset()},t.prototype.reset=function(){var e=this._onGoingGraphic;if(e){var t=e.graphic,i=e.addOrUpdate;this.push(t,i)}},t.prototype._finalize=function(){this._onGoingGraphic=null,this._ongoingAbortController=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingGraphic||(this._scheduledNextHandle=s.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingGraphic)return void(this._scheduledNextHandle=null);this._scheduledNextHandle=null;var e=this._peek(),t=e.graphic,i=e.addOrUpdate,n=r.createAbortController();this._queue.delete(t),this._onGoingGraphic=e,this._onGoingPromise=this.process(t,i,{signal:n.signal}),this._ongoingAbortController=n,this._onGoingPromise.then(this._finalize,this._finalize),this.notifyChange("updating")},t.prototype._peek=function(){return 0===this._queueArray.length?null:this._queueArray.pop()},n([u.property({readOnly:!0})],t.prototype,"length",null),n([u.property({readOnly:!0})],t.prototype,"updating",null),n([u.property({constructOnly:!0})],t.prototype,"process",void 0),t=n([u.subclass("esri.views.2d.layers.graphics.GraphicProcessingQueue")],t)}(u.declared(o));t.default=h});