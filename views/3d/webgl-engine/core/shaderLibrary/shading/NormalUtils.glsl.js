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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,t,c){var r,i,o,a;Object.defineProperty(n,"__esModule",{value:!0}),n.NormalUtils=function(e,n){0===n.viewingMode?e.vertex.code.add(c.glsl(r||(r=t.__makeTemplateObject(["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return normalize(pos + origin);\n      }\n    "],["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return normalize(pos + origin);\n      }\n    "])))):e.vertex.code.add(c.glsl(i||(i=t.__makeTemplateObject(["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code\n      }\n    "],["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code\n      }\n    "])))),0===n.viewingMode?e.vertex.code.add(c.glsl(o||(o=t.__makeTemplateObject(["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));\n            vec3 b = normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "],["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));\n            vec3 b = normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "])))):e.vertex.code.add(c.glsl(a||(a=t.__makeTemplateObject(["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t = vec3(1.0, 0.0, 0.0);\n            vec3 b = normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "],["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t = vec3(1.0, 0.0, 0.0);\n            vec3 b = normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "]))))}}));