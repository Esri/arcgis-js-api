/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../core/has","../../../../core/mathUtils","../../../../chunks/builtins","../../../webgl/BufferObject","../../../webgl/VertexArrayObject","../../../webgl/FramebufferObject"],(function(t,e,i,r,n,o){"use strict";return function(){function t(t,e){this.rctx=t,this._vertexBuffer=r.createVertex(t,35044,new Uint16Array(e)),this._vao=new n(t,{a_position:0},{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer})}var e=t.prototype;return e.bind=function(){this._vao.bind()},e.unbind=function(){this._vao.unbind()},e.dispose=function(){this._vao.dispose(!1),this._vertexBuffer.dispose()},e.draw=function(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(5,0,4)},t}()}));
