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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/util/AlphaDiscard.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(o,e,r,i,l,t,n,a,d,s){"use strict";var c,u,p,g;Object.defineProperty(e,"__esModule",{value:!0}),e.build=void 0,e.build=function(o){var e=new s.ShaderBuilder;return e.include(l.Transform,{linearDepth:!1}),e.include(t.VertexColor,o),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.attributes.add("position","vec3"),e.varyings.add("vpos","vec3"),e.vertex.code.add(d.glsl(c||(c=r.__makeTemplateObject(["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "],["\n    void main(void) {\n      vpos = position;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])))),e.include(i.Slice,o),e.fragment.uniforms.add("eColor","vec4"),4===o.output&&e.include(n.OutputHighlight),e.fragment.code.add(d.glsl(g||(g=r.__makeTemplateObject(["\n  void main() {\n    discardBySlice(vpos);\n    vec4 color = ","\n\n    if (color.a < ",") {\n      discard;\n    }\n\n    ","\n    ",";\n  }\n  "],["\n  void main() {\n    discardBySlice(vpos);\n    vec4 color = ","\n\n    if (color.a < ",") {\n      discard;\n    }\n\n    ","\n    ",";\n  }\n  "])),o.attributeColor?"vColor * eColor;":"eColor;",d.glsl.float(a.symbolAlphaCutoff),0===o.output?d.glsl(u||(u=r.__makeTemplateObject(["gl_FragColor = highlightSlice(color, vpos);"],["gl_FragColor = highlightSlice(color, vpos);"]))):"",4===o.output?d.glsl(p||(p=r.__makeTemplateObject(["outputHighlight();"],["outputHighlight();"]))):"")),e}}));