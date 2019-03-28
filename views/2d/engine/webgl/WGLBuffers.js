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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./Utils","../../../webgl/BufferObject"],function(e,t,a,f){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(r){this.geometryMap=a.createGeometryData(function(e){return{indexBuffer:f.createIndex(r,35044),vao:null}},function(e,t){return{vertexBuffer:f.createVertex(r,a.C_VBO_INFO[t])}})}return e.prototype.dispose=function(){for(var e in this.geometryMap){var t=this.geometryMap[e];for(var r in t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose(),t.buffers)t.buffers[r]&&t.buffers[r].data.vertexBuffer.dispose()}},e.prototype.get=function(e){var t=this.geometryMap[e],r={};for(var a in t.buffers)r[a]=t.buffers[a].data.vertexBuffer;return{indexBuffer:t.data.indexBuffer,get vao(){return t.data.vao},set vao(e){t.data.vao=e},vertexBufferMap:r}},e.prototype.has=function(e){return null!=this.geometryMap[e]},e.prototype.upload=function(r,e){var a=this;e.forEach(function(e,t){a._upload(e,t,r)})},e.prototype._upload=function(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){var a=e.vertices;for(var f in a){var i=a[f];i.allDirty?this._uploadVertices(r,t,f):null!=i.from&&null!=i.count&&this._uploadVertices(r,t,f,i.from,i.count)}}},e.prototype._uploadVertices=function(e,t,r,a,f){var i=this.geometryMap[t];if(i){var u=e.geometries[t].vertexBuffer[r];if(u){var n=u.stride,o=u.data.buffer;i.buffers[r]&&0<o.byteLength&&(null!=a&&null!=f?i.buffers[r].data.vertexBuffer.setSubData(o,a*n,a*n,(a+f)*n):i.buffers[r].data.vertexBuffer.setData(o))}}},e.prototype._uploadIndices=function(e,t,r,a){var f=this.geometryMap[t];if(f){var i=e.geometries[t].indexBuffer.buffer;f.data.indexBuffer&&0<i.byteLength&&(null!=r&&null!=a?f.data.indexBuffer.setSubData(i,4*r,4*r,4*(r+a)):f.data.indexBuffer.setData(i))}},e}();t.default=r});