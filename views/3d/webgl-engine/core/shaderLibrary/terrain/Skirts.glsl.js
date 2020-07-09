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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,v,t){var c;Object.defineProperty(n,"__esModule",{value:!0}),n.Skirts=function(e){e.vertex.code.add(t.glsl(c||(c=v.__makeTemplateObject(['\n    vec3 applySkirts(inout vec2 uv, vec3 vpos, vec3 vnormal, float skirtScale) {\n      float skirtLength = 0.0;\n\n      if (uv.x >= 2.0) {\n        skirtLength = uv.y * skirtScale;\n        // decode original uv-coordinates (see "encodeSkirtPos")\n        vec2 x = vec2(uv.x) - vec2(3.5, 4.5);\n        uv = clamp(vec2(1.5) - abs(x), vec2(0.0), vec2(1.0));\n      }\n\n      return vpos - vnormal * skirtLength;\n    }\n    '],['\n    vec3 applySkirts(inout vec2 uv, vec3 vpos, vec3 vnormal, float skirtScale) {\n      float skirtLength = 0.0;\n\n      if (uv.x >= 2.0) {\n        skirtLength = uv.y * skirtScale;\n        // decode original uv-coordinates (see "encodeSkirtPos")\n        vec2 x = vec2(uv.x) - vec2(3.5, 4.5);\n        uv = clamp(vec2(1.5) - abs(x), vec2(0.0), vec2(1.0));\n      }\n\n      return vpos - vnormal * skirtLength;\n    }\n    ']))))}}));