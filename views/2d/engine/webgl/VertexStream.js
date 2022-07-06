/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BufferObject as t}from"../../../webgl/BufferObject.js";import{Usage as e,DataType as r,PrimitiveType as s}from"../../../webgl/enums.js";import{VertexArrayObject as i}from"../../../webgl/VertexArrayObject.js";import{VertexElementDescriptor as o}from"../../../webgl/VertexElementDescriptor.js";class n{constructor(s,n){this.rctx=s,this._vertexBuffer=t.createVertex(s,e.STATIC_DRAW,new Uint16Array(n)),this._vao=new i(s,new Map([["a_position",0]]),{geometry:[new o("a_position",2,r.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=n.length/2}bind(){this.rctx.bindVAO(this._vao)}unbind(){this.rctx.bindVAO(null)}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(s.TRIANGLE_STRIP,0,this._count)}}export{n as default};
