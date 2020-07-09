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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(o,i,r,n,e,a,d){var l,t;Object.defineProperty(i,"__esModule",{value:!0}),i.build=function(o){var i=new d.ShaderBuilder;return i.include(e.Transform,{linearDepth:!1}),i.vertex.uniforms.add("proj","mat4").add("view","mat4").add("viewNormal","mat4"),i.fragment.uniforms.add("color","vec4").add("shadedColor","vec4").add("shadingDirection","vec3"),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.varyings.add("vWorldPosition","vec3"),i.varyings.add("vViewNormal","vec3"),i.varyings.add("vViewDirection","vec3"),i.vertex.code.add(a.glsl(l||(l=r.__makeTemplateObject(["\n    void main(void) {\n      vWorldPosition = position;\n\n      vec3 worldNormal = normal;\n      vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;\n\n      gl_Position = transformPosition(proj, view, vWorldPosition);\n    }\n  "],["\n    void main(void) {\n      vWorldPosition = position;\n\n      vec3 worldNormal = normal;\n      vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;\n\n      gl_Position = transformPosition(proj, view, vWorldPosition);\n    }\n  "])))),i.include(n.Slice,o),i.fragment.code.add(a.glsl(t||(t=r.__makeTemplateObject(["\n    void main() {\n      discardBySlice(vWorldPosition);\n\n      vec3 viewNormalNorm = normalize(vViewNormal);\n\n      float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);\n      vec4 colorWithShading = mix(color, shadedColor, shadingFactor);\n\n      gl_FragColor = highlightSlice(colorWithShading, vWorldPosition);\n    }\n    "],["\n    void main() {\n      discardBySlice(vWorldPosition);\n\n      vec3 viewNormalNorm = normalize(vViewNormal);\n\n      float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);\n      vec4 colorWithShading = mix(color, shadedColor, shadingFactor);\n\n      gl_FragColor = highlightSlice(colorWithShading, vWorldPosition);\n    }\n    "])))),i}}));