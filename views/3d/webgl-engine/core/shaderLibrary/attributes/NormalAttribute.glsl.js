/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DecodeNormal as e}from"../util/DecodeNormal.glsl.js";import{glsl as r}from"../../shaderModules/interfaces.js";import{VertexAttribute as t}from"../../../lib/VertexAttribute.js";function o(o,d){d.normalType===i.Attribute&&(o.attributes.add(t.NORMAL,"vec3"),o.vertex.code.add(r`vec3 normalModel() {
return normal;
}`)),d.normalType===i.CompressedAttribute&&(o.include(e),o.attributes.add(t.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(r`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===i.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var i;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(i||(i={}));export{o as NormalAttribute,i as NormalAttributeType};
