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

define(["require","exports","tslib"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var i={divisor:0};r.glLayout=function(e,r){void 0===r&&(r={}),r=t.__assign(t.__assign({},i),r);var o=e.stride;return e.fieldNames.filter((function(r){var t=e.fields.get(r).optional;return!(t&&t.glPadding)})).map((function(t){var i=e.fields.get(t),u=i.constructor.ElementCount,s=function(e){var r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),a=i.offset,f=!(!i.optional||!i.optional.glNormalized);return{name:t,stride:o,count:u,type:s,offset:a,normalized:f,divisor:r.divisor}}))};var n={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}}));