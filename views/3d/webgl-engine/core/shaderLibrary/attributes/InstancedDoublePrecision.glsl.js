/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as e}from"../../../../../../chunks/vec3.js";import{c as r}from"../../../../../../chunks/vec3f64.js";import{ShaderOutput as i}from"../ShaderOutputOptions.js";import{DoublePrecision as o}from"../util/DoublePrecision.glsl.js";import{Float3DrawUniform as n}from"../../shaderModules/Float3DrawUniform.js";import{glsl as a}from"../../shaderModules/interfaces.js";import{Matrix4PassUniform as t}from"../../shaderModules/Matrix4PassUniform.js";import{VertexAttribute as s}from"../../../lib/VertexAttribute.js";import{encodeDoubleHi as c,encodeDoubleLo as d}from"../../../../../webgl/doublePrecisionUtils.js";function m(r,m){m.instanced&&m.instancedDoublePrecision&&(r.attributes.add(s.MODELORIGINHI,"vec3"),r.attributes.add(s.MODELORIGINLO,"vec3"),r.attributes.add(s.MODEL,"mat3"),r.attributes.add(s.MODELNORMAL,"mat3"));const u=r.vertex;m.instancedDoublePrecision&&(u.include(o,m),u.uniforms.add(new n("viewOriginHi",((r,i)=>c(e(l,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),l)))),u.uniforms.add(new n("viewOriginLo",((r,i)=>d(e(l,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),l))))),u.code.add(a`
    vec3 calculateVPos() {
      ${m.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),u.code.add(a`
    vec3 subtractOrigin(vec3 _pos) {
      ${m.instancedDoublePrecision?a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),u.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      ${m.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),m.output===i.Normal&&(u.uniforms.add(new t("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix))),u.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      ${m.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),m.hasVertexTangents&&u.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${m.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const l=r();export{m as InstancedDoublePrecision};
