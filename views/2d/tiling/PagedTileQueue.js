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

define(["require","exports","tslib","../../../core/Accessor","../../../core/SetUtils","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/vec2","../../support/QueueProcessor"],(function(e,t,r,o,n,i,s,u){"use strict";var a=new Set,c=[],p=new Map,h=[0,0];return function(e){function t(t){var r=e.call(this,t)||this;return r._keyToItem=new Map,r.concurrency=6,r.strategy="scale-first",r.tileInfoView=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this,t=this.concurrency,r=this.process;this._peekByScaleFirst,this._peekByCenterFirst,this._queue=new u.QueueProcessor({concurrency:t,process:function(t,o){var n=e._keyToItem.get(t);return r(n,{signal:o})},peeker:function(e){return n.firstOfSet(e)}})},t.prototype.destroy=function(){this.clear(),this._queue.destroy(),this._queue=null},Object.defineProperty(t.prototype,"length",{get:function(){return this._queue?this._queue.length:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onGoingCount",{get:function(){return this._keyToItem.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.length>0||this.onGoingCount>0},enumerable:!1,configurable:!0}),t.prototype.abort=function(e){var t="string"==typeof e?e:e.id;this._queue.abort(t)},t.prototype.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},t.prototype.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},t.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},t.prototype.pause=function(){this._queue.pause()},t.prototype.push=function(e,t){var r=this,o=e.key.id+"-"+t;if(this.has(o))return this.get(o);var n=this._queue.push(o),i=function(){r._keyToItem.delete(o),r.notifyChange("updating")};return this._keyToItem.set(o,e),n.then(i,i),this.notifyChange("updating"),n},t.prototype.reset=function(){this._queue.reset(),this.notifyChange("updating")},t.prototype.resume=function(){this._queue.resume()},t.prototype._peekByScaleFirst=function(e){var t=this;if(!this.state)return n.firstOfSet(e);var r=this.tileInfoView,o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;e.forEach((function(e){var r=t._keyToItem.get(e),n=t.tileInfoView.getTileScale(r.key);p.has(n)||(p.set(n,[]),o=Math.max(n,o),i=Math.min(n,i)),p.get(n).push(r.key),a.add(n)}));var s,u,h=this.state.scale;p.has(h)||(u=a,(s=c).length=0,u.forEach((function(e){return s.push(e)})),c.sort(),h=c.reduce((function(e,t){return Math.abs(t-h)<Math.abs(e-h)?t:e}),c[0])),h=Math.min(h,o),h=Math.max(h,i);var y=p.get(h),l=r.getClosestInfoForScale(h),f=l.getColumnForX(this.state.center[0]),g=l.getRowForY(this.state.center[1]);return y.sort((function(e,t){var r=l.denormalizeCol(e.col,e.world),o=l.denormalizeCol(t.col,t.world);return Math.sqrt((f-r)*(f-r)+(g-e.row)*(g-e.row))-Math.sqrt((f-o)*(f-o)+(g-t.row)*(g-t.row))})),a.clear(),p.clear(),y[0].id},t.prototype._peekByCenterFirst=function(e){var t=this;if(!this.state)return n.firstOfSet(e);var r=this.tileInfoView,o=this.state.center,i=Number.POSITIVE_INFINITY,u=null;return e.forEach((function(e){var n=t._keyToItem.get(e);r.getTileCoords(h,n.key);var a=s.vec2.distance(h,o);a<i&&(i=a,u=n.key)})),u.id},r.__decorate([i.property({constructOnly:!0})],t.prototype,"concurrency",void 0),r.__decorate([i.property({constructOnly:!0})],t.prototype,"process",void 0),r.__decorate([i.property()],t.prototype,"state",void 0),r.__decorate([i.property({constructOnly:!0})],t.prototype,"strategy",void 0),r.__decorate([i.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),r.__decorate([i.property({readOnly:!0})],t.prototype,"updating",null),t=r.__decorate([i.subclass("esri.views.2d.tiling.PagedTileQueue")],t)}(o)}));