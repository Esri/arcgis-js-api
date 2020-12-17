/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces"],(function(e,o){"use strict";e.DiscardNonSilhouetteEdges=function(e,l){const r=e.vertex;l.silhouette?(r.code.add(o.glsl`
      bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
        float faceAVisible = dot(viewDir, normalA);
        float faceBVisible = dot(viewDir, normalB);
        return faceAVisible * faceBVisible < 0.0;
      }
    `),l.legacy?r.code.add(o.glsl`
        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
          vec3 viewNormalA = _modelToViewNormal(normalA);
          vec3 viewNormalB = _modelToViewNormal(normalB);
          vec3 viewDir = -viewPos;

          if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
            return false;
          }

          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return true;
        }
      `):r.code.add(o.glsl`
        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
          vec3 worldNormalA = _modelToWorldNormal(normalA);
          vec3 worldNormalB = _modelToWorldNormal(normalB);
          vec3 viewDir = -worldPos;

          if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
            return false;
          }

          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return true;
        }
      `)):r.code.add(o.glsl`
      bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
        return false;
      }
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
