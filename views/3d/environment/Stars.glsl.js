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

define(["require","exports","../../../core/tsSupport/makeTemplateObjectHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../webgl-engine/core/shaderModules/interfaces","../webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,o,n,i,a,l,t,r){var p,s;Object.defineProperty(o,"__esModule",{value:!0}),o.build=function(){var e=new r.ShaderBuilder;return e.attributes.add("position","vec3"),e.attributes.add("color","vec4"),e.attributes.add("size","float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4").add("viewport","vec4").add("pixelRatio","float"),e.include(l.AlignPixel),e.vertex.code.add(t.glsl(p||(p=n(["\n    void main(void) {\n      vec4 posProj = proj * view * model * vec4(position * 1.0e25, 1.0); // move infinitely far away\n      gl_Position = alignToPixelCenter(posProj, viewport.zw); // pixel align position\n      gl_Position.z = gl_Position.w; // project atmosphere onto the far plane\n      vcolor = color / 1.2;\n      vsize = size * 5.0 * pixelRatio;\n      gl_PointSize = vsize;\n    }\n  "],["\n    void main(void) {\n      vec4 posProj = proj * view * model * vec4(position * 1.0e25, 1.0); // move infinitely far away\n      gl_Position = alignToPixelCenter(posProj, viewport.zw); // pixel align position\n      gl_Position.z = gl_Position.w; // project atmosphere onto the far plane\n      vcolor = color / 1.2;\n      vsize = size * 5.0 * pixelRatio;\n      gl_PointSize = vsize;\n    }\n  "])))),e.fragment.code.add(t.glsl(s||(s=n(["\n    void main() {\n      float cap = 0.7;\n      float scale = 1.0 / cap;\n      float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha = clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity = alpha * alpha * alpha;\n      if (vsize < 3.0) {\n        intensity *= 0.5;\n      }\n      gl_FragColor = vec4(1.0, 1.0, 1.0, intensity);\n      gl_FragColor.xyz *= vcolor.xyz;\n    }\n  "],["\n    void main() {\n      float cap = 0.7;\n      float scale = 1.0 / cap;\n      float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha = clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity = alpha * alpha * alpha;\n      if (vsize < 3.0) {\n        intensity *= 0.5;\n      }\n      gl_FragColor = vec4(1.0, 1.0, 1.0, intensity);\n      gl_FragColor.xyz *= vcolor.xyz;\n    }\n  "])))),e}}));