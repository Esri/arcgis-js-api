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

define(["require","exports"],(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t,r){this._pos=0;var e=r?this._roundToNearest(r,t.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(e),this._buffer=new t(this._array),this._ctor=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this._pos},enumerable:!1,configurable:!0}),t.prototype._roundToNearest=function(t,r){var e=Math.round(t);return e+(r-e%r)},t.prototype._ensureSize=function(t){if(this._pos+t>=this._buffer.length){var r=this._roundToNearest(1.5*(this._array.byteLength+t*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),e=new ArrayBuffer(r),o=new this._ctor(e);o.set(this._buffer,0),this._array=e,this._buffer=o}},t.prototype.writeF32=function(t){this._ensureSize(1);var r=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=t,this._pos++,r},t.prototype.push=function(t){this._ensureSize(1);var r=this._pos;return this._buffer[this._pos++]=t,r},t.prototype.writeFixed=function(t){this._buffer[this._pos++]=t},t.prototype.setValue=function(t,r){this._buffer[t]=r},t.prototype.getValue=function(t){return this._buffer[t]},t.prototype.incr=function(t){this._buffer[t]++},t.prototype.decr=function(t){this._buffer[t]--},t.prototype.writeRegion=function(t){this._ensureSize(t.length);var r=this._pos;return this._buffer.set(t,this._pos),this._pos+=t.length,r},t.prototype.buffer=function(){var t=this._array.slice(0,4*this._pos);return this.destroy(),t},t.prototype.toArray=function(){for(var t=this._array,r=[],e=0;e<t.byteLength/4;e++)r.push(t[e]);return r},t.prototype.seek=function(t){this._pos=t},t.prototype.destroy=function(){this._array=null,this._buffer=null},t}();r.default=e}));