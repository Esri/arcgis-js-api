// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../webgl/BufferObject"],function(e,t,r){return function(){function e(e,t,i,n,a){this._elementSize=n,this._buffer=new r(e,t,i),this.resize(a)}return e.prototype.destroy=function(){this._buffer.dispose()},Object.defineProperty(e.prototype,"elementSize",{get:function(){return this._elementSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"capacity",{get:function(){return this._capacity},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this._buffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"memoryUsage",{get:function(){return{cpu:this._capacity*this._elementSize,gpu:this._capacity*this._elementSize}},enumerable:!0,configurable:!0}),e.prototype.copyRange=function(e,t,r,i){void 0===i&&(i=0);var n=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(r.array,i*this.elementSize).set(n)},e.prototype.transferAll=function(){this._buffer.setData(this._array)},e.prototype.transferRange=function(e,t){var r=e*this._elementSize,i=t*this._elementSize;this._buffer.setSubData(this._array,r,r,i)},e.prototype.resize=function(e){var t=e*this._elementSize,r=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(r).set(new Uint8Array(this._array)):new Uint8Array(r).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=r,this._buffer.setData(t),this._capacity=e},e}()});