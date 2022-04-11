/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,r,o){"use strict";function d(){const e=new r.ShaderBuilder;return e.attributes.add(o.VertexAttribute.POSITION,"vec2"),e.attributes.add(o.VertexAttribute.UV0,"vec2"),e.vertex.uniforms.add("scale","float"),e.vertex.uniforms.add("offset","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(t.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
}`),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("opacity","float"),e.fragment.code.add(t.glsl`void main() {
vec4 color = texture2D(tex, uv);
gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;
}`),e}const i=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));e.BlendLayersShader=i,e.build=d}));
