/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec2f64","./PositionAttribute.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/Float3PassUniform","../../shaderModules/Float4sPassUniform","../../shaderModules/FloatsPassUniform","../../shaderModules/interfaces","../../../lib/VertexAttribute","../../../materials/VisualVariablePassParameters"],(function(e,o,r,i,t,a,l,s,v,n,c){"use strict";const f=8;function u(e,o){e.attributes.add(n.VertexAttribute.FEATUREVALUE,"vec4");const r=e.vertex;r.code.add(v.glsl`bool isCapVertex() {
return featureValue.w == 1.0;
}`),r.uniforms.add(new t.Float2PassUniform("size",(e=>e.size))),o.vvSize?(r.uniforms.add(new a.Float3PassUniform("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new a.Float3PassUniform("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new a.Float3PassUniform("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new a.Float3PassUniform("vvSizeFactor",(e=>e.vvSizeFactor))),r.code.add(v.glsl`vec2 getSize() {
return size * clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):r.code.add(v.glsl`vec2 getSize(){
return size;
}`),o.vvOpacity?(r.constants.add("vvOpacityNumber","int",f),r.uniforms.add([new s.FloatsPassUniform("vvOpacityValues",(e=>e.vvOpacityValues),f),new s.FloatsPassUniform("vvOpacityOpacities",(e=>e.vvOpacityOpacities),f)]),r.code.add(v.glsl`vec4 applyOpacity(vec4 color) {
float value = featureValue.z;
if (value <= vvOpacityValues[0]) {
return vec4( color.xyz, vvOpacityOpacities[0]);
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
}
}
return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
}`)):r.code.add(v.glsl`vec4 applyOpacity(vec4 color){
return color;
}`),o.vvColor?(r.constants.add("vvColorNumber","int",c.vvColorNumber),r.uniforms.add([new s.FloatsPassUniform("vvColorValues",(e=>e.vvColorValues),c.vvColorNumber),new l.Float4sPassUniform("vvColorColors",(e=>e.vvColorColors),c.vvColorNumber)]),r.code.add(v.glsl`vec4 getColor() {
float value = featureValue.y;
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):r.code.add(v.glsl`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),e.include(i.PositionAttribute),e.attributes.add(n.VertexAttribute.PROFILERIGHT,"vec4"),e.attributes.add(n.VertexAttribute.PROFILEUP,"vec4"),e.attributes.add(n.VertexAttribute.PROFILEVERTEXANDNORMAL,"vec4"),r.code.add(v.glsl`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),r.code.add(v.glsl`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),r.code.add(v.glsl`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),r.code.add(v.glsl`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}let p=function(e){function i(){var o;return(o=e.apply(this,arguments)||this).size=r.fromValues(1,1),o}return o._inheritsLoose(i,e),i}(c.VisualVariablePassParameters);e.PathVertexPosition=u,e.PathVertexPositionPassParameters=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
