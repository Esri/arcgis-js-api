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

define(["require","exports","../../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../../core/shaderModules/interfaces"],function(o,l,e,n){function a(o){o.vertex.code.add(n.glsl(s||(s=e(["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ",";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "],["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ",";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "])),n.glsl.int(1),n.glsl.int(3),n.glsl.int(4),n.glsl.int(1)))}Object.defineProperty(l,"__esModule",{value:!0}),l.DecodeSymbolColor=a;var s});