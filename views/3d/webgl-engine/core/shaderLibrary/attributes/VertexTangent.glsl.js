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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(n,e,t,a){"use strict";var r,g,i;Object.defineProperty(e,"__esModule",{value:!0}),e.VertexTangent=void 0,e.VertexTangent=function(n,e){n.varyings.add("tbnTangent","vec3"),n.varyings.add("tbnBiTangent","vec3"),1===e.viewingMode?n.vertex.code.add(a.glsl(r||(r=t.__makeTemplateObject(["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));\n        tbnBiTangent = normalize(cross(n, tbnTangent));\n      }\n    "],["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));\n        tbnBiTangent = normalize(cross(n, tbnTangent));\n      }\n    "])))):n.vertex.code.add(a.glsl(g||(g=t.__makeTemplateObject(["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent = vec3(1.0, 0.0, 0.0);\n        tbnBiTangent = normalize(cross(n, tbnTangent));\n      }\n    "],["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent = vec3(1.0, 0.0, 0.0);\n        tbnBiTangent = normalize(cross(n, tbnTangent));\n      }\n    "])))),n.fragment.code.add(a.glsl(i||(i=t.__makeTemplateObject(["\n      mat3 getTBNMatrix(vec3 n) {\n        return mat3(tbnTangent, tbnBiTangent, n);\n      }\n    "],["\n      mat3 getTBNMatrix(vec3 n) {\n        return mat3(tbnTangent, tbnBiTangent, n);\n      }\n    "]))))}}));