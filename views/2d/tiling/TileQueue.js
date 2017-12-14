// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/QueueProcessor"],function(e,t,r){function n(e,t){return e.length=0,t.forEach(function(t){return e.push(t)}),e}var o=new Set,u=[],i=new Map,s=function(){function e(e){var t=this;this.tileInfoView=e.tileInfoView,this._queue=new r({concurrency:e.concurrency||6,process:e.process,peeker:function(e){return t._peek(e)}})}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear()},e.prototype.find=function(e,t){return this._queue.find(e)},e.prototype.has=function(e){return this._queue.has(e)},e.prototype.pause=function(){return this._queue.pause()},e.prototype.push=function(e){return this._queue.push(e)},e.prototype.reset=function(){return this._queue.reset()},e.prototype.resume=function(){return this._queue.resume()},e.prototype._peek=function(e){var t=this;if(!this.state)return e[0];var r=this.tileInfoView,s=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;e.forEach(function(e){var r=t.tileInfoView.getTileScale(e);i.has(r)||(i.set(r,[]),s=Math.max(r,s),a=Math.min(r,a)),i.get(r).push(e),o.add(r)});var c=this.state.scale;i.has(c)||(n(u,o),u.sort(),c=u.reduce(function(e,t,r,n){return Math.abs(t-c)<Math.abs(e-c)?t:e},u[0])),c=Math.min(c,s),c=Math.max(c,a);var h=i.get(c),p=r.getClosestInfoForScale(c),f=p.getColumnForX(this.state.center[0]),l=p.getRowForY(this.state.center[1]);return h.sort(function(e,t){var r=p.denormalizeCol(e.col,e.world),n=p.denormalizeCol(t.col,t.world);return Math.sqrt((f-r)*(f-r)+(l-e.row)*(l-e.row))-Math.sqrt((f-n)*(f-n)+(l-t.row)*(l-t.row))}),o.clear(),i.clear(),h[0]},e}();return s});