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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,o,r,l){"use strict";var n;Object.defineProperty(o,"__esModule",{value:!0}),o.Colormap=void 0,o.Colormap=function(e){e.fragment.uniforms.add("u_colormap","sampler2D"),e.fragment.uniforms.add("u_colormapOffset","float"),e.fragment.uniforms.add("u_colormapMaxIndex","float"),e.fragment.code.add(l.glsl(n||(n=r.__makeTemplateObject(["\n    vec4 colormap(vec4 currentPixel, bool isFloat) {\n      // colormap is only applicable to integer data but could be already normalized to 0-1 float\n      float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;\n      vec4 result;\n      // handle no data and out of range pixels\n      if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {\n        result = vec4(0.0, 0.0, 0.0, 0.0);\n      } else {\n        // colormap lookup\n        vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\n        vec4 color = texture2D(u_colormap, clrPosition);\n        result = vec4(color.rgb, 1.0) * color.a * u_opacity;\n      }\n      return result;\n    }\n  "],["\n    vec4 colormap(vec4 currentPixel, bool isFloat) {\n      // colormap is only applicable to integer data but could be already normalized to 0-1 float\n      float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;\n      vec4 result;\n      // handle no data and out of range pixels\n      if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {\n        result = vec4(0.0, 0.0, 0.0, 0.0);\n      } else {\n        // colormap lookup\n        vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\n        vec4 color = texture2D(u_colormap, clrPosition);\n        result = vec4(color.rgb, 1.0) * color.a * u_opacity;\n      }\n      return result;\n    }\n  "]))))}}));