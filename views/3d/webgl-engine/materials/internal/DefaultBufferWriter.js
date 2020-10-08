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

define(["require","exports","../../../support/buffer/InterleavedLayout","../../lib/Util","./bufferWriterUtils"],(function(t,e,o,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultBufferWriter=e.PositionColorMapSpaceUVBoundsLayout=e.PositionColorMapSpaceUVLayout=e.PositionColorLayout=e.PositionUVLayout=e.PositionLayout=void 0,e.PositionLayout=o.newLayout().vec3f(r.VertexAttrConstants.POSITION),e.PositionUVLayout=o.newLayout().vec3f(r.VertexAttrConstants.POSITION).vec2f(r.VertexAttrConstants.UV0),e.PositionColorLayout=o.newLayout().vec3f(r.VertexAttrConstants.POSITION).vec4u8(r.VertexAttrConstants.COLOR),e.PositionColorMapSpaceUVLayout=o.newLayout().vec3f(r.VertexAttrConstants.POSITION).vec4u8(r.VertexAttrConstants.COLOR).vec4f(r.VertexAttrConstants.UVMAPSPACE).vec3f(r.VertexAttrConstants.MEANVERTEXPOSITION),e.PositionColorMapSpaceUVBoundsLayout=o.newLayout().vec3f(r.VertexAttrConstants.POSITION).vec4u8(r.VertexAttrConstants.COLOR).vec4f(r.VertexAttrConstants.UVMAPSPACE).vec3f(r.VertexAttrConstants.BOUND1).vec3f(r.VertexAttrConstants.BOUND2).vec3f(r.VertexAttrConstants.BOUND3);var s=function(){function t(t){this.vertexBufferLayout=t}return t.prototype.allocate=function(t){return this.vertexBufferLayout.createBuffer(t)},t.prototype.elementCount=function(t){return t.indices[r.VertexAttrConstants.POSITION].length},t.prototype.write=function(t,e,o,r){n.writeDefaultAttributes(e,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,o,r)},t}();e.DefaultBufferWriter=s}));