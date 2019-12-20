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

define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(e,a,d,o,n){function v(){var e=new n.ShaderBuilder;return e.extensions.add("GL_OES_standard_derivatives"),e.attributes.add("position","vec3"),e.attributes.add("uv0","vec2"),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4"),e.varyings.add("vUV","vec2"),e.vertex.code.add(o.glsl(i||(i=d(["\n    void main(void) {\n      vUV = uv0;\n      gl_Position = proj * view * vec4((model * vec4(position, 1.0)).xyz, 1.0);\n    }\n  "],["\n    void main(void) {\n      vUV = uv0;\n      gl_Position = proj * view * vec4((model * vec4(position, 1.0)).xyz, 1.0);\n    }\n  "])))),e.fragment.uniforms.add("size","vec2").add("color1","vec4").add("color2","vec4"),e.fragment.code.add(o.glsl(t||(t=d(["\n    void main() {\n      vec2 uvScaled = vUV / (2.0 * size);\n\n      vec2 uv = fract(uvScaled - 0.25);\n      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);\n      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));\n      float t = mix(abs(ab.x + ab.y), 0.5, fade);\n\n      gl_FragColor = mix(color2, color1, t);\n    }\n  "],["\n    void main() {\n      vec2 uvScaled = vUV / (2.0 * size);\n\n      vec2 uv = fract(uvScaled - 0.25);\n      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);\n      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));\n      float t = mix(abs(ab.x + ab.y), 0.5, fade);\n\n      gl_FragColor = mix(color2, color1, t);\n    }\n  "])))),e}Object.defineProperty(a,"__esModule",{value:!0}),a.build=v;var i,t});