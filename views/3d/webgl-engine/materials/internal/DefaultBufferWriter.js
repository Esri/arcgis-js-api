/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{newLayout as e}from"../../../support/buffer/InterleavedLayout.js";import{VertexAttribute as t}from"../../lib/VertexAttribute.js";import{writeDefaultAttributes as r}from"./bufferWriterUtils.js";const f=e().vec3f(t.POSITION),o=e().vec3f(t.POSITION).vec2f(t.UV0),u=e().vec3f(t.POSITION).vec4u8(t.COLOR);class i{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(t.POSITION).length}write(e,t,f,o){r(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,f,o)}}export{i as DefaultBufferWriter,u as PositionColorLayout,f as PositionLayout,o as PositionUVLayout};
