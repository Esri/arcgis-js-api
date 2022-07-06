/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as o}from"../../shaderModules/interfaces.js";import{VertexAttribute as r}from"../../../lib/VertexAttribute.js";function e(e,d){d.hasVertexColors?(e.attributes.add(r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{e as VertexColor};
