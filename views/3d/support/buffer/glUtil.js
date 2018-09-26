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

define(["require","exports","../../../../core/tsSupport/assignHelper"],function(e,r,t){function o(e,r){void 0===r&&(r={}),r=t({},u,r);var o=e.stride;return e.fieldNames.filter(function(r){var t=e.fields.get(r).optional;return!(t&&t.glPadding)}).map(function(t){var u=e.fields.get(t),f=u.constructor.ElementCount,s=n(u.constructor.ElementType),a=u.offset,p=!(!u.optional||!u.optional.glNormalized);return{name:r.prefixA?i(t):t,stride:o,count:f,type:s,offset:a,normalized:p,divisor:r.divisor}})}function i(e){return"a"+e[0].toUpperCase()+e.substr(1)}function n(e){var r=f[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}Object.defineProperty(r,"__esModule",{value:!0});var u={divisor:0,prefixA:!1};r.glLayout=o;var f={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}});