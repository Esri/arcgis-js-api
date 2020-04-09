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

define(["require","exports","../../../support/buffer/InterleavedLayout"],(function(e,o,r){Object.defineProperty(o,"__esModule",{value:!0}),o.createVertexBufferLayout=function(e){var o=r.newLayout().vec3f("position");return e.normals&&o.vec2i16("normalCompressed",{glNormalized:!0}),1===e.textureCoordinates?o.vec2f("uv0"):2===e.textureCoordinates&&(o.vec2f("uv0"),o.vec4u16("uvRegion",{glNormalized:!0})),e.colors&&o.vec4u8("color",{glNormalized:!0}),o.alignTo(4)}}));