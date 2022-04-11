/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../util/DecodeNormal.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r,i){"use strict";function o(o,d){d.normalType===e.NormalAttributeType.Attribute&&(o.attributes.add(i.VertexAttribute.NORMAL,"vec3"),o.vertex.code.add(r.glsl`vec3 normalModel() {
return normal;
}`)),d.normalType===e.NormalAttributeType.CompressedAttribute&&(o.include(t.DecodeNormal),o.attributes.add(i.VertexAttribute.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(r.glsl`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===e.NormalAttributeType.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(r.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var d;e.NormalAttributeType=void 0,(d=e.NormalAttributeType||(e.NormalAttributeType={}))[d.Attribute=0]="Attribute",d[d.CompressedAttribute=1]="CompressedAttribute",d[d.Ground=2]="Ground",d[d.ScreenDerivative=3]="ScreenDerivative",d[d.COUNT=4]="COUNT",e.NormalAttribute=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
