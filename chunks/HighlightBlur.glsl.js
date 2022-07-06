/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./vec2f64.js";import{Float2DrawUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js";import{NoParameters as o,glsl as t}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as i}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DDrawUniform as u}from"../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js";import{Texture2DPassUniform as s}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{VertexAttribute as n}from"../views/3d/webgl-engine/lib/VertexAttribute.js";class a extends o{constructor(){super(...arguments),this.blurSize=e()}}function d(){const e=new i,{vertex:o,fragment:a}=e,d=o.code,l=a.code;return e.attributes.add(n.POSITION,"vec2"),e.attributes.add(n.UV0,"vec2"),e.varyings.add("blurCoordinate","vec3"),o.uniforms.add(new s("coverageTex",(e=>e.coverageTexture))),a.uniforms.add(new r("blurSize",(e=>e.blurSize))),d.add(t`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
}`),a.uniforms.add(new u("tex",(e=>e.blurInputTexture))),l.add(t`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture2D(tex, uv);
if (blurCoordinate.z == 1.0) {
gl_FragColor = center;
} else {
vec4 sum = vec4(0.0);
sum += center * 0.204164;
sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture2D(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture2D(tex, uv - blurSize * 3.294215) * 0.093913;
gl_FragColor = sum;
}
}`),e}const l=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:a,build:d},Symbol.toStringTag,{value:"Module"}));export{a as H,l as a,d as b};
