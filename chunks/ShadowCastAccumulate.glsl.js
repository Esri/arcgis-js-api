/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,a,r,s,i,t,o,d,n,l,c,h,u,p){"use strict";let w=function(e){function r(){return e.apply(this,arguments)||this}return a._inheritsLoose(r,e),r}(o.ReadShadowMapBindParameters);const g=255,v=1/g;function m(e){const a=new u.ShaderBuilder,s=a.fragment;return s.include(n.RgbaFloatEncoding),s.include(t.ReadLinearDepth),a.include(d.CameraSpace),a.include(i.ScreenSpacePass),a.include(o.ReadShadowMapPass,e),s.uniforms.add([new p.Texture2DPassUniform("depthMap",(e=>e.linearDepthTexture)),new h.Matrix4PassUniform("inverseViewMatrix",((e,a)=>r.invert(P,r.translate(P,a.camera.viewMatrix,a.camera.center)))),new l.Float2PassUniform("nearFar",((e,a)=>a.camera.nearFar))]),s.constants.add("sampleValue","float",v),s.code.add(c.glsl`void main(void) {
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
gl_FragColor = vec4(sampleValue);
}`),a}const P=s.create(),f=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastAccumulatePassParameters:w,shadowCastMaxSamples:g,build:m},Symbol.toStringTag,{value:"Module"}));e.ShadowCastAccumulate=f,e.ShadowCastAccumulatePassParameters=w,e.build=m,e.shadowCastMaxSamples=g}));
