/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../chunks/vec2","../../support/QueueProcessor"],(function(e,t,r,s,o,n,i,u,c,a){"use strict";function h(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const l=new Set,p=[],y=new Map,_=[0,0];let g=function(t){function r(e){var r;return(r=t.call(this,e)||this)._keyToItem=new Map,r.concurrency=6,r.strategy="scale-first",r.tileInfoView=null,r}e._inheritsLoose(r,t);var s=r.prototype;return s.initialize=function(){const{concurrency:e,process:t,strategy:r}=this;this._queue=new a.QueueProcessor({concurrency:e,process:(e,r)=>{const s=this._keyToItem.get(e);return t(s,{signal:r})},peeker:"scale-first"===r?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)})},s.destroy=function(){this.clear(),this._queue.destroy(),this._queue=null},s.abort=function(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)},s.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},s.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},s.isOngoing=function(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},s.pause=function(){this._queue.pause()},s.push=function(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const r=this._queue.push(t),s=()=>{this._keyToItem.delete(t),this.notifyChange("updating")};return this._keyToItem.set(t,e),r.then(s,s),this.notifyChange("updating"),r},s.reset=function(){this._queue.reset()},s.resume=function(){this._queue.resume()},s._peekByScaleFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);y.has(o)||(y.set(o,[]),r=Math.max(o,r),s=Math.min(o,s)),y.get(o).push(t.key),l.add(o)}));let o=this.state.scale;y.has(o)||(h(p,l),p.sort(),o=p.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),p[0])),o=Math.min(o,r),o=Math.max(o,s);const n=y.get(o),i=t.getClosestInfoForScale(o),u=i.getColumnForX(this.state.center[0]),c=i.getRowForY(this.state.center[1]);return n.sort(((e,t)=>{const r=i.denormalizeCol(e.col,e.world),s=i.denormalizeCol(t.col,t.world);return Math.sqrt((u-r)*(u-r)+(c-e.row)*(c-e.row))-Math.sqrt((u-s)*(u-s)+(c-t.row)*(c-t.row))})),l.clear(),y.clear(),n[0].id},s._peekByCenterFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,r=this.state.center;let s=Number.POSITIVE_INFINITY,o=null;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(_,n.key);const i=c.distance(_,r);i<s&&(s=i,o=n.key)})),o.id},e._createClass(r,[{key:"length",get:function(){return this._queue?this._queue.length:0}},{key:"onGoingCount",get:function(){return this._keyToItem.size}},{key:"updating",get:function(){return this.length>0||this.onGoingCount>0}}]),r}(r);return t.__decorate([s.property({constructOnly:!0})],g.prototype,"concurrency",void 0),t.__decorate([s.property({constructOnly:!0})],g.prototype,"process",void 0),t.__decorate([s.property()],g.prototype,"state",void 0),t.__decorate([s.property({constructOnly:!0})],g.prototype,"strategy",void 0),t.__decorate([s.property({constructOnly:!0})],g.prototype,"tileInfoView",void 0),t.__decorate([s.property({readOnly:!0})],g.prototype,"updating",null),g=t.__decorate([u.subclass("esri.views.2d.tiling.TileQueue")],g),g}));
