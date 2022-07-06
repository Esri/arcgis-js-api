/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as e}from"../../../../../../core/compilerUtils.js";import{NormalAttributeType as r}from"../attributes/NormalAttribute.glsl.js";import{VertexNormal as o}from"../attributes/VertexNormal.glsl.js";import{VertexPosition as a}from"../attributes/VertexPosition.glsl.js";import{NormalsDoubleSidedMode as d}from"./Normals.glsl.js";import{glsl as i}from"../../shaderModules/interfaces.js";function t(t,s){const l=t.fragment;switch(s.doubleSidedMode){case d.None:l.code.add(i`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case d.View:t.include(a,s),l.code.add(i`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case d.WindingOrder:l.code.add(i`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:e(s.doubleSidedMode);case d.COUNT:}switch(s.normalType){case r.Attribute:case r.CompressedAttribute:t.include(o,s),l.code.add(i`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);break;case r.ScreenDerivative:t.extensions.add("GL_OES_standard_derivatives"),t.include(a,s),l.code.add(i`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);break;case r.Ground:s.spherical?(t.include(a,s),l.code.add(i`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)):l.code.add(i`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`),t.extensions.add("GL_OES_standard_derivatives"),l.code.add(i`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);break;default:e(s.normalType);case r.COUNT:}}export{t as ComputeShadingNormal};
