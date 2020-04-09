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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],(function(e,i,c,o){var l,r;Object.defineProperty(i,"__esModule",{value:!0}),i.AlignPixel=function(e){var i=o.glsl(l||(l=c(["\n    vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {\n      vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;\n      vec2 pixelSz = vec2(1.0) / widthHeight;\n      vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;\n      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;\n      return vec4(result, clipCoord.zw);\n    }\n  "],["\n    vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {\n      vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;\n      vec2 pixelSz = vec2(1.0) / widthHeight;\n      vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;\n      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;\n      return vec4(result, clipCoord.zw);\n    }\n  "]))),n=o.glsl(r||(r=c(["\n\n    vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {\n      vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;\n      vec2 pixelSz = vec2(1.0) / widthHeight;\n      vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;\n      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;\n      return vec4(result, clipCoord.zw);\n    }\n  "],["\n\n    vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {\n      vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;\n      vec2 pixelSz = vec2(1.0) / widthHeight;\n      vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;\n      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;\n      return vec4(result, clipCoord.zw);\n    }\n  "])));e.vertex.code.add(i),e.vertex.code.add(n),e.fragment.code.add(i),e.fragment.code.add(n)}}));