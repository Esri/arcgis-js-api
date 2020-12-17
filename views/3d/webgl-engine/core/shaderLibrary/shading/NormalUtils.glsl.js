/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,n){"use strict";e.NormalUtils=function(e,t){1===t.viewingMode?e.vertex.code.add(n.glsl`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return normalize(pos + origin);
      }
    `):e.vertex.code.add(n.glsl`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
      }
    `),1===t.viewingMode?e.vertex.code.add(n.glsl`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `):e.vertex.code.add(n.glsl`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = vec3(1.0, 0.0, 0.0);
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
