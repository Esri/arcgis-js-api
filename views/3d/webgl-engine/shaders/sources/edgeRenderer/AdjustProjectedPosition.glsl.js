/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../core/shaderLibrary/util/IsNaN.glsl"],(function(e,o,t,r){"use strict";e.AdjustProjectedPosition=function(e,a){e.vertex.include(r.IsNaN),e.include(t.VertexPosition,a);const s=e.vertex;s.uniforms.add("uDepthBias","vec2"),s.uniforms.add("uViewportDimInv","vec2"),a.legacy?(s.uniforms.add("uView","mat4"),s.uniforms.add("uProj","mat4")):s.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),a.legacy?s.code.add(o.glsl`
      vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
        float offsetXY = uDepthBias.x;
        float offsetZ  = uDepthBias.y;

        // screen space pixel offset
        // we multiply by two to account for the fact that NDC go from -1 to 1
        // we multiply by projPos.w to compensate for the perspective division that happens later
        // normalizing over xyz means that the xy influence is reduced the more the normal is pointing
        // towards the camera
        vec4 projNormal = uProj * uView * vec4(globalNormal, 0.0);

        return offsetXY * projPos.w * 2.0 * uViewportDimInv * normalize(projNormal.xyz).xy;
      }
    `):s.code.add(o.glsl`
      vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
        float offsetXY = uDepthBias.x;
        float offsetZ  = uDepthBias.y;

        // screen space pixel offset
        // we multiply by two to account for the fact that NDC go from -1 to 1
        // we multiply by projPos.w to compensate for the perspective division that happens later
        // normalizing over xyz means that the xy influence is reduced the more the normal is pointing
        // towards the camera
        vec4 projNormal = uTransform_ProjFromView * vec4(uTransformNormal_ViewFromGlobal * globalNormal, 0.0);

        return offsetXY * projPos.w * 2.0 * uViewportDimInv * normalize(projNormal.xyz).xy;
      }
    `),s.code.add(o.glsl`
    // A z-offset, using a depth based heuristic.
    float _calculateProjectedBiasZ(vec4 projPos) {
      float offsetZ = uDepthBias.y;
      return sqrt(projPos.z) * offsetZ;
    }

    vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
      vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);

      // we currently have to do this check because some geometries come with 0 length edge normals.
      // see https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/12890
      if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
        projPos.xy += offsetXY;
      }

      projPos.z += _calculateProjectedBiasZ(projPos);

      return projPos;
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
