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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec4"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BufferViewVec4Impl=void 0;var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=4;var u=this.TypedArrayConstructor;void 0===f&&(f=4*u.BYTES_PER_ELEMENT);var d=0===t.byteLength?0:r;this.typedBuffer=null==i?new u(t,d):new u(t,d,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec4.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.setValues=function(e,t,r,f,i){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=f,this.typedBuffer[e*this.typedBufferStride+3]=i},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,d=r*t.typedBufferStride;f[u]=i[d],f[u+1]=i[d+1],f[u+2]=i[d+2],f[u+3]=i[d+3]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0}),e.ElementCount=4,e}();t.BufferViewVec4Impl=f}));