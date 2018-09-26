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

define(["require","exports","../../../lib/gl-matrix"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r,n,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=3;var o=this.TypedArrayConstructor;void 0===n&&(n=3*o.BYTES_PER_ELEMENT);var u=0===t.byteLength?0:r;this.data=null==i?new o(t,u):new o(t,u,(i-r)/o.BYTES_PER_ELEMENT),this.elementStride=n/o.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec3d.set3(this.data[e*this.elementStride],this.data[e*this.elementStride+1],this.data[e*this.elementStride+2],t)},e.prototype.setVec=function(e,t){this.data[e*this.elementStride]=t[0],this.data[e*this.elementStride+1]=t[1],this.data[e*this.elementStride+2]=t[2]},e.prototype.get=function(e,t){return this.data[e*this.elementStride+t]},e.prototype.set=function(e,t,r){this.data[e*this.elementStride+t]=r},Object.defineProperty(e.prototype,"count",{get:function(){return Math.ceil(this.data.length/this.elementStride)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this.data.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"typedBuffer",{get:function(){return this.data},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stride",{get:function(){return this.elementStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"typedBufferStride",{get:function(){return this.elementStride},enumerable:!0,configurable:!0}),e.ElementCount=3,e}();t.BufferViewVec3Impl=n});