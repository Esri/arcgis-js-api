/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,a,t){"use strict";function o(e){const o=new t.ShaderBuilder;return o.include(i.Laserline,e),o.vertex.uniforms.add("uModelViewMatrix","mat4"),o.vertex.uniforms.add("uProjectionMatrix","mat4"),o.attributes.add("start","vec3"),o.attributes.add("end","vec3"),o.attributes.add("up","vec3"),o.attributes.add("extrude","vec2"),o.varyings.add("uv","vec2"),o.varyings.add("vViewStart","vec3"),o.varyings.add("vViewEnd","vec3"),o.varyings.add("vViewPlane","vec4"),o.vertex.uniforms.add("glowWidth","float"),o.vertex.uniforms.add("pixelToNDC","vec2"),o.vertex.code.add(a.glsl`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = uModelViewMatrix * vec4(pos, 1);
vec4 projPos = uProjectionMatrix * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (uModelViewMatrix * vec4(start, 1)).xyz;
vViewEnd = (uModelViewMatrix * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),o.fragment.uniforms.add("globalAlpha","float"),o.fragment.uniforms.add("perScreenPixelRatio","float"),o.fragment.code.add(a.glsl`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
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
}`),o}const r=Object.freeze({__proto__:null,build:o});e.LaserlinePathShader=r,e.build=o}));
