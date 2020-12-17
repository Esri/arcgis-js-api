/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(i,t){"use strict";i.EvaluateMainLighting=function(i){const n=i.fragment;n.uniforms.add("lightingMainDirection","vec3"),n.uniforms.add("lightingMainIntensity","vec3"),n.uniforms.add("lightingFixedFactor","float"),n.code.add(t.glsl`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)},Object.defineProperty(i,"__esModule",{value:!0})}));
