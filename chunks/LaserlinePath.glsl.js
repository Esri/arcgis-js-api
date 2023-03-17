/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./mat4","./mat4f64","./vec2","./vec2f64","../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,a,t,o,r,s,l,n,d,c,v){"use strict";function w(e){const a=new c.ShaderBuilder;a.include(r.Laserline,e);const{vertex:o,fragment:w}=a;return o.uniforms.add([new d.Matrix4PassUniform("modelView",((e,a)=>i.translate(x,a.camera.viewMatrix,e.origin))),new d.Matrix4PassUniform("proj",((e,i)=>i.camera.projectionMatrix)),new l.FloatPassUniform("glowWidth",((e,i)=>e.glowWidth*i.camera.pixelRatio)),new s.Float2PassUniform("pixelToNDC",((e,i)=>t.set(p,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3])))]),a.attributes.add(v.VertexAttribute.START,"vec3"),a.attributes.add(v.VertexAttribute.END,"vec3"),a.attributes.add(v.VertexAttribute.UP,"vec3"),a.attributes.add(v.VertexAttribute.EXTRUDE,"vec2"),a.varyings.add("uv","vec2"),a.varyings.add("vViewStart","vec3"),a.varyings.add("vViewEnd","vec3"),a.varyings.add("vViewPlane","vec4"),o.code.add(n.glsl`void main() {
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
}`),w.uniforms.add(new l.FloatPassUniform("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),w.code.add(n.glsl`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
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
}`),a}const p=o.create(),x=a.create(),P=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));e.LaserlinePath=P,e.build=w}));
