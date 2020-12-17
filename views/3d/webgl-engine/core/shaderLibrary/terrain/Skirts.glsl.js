/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.Skirts=function(e){e.vertex.code.add(t.glsl`
    vec3 applySkirts(inout vec2 uv, vec3 vpos, vec3 vnormal, float skirtScale) {
      float skirtLength = 0.0;

      if (uv.x >= 2.0) {
        skirtLength = uv.y * skirtScale;
        // decode original uv-coordinates (see "encodeSkirtPos")
        vec2 x = vec2(uv.x) - vec2(3.5, 4.5);
        uv = clamp(vec2(1.5) - abs(x), vec2(0.0), vec2(1.0));
      }

      return vpos - vnormal * skirtLength;
    }
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
