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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/scheduling","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../tiling"],function(e,t,i,n,o,s,r,l,u){function h(e){return e&&"function"==typeof e.then}Object.defineProperty(t,"__esModule",{value:!0});var a=[0,0],p=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._onGoingTile=null,i._onGoingPromise=null,i._isPaused=!1,i._scheduledNextHandle=null,i._timestamp=Date.now(),i.tileInfoView=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){this._queue.has(e)||(this._queue.set(e,{tileId:e,key:u.TileKey.pool.acquire(e),timestamp:t||this._timestamp}),this._scheduleNext(),this.notifyChange("updating"))},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;if(e){var t=e.tileId;this.push(t,this._timestamp)}this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=s.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return void(this._scheduledNextHandle=null);this._scheduledNextHandle=null;var e=this._peek(),t=e.tileId,i=e.key;u.TileKey.pool.release(i),this._queue.delete(t),this._onGoingTile=e,this._onGoingPromise=this.process(t,this._timestamp),h(this._onGoingPromise)?this._onGoingPromise.then(this._finalize,this._finalize):this._finalize(),this.notifyChange("updating")},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,i=this.state.center,n=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,s=null;return this._queue.forEach(function(r,u){t.getTileCoords(a,r.key);var h=e._timestamp-r.timestamp;if(isNaN(h)){var p=l.vec2.distance(a,i);p<o&&(o=p,s=r)}else if(h===n){var p=l.vec2.distance(a,i);p<o&&(o=p,s=r)}else h>n&&(n=h,o=Number.POSITIVE_INFINITY,s=r)}),s},n([r.property({readOnly:!0})],t.prototype,"length",null),n([r.property({constructOnly:!0})],t.prototype,"process",void 0),n([r.property()],t.prototype,"state",void 0),n([r.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),n([r.property({readOnly:!0})],t.prototype,"updating",null),t=n([r.subclass()],t)}(r.declared(o));t.default=p});