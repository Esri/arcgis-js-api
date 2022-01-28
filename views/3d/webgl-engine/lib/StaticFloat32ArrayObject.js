/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../core/has","../../../webgl/checkWebGLError","../../../webgl/enums","../../../../chunks/builtins","../../../webgl/Texture","../../../webgl/VertexArrayObject"],(function(e,t,r,a,s,n,o,i,l,u){"use strict";let c=function(){function e(e,t,a,s){this.vao=new u(e,t,{geometry:a},{geometry:r.createVertex(e,35044)}),this.array=new Float32Array(s),this.vao.vertexBuffers.geometry.setData(this.array)}return e.prototype.dispose=function(){this.vao.dispose(!0)},t._createClass(e,[{key:"length",get:function(){return this.array.length}}]),e}();e.StaticFloat32ArrayObject=c,Object.defineProperty(e,"__esModule",{value:!0})}));
