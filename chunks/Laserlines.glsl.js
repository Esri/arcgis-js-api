/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/mathUtils","./vec2","./vec2f64","./vec3","./vec3f64","./vec4","./vec4f64","../geometry/support/lineSegment","../geometry/support/plane","./sphere","../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,t,n,a,l,o,r,s,c,d,f,g,h,p,m,u,P,w){"use strict";const x=i.deg2rad(6);function v(e){const i=new w.ShaderBuilder;i.extensions.add("GL_OES_standard_derivatives"),i.include(g.ScreenSpacePass),i.include(f.Laserline,e);const t=i.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(t.uniforms.add(new u.FloatPassUniform("maxPixelDistance",((i,t)=>e.heightManifoldEnabled?2*t.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*t.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin)))),t.code.add(P.glsl`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,i,t)=>a.transformMat4(e,i.heightManifoldTarget,t.camera.viewMatrix),i=(e,i)=>a.transformMat4(e,[0,0,0],i.camera.viewMatrix);t.uniforms.add([new m.Float4PassUniform("heightManifoldOrigin",((t,n)=>(e(U,t,n),i(V,n),a.subtract(V,V,U),a.normalize(F,V),F[3]=a.length(V),F))),new p.Float3PassUniform("globalOrigin",((e,t)=>i(U,t))),new u.FloatPassUniform("cosSphericalAngleThreshold",((e,i)=>1-Math.max(2,a.distance(i.camera.eye,e.heightManifoldTarget)*i.camera.perRenderPixelRatio)/a.length(e.heightManifoldTarget)))]),t.code.add(P.glsl`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else t.code.add(P.glsl`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(t.uniforms.add(new u.FloatPassUniform("maxPixelDistance",((e,i)=>2*i.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),t.code.add(P.glsl`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(t.uniforms.add(new u.FloatPassUniform("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),t.code.add(P.glsl`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.code.add(P.glsl`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),t.code.add(P.glsl`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){t.uniforms.add([new h.Float2PassUniform("angleCutoff",(e=>b(e))),new m.Float4PassUniform("heightPlane",((e,i)=>C(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,U),i.camera.viewMatrix)))]);const i=e.spherical?P.glsl`normalize(globalOrigin - pos)`:P.glsl`heightPlane.xyz`;t.code.add(P.glsl`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(t.uniforms.add([new h.Float2PassUniform("angleCutoff",(e=>b(e))),new m.Float4PassUniform("pointDistanceSphere",((e,i)=>D(e,i)))]),t.code.add(P.glsl`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(t.uniforms.add([new h.Float2PassUniform("angleCutoff",(e=>b(e))),new m.Float4PassUniform("lineVerticalPlane",((e,i)=>M(e,i))),new p.Float3PassUniform("lineVerticalStart",((e,i)=>S(e,i))),new p.Float3PassUniform("lineVerticalEnd",((e,i)=>L(e,i)))]),t.code.add(P.glsl`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(t.uniforms.add([new h.Float2PassUniform("angleCutoff",(e=>b(e))),new p.Float3PassUniform("intersectsLineStart",((e,i)=>a.transformMat4(U,e.lineStartWorld,i.camera.viewMatrix))),new p.Float3PassUniform("intersectsLineEnd",((e,i)=>a.transformMat4(U,e.lineEndWorld,i.camera.viewMatrix))),new p.Float3PassUniform("intersectsLineDirection",((e,i)=>(a.copy(F,e.intersectsLineSegment.vector),F[3]=0,a.normalize(U,o.transformMat4(F,F,i.camera.viewMatrix))))),new u.FloatPassUniform("intersectsLineRadius",(e=>e.intersectsLineRadius))]),t.code.add(P.glsl`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),t.code.add(P.glsl`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i}function b(e){return t.set(A,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-i.deg2rad(2))))}function D(e,i){return a.transformMat4(E,e.pointDistanceOrigin,i.camera.viewMatrix),E[3]=a.distance(e.pointDistanceOrigin,e.pointDistanceTarget),E}function M(e,i){const t=s.pointAt(e.lineVerticalPlaneSegment,.5,U),n=e.renderCoordsHelper.worldUpAtPosition(t,y),l=a.normalize(V,e.lineVerticalPlaneSegment.vector),o=a.cross(F,n,l);return a.normalize(o,o),C(e.lineVerticalPlaneSegment.origin,o,i.camera.viewMatrix)}function S(e,i){const t=a.copy(U,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(t,0),a.transformMat4(t,t,i.camera.viewMatrix)}function L(e,i){const t=a.add(U,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(t,0),a.transformMat4(t,t,i.camera.viewMatrix)}function C(e,i,t){return a.transformMat4(O,e,t),a.copy(F,i),F[3]=0,o.transformMat4(F,F,t),c.fromPositionAndNormal(O,F,z)}const A=n.create(),U=l.create(),F=r.create(),y=l.create(),V=l.create(),O=l.create(),z=c.create(),E=d.create(),I=Object.freeze(Object.defineProperty({__proto__:null,build:v,defaultAngleCutoff:x},Symbol.toStringTag,{value:"Module"}));e.LaserlinesShader=I,e.build=v,e.defaultAngleCutoff=x}));
