/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./mat4","./mat4f64","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,a,t,r,o,l,n,s,d){"use strict";function c(){const e=new s.ShaderBuilder;return e.attributes.add(d.VertexAttribute.POSITION,"vec3"),e.attributes.add(d.VertexAttribute.COLOR,"vec4"),e.attributes.add(d.VertexAttribute.SIZE,"float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add([new n.Matrix4PassUniform("transform",((e,i)=>v(e,i))),new r.Float4PassUniform("viewport",((e,i)=>i.camera.fullViewport)),new o.FloatPassUniform("pixelRatio",((e,i)=>i.camera.pixelRatio))]),e.include(t.AlignPixel),e.vertex.code.add(l.glsl`void main(void) {
vec4 posProj = transform * vec4(position, 0);
gl_Position = alignToPixelCenter(posProj, viewport.zw);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`),e.fragment.code.add(l.glsl`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
gl_FragColor = vec4(vcolor.xyz, intensity);
}`),e}function v(e,a){const t=24e-8;return i.copy(g,a.camera.projectionMatrix),g[10]=t-1,g[11]=-1,g[14]=(t-2)*a.camera.near,i.multiply(g,g,a.camera.viewMatrix),i.multiply(g,g,e.modelMatrix)}const g=a.create(),u=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));e.Stars=u,e.build=c}));
