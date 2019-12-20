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

define(["require","exports","../../../../../core/tsSupport/makeTemplateObjectHelper","../shaderModules/interfaces"],function(e,d,r,a){function o(e,d){var o=e.fragment;switch(d.alphaDiscardMode){case 0:o.code.add(a.glsl(c||(c=r(["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "]))));break;case 1:o.code.add(a.glsl(l||(l=r(["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a = 1.0;\n        }\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a = 1.0;\n        }\n      "]))));break;case 2:o.uniforms.add("textureAlphaCutoff","float"),o.code.add(a.glsl(t||(t=r(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }\n      "]))));break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(a.glsl(s||(s=r(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }\n      "]))))}}Object.defineProperty(d,"__esModule",{value:!0}),d.DiscardOrAdjustAlpha=o,d.TEXTURE_ALPHA_CUTOFF_DEFAULT=.1;var c,l,t,s});