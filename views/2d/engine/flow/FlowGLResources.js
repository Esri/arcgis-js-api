/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../webgl/checkWebGLError","../../../webgl/enums","../../../../chunks/builtins","../../../webgl/Texture","../../../webgl/VertexArrayObject"],(function(e,t,r,i,n,s,a,u,c){"use strict";return function(){function t(e,t){this._vertexData=e,this._indexData=t}var r=t.prototype;return r.prepareForRendering=function(t,r,i){const n=e.createVertex(t,35044,this._vertexData),s=e.createIndex(t,35044,this._indexData),a=new c(t,r,i,{geometry:n},s);this.vertexBuffer=n,this.indexBuffer=s,this.vertexArray=a,this._vertexData=null,this._indexData=null},r.detach=function(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()},t}()}));
