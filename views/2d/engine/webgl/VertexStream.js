/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../core/has","../../../../core/mathUtils","../../../../chunks/builtins","../../../webgl/BufferObject","../../../webgl/VertexArrayObject","../../../webgl/FramebufferObject","../../../webgl/RenderingContext"],(function(e,t,i,n,r,o,s){"use strict";return function(){function e(e,t){this.rctx=e,this._vertexBuffer=n.createVertex(e,35044,new Uint16Array(t)),this._vao=new r(e,{a_position:0},{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer})}var t=e.prototype;return t.bind=function(){this._vao.bind()},t.unbind=function(){this._vao.unbind()},t.dispose=function(){this._vao.dispose(!1),this._vertexBuffer.dispose()},t.draw=function(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(5,0,4)},e}()}));
