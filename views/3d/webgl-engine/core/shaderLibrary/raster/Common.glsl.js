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

define(["require","exports","tslib","./Projection.glsl","../../shaderModules/interfaces"],(function(o,e,n,r,t){var c;Object.defineProperty(e,"__esModule",{value:!0}),e.Common=function(o){o.include(r.Projection),o.fragment.uniforms.add("u_image","sampler2D"),o.fragment.uniforms.add("u_isFloatTexture","bool"),o.fragment.uniforms.add("u_flipY","bool"),o.fragment.uniforms.add("u_applyTransform","bool"),o.fragment.uniforms.add("u_opacity","float"),o.fragment.code.add(t.glsl(c||(c=n.__makeTemplateObject(["\n    vec2 getPixelLocation(vec2 coords) {\n      vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n      if (!u_applyTransform) {\n        return targetLocation;\n      }\n      return projectPixelLocation(targetLocation);\n    }\n\n    bool isOutside(vec2 coords){\n      if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n\n    vec4 getPixel(vec2 pixelLocation) {\n      return texture2D(u_image, pixelLocation);\n    }\n  "],["\n    vec2 getPixelLocation(vec2 coords) {\n      vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n      if (!u_applyTransform) {\n        return targetLocation;\n      }\n      return projectPixelLocation(targetLocation);\n    }\n\n    bool isOutside(vec2 coords){\n      if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n\n    vec4 getPixel(vec2 pixelLocation) {\n      return texture2D(u_image, pixelLocation);\n    }\n  "]))))}}));