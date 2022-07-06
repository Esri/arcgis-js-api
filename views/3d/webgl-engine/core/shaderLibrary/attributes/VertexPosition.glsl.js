/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as r}from"../../../../../../chunks/mat3f64.js";import{c as o}from"../../../../../../chunks/mat4f64.js";import{c as e}from"../../../../../../chunks/vec3f32.js";import{c as t}from"../../../../../../chunks/vec3f64.js";import{PositionAttribute as a}from"./PositionAttribute.glsl.js";import{DoublePrecision as s}from"../util/DoublePrecision.glsl.js";import{Float3DrawUniform as i}from"../../shaderModules/Float3DrawUniform.js";import{Float3PassUniform as m}from"../../shaderModules/Float3PassUniform.js";import{glsl as d,NoParameters as n}from"../../shaderModules/interfaces.js";import{Matrix3DrawUniform as l}from"../../shaderModules/Matrix3DrawUniform.js";import{Matrix3PassUniform as f}from"../../shaderModules/Matrix3PassUniform.js";import{Matrix4PassUniform as v}from"../../shaderModules/Matrix4PassUniform.js";function F(r,o){r.include(a);const e=r.vertex;e.include(s,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new m("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new m("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new f("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new v("transformProjFromView",(r=>r.transformProjFromView)),new l("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new i("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new i("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(d`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?d`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new m("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class c extends n{constructor(){super(...arguments),this.transformWorldFromViewTH=t(),this.transformWorldFromViewTL=t(),this.transformViewFromCameraRelativeRS=r(),this.transformProjFromView=o()}}class W extends n{constructor(){super(...arguments),this.transformWorldFromModelRS=r(),this.transformWorldFromModelTH=e(),this.transformWorldFromModelTL=e()}}export{F as VertexPosition,W as VertexPositionDrawParameters,c as VertexPositionPassParameters};
