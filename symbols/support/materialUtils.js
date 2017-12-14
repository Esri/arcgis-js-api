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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils"],function(r,e,n,a){function t(r){var e=Math.round(100*(1-r));return Math.max(0,Math.min(e,100))}function o(r){var e=1-r/100;return Math.max(0,Math.min(e,1))}function c(r,e){var a=null!=e.transparency?o(e.transparency):1,t=e.color;return t&&Array.isArray(t)?new n([t[0]||0,t[1]||0,t[2]||0,a]):void 0}function y(r,e){e.color=r.toJSON().slice(0,3);var n=t(r.a);0!==n&&(e.transparency=n)}Object.defineProperty(e,"__esModule",{value:!0}),e.opacityToTransparency=t,e.transparencyToOpacity=o,e.readColorAndTransparency=c,e.writeColorAndTransparency=y,e.colorAndTransparencyProperty={type:n,json:{type:[Number],read:{source:["color","transparency"],reader:c},write:{target:{color:{type:[Number]},transparency:{type:Number}},writer:y}}},e.screenSizeProperty={type:Number,cast:a.toPt,json:{write:!0}}});