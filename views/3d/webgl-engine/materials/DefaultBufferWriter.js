/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../lib/VertexAttribute","./internal/bufferWriterUtils"],(function(t,e,r){"use strict";let u=function(){function t(t){this.vertexBufferLayout=t}var u=t.prototype;return u.allocate=function(t){return this.vertexBufferLayout.createBuffer(t)},u.elementCount=function(t){return t.indices.get(e.VertexAttribute.POSITION).length},u.write=function(t,e,u,i,n){r.writeDefaultAttributes(u,this.vertexBufferLayout,t,e,i,n)},t}();t.DefaultBufferWriter=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
