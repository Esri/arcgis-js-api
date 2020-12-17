/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(i,n){"use strict";i.EvaluateAmbientLighting=function(i,e){const t=i.fragment,a=void 0!==e.lightingSphericalHarmonicsOrder?e.lightingSphericalHarmonicsOrder:2;0===a?(t.uniforms.add("lightingAmbientSH0","vec3"),t.code.add(n.glsl`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(t.uniforms.add("lightingAmbientSH_R","vec4"),t.uniforms.add("lightingAmbientSH_G","vec4"),t.uniforms.add("lightingAmbientSH_B","vec4"),t.code.add(n.glsl`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===a&&(t.uniforms.add("lightingAmbientSH0","vec3"),t.uniforms.add("lightingAmbientSH_R1","vec4"),t.uniforms.add("lightingAmbientSH_G1","vec4"),t.uniforms.add("lightingAmbientSH_B1","vec4"),t.uniforms.add("lightingAmbientSH_R2","vec4"),t.uniforms.add("lightingAmbientSH_G2","vec4"),t.uniforms.add("lightingAmbientSH_B2","vec4"),t.code.add(n.glsl`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==e.pbrMode&&2!==e.pbrMode||t.code.add(n.glsl`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))},Object.defineProperty(i,"__esModule",{value:!0})}));
