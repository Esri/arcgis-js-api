/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/tslib.es6","../../../../../../chunks/vec3","../../../../../../chunks/vec3f64","../ShaderOutput","../util/DoublePrecision.glsl","../util/View.glsl","../../shaderModules/Float3DrawUniform","../../shaderModules/interfaces","../../shaderTechnique/ShaderTechniqueConfiguration","../../../lib/VertexAttribute","../../../../../webgl/doublePrecisionUtils"],(function(e,r,n,i,t,o,a,s,l,c,d,u,m){"use strict";let v=function(e){function n(){var r;return(r=e.apply(this,arguments)||this).instancedDoublePrecision=!1,r}return r._inheritsLoose(n,e),n}(d.ShaderTechniqueConfiguration);function b(e,r){r.instanced&&r.instancedDoublePrecision&&(e.attributes.add(u.VertexAttribute.MODELORIGINHI,"vec3"),e.attributes.add(u.VertexAttribute.MODELORIGINLO,"vec3"),e.attributes.add(u.VertexAttribute.MODEL,"mat3"),e.attributes.add(u.VertexAttribute.MODELNORMAL,"mat3"));const n=e.vertex;r.instancedDoublePrecision&&(n.include(a.DoublePrecision,r),n.uniforms.add(new l.Float3DrawUniform("viewOriginHi",((e,r)=>m.encodeDoubleHi(i.set(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),g)))),n.uniforms.add(new l.Float3DrawUniform("viewOriginLo",((e,r)=>m.encodeDoubleLo(i.set(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),g))))),n.code.add(c.glsl`
    vec3 calculateVPos() {
      ${r.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),n.code.add(c.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${r.instancedDoublePrecision?c.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(c.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),r.output===o.ShaderOutput.Normal&&(s.addViewNormal(n),n.code.add(c.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),r.hasVertexTangents&&n.code.add(c.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}n.__decorate([d.parameter()],v.prototype,"instancedDoublePrecision",void 0);const g=t.create();e.InstancedDoubleConfiguration=v,e.InstancedDoublePrecision=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
