/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../../../../../ViewingMode","../attributes/NormalAttribute.glsl","../attributes/VertexNormal.glsl","../attributes/VertexPosition.glsl","./Normals.glsl","../../shaderModules/interfaces"],(function(e,o,r,d,a,i,l,t){"use strict";function n(e,n){const s=e.fragment;switch(n.doubleSidedMode){case l.NormalsDoubleSidedMode.None:s.code.add(t.glsl`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);break;case l.NormalsDoubleSidedMode.View:e.include(i.VertexPosition,n),s.code.add(t.glsl`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);break;case l.NormalsDoubleSidedMode.WindingOrder:s.code.add(t.glsl`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);break;default:o.neverReached(n.doubleSidedMode);case l.NormalsDoubleSidedMode.COUNT:}switch(n.normalType){case d.NormalAttributeType.Attribute:case d.NormalAttributeType.CompressedAttribute:e.include(a.VertexNormal,n),s.code.add(t.glsl`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);break;case d.NormalAttributeType.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.include(i.VertexPosition,n),s.code.add(t.glsl`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);break;case d.NormalAttributeType.Ground:n.viewingMode===r.ViewingMode.Global?(e.include(i.VertexPosition,n),s.code.add(t.glsl`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)):n.viewingMode===r.ViewingMode.Local&&s.code.add(t.glsl`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`),e.extensions.add("GL_OES_standard_derivatives"),s.code.add(t.glsl`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);break;default:o.neverReached(n.normalType);case d.NormalAttributeType.COUNT:}}e.ComputeShadingNormal=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
