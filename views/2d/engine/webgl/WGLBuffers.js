// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./Utils","../../../webgl/BufferObject"],function(e,t,r,f){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.geometryMap=r.createGeometryData(function(t){return{indexBuffer:f.createIndex(e,35044),vao:null}},function(t,a){return{vertexBuffer:f.createVertex(e,r.C_VBO_INFO[a])}})}return e.prototype.dispose=function(){for(var e in this.geometryMap){var t=this.geometryMap[e];t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(var r in t.buffers)t.buffers[r]&&t.buffers[r].data.vertexBuffer.dispose()}},e.prototype.get=function(e){var t=this.geometryMap[e],r={};for(var f in t.buffers)r[f]=t.buffers[f].data.vertexBuffer;return{indexBuffer:t.data.indexBuffer,get vao(){return t.data.vao},set vao(e){t.data.vao=e},vertexBufferMap:r}},e.prototype.has=function(e){return null!=this.geometryMap[e]},e.prototype.upload=function(e,t){var r=this;t.forEach(function(t,f){t.indices&&(t.indices.allDirty?r._uploadIndices(e,f):null!=t.indices.from&&null!=t.indices.count&&r._uploadIndices(e,f,t.indices.from,t.indices.count)),t.vertices&&t.vertices.forEach(function(t,a){t.allDirty?r._uploadVertices(e,f,a):null!=t.from&&null!=t.count&&r._uploadVertices(e,f,a,t.from,t.count)})})},e.prototype._uploadVertices=function(e,t,r,f,a){var n=this.geometryMap[t];if(n){var u=e.geometries[t].vertexBuffer[r];if(u){var i=u.stride,o=u.data.buffer;n.buffers[r]&&o.byteLength>0&&(null!=f&&null!=a?n.buffers[r].data.vertexBuffer.setSubData(o,f*i,f*i,(f+a)*i):n.buffers[r].data.vertexBuffer.setData(o))}}},e.prototype._uploadIndices=function(e,t,r,f){var a=this.geometryMap[t];if(a){var n=e.geometries[t].indexBuffer.buffer;a.data.indexBuffer&&n.byteLength>0&&(null!=r&&null!=f?a.data.indexBuffer.setSubData(n,4*r,4*r,4*(r+f)):a.data.indexBuffer.setData(n))}},e}();t.default=a});