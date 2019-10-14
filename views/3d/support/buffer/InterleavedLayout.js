// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./BufferView","./types"],function(e,t,i,r){function n(){return new o}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(var i=0,r=e.fieldNames;i<r.length;i++){var n=r[i],f=e.fields.get(n);this[n]=new f.constructor(this.buffer,f.offset,this.stride)}}return Object.defineProperty(e.prototype,"stride",{get:function(){return this.layout.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this.buffer.byteLength/this.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteLength",{get:function(){return this.buffer.byteLength},enumerable:!0,configurable:!0}),e.prototype.getField=function(e,t){var i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null},e.prototype.slice=function(t,i){return new e(this.layout,this.buffer.slice(t*this.stride,i*this.stride))},e.prototype.copyFrom=function(e,t,i,r){var n=this.stride;if(n%4==0){var f=new Uint32Array(e.buffer,t*n,r*n/4),o=new Uint32Array(this.buffer,i*n,r*n/4);o.set(f)}else{var f=new Uint8Array(e.buffer,t*n,r*n),o=new Uint8Array(this.buffer,i*n,r*n);o.set(f)}},e}();t.InterleavedBuffer=f;var o=function(){function e(){this.stride=0,this.fields=new Map,this.fieldNames=[]}return e.prototype.vec2f=function(e,t){return this.appendField(e,i.BufferViewVec2f,t),this},e.prototype.vec2f64=function(e,t){return this.appendField(e,i.BufferViewVec2f64,t),this},e.prototype.vec3f=function(e,t){return this.appendField(e,i.BufferViewVec3f,t),this},e.prototype.vec3f64=function(e,t){return this.appendField(e,i.BufferViewVec3f64,t),this},e.prototype.vec4f=function(e,t){return this.appendField(e,i.BufferViewVec4f,t),this},e.prototype.vec4f64=function(e,t){return this.appendField(e,i.BufferViewVec4f64,t),this},e.prototype.mat3f=function(e,t){return this.appendField(e,i.BufferViewMat3f,t),this},e.prototype.mat3f64=function(e,t){return this.appendField(e,i.BufferViewMat3f64,t),this},e.prototype.mat4f=function(e,t){return this.appendField(e,i.BufferViewMat4f,t),this},e.prototype.mat4f64=function(e,t){return this.appendField(e,i.BufferViewMat4f64,t),this},e.prototype.vec4u8=function(e,t){return this.appendField(e,i.BufferViewVec4u8,t),this},e.prototype.f32=function(e,t){return this.appendField(e,i.BufferViewFloat,t),this},e.prototype.f64=function(e,t){return this.appendField(e,i.BufferViewFloat64,t),this},e.prototype.u8=function(e,t){return this.appendField(e,i.BufferViewUint8,t),this},e.prototype.u16=function(e,t){return this.appendField(e,i.BufferViewUint16,t),this},e.prototype.i8=function(e,t){return this.appendField(e,i.BufferViewInt8,t),this},e.prototype.vec2i8=function(e,t){return this.appendField(e,i.BufferViewVec2i8,t),this},e.prototype.vec2i16=function(e,t){return this.appendField(e,i.BufferViewVec2i16,t),this},e.prototype.vec2u8=function(e,t){return this.appendField(e,i.BufferViewVec2u8,t),this},e.prototype.vec4u16=function(e,t){return this.appendField(e,i.BufferViewVec4u16,t),this},e.prototype.u32=function(e,t){return this.appendField(e,i.BufferViewUint32,t),this},e.prototype.appendField=function(e,t,i){var n=t.ElementCount*r.elementTypeSize(t.ElementType),f=this.stride;this.fields.set(e,{size:n,constructor:t,offset:f,optional:i}),this.stride+=n,this.fieldNames.push(e)},e.prototype.alignTo=function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this},e.prototype.hasField=function(e){return this.fieldNames.indexOf(e)>=0},e.prototype.createBuffer=function(e){return new f(this,e)},e.prototype.createView=function(e){return new f(this,e)},e.prototype.clone=function(){var t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(function(e,i){return t.fields.set(i,e)}),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t},e}();t.InterleavedLayout=o,t.newLayout=n});