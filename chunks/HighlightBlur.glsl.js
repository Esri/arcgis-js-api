/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec2f64","../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,t,i,u,o,n,l,a){"use strict";let s=function(e){function i(){var r;return(r=e.apply(this,arguments)||this).blurSize=t.create(),r}return r._inheritsLoose(i,e),i}(u.NoParameters);function d(){const e=new o.ShaderBuilder,{vertex:r,fragment:t}=e,s=r.code,d=t.code;return e.attributes.add(a.VertexAttribute.POSITION,"vec2"),e.attributes.add(a.VertexAttribute.UV0,"vec2"),e.varyings.add("blurCoordinate","vec3"),r.uniforms.add(new l.Texture2DPassUniform("coverageTex",(e=>e.coverageTexture))),t.uniforms.add(new i.Float2DrawUniform("blurSize",(e=>e.blurSize))),s.add(u.glsl`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture2D(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));
}`),t.uniforms.add(new n.Texture2DDrawUniform("tex",(e=>e.blurInputTexture))),d.add(u.glsl`void main() {
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
}`),e}const c=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:s,build:d},Symbol.toStringTag,{value:"Module"}));e.HighlightBlur=c,e.HighlightBlurDrawParameters=s,e.build=d}));
