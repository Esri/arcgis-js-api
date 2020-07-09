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

define(["require","exports","tslib","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(t,a,e,n,l){var o,r;Object.defineProperty(a,"__esModule",{value:!0}),a.OutputDepth=function(t,a){t.include(n.RgbaFloatEncoding),3===a.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l.glsl(o||(o=e.__makeTemplateObject(["\n      float _calculateFragDepth(const in float depth) {\n        // calc polygon offset\n        const float SLOPE_SCALE = 2.0;\n        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)\n        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));\n        float result = depth + SLOPE_SCALE * m + BIAS;\n        return clamp(result, .0, .999999);\n      }\n\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));\n      }\n    "],["\n      float _calculateFragDepth(const in float depth) {\n        // calc polygon offset\n        const float SLOPE_SCALE = 2.0;\n        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)\n        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));\n        float result = depth + SLOPE_SCALE * m + BIAS;\n        return clamp(result, .0, .999999);\n      }\n\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));\n      }\n    "]))))):1===a.output&&t.fragment.code.add(l.glsl(r||(r=e.__makeTemplateObject(["\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_linearDepth);\n      }\n    "],["\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_linearDepth);\n      }\n    "]))))}}));