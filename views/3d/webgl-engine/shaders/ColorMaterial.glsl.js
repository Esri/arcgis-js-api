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

define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(o,r,e,i,l,n,a,d){function s(o){var r=new d.ShaderBuilder;return r.include(l.Transform,{linearDepth:!1}),r.include(n.VertexColor,o),r.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4"),r.attributes.add("position","vec3"),r.varyings.add("vpos","vec3"),r.vertex.code.add(a.glsl(t||(t=e(["\n    void main(void) {\n      vpos = (model * vec4(position, 1.0)).xyz;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "],["\n    void main(void) {\n      vpos = (model * vec4(position, 1.0)).xyz;\n      forwardNormalizedVertexColor();\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])))),r.include(i.Slice,o),r.fragment.uniforms.add("eColor","vec4"),r.fragment.code.add(a.glsl(v||(v=e(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n    }\n    "])),o.attributeColor?"gl_FragColor = vColor * eColor;":"gl_FragColor = eColor;")),r}Object.defineProperty(r,"__esModule",{value:!0}),r.build=s;var t,v});