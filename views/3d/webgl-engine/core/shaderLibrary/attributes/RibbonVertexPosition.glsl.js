/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Float3PassUniform as e}from"../../shaderModules/Float3PassUniform.js";import{Float4sPassUniform as i}from"../../shaderModules/Float4sPassUniform.js";import{FloatPassUniform as t}from"../../shaderModules/FloatPassUniform.js";import{FloatsPassUniform as o}from"../../shaderModules/FloatsPassUniform.js";import{glsl as a}from"../../shaderModules/interfaces.js";import{VertexAttribute as r}from"../../../lib/VertexAttribute.js";import{vvColorNumber as v}from"../../../materials/VisualVariablePassParameters.js";const l=8;function s(s,u){const c=s.vertex;c.uniforms.add(new t("intrinsicWidth",(e=>e.width))),u.vvSize?(s.attributes.add(r.SIZEFEATUREATTRIBUTE,"float"),c.uniforms.add(new e("vvSizeMinSize",(e=>e.vvSizeMinSize))),c.uniforms.add(new e("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),c.uniforms.add(new e("vvSizeOffset",(e=>e.vvSizeOffset))),c.uniforms.add(new e("vvSizeFactor",(e=>e.vvSizeFactor))),c.code.add(a`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(s.attributes.add(r.SIZE,"float"),c.code.add(a`float getSize(){
return intrinsicWidth * size;
}`)),u.vvOpacity?(s.attributes.add(r.OPACITYFEATUREATTRIBUTE,"float"),c.constants.add("vvOpacityNumber","int",8),c.uniforms.add([new o("vvOpacityValues",(e=>e.vvOpacityValues),l),new o("vvOpacityOpacities",(e=>e.vvOpacityOpacities),l)]),c.code.add(a`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):c.code.add(a`vec4 applyOpacity( vec4 color ){
return color;
}`),u.vvColor?(s.attributes.add(r.COLORFEATUREATTRIBUTE,"float"),c.constants.add("vvColorNumber","int",v),c.uniforms.add(new o("vvColorValues",(e=>e.vvColorValues),v)),c.uniforms.add(new i("vvColorColors",(e=>e.vvColorColors),v)),c.code.add(a`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(s.attributes.add(r.COLOR,"vec4"),c.code.add(a`vec4 getColor(){
return applyOpacity(color);
}`))}export{s as RibbonVertexPosition};
