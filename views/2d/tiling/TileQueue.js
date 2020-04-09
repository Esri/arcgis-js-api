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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/Accessor","../../../core/SetUtils","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/vec2","../../support/QueueProcessor"],(function(e,t,r,o,n,i,s,u,a){var c=new Set,p=[],h=new Map,y=[0,0];return function(e){function t(t){var r=e.call(this,t)||this;return r._keyToItem=new Map,r.concurrency=6,r.strategy="scale-first",r.tileInfoView=null,r}return o(t,e),t.prototype.initialize=function(){var e=this,t=this.concurrency,r=this.process,o=this.strategy;this._queue=new a.QueueProcessor({concurrency:t,process:function(t,o){var n=e._keyToItem.get(t);return r(n,{signal:o})},peeker:"scale-first"===o?function(t){return e._peekByScaleFirst(t)}:function(t){return e._peekByCenterFirst(t)}})},t.prototype.destroy=function(){this.clear(),this._queue.destroy(),this._queue=null},Object.defineProperty(t.prototype,"length",{get:function(){return this._queue?this._queue.length:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onGoingCount",{get:function(){return this._keyToItem.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.length>0||this.onGoingCount>0},enumerable:!0,configurable:!0}),t.prototype.abort=function(e){var t="string"==typeof e?e:e.id;this._queue.abort(t)},t.prototype.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},t.prototype.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},t.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},t.prototype.pause=function(){this._queue.pause()},t.prototype.push=function(e){var t=this,r=e.key.id;if(this.has(r))return this.get(r);var o=this._queue.push(r),n=function(){t._keyToItem.delete(r),t.notifyChange("updating")};return this._keyToItem.set(r,e),o.then(n,n),this.notifyChange("updating"),o},t.prototype.reset=function(){this._queue.reset(),this.notifyChange("updating")},t.prototype.resume=function(){this._queue.resume()},t.prototype._peekByScaleFirst=function(e){var t=this;if(!this.state)return i.firstOfSet(e);var r=this.tileInfoView,o=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY;e.forEach((function(e){var r=t._keyToItem.get(e),i=t.tileInfoView.getTileScale(r.key);h.has(i)||(h.set(i,[]),o=Math.max(i,o),n=Math.min(i,n)),h.get(i).push(r.key),c.add(i)}));var s,u,a=this.state.scale;h.has(a)||(u=c,(s=p).length=0,u.forEach((function(e){return s.push(e)})),p.sort(),a=p.reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e}),p[0])),a=Math.min(a,o),a=Math.max(a,n);var y=h.get(a),l=r.getClosestInfoForScale(a),f=l.getColumnForX(this.state.center[0]),g=l.getRowForY(this.state.center[1]);return y.sort((function(e,t){var r=l.denormalizeCol(e.col,e.world),o=l.denormalizeCol(t.col,t.world);return Math.sqrt((f-r)*(f-r)+(g-e.row)*(g-e.row))-Math.sqrt((f-o)*(f-o)+(g-t.row)*(g-t.row))})),c.clear(),h.clear(),y[0].id},t.prototype._peekByCenterFirst=function(e){var t=this;if(!this.state)return i.firstOfSet(e);var r=this.tileInfoView,o=this.state.center,n=Number.POSITIVE_INFINITY,s=null;return e.forEach((function(e){var i=t._keyToItem.get(e);r.getTileCoords(y,i.key);var a=u.vec2.distance(y,o);a<n&&(n=a,s=i.key)})),s.id},r([s.property({constructOnly:!0})],t.prototype,"concurrency",void 0),r([s.property({constructOnly:!0})],t.prototype,"process",void 0),r([s.property()],t.prototype,"state",void 0),r([s.property({constructOnly:!0})],t.prototype,"strategy",void 0),r([s.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),r([s.property({readOnly:!0})],t.prototype,"updating",null),t=r([s.subclass("esri.views.2d.tiling.TileQueue")],t)}(s.declared(n))}));