/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat3f64","../../../../../../chunks/mat4f64","../../../../../../chunks/vec3f64","./PositionAttribute.glsl","../util/DoublePrecision.glsl","../../shaderModules/interfaces"],(function(r,o,e,i,t,a,m){"use strict";function n(r,o){r.include(t.PositionAttribute),r.vertex.include(a.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),r.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),r.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),r.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),r.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),r.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),r.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),r.vertex.uniforms.add("uTransform_ProjFromView","mat4"),r.vertex.code.add(m.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),r.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),r.fragment.code.add(m.glsl`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}!function(r){let t=function(){this.worldFromModel_RS=o.create(),this.worldFromModel_TH=i.create(),this.worldFromModel_TL=i.create()};r.ModelTransform=t;let a=function(){this.worldFromView_TH=i.create(),this.worldFromView_TL=i.create(),this.viewFromCameraRelative_RS=o.create(),this.projFromView=e.create()};function m(r,o){r.setUniformMatrix3fv("uTransform_WorldFromModel_RS",o.worldFromModel_RS),r.setUniform3fv("uTransform_WorldFromModel_TH",o.worldFromModel_TH),r.setUniform3fv("uTransform_WorldFromModel_TL",o.worldFromModel_TL)}function n(r,o){r.setUniform3fv("uTransform_WorldFromView_TH",o.worldFromView_TH),r.setUniform3fv("uTransform_WorldFromView_TL",o.worldFromView_TL),r.setUniformMatrix4fv("uTransform_ProjFromView",o.projFromView),r.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",o.viewFromCameraRelative_RS)}r.ViewProjectionTransform=a,r.bindModelTransform=m,r.bindViewProjTransform=n}(n||(n={})),r.VertexPosition=n,Object.defineProperty(r,"__esModule",{value:!0})}));
