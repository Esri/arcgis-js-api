/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,t,i,o,r,l,d,h){"use strict";function c(e){const c=new h.ShaderBuilder;return c.include(o.ReadShadowMap),c.fragment.include(l.RgbaFloatEncoding),c.fragment.include(i.ReadLinearDepth),c.include(r.CameraSpace),c.include(a.ScreenSpacePass),c.fragment.uniforms.add("defaultDepthTex","sampler2D").add("highlightDepthTex","sampler2D").add("depthMap","sampler2D").add("highlightMap","sampler2D").add("uColor","vec4").add("nearFar","vec2").add("opacity","float").add("occludedOpacity","float").add("terminationFactor","float").add("inverseViewMatrix","mat4").add("lightingMainDirectionView","vec3").add("texelSize","vec2"),c.fragment.constants.add("unoccludedHighlightFlag","vec4",t.unoccludedHighlightFlag).add("highlightedThreshold","float",e.highlightedThreshold).add("selfShadowThreshold","float",e.selfShadowThreshold),c.fragment.code.add(d.glsl`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
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
}`),c.fragment.code.add(d.glsl`void main(void) {
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
float differenceOpacity = opacity;
float bothOpacity = occludedOpacity;
float fragOpacity = (shadowDefault || shaded) ? bothOpacity : differenceOpacity;
gl_FragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`),c}const n=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));e.ShadowHighlightShader=n,e.build=c}));
