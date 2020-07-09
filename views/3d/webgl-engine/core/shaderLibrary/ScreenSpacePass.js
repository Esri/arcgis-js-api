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

define(["require","exports","tslib","../shaderModules/interfaces"],(function(e,i,n,o){var t;Object.defineProperty(i,"__esModule",{value:!0}),i.ScreenSpacePass=function(e){e.attributes.add("position","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(o.glsl(t||(t=n.__makeTemplateObject(["\n    void main(void) {\n      gl_Position = vec4(position, 0.0, 1.0);\n      uv = position * 0.5 + vec2(0.5);\n    } \n  "],["\n    void main(void) {\n      gl_Position = vec4(position, 0.0, 1.0);\n      uv = position * 0.5 + vec2(0.5);\n    } \n  "]))))}}));