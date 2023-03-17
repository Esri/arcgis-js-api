/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../attributes/NormalAttribute.glsl","../attributes/VertexNormal.glsl","../attributes/VertexPosition.glsl","./Normals.glsl","../../shaderModules/interfaces"],(function(e,r,o,d,a,l,i){"use strict";function t(e,t){const s=e.fragment;switch(t.doubleSidedMode){case l.NormalsDoubleSidedMode.None:s.code.add(i.glsl`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case l.NormalsDoubleSidedMode.View:e.include(a.VertexPosition,t),s.code.add(i.glsl`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case l.NormalsDoubleSidedMode.WindingOrder:s.code.add(i.glsl`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:r.neverReached(t.doubleSidedMode);case l.NormalsDoubleSidedMode.COUNT:}switch(t.normalType){case o.NormalAttributeType.Attribute:case o.NormalAttributeType.CompressedAttribute:e.include(d.VertexNormal,t),s.code.add(i.glsl`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);break;case o.NormalAttributeType.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.include(a.VertexPosition,t),s.code.add(i.glsl`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);break;case o.NormalAttributeType.Ground:t.spherical?(e.include(a.VertexPosition,t),s.code.add(i.glsl`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)):s.code.add(i.glsl`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`),e.extensions.add("GL_OES_standard_derivatives"),s.code.add(i.glsl`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);break;default:r.neverReached(t.normalType);case o.NormalAttributeType.COUNT:}}e.ComputeShadingNormal=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
