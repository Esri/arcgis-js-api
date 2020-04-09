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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],(function(e,r,t,o){var d,n,v;Object.defineProperty(r,"__esModule",{value:!0}),r.TextureCoordinateAttribute=function(e,r){1===r.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.glsl(d||(d=t(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n      }\n    "],["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n      }\n    "]))))),2===r.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o.glsl(n||(n=t(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n        vuvRegion = uvRegion;\n      }\n    "],["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n        vuvRegion = uvRegion;\n      }\n    "]))))),0===r.attributeTextureCoordinates&&e.vertex.code.add(o.glsl(v||(v=t(["\n      void forwardTextureCoordinates() {}\n    "],["\n      void forwardTextureCoordinates() {}\n    "]))))}}));