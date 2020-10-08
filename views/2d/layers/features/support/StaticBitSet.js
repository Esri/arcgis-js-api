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

define(["require","exports"],(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.StaticBitSet=void 0;var n=function(){function t(t,r){this._mask=0,this._buf=t,this._mask=r}return t.fromBuffer=function(r,n){return new t(r,n)},t.create=function(r,n){return void 0===n&&(n=4294967295),new t(new Uint32Array(Math.ceil(r/32)),n)},t.prototype._getIndex=function(t){return Math.floor(t/32)},t.prototype.has=function(t){var r=this._mask&t;return!!(this._buf[this._getIndex(r)]&1<<r%32)},t.prototype.set=function(t){var r=this._mask&t,n=this._getIndex(r),i=1<<r%32;this._buf[n]|=i},t.prototype.unset=function(t){var r=this._mask&t,n=this._getIndex(r),i=1<<r%32;this._buf[n]&=4294967295^i},t.prototype.resize=function(t){var r=this._buf,n=new Uint32Array(Math.ceil(t/32));n.set(r),this._buf=n},t.prototype.or=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]|=t._buf[r];return this},t.prototype.and=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]&=t._buf[r];return this},t.prototype.xor=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]^=t._buf[r];return this},t.prototype.ior=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]|=~t._buf[r];return this},t.prototype.iand=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]&=~t._buf[r];return this},t.prototype.ixor=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]^=~t._buf[r];return this},t.prototype.any=function(){for(var t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1},t.prototype.copy=function(t){for(var r=0;r<this._buf.length;r++)this._buf[r]=t._buf[r];return this},t.prototype.clone=function(){return new t(this._buf.slice(),this._mask)},t.prototype.clear=function(){for(var t=0;t<this._buf.length;t++)this._buf[t]=0},t.prototype.forEachSet=function(t){for(var r=0;r<this._buf.length;r++){var n=this._buf[r],i=32*r;if(n)for(;n;){1&n&&t(i),n>>>=1,i++}}},t.prototype.countSet=function(){var t=0;return this.forEachSet((function(r){t++})),t},t}();r.StaticBitSet=n}));