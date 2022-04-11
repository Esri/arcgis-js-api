/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./PositionAttribute.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,o,i){"use strict";function r(e,r){e.attributes.add(i.VertexAttribute.FEATUREVALUE,"vec4"),e.vertex.code.add(o.glsl`bool isCapVertex() {
return featureValue.w == 1.0;
}`),e.vertex.uniforms.add("size","vec3"),r.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(o.glsl`vec2 getSize() {
return size.xy*clamp(vvSizeOffset + featureValue.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):e.vertex.code.add(o.glsl`vec2 getSize(){
return size.xy;
}`),r.vvOpacity?(e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(o.glsl`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
vec4 applyOpacity(vec4 color) {
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
}`)):e.vertex.code.add(o.glsl`vec4 applyOpacity(vec4 color){
return color;
}`),r.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(o.glsl`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 getColor() {
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
}`)):e.vertex.code.add(o.glsl`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),e.include(t.PositionAttribute),e.attributes.add(i.VertexAttribute.PROFILERIGHT,"vec4"),e.attributes.add(i.VertexAttribute.PROFILEUP,"vec4"),e.attributes.add(i.VertexAttribute.PROFILEVERTEXANDNORMAL,"vec4"),e.vertex.code.add(o.glsl`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),e.vertex.code.add(o.glsl`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),e.vertex.code.add(o.glsl`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
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
}`),e.vertex.code.add(o.glsl`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}function v(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors)),t.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",t.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",t.vvOpacityOpacities))}e.PathVertexPosition=r,e.setVVUniforms=v,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
