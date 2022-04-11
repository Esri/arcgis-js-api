/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat3f64","../../../../../../chunks/mat4f64","../../../../../../chunks/vec3f64","./PositionAttribute.glsl","../util/DoublePrecision.glsl","../../shaderModules/interfaces"],(function(r,o,e,t,i,a,m){"use strict";function n(r,o){r.include(i.PositionAttribute),r.vertex.include(a.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),r.vertex.uniforms.add("transformWorldFromModelRS","mat3"),r.vertex.uniforms.add("transformWorldFromModelTH","vec3"),r.vertex.uniforms.add("transformWorldFromModelTL","vec3"),r.vertex.uniforms.add("transformWorldFromViewTH","vec3"),r.vertex.uniforms.add("transformWorldFromViewTL","vec3"),r.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),r.vertex.uniforms.add("transformProjFromView","mat4"),r.vertex.code.add(m.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.uniforms.add("transformWorldFromViewTL","vec3"),r.fragment.code.add(m.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let s=function(){this.transformWorldFromModelRS=o.create(),this.transformWorldFromModelTH=t.create(),this.transformWorldFromModelTL=t.create()},d=function(){this.transformWorldFromViewTH=t.create(),this.transformWorldFromViewTL=t.create(),this.transformViewFromCameraRelativeRS=o.create(),this.transformProjFromView=e.create()};function l(r,o){r.setUniformMatrix3fv("transformWorldFromModelRS",o.transformWorldFromModelRS),r.setUniform3fv("transformWorldFromModelTH",o.transformWorldFromModelTH),r.setUniform3fv("transformWorldFromModelTL",o.transformWorldFromModelTL)}function f(r,o){r.setUniform3fv("transformWorldFromViewTH",o.transformWorldFromViewTH),r.setUniform3fv("transformWorldFromViewTL",o.transformWorldFromViewTL),r.setUniformMatrix4fv("transformProjFromView",o.transformProjFromView),r.setUniformMatrix3fv("transformViewFromCameraRelativeRS",o.transformViewFromCameraRelativeRS)}r.VertexPosition=n,r.VertexPositionModelTransform=s,r.VertexPositionViewProjectionTransform=d,r.bindModelTransform=l,r.bindViewProjTransform=f,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
