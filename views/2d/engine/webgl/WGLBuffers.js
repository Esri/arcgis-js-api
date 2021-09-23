/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../webgl/checkWebGLError","../../../webgl/enums","../../../../chunks/builtins","../../../webgl/renderState","../../../webgl/Texture","../../../webgl/VertexArrayObject","./Utils"],(function(e,t,r,n,a,f,u,i,s,o,c){"use strict";return function(){function t(t){this.geometryMap=c.createGeometryData((()=>({indexBuffer:e.createIndex(t,35044),vao:null})),((r,n)=>({vertexBuffer:e.createVertex(t,c.C_VBO_INFO[n])})))}var r=t.prototype;return r.dispose=function(){for(let e=0;e<5;e++){const t=this.geometryMap[e];if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}},r.get=function(e){const t=this.geometryMap[e];return{draw(e,r,n,a,f){if(!t.data.vao){const a={};for(const e in t.buffers)a[e]=t.buffers[e].data.vertexBuffer;t.data.vao=new o(e,n,r,a,t.data.indexBuffer)}const u=t.data.vao;e.bindVAO(u),e.drawElements(4,f,5125,Uint32Array.BYTES_PER_ELEMENT*a),e.bindVAO(null)}}},r.has=function(e){return null!=this.geometryMap[e]},r.upload=function(e,t){t.forEach(((t,r)=>{this._upload(t,r,e)}))},r._upload=function(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){const n=e.vertices;for(const e in n){const a=n[e];a.allDirty?this._uploadVertices(r,t,e):null!=a.from&&null!=a.count&&this._uploadVertices(r,t,e,a.from,a.count)}}},r._uploadVertices=function(e,t,r,n,a){const f=this.geometryMap[t];if(!f)return;const u=e.geometries[t].vertexBuffer[r];if(!u)return;const i=u.stride,s=u.data.buffer;f.buffers[r]&&s.byteLength>0&&(null!=n&&null!=a?f.buffers[r].data.vertexBuffer.setSubData(s,n*i,n*i,(n+a)*i):f.buffers[r].data.vertexBuffer.setData(s))},r._uploadIndices=function(e,t,r,n){const a=this.geometryMap[t];if(!a)return;const f=4,u=e.geometries[t].indexBuffer.buffer;a.data.indexBuffer&&u.byteLength>0&&(null!=r&&null!=n?a.data.indexBuffer.setSubData(u,r*f,r*f,(r+n)*f):a.data.indexBuffer.setData(u))},t}()}));
