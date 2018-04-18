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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../../core/QueueProcessor"],function(e,t,r){function n(e,t){return e.length=0,t.forEach(function(t){return e.push(t)}),e}var o=new Set,u=[],s=new Map;return function(){function e(e){var t=this;this.tileInfoView=null,this.tileInfoView=e.tileInfoView,e.tileServers&&e.tileServers.length>0?this._queues=e.tileServers.map(function(){return new r({concurrency:e.concurrency||6,process:e.process,peeker:function(e){return t._peek(e)}})}):this._queues=[new r({concurrency:e.concurrency||6,process:e.process,peeker:function(e){return t._peek(e)}})]}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].clear()}},e.prototype.find=function(e,t){for(var r=0,n=this._queues;r<n.length;r++){var o=n[r],u=o.find(e);if(u)return u}},e.prototype.has=function(e){for(var t=0,r=this._queues;t<r.length;t++){if(r[t].has(e))return!0}return!1},e.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].pause()}},e.prototype.push=function(e){return this._queues[e.row%this._queues.length].push(e)},e.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].reset()}},e.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++){t[e].resume()}},e.prototype._peek=function(e){var t=this;if(!this.state)return e[0];var r=this.tileInfoView,i=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY;e.forEach(function(e){var r=t.tileInfoView.getTileScale(e);s.has(r)||(s.set(r,[]),i=Math.max(r,i),c=Math.min(r,c)),s.get(r).push(e),o.add(r)});var a=this.state.scale;s.has(a)||(n(u,o),u.sort(),a=u.reduce(function(e,t,r,n){return Math.abs(t-a)<Math.abs(e-a)?t:e},u[0])),a=Math.min(a,i),a=Math.max(a,c);var h=s.get(a),f=r.getClosestInfoForScale(a),l=f.getColumnForX(this.state.center[0]),p=f.getRowForY(this.state.center[1]);return h.sort(function(e,t){var r=f.denormalizeCol(e.col,e.world),n=f.denormalizeCol(t.col,t.world);return Math.sqrt((l-r)*(l-r)+(p-e.row)*(p-e.row))-Math.sqrt((l-n)*(l-n)+(p-t.row)*(p-t.row))}),o.clear(),s.clear(),h[0]},e}()});