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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Evented","../../../core/MapUtils","./GraphicsMap"],(function(e,t,n,i,r,a){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var n=e.call(this)||this;return n._limit=t,n._all=new a.GraphicsMap,n._active=new s(n),n._pending=new Map,n._handle=n._all.on("change",(function(e){return n._handleChanges(e)})),n}return n.__extends(t,e),t.prototype.destroy=function(){this._handle.remove()},Object.defineProperty(t.prototype,"length",{get:function(){return this._active.length},enumerable:!0,configurable:!0}),t.prototype.toArray=function(){return this._active.toArray()},t.prototype.find=function(e){return this._active.find(e)},t.prototype.forEach=function(e){this._active.forEach(e)},t.prototype.addMany=function(e){this._all.addMany(e)},t.prototype.removeManyByObjectId=function(e){this._all.removeManyByObjectId(e)},t.prototype._handleChanges=function(e){var t=this,n=e.removed;if(this._pending.size>0){n=new Array;for(var i=0,r=e.removed;i<r.length;i++){var a=r[i];this._pending.delete(a.objectId)||n.push(a)}}var o=this._limit-this._active.length+n.length;o<e.added.length&&(this._active.removeMany(n),n=[],h.reset(1-this._limit/(this._active.length+e.added.length)),this._active.forEach((function(e){h.sample()&&(n.push(e),t._pending.set(e.objectId,e))})),o=this._limit-this._active.length+n.length);var s=e.added;if(o<e.added.length){s=new Array,h.reset(o/e.added.length);for(var d=0,p=e.added;d<p.length;d++){a=p[d];h.sample()?s.push(a):this._pending.set(a.objectId,a)}}var c=o-s.length;c>0&&this._pending.size>0&&(h.reset(c/this._pending.size),this._pending.forEach((function(e){h.sample()&&(s.push(e),t._pending.delete(e.objectId))}))),this._active.addAndRemove(s,n)},t}(i);t.LimitGraphicsMap=o;var h=new(function(){function e(){this.percentage=1,this.last=-1,this.index=0}return e.prototype.reset=function(e){this.percentage=e,this.last=-1},e.prototype.sample=function(){var e=Math.floor(this.index*this.percentage);return++this.index,e!==this.last&&(this.last=e,!0)},e}()),s=function(){function e(e){this._parent=e,this._map=new Map}return Object.defineProperty(e.prototype,"length",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.forEach=function(e){this._map.forEach((function(t){return e(t)}))},e.prototype.find=function(e){var t;return r.someMap(this._map,(function(n){return!!e(n)&&(t=n,!0)})),t},e.prototype.toArray=function(){return r.valuesOfMap(this._map)},e.prototype.addAndRemove=function(e,t){for(var n=0,i=e;n<i.length;n++){var r=i[n];this._map.set(r.objectId,r)}for(var a=0,o=t;a<o.length;a++){r=o[a];this._map.delete(r.objectId)}(e.length>0||t.length>0)&&this._parent.emit("change",{added:e,removed:t})},e.prototype.removeMany=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];this._map.delete(i.objectId)}e.length>0&&this._parent.emit("change",{added:[],removed:e})},e}()}));