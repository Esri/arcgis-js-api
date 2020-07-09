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

define(["require","exports","tslib","../core/shaderLibrary/ScreenSpacePass","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],(function(e,a,r,n,t,o){var d,i,l;Object.defineProperty(a,"__esModule",{value:!0}),a.build=function(e){var a=new o.ShaderBuilder;return a.include(n.ScreenSpacePass),a.fragment.uniforms.add("tex","sampler2D"),0===e.function&&(e.hasOpacityFactor?(a.fragment.uniforms.add("opacity","float"),a.fragment.code.add(t.glsl(d||(d=r.__makeTemplateObject(["\n      void main() {\n        gl_FragColor = texture2D(tex, uv) * opacity;\n      }"],["\n      void main() {\n        gl_FragColor = texture2D(tex, uv) * opacity;\n      }"]))))):a.fragment.code.add(t.glsl(i||(i=r.__makeTemplateObject(["\n      void main() {\n        gl_FragColor = texture2D(tex, uv);\n      }"],["\n      void main() {\n        gl_FragColor = texture2D(tex, uv);\n      }"]))))),2===e.function&&a.fragment.code.add(t.glsl(l||(l=r.__makeTemplateObject(["\n    void main() {\n      gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);\n    }"],["\n    void main() {\n      gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);\n    }"])))),a}}));