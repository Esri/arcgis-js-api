/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Z as s}from"../../../../../../chunks/vec2f64.js";import{Float2PassUniform as e}from"../../shaderModules/Float2PassUniform.js";import{FloatPassUniform as o}from"../../shaderModules/FloatPassUniform.js";import{NoParameters as t,glsl as r}from"../../shaderModules/interfaces.js";import{VertexAttribute as a}from"../../../lib/VertexAttribute.js";class i extends t{constructor(){super(...arguments),this.scale=1,this.offset=s}}function d(s){s.attributes.add(a.POSITION,"vec2"),s.attributes.add(a.UV0,"vec2"),s.vertex.uniforms.add(new o("scale",(s=>s.scale))),s.vertex.uniforms.add(new e("offset",(s=>s.offset))),s.varyings.add("uv","vec2"),s.varyings.add("vuv","vec2"),s.vertex.code.add(r`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)}export{d as TileComposite,i as TileCompositePassParameters};
