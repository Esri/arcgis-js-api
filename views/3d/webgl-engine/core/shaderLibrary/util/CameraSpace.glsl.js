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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,o,r,n){var t;Object.defineProperty(o,"__esModule",{value:!0}),o.CameraSpace=function(e){e.fragment.uniforms.add("projInfo","vec4"),e.fragment.uniforms.add("zScale","vec2"),e.fragment.code.add(n.glsl(t||(t=r.__makeTemplateObject(["\n    vec3 reconstructPosition(vec2 fragCoord, float depth) {\n      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);\n    }\n  "],["\n    vec3 reconstructPosition(vec2 fragCoord, float depth) {\n      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);\n    }\n  "]))))}}));