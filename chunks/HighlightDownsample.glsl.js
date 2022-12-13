/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec2f64","../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,i,t,o,n,a,l){"use strict";let d=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).invFramebufferDim=i.create(),r}return r._inheritsLoose(t,e),t}(o.NoParameters);function u(){const e=new n.ShaderBuilder,{vertex:r,fragment:i}=e,d=r.code,u=i.code;return e.attributes.add(l.VertexAttribute.POSITION,"vec2"),d.add(o.glsl`void main() {
gl_Position = vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);
}`),i.uniforms.add(new a.Texture2DDrawUniform("tex",(e=>e.inputTexture))),i.uniforms.add(new t.Float2DrawUniform("invFramebufferDim",(e=>e.invFramebufferDim))),u.add(o.glsl`void main() {
vec2 coord = gl_FragCoord.xy * invFramebufferDim;
vec4 value = texture2D(tex, coord);
float mx = floor(max(value.g, value.b));
gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}`),e}const s=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:d,build:u},Symbol.toStringTag,{value:"Module"}));e.HighlightDownsample=s,e.HighlightDownsampleDrawParameters=d,e.build=u}));
