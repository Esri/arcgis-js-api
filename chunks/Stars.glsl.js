/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,a,l){"use strict";function o(){const e=new a.ShaderBuilder;return e.attributes.add(l.VertexAttribute.POSITION,"vec3"),e.attributes.add(l.VertexAttribute.COLOR,"vec4"),e.attributes.add(l.VertexAttribute.SIZE,"float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add("transform","mat4").add("viewport","vec4").add("pixelRatio","float"),e.include(t.AlignPixel),e.vertex.code.add(i.glsl`void main(void) {
vec4 posProj = transform * vec4(position, 0);
gl_Position = alignToPixelCenter(posProj, viewport.zw);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`),e.fragment.code.add(i.glsl`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
gl_FragColor = vec4(vcolor.xyz, intensity);
}`),e}const r=Object.freeze(Object.defineProperty({__proto__:null,build:o},Symbol.toStringTag,{value:"Module"}));e.StarsShader=r,e.build=o}));
