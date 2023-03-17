/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/compilerUtils","../../../../../../chunks/mat3f64","../../../../../../chunks/vec4f64","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces","../../shaderModules/Matrix3DrawUniform","../../shaderModules/Matrix3PassUniform"],(function(r,e,o,a,l,t,i,s,m,n){"use strict";function d(r,e){switch(e.normalType){case t.NormalAttributeType.Attribute:case t.NormalAttributeType.CompressedAttribute:r.include(t.NormalAttribute,e),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add([new m.Matrix3DrawUniform("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new n.Matrix3PassUniform("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(s.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case t.NormalAttributeType.Ground:r.include(i.VertexPosition,e),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(s.glsl`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s.glsl`normalize(vPositionWorldCameraRelative);`:s.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case t.NormalAttributeType.ScreenDerivative:r.vertex.code.add(s.glsl`void forwardNormal() {}`);break;default:o.neverReached(e.normalType);case t.NormalAttributeType.COUNT:}}let c=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).transformNormalViewFromGlobal=a.create(),e}return e._inheritsLoose(o,r),o}(i.VertexPositionPassParameters),u=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).transformNormalGlobalFromModel=a.create(),e.toMapSpace=l.create(),e}return e._inheritsLoose(o,r),o}(i.VertexPositionDrawParameters);r.VertexNormal=d,r.VertexNormalDrawParameters=u,r.VertexNormalPassParameters=c,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
