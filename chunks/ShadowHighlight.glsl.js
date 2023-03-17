/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./mat4","./mat4f64","./vec2","./vec2f64","./vec3","./vec3f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/ShadowMap"],(function(e,a,o,i,t,r,l,h,s,d,n,c,g,p,u,v,f,w,x,P,m,D,b){"use strict";const S={highlightedThreshold:.99999,selfShadowThreshold:.025};function F(e){const i=new m.ShaderBuilder;i.include(c.ReadShadowMapDraw,e);const h=i.fragment;return h.include(p.RgbaFloatEncoding),h.include(n.ReadLinearDepth),i.include(g.CameraSpace),i.include(s.ScreenSpacePass),h.uniforms.add([new D.Texture2DPassUniform("defaultDepthTex",((e,a)=>a.shadowMap.getSnapshot(b.SnapshotSlot.Default))),new D.Texture2DPassUniform("highlightDepthTex",((e,a)=>a.shadowMap.getSnapshot(b.SnapshotSlot.Highlight))),new D.Texture2DPassUniform("depthMap",((e,a)=>a.linearDepthTexture)),new D.Texture2DPassUniform("highlightMap",((e,a)=>a.highlightColorTexture)),new f.Float4PassUniform("uColor",(e=>e.shadowColor)),new u.Float2PassUniform("nearFar",((e,a)=>a.camera.nearFar)),new w.FloatPassUniform("opacity",(e=>e.shadowOpacity)),new w.FloatPassUniform("occludedOpacity",(e=>e.occludedShadowOpacity)),new w.FloatPassUniform("terminationFactor",(e=>e.opacityElevation*e.dayNightTerminator)),new v.Float3PassUniform("lightingMainDirectionView",((e,a)=>l.normalize(y,l.transformMat4(y,a.lighting.mainLight.direction,a.camera.viewInverseTransposeMatrix)))),new u.Float2PassUniform("texelSize",((e,o)=>a.isSome(o.linearDepthTexture)?t.set(T,1/o.linearDepthTexture.descriptor.width,1/o.linearDepthTexture.descriptor.height):r.ZEROS)),new P.Matrix4PassUniform("inverseViewMatrix",((e,a)=>o.invert(M,o.translate(M,a.camera.viewMatrix,a.camera.center))))]),h.constants.add("unoccludedHighlightFlag","vec4",d.unoccludedHighlightFlag).add("highlightedThreshold","float",S.highlightedThreshold).add("selfShadowThreshold","float",S.selfShadowThreshold),h.code.add(x.glsl`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
float leftPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(-1.0, 0.0) * texelSize, nearFar);
float rightPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(1.0, 0.0) * texelSize, nearFar);
float bottomPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, -1.0) * texelSize, nearFar);
float topPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, 1.0) * texelSize, nearFar);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`),h.code.add(x.glsl`void main(void) {
vec4 highlightInfo = texture2D(highlightMap, uv);
float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
if (visiblyHighlighted > highlightedThreshold) {
discard;
}
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
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
float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
bool shadowHighlight = depthHighlight < lvpos.z;
if (!shadowHighlight) {
discard;
}
float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
bool shadowDefault = depthDefault < lvpos.z;
vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, uv, texelSize, depthMap, nearFar);
bool shaded = dot(normal, lightingMainDirectionView) < selfShadowThreshold;
float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
gl_FragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`),i}const M=i.create(),y=h.create(),T=r.create(),z=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}));e.ShadowHighlight=z,e.build=F}));
