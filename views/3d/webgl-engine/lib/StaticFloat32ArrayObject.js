/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject"],(function(e,t,r,a,o){"use strict";let n=function(){function e(e,t,n,s){this.vao=new o.VertexArrayObject(e,t,{geometry:n},{geometry:r.BufferObject.createVertex(e,a.Usage.STATIC_DRAW)}),this.array=new Float32Array(s),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}return e.prototype.dispose=function(){this.vao.dispose(!0)},t._createClass(e,[{key:"length",get:function(){return this.array.length}}]),e}();e.StaticFloat32ArrayObject=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
