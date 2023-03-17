/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/Float4sPassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/FloatsPassUniform","../../shaderModules/interfaces","../../../lib/VertexAttribute","../../../materials/VisualVariablePassParameters"],(function(e,t,i,o,a,r,v,l){"use strict";const s=8;function u(e,u){const n=e.vertex;n.uniforms.add(new o.FloatPassUniform("intrinsicWidth",(e=>e.width))),u.vvSize?(e.attributes.add(v.VertexAttribute.SIZEFEATUREATTRIBUTE,"float"),n.uniforms.add(new t.Float3PassUniform("vvSizeMinSize",(e=>e.vvSizeMinSize))),n.uniforms.add(new t.Float3PassUniform("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),n.uniforms.add(new t.Float3PassUniform("vvSizeOffset",(e=>e.vvSizeOffset))),n.uniforms.add(new t.Float3PassUniform("vvSizeFactor",(e=>e.vvSizeFactor))),n.code.add(r.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(v.VertexAttribute.SIZE,"float"),n.code.add(r.glsl`float getSize(){
return intrinsicWidth * size;
}`)),u.vvOpacity?(e.attributes.add(v.VertexAttribute.OPACITYFEATUREATTRIBUTE,"float"),n.constants.add("vvOpacityNumber","int",8),n.uniforms.add([new a.FloatsPassUniform("vvOpacityValues",(e=>e.vvOpacityValues),s),new a.FloatsPassUniform("vvOpacityOpacities",(e=>e.vvOpacityOpacities),s)]),n.code.add(r.glsl`float interpolateOpacity( float value ){
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
}`)):n.code.add(r.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`),u.vvColor?(e.attributes.add(v.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),n.constants.add("vvColorNumber","int",l.vvColorNumber),n.uniforms.add(new a.FloatsPassUniform("vvColorValues",(e=>e.vvColorValues),l.vvColorNumber)),n.uniforms.add(new i.Float4sPassUniform("vvColorColors",(e=>e.vvColorColors),l.vvColorNumber)),n.code.add(r.glsl`vec4 interpolateColor( float value ) {
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
}`)):(e.attributes.add(v.VertexAttribute.COLOR,"vec4"),n.code.add(r.glsl`vec4 getColor(){
return applyOpacity(color);
}`))}e.RibbonVertexPosition=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
