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

define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(n,e,t,o,r){var d,a;Object.defineProperty(e,"__esModule",{value:!0}),e.build=function(){var n=new r.ShaderBuilder;n.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4").add("width","float"),n.attributes.add("position","vec3"),n.attributes.add("normal","vec3"),n.attributes.add("uv0","vec2"),n.attributes.add("auxpos1","float"),n.varyings.add("vtc","vec2"),n.varyings.add("vlength","float"),n.varyings.add("vradius","float"),n.vertex.code.add(o.glsl(d||(d=t(["\n    void main(void) {\n      vec3 bitangent = normal;\n\n      vtc = uv0;\n      vlength = auxpos1;\n      vradius = 0.5 * width;\n\n      vec4 pos = view * vec4((model * vec4(position + vradius * bitangent * uv0.y, 1.0)).xyz, 1.0);\n      gl_Position = proj * pos;\n    }\n  "],["\n    void main(void) {\n      vec3 bitangent = normal;\n\n      vtc = uv0;\n      vlength = auxpos1;\n      vradius = 0.5 * width;\n\n      vec4 pos = view * vec4((model * vec4(position + vradius * bitangent * uv0.y, 1.0)).xyz, 1.0);\n      gl_Position = proj * pos;\n    }\n  "])))),n.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");var e=1/Math.sqrt(2);return n.fragment.code.add(o.glsl(a||(a=t(["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      gl_FragColor = color;\n    }\n  "],["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      gl_FragColor = color;\n    }\n  "])),o.glsl.float(e))),n}}));