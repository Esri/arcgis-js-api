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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,o,c){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.Gamma=function(e){e.fragment.code.add(c.glsl(r||(r=o.__makeTemplateObject(["\n    const float GAMMA = 2.2;\n    const float INV_GAMMA = 0.4545454545;\n\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n  "],["\n    const float GAMMA = 2.2;\n    const float INV_GAMMA = 0.4545454545;\n\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n  "]))))}}));