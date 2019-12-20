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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,c,n,r){function v(e,c){var v=[r.glsl(a||(a=n(["\n      vec4 premultiplyAlpha(vec4 v) {\n        return vec4(v.rgb * v.a, v.a);\n      }\n    "],["\n      vec4 premultiplyAlpha(vec4 v) {\n        return vec4(v.rgb * v.a, v.a);\n      }\n    "]))),r.glsl(x||(x=n(["\n      vec3 rgb2hsv(vec3 c) {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n        vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n      }\n    "],["\n      vec3 rgb2hsv(vec3 c) {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n        vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n      }\n    "]))),r.glsl(t||(t=n(["\n      vec3 hsv2rgb(vec3 c) {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n      }\n    "],["\n      vec3 hsv2rgb(vec3 c) {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n      }\n    "]))),r.glsl(o||(o=n(["\n      float rgb2v(vec3 c) {\n        return max(c.x, max(c.y, c.z));\n      }\n    "],["\n      float rgb2v(vec3 c) {\n        return max(c.x, max(c.y, c.z));\n      }\n    "])))];switch(c.stages){case 0:v.forEach(function(c){return e.vertex.code.add(c)});break;case 1:v.forEach(function(c){return e.fragment.code.add(c)});break;default:v.forEach(function(c){return e.vertex.code.add(c)}),v.forEach(function(c){return e.fragment.code.add(c)})}}Object.defineProperty(c,"__esModule",{value:!0}),c.ColorConversion=v;var a,x,t,o});