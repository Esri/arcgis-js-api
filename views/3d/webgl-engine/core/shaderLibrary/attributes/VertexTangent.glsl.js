/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(n,e){"use strict";n.VertexTangent=function(n,t){n.varyings.add("tbnTangent","vec3"),n.varyings.add("tbnBiTangent","vec3"),1===t.viewingMode?n.vertex.code.add(e.glsl`
      void forwardVertexTangent(vec3 n) {
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
        tbnBiTangent = normalize(cross(n, tbnTangent));
      }
    `):n.vertex.code.add(e.glsl`
      void forwardVertexTangent(vec3 n) {
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(n, tbnTangent));
      }
    `),n.fragment.code.add(e.glsl`
      mat3 getTBNMatrix(vec3 n) {
        return mat3(tbnTangent, tbnBiTangent, n);
      }
    `)},Object.defineProperty(n,"__esModule",{value:!0})}));
