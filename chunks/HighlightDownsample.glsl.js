/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./vec2f64.js";import{Float2DrawUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js";import{NoParameters as o,glsl as i}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as t}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DDrawUniform as a}from"../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js";import{VertexAttribute as n}from"../views/3d/webgl-engine/lib/VertexAttribute.js";class s extends o{constructor(){super(...arguments),this.invFramebufferDim=e()}}function d(){const e=new t,{vertex:o,fragment:s}=e,d=o.code,m=s.code;return e.attributes.add(n.POSITION,"vec2"),d.add(i`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`),s.uniforms.add(new a("tex",(e=>e.inputTexture))),s.uniforms.add(new r("invFramebufferDim",(e=>e.invFramebufferDim))),m.add(i`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture2D(tex, coord);
float mx = floor(max(value.g, value.b));
gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:s,build:d},Symbol.toStringTag,{value:"Module"}));export{s as H,m as a,d as b};
