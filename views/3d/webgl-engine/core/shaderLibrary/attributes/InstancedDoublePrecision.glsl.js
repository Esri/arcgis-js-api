/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec3f64","../../shaderModules/interfaces","../../../lib/doublePrecisionUtils","../util/DoublePrecision.glsl"],(function(e,i,n,r,o){"use strict";function t(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),i.instancedDoublePrecision&&(e.vertex.include(o.DoublePrecision,i),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n.glsl`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?n.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,i.vertexTangets?n.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.glsl``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===i.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=function(){},e.bindCustomOrigin=function(e,i){r.encodeDoubleArraySplit(i,l,a,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",a)}}(t||(t={}));const l=i.create(),a=i.create();e.InstancedDoublePrecision=t,Object.defineProperty(e,"__esModule",{value:!0})}));
