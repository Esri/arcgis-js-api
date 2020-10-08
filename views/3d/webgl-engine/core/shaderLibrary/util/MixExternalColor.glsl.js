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

define(["require","exports","tslib","./ColorConversion.glsl","../../shaderModules/interfaces"],(function(n,e,t,i,r){"use strict";var l;Object.defineProperty(e,"__esModule",{value:!0}),e.MixExternalColor=void 0,e.MixExternalColor=function(n){n.include(i.ColorConversion),n.code.add(r.glsl(l||(l=t.__makeTemplateObject(["\n    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      vec3 internalMixed = internalColor * textureColor;\n      vec3 allMixed = internalMixed * externalColor;\n\n      if (mode == ",") {\n        return allMixed;\n      }\n      else if (mode == ",") {\n        return internalMixed;\n      }\n      else if (mode == ",") {\n        return externalColor;\n      }\n      else {\n        // tint (or something invalid)\n        float vIn = rgb2v(internalMixed);\n        vec3 hsvTint = rgb2hsv(externalColor);\n        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n        return hsv2rgb(hsvOut);\n      }\n    }\n\n    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      float internalMixed = internalOpacity * textureOpacity;\n      float allMixed = internalMixed * externalOpacity;\n\n      if (mode == ",") {\n        return internalMixed;\n      }\n      else if (mode == ",") {\n        return externalOpacity;\n      }\n      else {\n        // multiply or tint (or something invalid)\n        return allMixed;\n      }\n    }\n  "],["\n    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      vec3 internalMixed = internalColor * textureColor;\n      vec3 allMixed = internalMixed * externalColor;\n\n      if (mode == ",") {\n        return allMixed;\n      }\n      else if (mode == ",") {\n        return internalMixed;\n      }\n      else if (mode == ",") {\n        return externalColor;\n      }\n      else {\n        // tint (or something invalid)\n        float vIn = rgb2v(internalMixed);\n        vec3 hsvTint = rgb2hsv(externalColor);\n        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n        return hsv2rgb(hsvOut);\n      }\n    }\n\n    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      float internalMixed = internalOpacity * textureOpacity;\n      float allMixed = internalMixed * externalOpacity;\n\n      if (mode == ",") {\n        return internalMixed;\n      }\n      else if (mode == ",") {\n        return externalOpacity;\n      }\n      else {\n        // multiply or tint (or something invalid)\n        return allMixed;\n      }\n    }\n  "])),r.glsl.int(1),r.glsl.int(2),r.glsl.int(3),r.glsl.int(2),r.glsl.int(3)))}}));