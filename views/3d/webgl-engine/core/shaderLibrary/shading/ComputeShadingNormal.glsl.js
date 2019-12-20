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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../attributes/VertexNormal.glsl","../attributes/VertexPosition.glsl","../../shaderModules/interfaces"],function(n,e,r,o,a,d){function l(n,e){var l=n.fragment;0===e.doubleSidedMode?l.code.add(d.glsl(i||(i=r(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return normal;\n      }\n    "])))):1===e.doubleSidedMode?(n.include(a.VertexPosition,e),l.uniforms.add("uTransform_ViewFromCameraLocal_T","vec3"),l.code.add(d.glsl(t||(t=r(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        vec3 viewDir = vPositionWorldCameraRelative + uTransform_ViewFromCameraLocal_T;\n        return dot(normal, viewDir) > 0.0 ? -normal : normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        vec3 viewDir = vPositionWorldCameraRelative + uTransform_ViewFromCameraLocal_T;\n        return dot(normal, viewDir) > 0.0 ? -normal : normal;\n      }\n    "]))))):2===e.doubleSidedMode&&l.code.add(d.glsl(s||(s=r(["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "],["\n      vec3 _adjustDoublesided(vec3 normal) {\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "])))),0===e.normalType||1===e.normalType?(n.include(o.VertexNormal,e),l.code.add(d.glsl(m||(m=r(["\n      vec3 shadingNormalWorld() {\n        return _adjustDoublesided(normalize(vNormalWorld));\n      }\n\n      vec3 shadingNormal_view() {\n        vec3 normal = normalize(vNormalView);\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "],["\n      vec3 shadingNormalWorld() {\n        return _adjustDoublesided(normalize(vNormalWorld));\n      }\n\n      vec3 shadingNormal_view() {\n        vec3 normal = normalize(vNormalView);\n        return gl_FrontFacing ? normal : -normal;\n      }\n    "]))))):3===e.normalType?(n.extensions.add("GL_OES_standard_derivatives"),n.include(a.VertexPosition,e),l.code.add(d.glsl(v||(v=r(["\n      vec3 shadingNormalWorld() {\n        return normalize(cross(\n          dFdx(vPositionWorldCameraRelative),\n          dFdy(vPositionWorldCameraRelative)\n        ));\n      }\n\n      vec3 shadingNormal_view() {\n        // swizzling and negation figured out through trial and error\n        return -normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xzy;\n      }\n    "],["\n      vec3 shadingNormalWorld() {\n        return normalize(cross(\n          dFdx(vPositionWorldCameraRelative),\n          dFdy(vPositionWorldCameraRelative)\n        ));\n      }\n\n      vec3 shadingNormal_view() {\n        // swizzling and negation figured out through trial and error\n        return -normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xzy;\n      }\n    "]))))):2===e.normalType&&(0===e.viewingMode?(n.include(a.VertexPosition,e),l.code.add(d.glsl(u||(u=r(["\n        vec3 shadingNormalWorld() {\n          return normalize(positionWorld());\n        }\n      "],["\n        vec3 shadingNormalWorld() {\n          return normalize(positionWorld());\n        }\n      "]))))):1===e.viewingMode&&l.code.add(d.glsl(c||(c=r(["\n        vec3 shadingNormalWorld() {\n          return vec3(0.0, 0.0, 1.0);\n        }\n      "],["\n        vec3 shadingNormalWorld() {\n          return vec3(0.0, 0.0, 1.0);\n        }\n      "])))))}Object.defineProperty(e,"__esModule",{value:!0}),e.ComputeShadingNormal=l;var i,t,s,m,v,u,c});