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

define(["require","exports","tslib","../util/DecodeNormal.glsl","../../shaderModules/interfaces"],(function(e,n,r,o,a){var d,l,t;Object.defineProperty(n,"__esModule",{value:!0}),n.NormalAttribute=function(e,n){0===n.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(a.glsl(d||(d=r.__makeTemplateObject(["\n      vec3 normalModel() {\n        return normal;\n      }\n    "],["\n      vec3 normalModel() {\n        return normal;\n      }\n    "]))))),1===n.normalType&&(e.include(o.DecodeNormal),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(a.glsl(l||(l=r.__makeTemplateObject(["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "],["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "]))))),3===n.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.glsl(t||(t=r.__makeTemplateObject(["\n      vec3 screenDerivativeNormal(vec3 positionView) {\n        return normalize(cross(dFdx(positionView), dFdy(positionView)));\n      }\n    "],["\n      vec3 screenDerivativeNormal(vec3 positionView) {\n        return normalize(cross(dFdx(positionView), dFdy(positionView)));\n      }\n    "])))))}}));