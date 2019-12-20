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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,n,o,r){function c(e){e.fragment.code.add(r.glsl(a||(a=o(["\n    const float GAMMA = 2.2;\n    const float INV_GAMMA = 0.4545454545; // 1 / GAMMA\n\n    // gamma correction\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n    "],["\n    const float GAMMA = 2.2;\n    const float INV_GAMMA = 0.4545454545; // 1 / GAMMA\n\n    // gamma correction\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n    "]))))}Object.defineProperty(n,"__esModule",{value:!0}),n.Gamma=c;var a});