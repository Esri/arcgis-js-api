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

define(["require","exports","tslib","../../../collections/Component/Material/shader/DecodeSymbolColor.glsl","../../shaderModules/interfaces"],(function(o,e,l,r,d){"use strict";var n,i;Object.defineProperty(e,"__esModule",{value:!0}),e.SymbolColor=void 0,e.SymbolColor=function(o,e){e.symbolColor?(o.include(r.DecodeSymbolColor),o.attributes.add("symbolColor","vec4"),o.varyings.add("colorMixMode","mediump float")):o.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?o.vertex.code.add(d.glsl(n||(n=l.__makeTemplateObject(["\n    int symbolColorMixMode;\n\n    vec4 getSymbolColor() {\n      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;\n    }\n\n    void forwardColorMixMode() {\n      colorMixMode = float(symbolColorMixMode) + 0.5;\n    }\n  "],["\n    int symbolColorMixMode;\n\n    vec4 getSymbolColor() {\n      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;\n    }\n\n    void forwardColorMixMode() {\n      colorMixMode = float(symbolColorMixMode) + 0.5;\n    }\n  "])))):o.vertex.code.add(d.glsl(i||(i=l.__makeTemplateObject(["\n    vec4 getSymbolColor() { return vec4(1.0); }\n    void forwardColorMixMode() {}\n    "],["\n    vec4 getSymbolColor() { return vec4(1.0); }\n    void forwardColorMixMode() {}\n    "]))))}}));