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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/util/AlphaDiscard.glsl","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,o,r,a,i,n,d,t){"use strict";var l,s;Object.defineProperty(o,"__esModule",{value:!0}),o.build=void 0,o.build=function(e){var o=new t.ShaderBuilder;return o.include(i.Transform,{linearDepth:!1}),o.vertex.uniforms.add("proj","mat4").add("view","mat4"),o.attributes.add("position","vec3"),o.attributes.add("uv0","vec2"),o.varyings.add("vpos","vec3"),o.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),o.vertex.code.add(d.glsl(l||(l=r.__makeTemplateObject(["\n    void main(void) {\n      vpos = position;\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "],["\n    void main(void) {\n      vpos = position;\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])))),o.include(a.Slice,e),o.fragment.uniforms.add("tex","sampler2D"),o.fragment.uniforms.add("opacity","float"),o.varyings.add("vTexCoord","vec2"),o.fragment.code.add(d.glsl(s||(s=r.__makeTemplateObject(["\n    void main() {\n      discardBySlice(vpos);\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n    }\n    "],["\n    void main() {\n      discardBySlice(vpos);\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n    }\n    "])),d.glsl.float(n.defaultMaskAlphaCutoff))),o}}));