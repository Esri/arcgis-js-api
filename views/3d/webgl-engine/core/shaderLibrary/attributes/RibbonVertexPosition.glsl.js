/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,i){"use strict";function r(e,r){e.vertex.uniforms.add("intrinsicWidth","float"),r.vvSize?(e.attributes.add(i.VertexAttribute.SIZEFEATUREATTRIBUTE,"float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(t.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(i.VertexAttribute.SIZE,"float"),e.vertex.code.add(t.glsl`float getSize(){
return intrinsicWidth * size;
}`)),r.vvOpacity?(e.attributes.add(i.VertexAttribute.OPACITYFEATUREATTRIBUTE,"float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(t.glsl`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
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
}`)):e.vertex.code.add(t.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`),r.vvColor?(e.attributes.add(i.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(t.glsl`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
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
}`)):(e.attributes.add(i.VertexAttribute.COLOR,"vec4"),e.vertex.code.add(t.glsl`vec4 getColor(){
return applyOpacity(color);
}`))}e.RibbonVertexPosition=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
