/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";e.Gamma=function(e){e.fragment.code.add(o.glsl`
    const float GAMMA = 2.2;
    const float INV_GAMMA = 0.4545454545;

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
