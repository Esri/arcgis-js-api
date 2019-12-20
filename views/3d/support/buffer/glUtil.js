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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper"],function(e,r,t){function o(e,r){void 0===r&&(r={}),r=t({},n,r);var o=e.stride;return e.fieldNames.filter(function(r){var t=e.fields.get(r).optional;return!(t&&t.glPadding)}).map(function(t){var n=e.fields.get(t),u=n.constructor.ElementCount,f=i(n.constructor.ElementType),a=n.offset,s=!(!n.optional||!n.optional.glNormalized);return{name:t,stride:o,count:u,type:f,offset:a,normalized:s,divisor:r.divisor}})}function i(e){var r=u[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}Object.defineProperty(r,"__esModule",{value:!0});var n={divisor:0};r.glLayout=o;var u={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}});