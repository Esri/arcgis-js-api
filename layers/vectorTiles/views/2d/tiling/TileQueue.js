// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../core/QueueProcessor","../libs/gl-matrix/vec2"],(function(e,t,r,s){var n=new Set,o=[],i=new Map;return function(){function e(e){var t=this;this._keysToRequests=new Map,this.tileInfoView=null;var s=e.strategy&&"scale-first"!==e.strategy?this._peekByCenterFirst.bind(this):this._peekByScaleFirst.bind(this);this.tileInfoView=e.tileInfoView,e.tileServers&&e.tileServers.length>0?this._queues=e.tileServers.map((function(n){return new r({concurrency:e.concurrency||6,process:function(r){var s=t._keysToRequests.get(r);return e.process(s,n)},peeker:s})})):this._queues=[new r({concurrency:e.concurrency||6,process:function(r){var s=t._keysToRequests.get(r);return e.process(s)},peeker:s})]}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queues.reduce((function(e,t){return e+t.length}),0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].clear()}this._keysToRequests.clear()},e.prototype.find=function(e,t){for(var r=this,s=0,n=this._queues;s<n.length;s++){var o=n[s].find((function(t){return e(r._keysToRequests.get(t).key)}));if(o)return o}},e.prototype.get=function(e){for(var t="string"==typeof e?e:e.id,r=0,s=this._queues;r<s.length;r++){var n=s[r].get(t);if(n)return n}},e.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},e.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},e.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some((function(e){return e.isOngoing(t)}))},e.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].pause()}},e.prototype.push=function(e){var t=this,r=e.key.id,s=this._queues[e.key.row%this._queues.length].push(r);return this._keysToRequests.set(r,e),s.then((function(){t._keysToRequests.delete(r)})),s.catch((function(){t._keysToRequests.delete(r)})),s},e.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].reset()}},e.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].resume()}},e.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,u=0,a=e;u<a.length;u++){var h=a[u],c=this._keysToRequests.get(h),f=this.tileInfoView.getTileScale(c.key);i.has(f)||(i.set(f,[]),r=Math.max(f,r),s=Math.min(f,s)),i.get(f).push(c.key),n.add(f)}var l,p,y=this.state.scale;i.has(y)||(p=n,(l=o).length=0,p.forEach((function(e){return l.push(e)})),o.sort(),y=o.reduce((function(e,t,r,s){return Math.abs(t-y)<Math.abs(e-y)?t:e}),o[0])),y=Math.min(y,r),y=Math.max(y,s);var g=i.get(y),_=t.getClosestInfoForScale(y),q=_.getColumnForX(this.state.center[0]),v=_.getRowForY(this.state.center[1]);return g.sort((function(e,t){var r=_.denormalizeCol(e.col,e.world),s=_.denormalizeCol(t.col,t.world);return Math.sqrt((q-r)*(q-r)+(v-e.row)*(v-e.row))-Math.sqrt((q-s)*(q-s)+(v-t.row)*(v-t.row))})),n.clear(),i.clear(),g[0].id},e.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=this.state.center,n=[0,0],o=Number.POSITIVE_INFINITY,i=null,u=0,a=e;u<a.length;u++){var h=a[u],c=this._keysToRequests.get(h);t.getTileCoords(n,c.key);var f=s.distance(n,r);f<o&&(o=f,i=c.key)}return i.id},e}()}));