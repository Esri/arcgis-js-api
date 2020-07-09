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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(a,e,r,n){var m,i,o,l;Object.defineProperty(e,"__esModule",{value:!0}),e.Normals=function(a,e){var s=a.fragment;s.code.add(n.glsl(m||(m=r.__makeTemplateObject(["\n    struct ShadingNormalParameters {\n      vec3 normalView;\n      vec3 viewDirection;\n    } shadingParams;\n    "],["\n    struct ShadingNormalParameters {\n      vec3 normalView;\n      vec3 viewDirection;\n    } shadingParams;\n    "])))),1===e.doubleSidedMode?s.code.add(n.glsl(i||(i=r.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);\n      }\n    "],["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);\n      }\n    "])))):2===e.doubleSidedMode?s.code.add(n.glsl(o||(o=r.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);\n      }\n    "],["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);\n      }\n    "])))):s.code.add(n.glsl(l||(l=r.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return normalize(params.normalView);\n      }\n    "],["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return normalize(params.normalView);\n      }\n    "]))))}}));