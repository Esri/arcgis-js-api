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

define(["require","exports","../../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../../core/shaderModules/interfaces"],(function(e,i,t,c){var a,r,n,_;Object.defineProperty(i,"__esModule",{value:!0}),i.VertexDiscardByOpacity=function(e,i){var d=e.vertex;switch(d.code.add(c.glsl(a||(a=t(["\n  #define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)\n  "],["\n  #define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)\n  "])))),i.vertexDiscardMode){case 0:d.code.add(c.glsl(r||(r=t(["\n        #define vertexDiscardByOpacity(_opacity_) {}\n      "],["\n        #define vertexDiscardByOpacity(_opacity_) {}\n      "]))));break;case 2:d.code.add(c.glsl(n||(n=t(["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "],["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "]))));break;case 1:d.code.add(c.glsl(_||(_=t(["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "],["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "]))))}}}));