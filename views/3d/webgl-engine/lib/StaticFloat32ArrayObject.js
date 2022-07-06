/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BufferObject as e}from"../../../webgl/BufferObject.js";import{Usage as r}from"../../../webgl/enums.js";import{VertexArrayObject as t}from"../../../webgl/VertexArrayObject.js";class s{constructor(s,o,a,i){this.vao=new t(s,o,{geometry:a},{geometry:e.createVertex(s,r.STATIC_DRAW)}),this.array=new Float32Array(i),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}export{s as StaticFloat32ArrayObject};
