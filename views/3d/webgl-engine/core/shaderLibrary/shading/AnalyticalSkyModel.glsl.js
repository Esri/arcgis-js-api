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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,n,t,a){"use strict";var o,d,r;Object.defineProperty(n,"__esModule",{value:!0}),n.AnalyticalSkyModel=void 0,n.AnalyticalSkyModel=function(e){var n=e.fragment.code;n.add(a.glsl(o||(o=t.__makeTemplateObject(["\n    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)\n    {\n      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;\n    }\n    "],["\n    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)\n    {\n      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;\n    }\n    "])))),n.add(a.glsl(d||(d=t.__makeTemplateObject(["\n    float integratedRadiance(float cosTheta2, float roughness)\n    {\n      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);\n    }\n    "],["\n    float integratedRadiance(float cosTheta2, float roughness)\n    {\n      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);\n    }\n    "])))),n.add(a.glsl(r||(r=t.__makeTemplateObject(["\n    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)\n    {\n      float cosTheta2 = 1.0 - RdotNG * RdotNG;\n      float intRadTheta = integratedRadiance(cosTheta2, roughness);\n\n      // Calculate the integrated directional radiance of the ground and the sky\n      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;\n      float sky = 2.0 - ground;\n      return (ground * ambientGround + sky * ambientSky) * 0.5;\n    }\n    "],["\n    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)\n    {\n      float cosTheta2 = 1.0 - RdotNG * RdotNG;\n      float intRadTheta = integratedRadiance(cosTheta2, roughness);\n\n      // Calculate the integrated directional radiance of the ground and the sky\n      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;\n      float sky = 2.0 - ground;\n      return (ground * ambientGround + sky * ambientSky) * 0.5;\n    }\n    "]))))}}));