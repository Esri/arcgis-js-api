/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{m as e,c as o}from"./mat4.js";import{c as r}from"./mat4f64.js";import{AlignPixel as i}from"../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js";import{Float4PassUniform as a}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as s}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as l}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as n}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as d}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function c(){const e=new n;return e.attributes.add(d.POSITION,"vec3"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"float"),e.varyings.add("vcolor","vec4"),e.varyings.add("vsize","float"),e.vertex.uniforms.add([new l("transform",((e,o)=>m(e,o))),new a("viewport",((e,o)=>o.camera.fullViewport)),new t("pixelRatio",((e,o)=>o.camera.pixelRatio))]),e.include(i),e.vertex.code.add(s`void main(void) {
vec4 posProj = transform * vec4(position, 0);
gl_Position = alignToPixelCenter(posProj, viewport.zw);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`),e.fragment.code.add(s`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
gl_FragColor = vec4(vcolor.xyz, intensity);
}`),e}function m(r,i){const a=24e-8;return o(p,i.camera.projectionMatrix),p[10]=a-1,p[11]=-1,p[14]=(a-2)*i.camera.near,e(p,p,i.camera.viewMatrix),e(p,p,r.modelMatrix)}const p=r(),v=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));export{v as S,c as b};
