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

define(["require","exports","tslib","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,n,u,a,l){var r,i,c;Object.defineProperty(t,"__esModule",{value:!0}),t.LineAmplitude=function(e,t){var d=e.vertex;switch(e.include(l.UnpackAttributes,t),a.EdgeUtil.usesSketchLogic(t)&&d.uniforms.add("uStrokesAmplitude","float"),t.mode){case 0:d.code.add(u.glsl(r||(r=n.__makeTemplateObject(["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          return 0.0;\n        }\n      "],["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          return 0.0;\n        }\n      "]))));break;case 1:d.code.add(u.glsl(i||(i=n.__makeTemplateObject(["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          return uStrokesAmplitude;\n        }\n      "],["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          return uStrokesAmplitude;\n        }\n      "]))));break;case 2:d.code.add(u.glsl(c||(c=n.__makeTemplateObject(["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          float type = unpackedAttributes.type;\n\n          if (type <= 0.0) {\n            return uStrokesAmplitude;\n          }\n          else {\n            return 0.0;\n          }\n        }\n      "],["\n        float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {\n          float type = unpackedAttributes.type;\n\n          if (type <= 0.0) {\n            return uStrokesAmplitude;\n          }\n          else {\n            return 0.0;\n          }\n        }\n      "]))))}}}));