/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../util/DecodeNormal.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r,i,o){"use strict";function a(a,d){switch(d.normalType){case e.NormalAttributeType.CompressedAttribute:a.include(r.DecodeNormal),a.attributes.add(o.VertexAttribute.NORMALCOMPRESSED,"vec2"),a.vertex.code.add(i.glsl`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case e.NormalAttributeType.Attribute:a.attributes.add(o.VertexAttribute.NORMAL,"vec3"),a.vertex.code.add(i.glsl`vec3 normalModel() {
return normal;
}`);break;case e.NormalAttributeType.ScreenDerivative:a.extensions.add("GL_OES_standard_derivatives"),a.fragment.code.add(i.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:t.neverReached(d.normalType);case e.NormalAttributeType.COUNT:case e.NormalAttributeType.Ground:}}var d;e.NormalAttributeType=void 0,(d=e.NormalAttributeType||(e.NormalAttributeType={}))[d.Attribute=0]="Attribute",d[d.CompressedAttribute=1]="CompressedAttribute",d[d.Ground=2]="Ground",d[d.ScreenDerivative=3]="ScreenDerivative",d[d.COUNT=4]="COUNT",e.NormalAttribute=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
