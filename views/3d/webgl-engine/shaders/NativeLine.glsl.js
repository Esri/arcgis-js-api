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

define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/LineStipple.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,i,n,t,l,o,r,a,p,s){var d,c,v,g,h;Object.defineProperty(i,"__esModule",{value:!0}),i.build=function(e){var i=new s.ShaderBuilder;return i.include(l.Transform,{linearDepth:!1}),i.include(o.VertexColor,e),i.include(a.LineStipple,e),i.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4"),i.attributes.add("position","vec3"),i.varyings.add("vpos","vec3"),i.vertex.code.add(p.glsl(d||(d=n(["\n    void main(void) {\n      vpos = (model * vec4(position, 1.0)).xyz;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "],["\n    void main(void) {\n      vpos = (model * vec4(position, 1.0)).xyz;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n  "])))),e.stippleEnabled&&(i.attributes.add("auxpos1","vec3"),i.vertex.uniforms.add("ndcToPixel","vec2"),i.vertex.code.add(p.glsl(c||(c=n(["\n    vec4 vpos2 = transformPosition(proj, view, (model * vec4(auxpos1, 1.0)).xyz);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "],["\n    vec4 vpos2 = transformPosition(proj, view, (model * vec4(auxpos1, 1.0)).xyz);\n    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);\n\n    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;\n    ","\n\n    // Cancel out perspective correct interpolation because we want this length the really represent\n    // the screen distance\n    stipplePatternUv *= gl_Position.w;\n    "])),e.stippleIntegerRepeatsEnabled?"stipplePatternUv = floor(stipplePatternUv + 0.5);":""))),i.vertex.code.add(p.glsl(v||(v=n(["\n  }\n  "],["\n  }\n  "])))),0===e.output&&(i.include(t.Slice,e),i.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),i.fragment.code.add(p.glsl(g||(g=n(["\n    void main() {\n      discardBySlice(vpos);\n\n      vec4 color = ",";\n\n      float stippleAlpha = getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      gl_FragColor = highlightSlice(blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha), vpos);\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n\n      vec4 color = ",";\n\n      float stippleAlpha = getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      gl_FragColor = highlightSlice(blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha), vpos);\n    }\n    "])),e.attributeColor?"vcolor":"constantColor"))),4===e.output&&(i.include(t.Slice,e),i.include(r.OutputHighlight),i.fragment.code.add(p.glsl(h||(h=n(["\n    void main() {\n      discardBySlice(vpos);\n      discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n      outputHighlight();\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n      discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n      outputHighlight();\n    }\n    "]))))),i}}));