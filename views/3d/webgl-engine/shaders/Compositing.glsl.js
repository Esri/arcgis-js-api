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

define(["require","exports","tslib","../core/shaderLibrary/ScreenSpacePass","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,r,a,t,n,o){"use strict";var l,c,u,d;Object.defineProperty(r,"__esModule",{value:!0}),r.build=void 0,r.build=function(e){var r=new o.ShaderBuilder;return r.include(t.ScreenSpacePass),r.fragment.uniforms.add("tex","sampler2D"),0===e.function&&(e.hasOpacityFactor?(r.fragment.uniforms.add("opacity","float"),r.fragment.code.add(n.glsl(l||(l=a.__makeTemplateObject(["\n      void main() {\n        gl_FragColor = texture2D(tex, uv) * opacity;\n      }"],["\n      void main() {\n        gl_FragColor = texture2D(tex, uv) * opacity;\n      }"]))))):r.fragment.code.add(n.glsl(c||(c=a.__makeTemplateObject(["\n      void main() {\n        gl_FragColor = texture2D(tex, uv);\n      }"],["\n      void main() {\n        gl_FragColor = texture2D(tex, uv);\n      }"]))))),2===e.function&&r.fragment.code.add(n.glsl(u||(u=a.__makeTemplateObject(["\n    void main() {\n      gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);\n    }"],["\n    void main() {\n      gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);\n    }"])))),3===e.function&&(r.fragment.uniforms.add("colorTexture","sampler2D"),r.fragment.uniforms.add("alphaTexture","sampler2D"),r.fragment.uniforms.add("frontFaceTexture","sampler2D"),r.fragment.code.add(n.glsl(d||(d=a.__makeTemplateObject(["\n    void main() {\n      vec4 srcColor = texture2D(colorTexture, uv);\n      float srcAlpha = texture2D(alphaTexture, uv).r;\n      vec4 frontFace = texture2D(frontFaceTexture, uv);\n\n      gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), srcAlpha);\n    }"],["\n    void main() {\n      vec4 srcColor = texture2D(colorTexture, uv);\n      float srcAlpha = texture2D(alphaTexture, uv).r;\n      vec4 frontFace = texture2D(frontFaceTexture, uv);\n\n      gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), srcAlpha);\n    }"]))))),r}}));