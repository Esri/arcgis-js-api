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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,t,o){var a,l;Object.defineProperty(n,"__esModule",{value:!0}),n.EvaluateAmbientOcclusion=function(e,n){var r=e.fragment;n.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o.glsl(a||(a=t.__makeTemplateObject(["\n      float evaluateAmbientOcclusion() {\n        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n      }\n\n      float evaluateAmbientOcclusionInverse() {\n        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;\n      }\n    "],["\n      float evaluateAmbientOcclusion() {\n        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n      }\n\n      float evaluateAmbientOcclusionInverse() {\n        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;\n      }\n    "]))))):r.code.add(o.glsl(l||(l=t.__makeTemplateObject(["\n      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion\n      float evaluateAmbientOcclusionInverse() { return 1.0; }\n    "],["\n      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion\n      float evaluateAmbientOcclusionInverse() { return 1.0; }\n    "]))))}}));