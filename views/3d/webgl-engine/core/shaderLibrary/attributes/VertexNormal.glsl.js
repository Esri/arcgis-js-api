/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as r}from"../../../../../../chunks/mat3f64.js";import{c as o}from"../../../../../../chunks/vec4f64.js";import{NormalAttributeType as a,NormalAttribute as l}from"./NormalAttribute.glsl.js";import{VertexPosition as e,VertexPositionPassParameters as m,VertexPositionDrawParameters as s}from"./VertexPosition.glsl.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{Matrix3DrawUniform as d}from"../../shaderModules/Matrix3DrawUniform.js";import{Matrix3PassUniform as i}from"../../shaderModules/Matrix3PassUniform.js";function n(r,o){if(o.normalType===a.Attribute||o.normalType===a.CompressedAttribute){r.include(l,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3");r.vertex.uniforms.add([new d("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new i("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(t`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)}else o.normalType===a.Ground?(r.include(e,o),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(t`
    void forwardNormal() {
      vNormalWorld = ${o.spherical?t`normalize(vPositionWorldCameraRelative);`:t`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(t`void forwardNormal() {}`)}class f extends m{constructor(){super(...arguments),this.transformNormalViewFromGlobal=r()}}class c extends s{constructor(){super(...arguments),this.transformNormalGlobalFromModel=r(),this.toMapSpace=o()}}export{n as VertexNormal,c as VertexNormalDrawParameters,f as VertexNormalPassParameters};
