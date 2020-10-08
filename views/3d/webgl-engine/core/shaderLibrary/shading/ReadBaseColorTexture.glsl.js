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

define(["require","exports","tslib","../attributes/VertexTextureCoordinates.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,r,t,u,o,n){"use strict";var a,l,s;Object.defineProperty(r,"__esModule",{value:!0}),r.ReadBaseColorTexture=void 0,r.ReadBaseColorTexture=function(e,r){var d=e.fragment;r.baseColorTexture?(e.include(u.VertexTextureCoordinates,r),d.uniforms.add("uBaseColorTexture","sampler2D"),d.uniforms.add("uBaseColorTextureSize","vec2"),2===r.attributeTextureCoordinates?(e.include(o.TextureAtlasLookup),d.code.add(n.glsl(a||(a=t.__makeTemplateObject(["\n        vec4 readBaseColorTexture() {\n          return textureAtlasLookup(\n            uBaseColorTexture,\n            uBaseColorTextureSize,\n            vuv0,\n            vuvRegion\n          );\n        }\n      "],["\n        vec4 readBaseColorTexture() {\n          return textureAtlasLookup(\n            uBaseColorTexture,\n            uBaseColorTextureSize,\n            vuv0,\n            vuvRegion\n          );\n        }\n      "]))))):d.code.add(n.glsl(l||(l=t.__makeTemplateObject(["\n        vec4 readBaseColorTexture() {\n          return texture2D(uBaseColorTexture, vuv0);\n        }\n      "],["\n        vec4 readBaseColorTexture() {\n          return texture2D(uBaseColorTexture, vuv0);\n        }\n      "]))))):d.code.add(n.glsl(s||(s=t.__makeTemplateObject(["\n      vec4 readBaseColorTexture() { return vec4(1.0); }\n    "],["\n      vec4 readBaseColorTexture() { return vec4(1.0); }\n    "]))))}}));