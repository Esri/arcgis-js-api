/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/mat3f64","../../../../../../chunks/vec4f64","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix3DrawUniform","../../shaderModules/Matrix3PassUniform"],(function(r,e,o,a,l,t,i,s,m){"use strict";function n(r,e){e.normalType===l.NormalAttributeType.Attribute||e.normalType===l.NormalAttributeType.CompressedAttribute?(r.include(l.NormalAttribute,e),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add([new s.Matrix3DrawUniform("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new m.Matrix3PassUniform("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(i.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===l.NormalAttributeType.Ground?(r.include(t.VertexPosition,e),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(i.glsl`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?i.glsl`normalize(vPositionWorldCameraRelative);`:i.glsl`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(i.glsl`void forwardNormal() {}`)}let d=function(r){function a(){var e;return(e=r.apply(this,arguments)||this).transformNormalViewFromGlobal=o.create(),e}return e._inheritsLoose(a,r),a}(t.VertexPositionPassParameters),u=function(r){function l(){var e;return(e=r.apply(this,arguments)||this).transformNormalGlobalFromModel=o.create(),e.toMapSpace=a.create(),e}return e._inheritsLoose(l,r),l}(t.VertexPositionDrawParameters);r.VertexNormal=n,r.VertexNormalDrawParameters=u,r.VertexNormalPassParameters=d,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
