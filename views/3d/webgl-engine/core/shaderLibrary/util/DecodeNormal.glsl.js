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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,a,r){"use strict";var o;Object.defineProperty(n,"__esModule",{value:!0}),n.DecodeNormal=void 0,n.DecodeNormal=function(e){var n=r.glsl(o||(o=a.__makeTemplateObject(["\n    vec3 decodeNormal(vec2 f) {\n      float z = 1.0 - abs(f.x) - abs(f.y);\n      return vec3(f + sign(f) * min(z, 0.0), z);\n    }\n  "],["\n    vec3 decodeNormal(vec2 f) {\n      float z = 1.0 - abs(f.x) - abs(f.y);\n      return vec3(f + sign(f) * min(z, 0.0), z);\n    }\n  "])));e.fragment.code.add(n),e.vertex.code.add(n)}}));