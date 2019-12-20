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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../../../core/QueueProcessor","../libs/gl-matrix/vec2"],function(e,t,r,s){function n(e,t){return e.length=0,t.forEach(function(t){return e.push(t)}),e}var o=new Set,i=[],u=new Map;return function(){function e(e){var t=this;this._keysToRequests=new Map,this.tileInfoView=null;var s=e.strategy&&"scale-first"!==e.strategy?this._peekByCenterFirst.bind(this):this._peekByScaleFirst.bind(this);this.tileInfoView=e.tileInfoView,e.tileServers&&e.tileServers.length>0?this._queues=e.tileServers.map(function(n){return new r({concurrency:e.concurrency||6,process:function(r){var s=t._keysToRequests.get(r);return e.process(s,n)},peeker:s})}):this._queues=[new r({concurrency:e.concurrency||6,process:function(r){var s=t._keysToRequests.get(r);return e.process(s)},peeker:s})]}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].clear()}this._keysToRequests.clear()},e.prototype.find=function(e,t){for(var r=this,s=0,n=this._queues;s<n.length;s++){var o=n[s],i=o.find(function(t){return e(r._keysToRequests.get(t).key)});if(i)return i}},e.prototype.get=function(e){for(var t="string"==typeof e?e:e.id,r=0,s=this._queues;r<s.length;r++){var n=s[r],o=n.get(t);if(o)return o}},e.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},e.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},e.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some(function(e){return e.isOngoing(t)})},e.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].pause()}},e.prototype.push=function(e){var t=this,r=e.key.id,s=this._queues[e.key.row%this._queues.length].push(r);return this._keysToRequests.set(r,e),s.then(function(){t._keysToRequests.delete(r)}),s.catch(function(){t._keysToRequests.delete(r)}),s},e.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].reset()}},e.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].resume()}},e.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=0,c=e;a<c.length;a++){var h=c[a],f=this._keysToRequests.get(h),l=this.tileInfoView.getTileScale(f.key);u.has(l)||(u.set(l,[]),r=Math.max(l,r),s=Math.min(l,s)),u.get(l).push(f.key),o.add(l)}var p=this.state.scale;u.has(p)||(n(i,o),i.sort(),p=i.reduce(function(e,t,r,s){return Math.abs(t-p)<Math.abs(e-p)?t:e},i[0])),p=Math.min(p,r),p=Math.max(p,s);var y=u.get(p),g=t.getClosestInfoForScale(p),_=g.getColumnForX(this.state.center[0]),q=g.getRowForY(this.state.center[1]);return y.sort(function(e,t){var r=g.denormalizeCol(e.col,e.world),s=g.denormalizeCol(t.col,t.world);return Math.sqrt((_-r)*(_-r)+(q-e.row)*(q-e.row))-Math.sqrt((_-s)*(_-s)+(q-t.row)*(q-t.row))}),o.clear(),u.clear(),y[0].id},e.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=this.state.center,n=[0,0],o=Number.POSITIVE_INFINITY,i=null,u=0,a=e;u<a.length;u++){var c=a[u],h=this._keysToRequests.get(c);t.getTileCoords(n,h.key);var f=s.distance(n,r);f<o&&(o=f,i=h.key)}return i.id},e}()});