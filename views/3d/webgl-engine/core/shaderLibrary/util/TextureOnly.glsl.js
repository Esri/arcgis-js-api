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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../ScreenSpacePass","../../shaderModules/interfaces","../../shaderModules/ShaderBuilder"],(function(e,r,o,n,a,t){var l;Object.defineProperty(r,"__esModule",{value:!0}),r.build=function(){var e=new t.ShaderBuilder;return e.include(n.ScreenSpacePass),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(a.glsl(l||(l=o(["\n    void main() {\n      vec4 texColor = texture2D(tex, uv);\n      gl_FragColor = texColor * color;\n    }\n  "],["\n    void main() {\n      vec4 texColor = texture2D(tex, uv);\n      gl_FragColor = texColor * color;\n    }\n  "])))),e}}));