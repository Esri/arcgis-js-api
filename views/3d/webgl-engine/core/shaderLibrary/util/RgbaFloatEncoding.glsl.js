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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(n,t,e,o){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.RgbaFloatEncoding=void 0,t.RgbaFloatEncoding=function(n){n.code.add(o.glsl(a||(a=e.__makeTemplateObject(["\n    // This is the maximum float value representable as 32bit fixed point,\n    // it is rgba2float(vec4(1)) inlined.\n    const float MAX_RGBA_FLOAT =\n      255.0 / 256.0 +\n      255.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)\n    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n    vec4 float2rgba(const float value) {\n      // Make sure value is in the domain we can represent\n      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n      // Decompose value in 32bit fixed point parts represented as\n      // uint8 rgba components. Decomposition uses the fractional part after multiplying\n      // by a power of 256 (this removes the bits that are represented in the previous\n      // component) and then converts the fractional part to 8bits.\n      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n      // Convert uint8 values (from 0 to 255) to floating point representation for\n      // the shader\n      const float toU8AsFloat = 1.0 / 255.0;\n\n      return fixedPointU8 * toU8AsFloat;\n    }\n\n    // Factors to convert rgba back to float\n    const vec4 RGBA_2_FLOAT_FACTORS = vec4(\n      255.0 / (256.0),\n      255.0 / (256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n    );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, RGBA_2_FLOAT_FACTORS);\n    }\n  "],["\n    // This is the maximum float value representable as 32bit fixed point,\n    // it is rgba2float(vec4(1)) inlined.\n    const float MAX_RGBA_FLOAT =\n      255.0 / 256.0 +\n      255.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)\n    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n    vec4 float2rgba(const float value) {\n      // Make sure value is in the domain we can represent\n      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n      // Decompose value in 32bit fixed point parts represented as\n      // uint8 rgba components. Decomposition uses the fractional part after multiplying\n      // by a power of 256 (this removes the bits that are represented in the previous\n      // component) and then converts the fractional part to 8bits.\n      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n      // Convert uint8 values (from 0 to 255) to floating point representation for\n      // the shader\n      const float toU8AsFloat = 1.0 / 255.0;\n\n      return fixedPointU8 * toU8AsFloat;\n    }\n\n    // Factors to convert rgba back to float\n    const vec4 RGBA_2_FLOAT_FACTORS = vec4(\n      255.0 / (256.0),\n      255.0 / (256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n    );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, RGBA_2_FLOAT_FACTORS);\n    }\n  "]))))}}));