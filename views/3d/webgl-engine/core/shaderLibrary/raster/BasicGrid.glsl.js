/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,i){"use strict";function o(e){e.attributes.add(i.VertexAttribute.POSITION,"vec2"),e.attributes.add(i.VertexAttribute.UV0,"vec2"),e.vertex.uniforms.add("u_scale","float"),e.vertex.uniforms.add("u_offset","vec2"),e.varyings.add("v_texcoord","vec2"),e.vertex.code.add(t.glsl`void main(void) {
v_texcoord = uv0 * u_scale + u_offset;
gl_Position = vec4(position, 0.0, 1.0);
}`)}e.BasicGrid=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
