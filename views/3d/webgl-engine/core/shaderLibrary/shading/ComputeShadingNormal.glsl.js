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

define(["require","exports","tslib","../attributes/VertexNormal.glsl","../attributes/VertexPosition.glsl","../../shaderModules/interfaces"],(function(e,n,o,r,a,d){"use strict";var i,l,t,m,s,v,c,u;Object.defineProperty(n,"__esModule",{value:!0}),n.ComputeShadingNormal=void 0,n.ComputeShadingNormal=function(e,n){var _=e.fragment;0===n.doubleSidedMode?_.code.add(d.glsl(i||(i=o.__makeTemplateObject(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return normal;\n      }\n    "])))):1===n.doubleSidedMode?(e.include(a.VertexPosition,n),_.uniforms.add("uTransform_ViewFromCameraLocal_T","vec3"),_.code.add(d.glsl(l||(l=o.__makeTemplateObject(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        vec3 viewDir = vPositionWorldCameraRelative + uTransform_ViewFromCameraLocal_T;\n        return dot(normal, viewDir) > 0.0 ? -normal : normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        vec3 viewDir = vPositionWorldCameraRelative + uTransform_ViewFromCameraLocal_T;\n        return dot(normal, viewDir) > 0.0 ? -normal : normal;\n      }\n    "]))))):2===n.doubleSidedMode&&_.code.add(d.glsl(t||(t=o.__makeTemplateObject(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "])))),0===n.normalType||1===n.normalType?(e.include(r.VertexNormal,n),_.code.add(d.glsl(m||(m=o.__makeTemplateObject(["\n      vec3 shadingNormalWorld() {\n        return _adjustDoublesided(normalize(vNormalWorld));\n      }\n\n      vec3 shadingNormal_view() {\n        vec3 normal = normalize(vNormalView);\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "],["\n      vec3 shadingNormalWorld() {\n        return _adjustDoublesided(normalize(vNormalWorld));\n      }\n\n      vec3 shadingNormal_view() {\n        vec3 normal = normalize(vNormalView);\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "]))))):3===n.normalType?(e.extensions.add("GL_OES_standard_derivatives"),e.include(a.VertexPosition,n),_.code.add(d.glsl(s||(s=o.__makeTemplateObject(["\n      vec3 shadingNormalWorld() {\n        return normalize(cross(\n          dFdx(vPositionWorldCameraRelative),\n          dFdy(vPositionWorldCameraRelative)\n        ));\n      }\n\n      vec3 shadingNormal_view() {\n        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));\n      }\n    "],["\n      vec3 shadingNormalWorld() {\n        return normalize(cross(\n          dFdx(vPositionWorldCameraRelative),\n          dFdy(vPositionWorldCameraRelative)\n        ));\n      }\n\n      vec3 shadingNormal_view() {\n        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));\n      }\n    "]))))):2===n.normalType&&(1===n.viewingMode?(e.include(a.VertexPosition,n),_.code.add(d.glsl(v||(v=o.__makeTemplateObject(["\n        vec3 shadingNormalWorld() {\n          return normalize(positionWorld());\n        }\n      "],["\n        vec3 shadingNormalWorld() {\n          return normalize(positionWorld());\n        }\n      "]))))):2===n.viewingMode&&_.code.add(d.glsl(c||(c=o.__makeTemplateObject(["\n        vec3 shadingNormalWorld() {\n          return vec3(0.0, 0.0, 1.0);\n        }\n      "],["\n        vec3 shadingNormalWorld() {\n          return vec3(0.0, 0.0, 1.0);\n        }\n      "])))),e.extensions.add("GL_OES_standard_derivatives"),_.code.add(d.glsl(u||(u=o.__makeTemplateObject(["\n      vec3 shadingNormal_view() {\n        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;\n      }\n    "],["\n      vec3 shadingNormal_view() {\n        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;\n      }\n    "])))))}}));