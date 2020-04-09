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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],(function(r,e,t,n,o,a){Object.defineProperty(e,"__esModule",{value:!0}),e.colorAndTransparencyProperty={type:t,json:{type:[o.Integer],default:null,read:{source:["color","transparency"],reader:function(r,e){var n=null!=e.transparency?a.transparencyToOpacity(e.transparency):1,o=e.color;return o&&Array.isArray(o)?new t([o[0]||0,o[1]||0,o[2]||0,n]):null}},write:{target:{color:{type:[o.Integer]},transparency:{type:o.Integer}},writer:function(r,e){e.color=r.toJSON().slice(0,3);var t=a.opacityToTransparency(r.a);0!==t&&(e.transparency=t)}}}},e.screenSizeProperty={type:Number,cast:n.toPt,json:{write:!0}},e.stipplePatternProperty={type:[Number],cast:function(r){return null!=r?r:Array.isArray(r)?r.map(n.toPt):null},json:{read:!1,write:!1}}}));