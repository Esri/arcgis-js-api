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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType"],function(r,e,n,t,a){function o(r){var e=a.ensureInteger(100*(1-r));return Math.max(0,Math.min(e,100))}function c(r){var e=1-r/100;return Math.max(0,Math.min(e,1))}function s(r,e){var t=null!=e.transparency?c(e.transparency):1,a=e.color;if(a&&Array.isArray(a))return new n([a[0]||0,a[1]||0,a[2]||0,t])}function p(r,e){e.color=r.toJSON().slice(0,3);var n=o(r.a);0!==n&&(e.transparency=n)}Object.defineProperty(e,"__esModule",{value:!0}),e.opacityToTransparency=o,e.transparencyToOpacity=c,e.readColorAndTransparency=s,e.writeColorAndTransparency=p,e.colorAndTransparencyProperty={type:n,json:{type:[a.Integer],read:{source:["color","transparency"],reader:s},write:{target:{color:{type:[a.Integer]},transparency:{type:a.Integer}},writer:p}}},e.screenSizeProperty={type:Number,cast:t.toPt,json:{write:!0}}});