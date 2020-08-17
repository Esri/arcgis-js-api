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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","./Utils","../../../webgl/BufferObject"],(function(e,t,r,a){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){this.geometryMap=r.createGeometryData(t,(function(t){return{indexBuffer:a.createIndex(e,35044),vao:null}}),(function(t,f){return{vertexBuffer:a.createVertex(e,r.C_VBO_INFO[f])}}))}return e.prototype.dispose=function(){for(var e in this.geometryMap){var t=this.geometryMap[e];for(var r in t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose(),t.buffers)t.buffers[r]&&t.buffers[r].data.vertexBuffer.dispose()}},e.prototype.get=function(e){var t=this.geometryMap[e],r={};for(var a in t.buffers)r[a]=t.buffers[a].data.vertexBuffer;return{indexBuffer:t.data.indexBuffer,get vao(){return t.data.vao},set vao(e){t.data.vao=e},vertexBufferMap:r}},e.prototype.has=function(e){return null!=this.geometryMap[e]},e.prototype.upload=function(e,t){var r=this;t.forEach((function(t,a){t.indices&&(t.indices.allDirty?r._uploadIndices(e,a):null!=t.indices.from&&null!=t.indices.count&&r._uploadIndices(e,a,t.indices.from,t.indices.count)),t.vertices&&t.vertices.forEach((function(t,f){t.allDirty?r._uploadVertices(e,a,f):null!=t.from&&null!=t.count&&r._uploadVertices(e,a,f,t.from,t.count)}))}))},e.prototype._uploadVertices=function(e,t,r,a,f){var u=this.geometryMap[t];if(u){var n=e.geometries[t].vertexBuffer[r];if(n){var i=n.stride,o=n.data.buffer;u.buffers[r]&&o.byteLength>0&&(null!=a&&null!=f?u.buffers[r].data.vertexBuffer.setSubData(o,a*i,a*i,(a+f)*i):u.buffers[r].data.vertexBuffer.setData(o))}}},e.prototype._uploadIndices=function(e,t,r,a){var f=this.geometryMap[t];if(f){var u=e.geometries[t].indexBuffer.buffer;f.data.indexBuffer&&u.byteLength>0&&(null!=r&&null!=a?f.data.indexBuffer.setSubData(u,4*r,4*r,4*(r+a)):f.data.indexBuffer.setData(u))}},e}();t.default=f}));
