/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,o){"use strict";e.CameraSpace=function(e){e.fragment.uniforms.add("projInfo","vec4"),e.fragment.uniforms.add("zScale","vec2"),e.fragment.code.add(o.glsl`
    vec3 reconstructPosition(vec2 fragCoord, float depth) {
      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
