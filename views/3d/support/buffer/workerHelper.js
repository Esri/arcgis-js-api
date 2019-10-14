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

define(["require","exports","../../../../core/tsSupport/assignHelper","./BufferView","./InterleavedLayout"],function(e,f,r,u,i){function t(e,f){return f.push(e.buffer),{buffer:e.buffer,layout:c(e.layout)}}function V(e){return n(e.layout).createView(e.buffer)}function c(e){var f=new Array;return e.fields.forEach(function(e,u){var i=r({},e,{constructor:w(e.constructor)});f.push([u,i])}),{stride:e.stride,fields:f,fieldNames:e.fieldNames}}function n(e){var f=i.newLayout();return f.stride=e.stride,f.fieldNames=e.fieldNames,e.fields.forEach(function(e){return f.fields.set(e[0],r({},e[1],{constructor:B(e[1].constructor)}))}),f}function w(e){return e.ElementType+"_"+e.ElementCount}function B(e){return o.get(e)}Object.defineProperty(f,"__esModule",{value:!0}),f.packInterleavedBuffer=t,f.unpackInterleavedBuffer=V,f.packLayout=c,f.unpackLayout=n;var a=[u.BufferViewFloat,u.BufferViewVec2f,u.BufferViewVec3f,u.BufferViewVec4f,u.BufferViewMat3f,u.BufferViewMat4f,u.BufferViewFloat64,u.BufferViewVec2f64,u.BufferViewVec3f64,u.BufferViewVec4f64,u.BufferViewMat3f64,u.BufferViewMat4f64,u.BufferViewUint8,u.BufferViewVec2u8,u.BufferViewVec3u8,u.BufferViewVec4u8,u.BufferViewUint16,u.BufferViewVec2u16,u.BufferViewVec3u16,u.BufferViewVec4u16,u.BufferViewUint32,u.BufferViewVec2u32,u.BufferViewVec3u32,u.BufferViewVec4u32,u.BufferViewInt8,u.BufferViewVec2i8,u.BufferViewVec3i8,u.BufferViewVec4i8,u.BufferViewInt16,u.BufferViewVec2i16,u.BufferViewVec3i16,u.BufferViewVec4i16,u.BufferViewInt32,u.BufferViewVec2i32,u.BufferViewVec3i32,u.BufferViewVec4i32],o=new Map;a.forEach(function(e){return o.set(w(e),e)})});