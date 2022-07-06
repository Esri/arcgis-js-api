/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{j as e}from"./mat4.js";import{c as i}from"./mat4f64.js";import{a as o}from"./vec2.js";import{a as r}from"./vec2f64.js";import{Laserline as a}from"../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl.js";import{Float2PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{FloatPassUniform as s}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as n}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as l}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as d}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as c}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function v(i){const r=new d;r.include(a,i);const{vertex:v,fragment:w}=r;return v.uniforms.add([new l("modelView",((i,o)=>e(m,o.camera.viewMatrix,i.origin))),new l("proj",((e,i)=>i.camera.projectionMatrix)),new s("glowWidth",((e,i)=>e.glowWidth*i.camera.pixelRatio)),new t("pixelToNDC",((e,i)=>o(p,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3])))]),r.attributes.add(c.START,"vec3"),r.attributes.add(c.END,"vec3"),r.attributes.add(c.UP,"vec3"),r.attributes.add(c.EXTRUDE,"vec2"),r.varyings.add("uv","vec2"),r.varyings.add("vViewStart","vec3"),r.varyings.add("vViewEnd","vec3"),r.varyings.add("vViewPlane","vec4"),v.code.add(n`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),w.uniforms.add(new s("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),w.code.add(n`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),r}const p=r(),m=i(),w=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));export{w as L,v as b};
