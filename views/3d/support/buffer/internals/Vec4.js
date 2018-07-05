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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../lib/glMatrix"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,r,i){void 0===r&&(r=0),this.TypedArrayConstructor=e;var n=this.TypedArrayConstructor;void 0===i&&(i=4*n.BYTES_PER_ELEMENT);var o=0===t.byteLength?0:r;this.data=new n(t,o),this.elementStride=i/n.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec4d.set4(this.data[e*this.elementStride],this.data[e*this.elementStride+1],this.data[e*this.elementStride+2],this.data[e*this.elementStride+3],t)},e.prototype.setVec=function(e,t){this.data[e*this.elementStride]=t[0],this.data[e*this.elementStride+1]=t[1],this.data[e*this.elementStride+2]=t[2],this.data[e*this.elementStride+3]=t[3]},e.prototype.get=function(e,t){return this.data[e*this.elementStride+t]},e.prototype.set=function(e,t,r){this.data[e*this.elementStride+t]=r},Object.defineProperty(e.prototype,"count",{get:function(){return Math.ceil(this.data.length/this.elementStride)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this.data.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"typedBuffer",{get:function(){return this.data},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stride",{get:function(){return this.elementStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT},enumerable:!0,configurable:!0}),e.ElementCount=4,e}();t.BufferViewVec4=i});