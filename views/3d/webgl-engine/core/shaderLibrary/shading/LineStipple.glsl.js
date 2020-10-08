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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,l,p,t){"use strict";var a,i,n,d;Object.defineProperty(l,"__esModule",{value:!0}),l.LineStipple=void 0,l.LineStipple=function(e,l){e.defines.addFloat("STIPPLE_ALPHA_COLOR_DISCARD",.001),e.defines.addFloat("STIPPLE_ALPHA_HIGHLIGHT_DISCARD",.5),l.stippleEnabled?function(e,l){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),l.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float");e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),l.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4");e.fragment.code.add(t.glsl(a||(a=p.__makeTemplateObject(["\n  float getStippleAlpha() {\n    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;\n    ","\n\n    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;\n  }"],["\n  float getStippleAlpha() {\n    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;\n    ","\n\n    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;\n  }"])),l.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":"")),l.stippleOffColorEnabled?e.fragment.code.add(t.glsl(i||(i=p.__makeTemplateObject(["\n    #define discardByStippleAlpha(stippleAlpha, threshold) {}\n    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)\n    "],["\n    #define discardByStippleAlpha(stippleAlpha, threshold) {}\n    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)\n    "])))):e.fragment.code.add(t.glsl(n||(n=p.__makeTemplateObject(["\n    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }\n    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)\n    "],["\n    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }\n    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)\n    "]))))}(e,l):function(e){e.fragment.code.add(t.glsl(d||(d=p.__makeTemplateObject(["\n  float getStippleAlpha() { return 1.0; }\n\n  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}\n  #define blendStipple(color, _stippleAlpha_) color\n  "],["\n  float getStippleAlpha() { return 1.0; }\n\n  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}\n  #define blendStipple(color, _stippleAlpha_) color\n  "]))))}(e)}}));