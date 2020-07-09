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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/LineStipple.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,t,i,n,l,o,r,a,p,s){var d,c,v,g,h;Object.defineProperty(t,"__esModule",{value:!0}),t.build=function(e){var t=new s.ShaderBuilder;return t.include(l.Transform,{linearDepth:!1}),t.include(o.VertexColor,e),t.include(a.LineStipple,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.varyings.add("vpos","vec3"),t.vertex.code.add(p.glsl(d||(d=i.__makeTemplateObject(["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "],["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "])))),e.stippleEnabled&&(t.attributes.add("auxpos1","vec3"),t.vertex.uniforms.add("ndcToPixel","vec2"),t.vertex.code.add(p.glsl(c||(c=i.__makeTemplateObject(["\n    vec4 vpos2 = transformPosition(proj, view, auxpos1);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "],["\n    vec4 vpos2 = transformPosition(proj, view, auxpos1);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "])),e.stippleIntegerRepeatsEnabled?"stipplePatternUv = floor(stipplePatternUv + 0.5);":""))),t.vertex.code.add(p.glsl(v||(v=i.__makeTemplateObject(["\n  }\n  "],["\n  }\n  "])))),0===e.output&&(t.include(n.Slice,e),t.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),t.fragment.code.add(p.glsl(g||(g=i.__makeTemplateObject(["\n    void main() {\n      discardBySlice(vpos);\n\n      vec4 color = ",";\n\n      float stippleAlpha = getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      gl_FragColor = highlightSlice(blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha), vpos);\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n\n      vec4 color = ",";\n\n      float stippleAlpha = getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      gl_FragColor = highlightSlice(blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha), vpos);\n    }\n    "])),e.attributeColor?"vColor":"constantColor"))),4===e.output&&(t.include(n.Slice,e),t.include(r.OutputHighlight),t.fragment.code.add(p.glsl(h||(h=i.__makeTemplateObject(["\n    void main() {\n      discardBySlice(vpos);\n      discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n      outputHighlight();\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n      discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n      outputHighlight();\n    }\n    "]))))),t}}));