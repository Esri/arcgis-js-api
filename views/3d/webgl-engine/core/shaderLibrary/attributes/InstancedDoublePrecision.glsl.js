/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec3f64","../ShaderOutputOptions","../util/DoublePrecision.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute","../../../../../webgl/doublePrecisionUtils"],(function(e,t,i,r,n,o,l){"use strict";function a(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(o.VertexAttribute.MODELORIGINHI,"vec3"),e.attributes.add(o.VertexAttribute.MODELORIGINLO,"vec3"),e.attributes.add(o.VertexAttribute.MODEL,"mat3"),e.attributes.add(o.VertexAttribute.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(r.DoublePrecision,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const l=[n.glsl`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.glsl``];e.vertex.code.add(l[0]),e.vertex.code.add(l[1]),e.vertex.code.add(l[2]),t.output===i.ShaderOutput.Normal&&e.vertex.code.add(l[3]),e.vertex.code.add(l[4])}let c=function(){};function s(e,t){l.encodeDoubleArraySplit(t,d,u,3),e.setUniform3fv("viewOriginHi",d),e.setUniform3fv("viewOriginLo",u)}const d=t.create(),u=t.create();e.InstancedDoublePrecision=a,e.InstancedDoublePrecisionUniforms=c,e.bindCustomOrigin=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
