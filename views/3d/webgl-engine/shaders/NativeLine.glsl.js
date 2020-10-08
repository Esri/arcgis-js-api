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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/LineStipple.glsl","../core/shaderLibrary/util/AlphaDiscard.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,l,t,n,i,o,r,a,p,s,d){"use strict";var c,v,g,h,u,m;Object.defineProperty(l,"__esModule",{value:!0}),l.build=void 0,l.build=function(e){var l=new d.ShaderBuilder;return l.include(i.Transform,{linearDepth:!1}),l.include(o.VertexColor,e),l.include(a.LineStipple,e),l.vertex.uniforms.add("proj","mat4").add("view","mat4"),l.attributes.add("position","vec3"),l.varyings.add("vpos","vec3"),l.vertex.code.add(s.glsl(c||(c=t.__makeTemplateObject(["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "],["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "])))),e.stippleEnabled&&(l.attributes.add("auxpos1","vec3"),l.vertex.uniforms.add("ndcToPixel","vec2"),l.vertex.code.add(s.glsl(v||(v=t.__makeTemplateObject(["\n    vec4 vpos2 = transformPosition(proj, view, auxpos1);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "],["\n    vec4 vpos2 = transformPosition(proj, view, auxpos1);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "])),e.stippleIntegerRepeatsEnabled?"stipplePatternUv = floor(stipplePatternUv + 0.5);":""))),l.vertex.code.add(s.glsl(g||(g=t.__makeTemplateObject(["\n  }\n  "],["\n  }\n  "])))),4===e.output&&l.include(r.OutputHighlight),l.include(n.Slice,e),l.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),l.fragment.code.add(s.glsl(m||(m=t.__makeTemplateObject(["\n  void main() {\n    discardBySlice(vpos);\n\n    vec4 color = ",";\n\n    float stippleAlpha = getStippleAlpha();\n    discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);\n\n    if (finalColor.a < ",") {\n      discard;\n    }\n\n    ","\n    ","\n  }\n  "],["\n  void main() {\n    discardBySlice(vpos);\n\n    vec4 color = ",";\n\n    float stippleAlpha = getStippleAlpha();\n    discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);\n\n    if (finalColor.a < ",") {\n      discard;\n    }\n\n    ","\n    ","\n  }\n  "])),e.attributeColor?"vColor":"constantColor",s.glsl.float(p.symbolAlphaCutoff),0===e.output?s.glsl(h||(h=t.__makeTemplateObject(["gl_FragColor = highlightSlice(finalColor, vpos);"],["gl_FragColor = highlightSlice(finalColor, vpos);"]))):"",4===e.output?s.glsl(u||(u=t.__makeTemplateObject(["outputHighlight();"],["outputHighlight();"]))):"")),l}}));