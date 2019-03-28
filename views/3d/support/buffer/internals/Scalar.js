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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,i,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=1;var u=this.TypedArrayConstructor;void 0===i&&(i=u.BYTES_PER_ELEMENT);var n=0===t.byteLength?0:r;this.typedBuffer=null==f?new u(t,n):new u(t,n,(f-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=i/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.get=function(e){return this.typedBuffer[e*this.typedBufferStride]},e.prototype.set=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=1,e}();t.BufferViewScalarImpl=r});