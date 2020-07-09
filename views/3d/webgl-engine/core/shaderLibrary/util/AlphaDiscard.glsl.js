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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,a,d,o){var r,l,t,c;Object.defineProperty(a,"__esModule",{value:!0}),a.defaultMaskAlphaCutoff=.1,a.symbolAlphaCutoff=.001,a.DiscardOrAdjustAlpha=function(e,a){var s=e.fragment;switch(a.alphaDiscardMode){case 0:s.code.add(o.glsl(r||(r=d.__makeTemplateObject(["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {}\n      "]))));break;case 1:s.code.add(o.glsl(l||(l=d.__makeTemplateObject(["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a = 1.0;\n        }\n      "],["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a = 1.0;\n        }\n      "]))));break;case 2:s.uniforms.add("textureAlphaCutoff","float"),s.code.add(o.glsl(t||(t=d.__makeTemplateObject(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }\n      "]))));break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(o.glsl(c||(c=d.__makeTemplateObject(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }\n      "],["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }\n      "]))))}}}));