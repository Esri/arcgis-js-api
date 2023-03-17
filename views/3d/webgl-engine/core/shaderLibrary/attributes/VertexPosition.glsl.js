/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/mat3f64","../../../../../../chunks/mat4f64","../../../../../../chunks/vec3f32","../../../../../../chunks/vec3f64","./PositionAttribute.glsl","../util/DoublePrecision.glsl","../../shaderModules/Float3DrawUniform","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix3DrawUniform","../../shaderModules/Matrix3PassUniform","../../shaderModules/Matrix4PassUniform"],(function(r,o,e,a,t,i,s,n,l,m,d,f,v,c){"use strict";function F(r,o){r.include(s.PositionAttribute);const e=r.vertex;e.include(n.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new m.Float3PassUniform("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new m.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new v.Matrix3PassUniform("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new c.Matrix4PassUniform("transformProjFromView",(r=>r.transformProjFromView)),new f.Matrix3DrawUniform("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new l.Float3DrawUniform("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new l.Float3DrawUniform("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(d.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(d.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?d.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new m.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(d.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let P=function(r){function t(){var o;return(o=r.apply(this,arguments)||this).transformWorldFromViewTH=i.create(),o.transformWorldFromViewTL=i.create(),o.transformViewFromCameraRelativeRS=e.create(),o.transformProjFromView=a.create(),o}return o._inheritsLoose(t,r),t}(d.NoParameters),w=function(r){function a(){var o;return(o=r.apply(this,arguments)||this).transformWorldFromModelRS=e.create(),o.transformWorldFromModelTH=t.create(),o.transformWorldFromModelTL=t.create(),o}return o._inheritsLoose(a,r),a}(d.NoParameters);r.VertexPosition=F,r.VertexPositionDrawParameters=w,r.VertexPositionPassParameters=P,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
