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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../support/buffer/InterleavedLayout"],function(e,o,r){function n(e){var o=r.newLayout().vec3f("position");return"compressed"===e.normals?o.vec2i16("normalCompressed",{glNormalized:!0}):"default"===e.normals&&o.vec3f("normal"),e.textureCoordinates&&o.vec2f("uv0"),e.textureCoordinateRegions&&o.vec4u16("region",{glNormalized:!0}),e.colors&&o.vec4u8("color"),e.componentData&&o.u16("componentIndex"),o.alignTo(4)}Object.defineProperty(o,"__esModule",{value:!0}),o.createVertexBufferLayout=n});