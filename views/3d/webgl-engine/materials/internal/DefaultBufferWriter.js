/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../support/buffer/InterleavedLayout","./bufferWriterUtils"],(function(t,e,o){"use strict";const n=e.newLayout().vec3f("position"),r=e.newLayout().vec3f("position").vec2f("uv0"),i=e.newLayout().vec3f("position").vec4u8("color");let u=function(){function t(t){this.vertexBufferLayout=t}var e=t.prototype;return e.allocate=function(t){return this.vertexBufferLayout.createBuffer(t)},e.elementCount=function(t){return t.indices.get("position").length},e.write=function(t,e,n,r){o.writeDefaultAttributes(e,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,n,r)},t}();t.DefaultBufferWriter=u,t.PositionColorLayout=i,t.PositionLayout=n,t.PositionUVLayout=r,Object.defineProperty(t,"__esModule",{value:!0})}));
