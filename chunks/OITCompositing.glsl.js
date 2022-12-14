/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,o,t,a,s){"use strict";let n=function(e){function o(){return e.apply(this,arguments)||this}return r._inheritsLoose(o,e),o}(t.NoParameters);function i(){const e=new a.ShaderBuilder;return e.include(o.ScreenSpacePass),e.fragment.uniforms.add([new s.Texture2DPassUniform("colorTexture",(e=>e.colorTexture)),new s.Texture2DPassUniform("alphaTexture",(e=>e.alphaTexture)),new s.Texture2DPassUniform("frontFaceTexture",(e=>e.frontFaceTexture))]),e.fragment.code.add(t.glsl`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`),e}const l=Object.freeze(Object.defineProperty({__proto__:null,OITCompositingPassParameters:n,build:i},Symbol.toStringTag,{value:"Module"}));e.OITCompositing=l,e.OITCompositingPassParameters=n,e.build=i}));
