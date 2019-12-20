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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,r,t,n){function i(e){e.fragment.code.add(n.glsl(o||(o=t(["\n    vec4 highlightData(vec4 fragCoord, sampler2D depthTex, vec4 viewportPixelSize) {\n      float sceneDepth = texture2D(depthTex, (fragCoord.xy - viewportPixelSize.xy) * viewportPixelSize.zw).r;\n      if (fragCoord.z > sceneDepth + 5e-7) {\n        return vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        return vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "],["\n    vec4 highlightData(vec4 fragCoord, sampler2D depthTex, vec4 viewportPixelSize) {\n      float sceneDepth = texture2D(depthTex, (fragCoord.xy - viewportPixelSize.xy) * viewportPixelSize.zw).r;\n      if (fragCoord.z > sceneDepth + 5e-7) {\n        return vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        return vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "]))))}Object.defineProperty(r,"__esModule",{value:!0}),r.HighlightData=i;var o});