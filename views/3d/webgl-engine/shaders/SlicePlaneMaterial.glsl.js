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

define(["require","exports","tslib","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(d,e,a,r,i){var n,o;Object.defineProperty(e,"__esModule",{value:!0}),e.build=function(){var d=new i.ShaderBuilder;return d.extensions.add("GL_OES_standard_derivatives"),d.vertex.uniforms.add("proj","mat4").add("view","mat4"),d.attributes.add("position","vec3"),d.attributes.add("uv0","vec2"),d.varyings.add("vUV","vec2"),d.vertex.code.add(r.glsl(n||(n=a.__makeTemplateObject(["\n    void main(void) {\n      vUV = uv0;\n      gl_Position = proj * view * vec4(position, 1.0);\n    }\n  "],["\n    void main(void) {\n      vUV = uv0;\n      gl_Position = proj * view * vec4(position, 1.0);\n    }\n  "])))),d.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float"),d.fragment.code.add(r.glsl(o||(o=a.__makeTemplateObject(["\n    void main() {\n      const float LINE_WIDTH = 1.0;\n\n      vec2 uvScaled = vUV * gridWidth;\n      vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\n      vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\n\n      // mask aliasing along edges\n      grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\n      grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\n\n      float gridFade = max(grid.x, grid.y);\n\n      float gridAlpha = gridColor.a * gridFade;\n\n      // premultiply alpha in output\n      gl_FragColor =\n        vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\n        vec4(gridColor.rgb, 1.0) * gridAlpha;\n    }\n  "],["\n    void main() {\n      const float LINE_WIDTH = 1.0;\n\n      vec2 uvScaled = vUV * gridWidth;\n      vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\n      vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\n\n      // mask aliasing along edges\n      grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\n      grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\n\n      float gridFade = max(grid.x, grid.y);\n\n      float gridAlpha = gridColor.a * gridFade;\n\n      // premultiply alpha in output\n      gl_FragColor =\n        vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\n        vec4(gridColor.rgb, 1.0) * gridAlpha;\n    }\n  "])))),d}}));