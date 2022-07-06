/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as e}from"./vec4.js";import{c as o}from"./vec4f64.js";import{Float4PassUniform as i}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{glsl as t}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as l}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{VertexAttribute as n}from"../views/3d/webgl-engine/lib/VertexAttribute.js";const a=8.6,s=.4;function u(){const o=new l,{vertex:u,fragment:c}=o,f=u.code,g=c.code;return o.attributes.add(n.POSITION,"vec2"),o.varyings.add("uv","vec2"),o.attributes.add(n.UV0,"vec2"),u.uniforms.add(new r("coverageTex",(e=>e.coverageTexture))),f.add(t`void main() {
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`),c.uniforms.add(new r("tex",(e=>e.blurColorTexture))),c.uniforms.add(new r("origin",(e=>e.highlightColorTexture))),c.uniforms.add(new i("uColor",(e=>e.color))),c.uniforms.add(new i("haloColor",(e=>e.haloColor))),c.uniforms.add(new i("opacities",(o=>e(d,o.haloOpacity,o.haloOpacityOccluded,o.fillOpacity,o.fillOpacityOccluded)))),c.constants.add("outlineSize","float",a),c.constants.add("blurSize","float",s),g.add(t`void main() {
vec4 blurredHighlightValue = texture2D(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture2D(origin, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float inner = 1.0 - outlineSize / 9.0;
float outer = 1.0 - (outlineSize + blurSize) / 9.0;
float outlineFactor = smoothstep(outer, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
gl_FragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`),o}const d=o(),c=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));export{c as H,u as b};
