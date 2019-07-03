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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],function(r,e,n,t,o,a){function c(r,e){var t=null!=e.transparency?a.transparencyToOpacity(e.transparency):1,o=e.color;return o&&Array.isArray(o)?new n([o[0]||0,o[1]||0,o[2]||0,t]):null}function p(r,e){e.color=r.toJSON().slice(0,3);var n=a.opacityToTransparency(r.a);0!==n&&(e.transparency=n)}Object.defineProperty(e,"__esModule",{value:!0}),e.readColorAndTransparency=c,e.writeColorAndTransparency=p,e.colorAndTransparencyProperty={type:n,json:{type:[o.Integer],default:null,read:{source:["color","transparency"],reader:c},write:{target:{color:{type:[o.Integer]},transparency:{type:o.Integer}},writer:p}}},e.screenSizeProperty={type:Number,cast:t.toPt,json:{write:!0}}});