/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(t,o){"use strict";t.FoamColor=function(t){t.fragment.code.add(o.glsl`
    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
    }
  `)},t.FoamIntensity=function(t){t.fragment.code.add(o.glsl`
    float normals2FoamIntensity(vec3 n, float waveStrength){
      float normalizationFactor =  max(0.015, waveStrength);
      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
    }
  `)},Object.defineProperty(t,"__esModule",{value:!0})}));
