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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/scheduling","../../../tiling","../../../libs/gl-matrix/vec2"],function(e,i,t,n,s){function o(e){return e&&"function"==typeof e.then}Object.defineProperty(i,"__esModule",{value:!0});var u=[0,0],l=function(){function e(e){this._queue=new Map,this._onGoingTileId=null,this._onGoingPromise=null,this._isPaused=!1,this._scheduledNextHandle=null,this.tileInfoView=null,this.tileInfoView=e.tileInfoView,this.process=e.process,this._next=this._next.bind(this),this._finalize=this._finalize.bind(this)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return this._queue.size>0&&null!=this._onGoingPromise},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){this._onGoingTileId===e&&(this._onGoingPromise.cancel(),this._onGoingTileId=this._onGoingPromise=null),this._queue.delete(e)},e.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingTileId=this._onGoingPromise=null)},e.prototype.has=function(e){return this._queue.has(e)},e.prototype.isOngoing=function(e){return this._onGoingTileId===e},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){this._queue.has(e)||(this._queue.set(e,n.TileKey.pool.acquire(e)),this._scheduleNext())},e.prototype.reset=function(){var e=this._onGoingTileId;e&&(this._onGoingPromise.cancel(),this.push(e))},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._finalize=function(){this._onGoingTileId=null,this._onGoingPromise=null,this._scheduleNext()},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTileId||(this._scheduledNextHandle=t.schedule(this._next))},e.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTileId)return void(this._scheduledNextHandle=null);this._scheduledNextHandle=null;var e=this._peekByCenterFirst();n.TileKey.pool.release(this._queue.get(e)),this._queue.delete(e),this._onGoingTileId=e,this._onGoingPromise=this.process(e),o(this._onGoingPromise)?this._onGoingPromise.then(this._finalize,this._finalize):this._finalize()},e.prototype._peekByCenterFirst=function(){if(!this.state)throw new Error("state not set");var e=this.tileInfoView,i=this.state.center,t=Number.POSITIVE_INFINITY,n=null;return this._queue.forEach(function(o){e.getTileCoords(u,o);var l=s.distance(u,i);l<t&&(t=l,n=o)}),n.id},e}();i.default=l});