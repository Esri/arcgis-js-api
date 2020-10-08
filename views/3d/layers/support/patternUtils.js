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

define(["require","exports","../../../../core/compilerUtils","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec4f64","../../webgl-engine/materials/ColorMaterial","../../webgl-engine/materials/PatternMaterial"],(function(e,r,t,a,n,i,l){"use strict";function o(e,r,t){return a.isSome(e)?"none"===e.style||"solid"===e.style?("none"===e.style&&(r.color=n.vec4f64.fromValues(0,0,0,0),r.transparent=!0),new i(r,t.idHint+"_colormat")):(r.style=c(e.style),r.draped=t.isDraped,new l(r,t.idHint+"_patternmat")):new i(r,t.idHint+"_colormat")}function c(e){switch(e){case"horizontal":return 0;case"vertical":return 1;case"cross":return 2;case"forward-diagonal":return 3;case"backward-diagonal":return 4;case"diagonal-cross":return 5;default:return void t.neverReached(e)}}Object.defineProperty(r,"__esModule",{value:!0}),r.parsePatternStyle=r.createMaterialFromPattern=r.createMaterial=void 0,r.createMaterial=function(e,r,t){return o(function(e){return e&&e.pattern||null}(e),r,t)},r.createMaterialFromPattern=o,r.parsePatternStyle=c}));