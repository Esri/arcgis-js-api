// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(n,i,t,a){function e(n){var i=n.fragment;i.uniforms.add("lightingMainDirection","vec3"),i.uniforms.add("lightingMainIntensity","vec3"),i.uniforms.add("lightingFixedFactor","float"),i.code.add(a.glsl(o||(o=t(["\n    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {\n      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal = mix(dotVal, 1.0, lightingFixedFactor);\n\n      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);\n    }\n  "],["\n    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {\n      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal = mix(dotVal, 1.0, lightingFixedFactor);\n\n      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);\n    }\n  "]))))}Object.defineProperty(i,"__esModule",{value:!0}),i.EvaluateMainLighting=e;var o});