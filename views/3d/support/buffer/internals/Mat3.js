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

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=t,this.elementCount=9;var u=this.TypedArrayConstructor;void 0===f&&(f=9*u.BYTES_PER_ELEMENT);var o=0===e.byteLength?0:r;this.typedBuffer=null==i?new u(e,o):new u(e,o,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return t.prototype.getMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<9;f++)e[f]=this.typedBuffer[r+f];return e},t.prototype.setMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<9;f++)this.typedBuffer[r+f]=e[f]},t.prototype.get=function(t,e){return this.typedBuffer[t*this.typedBufferStride+e]},t.prototype.set=function(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r},t.prototype.copyFrom=function(t,e,r){for(var f=this.typedBuffer,i=e.typedBuffer,u=t*this.typedBufferStride,o=r*e.typedBufferStride,n=0;n<9;++n)f[u+n]=i[o+n]},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),t.ElementCount=9,t}();e.BufferViewMat3Impl=r}));