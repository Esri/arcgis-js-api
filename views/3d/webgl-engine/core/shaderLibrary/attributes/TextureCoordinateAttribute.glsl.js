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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,t,r,d){var n,o,v;Object.defineProperty(t,"__esModule",{value:!0}),t.TextureCoordinateAttribute=function(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(d.glsl(n||(n=r.__makeTemplateObject(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n      }\n    "],["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n      }\n    "]))))),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(d.glsl(o||(o=r.__makeTemplateObject(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n        vuvRegion = uvRegion;\n      }\n    "],["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n        vuvRegion = uvRegion;\n      }\n    "]))))),0===t.attributeTextureCoordinates&&e.vertex.code.add(d.glsl(v||(v=r.__makeTemplateObject(["\n      void forwardTextureCoordinates() {}\n    "],["\n      void forwardTextureCoordinates() {}\n    "]))))}}));