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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(n,t,e,o){var a,l;Object.defineProperty(t,"__esModule",{value:!0}),t.FoamIntensity=function(n){n.fragment.code.add(o.glsl(a||(a=e.__makeTemplateObject(["\n    float normals2FoamIntensity(vec3 n, float waveStrength){\n      float normalizationFactor =  max(0.015, waveStrength);\n      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);\n    }\n  "],["\n    float normals2FoamIntensity(vec3 n, float waveStrength){\n      float normalizationFactor =  max(0.015, waveStrength);\n      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);\n    }\n  "]))))},t.FoamColor=function(n){n.fragment.code.add(o.glsl(l||(l=e.__makeTemplateObject(["\n    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){\n      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;\n    }\n  "],["\n    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){\n      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;\n    }\n  "]))))}}));