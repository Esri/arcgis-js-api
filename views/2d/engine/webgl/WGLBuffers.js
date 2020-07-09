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

define(["require","exports","../../../webgl","./Utils"],(function(e,t,r,a){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e){this.geometryMap=a.createGeometryData((function(){return{indexBuffer:r.BufferObject.createIndex(e,35044),vao:null}}),(function(t,f){return{vertexBuffer:r.BufferObject.createVertex(e,a.C_VBO_INFO[f])}}))}return e.prototype.dispose=function(){for(var e=0;e<5;e++){var t=this.geometryMap[e];if(t)for(var r in t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose(),t.buffers)t.buffers[r]&&t.buffers[r].data.vertexBuffer.dispose()}},e.prototype.get=function(e){var t=this.geometryMap[e],r={};for(var a in t.buffers)r[a]=t.buffers[a].data.vertexBuffer;return{indexBuffer:t.data.indexBuffer,get vao(){return t.data.vao},set vao(e){t.data.vao=e},vertexBufferMap:r}},e.prototype.has=function(e){return null!=this.geometryMap[e]},e.prototype.upload=function(e,t){var r=this;t.forEach((function(t,a){r._upload(t,a,e)}))},e.prototype._upload=function(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){var a=e.vertices;for(var f in a){var u=a[f];u.allDirty?this._uploadVertices(r,t,f):null!=u.from&&null!=u.count&&this._uploadVertices(r,t,f,u.from,u.count)}}},e.prototype._uploadVertices=function(e,t,r,a,f){var u=this.geometryMap[t];if(u){var i=e.geometries[t].vertexBuffer[r];if(i){var n=i.stride,o=i.data.buffer;u.buffers[r]&&o.byteLength>0&&(null!=a&&null!=f?u.buffers[r].data.vertexBuffer.setSubData(o,a*n,a*n,(a+f)*n):u.buffers[r].data.vertexBuffer.setData(o))}}},e.prototype._uploadIndices=function(e,t,r,a){var f=this.geometryMap[t];if(f){var u=e.geometries[t].indexBuffer.buffer;f.data.indexBuffer&&u.byteLength>0&&(null!=r&&null!=a?f.data.indexBuffer.setSubData(u,4*r,4*r,4*(r+a)):f.data.indexBuffer.setData(u))}},e}();t.default=f}));