/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject","../../../webgl/VertexElementDescriptor"],(function(e,t,r,i){"use strict";return function(){function n(n,s){this._rctx=n,this._vertexBuffer=e.BufferObject.createVertex(n,t.Usage.STATIC_DRAW,new Uint16Array(s)),this._vao=new r.VertexArrayObject(n,new Map([["a_position",0]]),{geometry:[new i.VertexElementDescriptor("a_position",2,t.DataType.SHORT,0,4)]},{geometry:this._vertexBuffer}),this._count=s.length/2}var s=n.prototype;return s.bind=function(){this._rctx.bindVAO(this._vao)},s.unbind=function(){this._rctx.bindVAO(null)},s.dispose=function(){this._vao.dispose(!1),this._vertexBuffer.dispose()},s.draw=function(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(t.PrimitiveType.TRIANGLE_STRIP,0,this._count)},n}()}));
