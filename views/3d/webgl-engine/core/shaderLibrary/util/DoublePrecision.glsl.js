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

define(["require","exports","tslib","../../../../../../core/has","../../shaderModules/interfaces","../../../lib/WebGLDriverTest"],(function(e,n,c,i,t,r){var v,o;Object.defineProperty(n,"__esModule",{value:!0}),n.DoublePrecision=function(e,n){n.doublePrecisionRequiresObfuscation?e.vertex.code.add(t.glsl(v||(v=c.__makeTemplateObject(["\n      vec3 dpPlusFrc(vec3 a, vec3 b) {\n        return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n      }\n\n      vec3 dpMinusFrc(vec3 a, vec3 b) {\n        return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n      }\n\n      // based on https://www.thasler.com/blog/blog/glsl-part2-emu\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = dpPlusFrc(hiA, hiB);\n        vec3 e = dpMinusFrc(t1, hiA);\n        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n        return t1 + t2;\n      }\n    "],["\n      vec3 dpPlusFrc(vec3 a, vec3 b) {\n        return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n      }\n\n      vec3 dpMinusFrc(vec3 a, vec3 b) {\n        return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n      }\n\n      // based on https://www.thasler.com/blog/blog/glsl-part2-emu\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = dpPlusFrc(hiA, hiB);\n        vec3 e = dpMinusFrc(t1, hiA);\n        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n        return t1 + t2;\n      }\n    "])))):e.vertex.code.add(t.glsl(o||(o=c.__makeTemplateObject(["\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = hiA + hiB;\n        vec3 e = t1 - hiA;\n        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n        return t1 + t2;\n      }\n    "],["\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = hiA + hiB;\n        vec3 e = t1 - hiA;\n        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n        return t1 + t2;\n      }\n    "]))))},n.doublePrecisionRequiresObfuscation=function(e){return!!i("force-double-precision-obfuscation")||r.testWebGLDriver(e).doublePrecisionRequiresObfuscation}}));