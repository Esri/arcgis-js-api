/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Accessor","../../../chunks/vec2","../../support/QueueProcessor"],(function(e,t,o,r,s,n,i,u,c,a,h,l,p){"use strict";function y(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const g=new Set,_=[],d=new Map,f=[0,0];let I=function(t){function o(e){var o;return(o=t.call(this,e)||this)._keyToItem=new Map,o.concurrency=6,o.strategy="scale-first",o.tileInfoView=null,o}e._inheritsLoose(o,t);var r=o.prototype;return r.initialize=function(){const{concurrency:e,process:t}=this;this._queue=new p.QueueProcessor({concurrency:e,process:(e,o)=>{const r=this._keyToItem.get(e);return t(r,{signal:o})},peeker:e=>e.values().next().value})},r.destroy=function(){this.clear(),this._queue.destroy(),this._queue=null},r.abort=function(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)},r.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},r.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},r.isOngoing=function(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},r.pause=function(){this._queue.pause()},r.push=function(e,t){const o=e.key.id+"-"+t;if(this.has(o))return this.get(o);const r=this._queue.push(o),s=()=>{this._keyToItem.delete(o),this.notifyChange("updating")};return this._keyToItem.set(o,e),r.then(s,s),this.notifyChange("updating"),r},r.reset=function(){this._queue.reset(),this.notifyChange("updating")},r.resume=function(){this._queue.resume()},r._peekByScaleFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let o=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),s=this.tileInfoView.getTileScale(t.key);d.has(s)||(d.set(s,[]),o=Math.max(s,o),r=Math.min(s,r)),d.get(s).push(t.key),g.add(s)}));let s=this.state.scale;d.has(s)||(y(_,g),_.sort(),s=_.reduce(((e,t)=>Math.abs(t-s)<Math.abs(e-s)?t:e),_[0])),s=Math.min(s,o),s=Math.max(s,r);const n=d.get(s),i=t.getClosestInfoForScale(s),u=i.getColumnForX(this.state.center[0]),c=i.getRowForY(this.state.center[1]);return n.sort(((e,t)=>{const o=i.denormalizeCol(e.col,e.world),r=i.denormalizeCol(t.col,t.world);return Math.sqrt((u-o)*(u-o)+(c-e.row)*(c-e.row))-Math.sqrt((u-r)*(u-r)+(c-t.row)*(c-t.row))})),g.clear(),d.clear(),n[0].id},r._peekByCenterFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,o=this.state.center;let r=Number.POSITIVE_INFINITY,s=null;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(f,n.key);const i=l.distance(f,o);i<r&&(r=i,s=n.key)})),s.id},e._createClass(o,[{key:"length",get:function(){return this._queue?this._queue.length:0}},{key:"onGoingCount",get:function(){return this._keyToItem.size}},{key:"updating",get:function(){return this.length>0||this.onGoingCount>0}}]),o}(h);return t.__decorate([n.property({constructOnly:!0})],I.prototype,"concurrency",void 0),t.__decorate([n.property({constructOnly:!0})],I.prototype,"process",void 0),t.__decorate([n.property()],I.prototype,"state",void 0),t.__decorate([n.property({constructOnly:!0})],I.prototype,"strategy",void 0),t.__decorate([n.property({constructOnly:!0})],I.prototype,"tileInfoView",void 0),t.__decorate([n.property({readOnly:!0})],I.prototype,"updating",null),I=t.__decorate([i.subclass("esri.views.2d.tiling.PagedTileQueue")],I),I}));
