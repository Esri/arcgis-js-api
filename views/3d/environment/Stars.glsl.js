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

define(["require","exports","tslib","../webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../webgl-engine/core/shaderModules/interfaces","../webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,n,a,o,i,l){var t,r;Object.defineProperty(n,"__esModule",{value:!0}),n.build=function(){var e=new l.ShaderBuilder;return e.attributes.add("position","vec3"),e.attributes.add("color","vec4"),e.attributes.add("size","float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add("transform","mat4").add("viewport","vec4").add("pixelRatio","float"),e.include(o.AlignPixel),e.vertex.code.add(i.glsl(t||(t=a.__makeTemplateObject(["\n    void main(void) {\n      vec4 posProj = transform * vec4(position, 0);\n      gl_Position = alignToPixelCenter(posProj, viewport.zw);\n      vcolor = color / 1.2;\n      vsize = size * 5.0 * pixelRatio;\n      gl_PointSize = vsize;\n    }\n  "],["\n    void main(void) {\n      vec4 posProj = transform * vec4(position, 0);\n      gl_Position = alignToPixelCenter(posProj, viewport.zw);\n      vcolor = color / 1.2;\n      vsize = size * 5.0 * pixelRatio;\n      gl_PointSize = vsize;\n    }\n  "])))),e.fragment.code.add(i.glsl(r||(r=a.__makeTemplateObject(["\n    void main() {\n      float cap = 0.7;\n      float scale = 1.0 / cap;\n      float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha = clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity = alpha * alpha * alpha;\n      if (vsize < 3.0) {\n        intensity *= 0.5;\n      }\n      gl_FragColor = vec4(vcolor.xyz, intensity);\n    }\n  "],["\n    void main() {\n      float cap = 0.7;\n      float scale = 1.0 / cap;\n      float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha = clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity = alpha * alpha * alpha;\n      if (vsize < 3.0) {\n        intensity *= 0.5;\n      }\n      gl_FragColor = vec4(vcolor.xyz, intensity);\n    }\n  "])))),e}}));