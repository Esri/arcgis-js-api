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

define(["require","exports"],function(r,t){Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function r(r){this._pos=0;var t=r?this._roundToNearest4(r):40;this._array=new ArrayBuffer(t),this._buffer=new Int32Array(this._array)}return r.prototype._roundToNearest4=function(r){var t=Math.round(r);return t+(4-t%4)},r.prototype._ensureSize=function(){if(this._pos>=this._buffer.length){var r=new ArrayBuffer(this._roundToNearest4(1.5*this._array.byteLength)),t=new Int32Array(r);t.set(this._buffer,0),this._array=r,this._buffer=t}},r.prototype.writeInt32=function(r){this._ensureSize();var t=this._pos;return this._buffer[this._pos++]=r,t},r.prototype.buffer=function(){var r=this._array.slice(0,4*this._pos);return this.destroy(),r},r.prototype.destroy=function(){this._array=null,this._buffer=null},r}();t.default=e});