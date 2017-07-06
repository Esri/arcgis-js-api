// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils"],function(r,n,e,a){function t(r){var n=Math.round(100*(1-r));return Math.max(0,Math.min(n,100))}function o(r){var n=1-r/100;return Math.max(0,Math.min(n,1))}function c(r,n){var a=null!=n.transparency?o(n.transparency):1,t=n.color;return t&&Array.isArray(t)?new e([t[0]||0,t[1]||0,t[2]||0,a]):void 0}function i(r,n){n.color=[s(r.r),s(r.g),s(r.b)];var e=t(r.a);0!==e&&(n.transparency=e)}function s(r){return Math.max(0,Math.min(Math.round(r),255))}Object.defineProperty(n,"__esModule",{value:!0}),n.opacityToTransparency=t,n.transparencyToOpacity=o,n.readColorAndTransparency=c,n.writeColorAndTransparency=i,n.colorAndTransparencyProperty={type:e,json:{read:{source:["color","transparency"],reader:c},write:{writer:i}}},n.screenSizeProperty={type:Number,cast:a.toPt,json:{write:!0}}});