/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,d){"use strict";e.DecodeNormal=function(e){const o=d.glsl`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(o),e.vertex.code.add(o)},Object.defineProperty(e,"__esModule",{value:!0})}));
