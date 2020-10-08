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

define(["require","exports","tslib"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.glLayout=void 0;var i={divisor:0};t.glLayout=function(e,t){void 0===t&&(t={}),t=r.__assign(r.__assign({},i),t);var n=e.stride;return e.fieldNames.filter((function(t){var r=e.fields.get(t).optional;return!(r&&r.glPadding)})).map((function(r){var i=e.fields.get(r),u=i.constructor.ElementCount,s=function(e){var t=o[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),a=i.offset,f=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:u,type:s,offset:a,normalized:f,divisor:t.divisor}}))};var o={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}}));