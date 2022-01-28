/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../webgl/BufferObject","../../../webgl/VertexArrayObject"],(function(t,e){"use strict";return function(){function i(i,n){this.rctx=i,this._vertexBuffer=t.createVertex(i,35044,new Uint16Array(n)),this._vao=new e(i,new Map([["a_position",0]]),{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer}),this._count=n.length/2}var n=i.prototype;return n.bind=function(){this._vao.bind()},n.unbind=function(){this._vao.unbind()},n.dispose=function(){this._vao.dispose(!1),this._vertexBuffer.dispose()},n.draw=function(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(5,0,this._count)},i}()}));
