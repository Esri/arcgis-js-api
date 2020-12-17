/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../util/RgbaFloatEncoding.glsl"],(function(e,a,r){"use strict";e.ReadLinearDepth=function(e){e.fragment.include(r.RgbaFloatEncoding),e.fragment.code.add(a.glsl`
    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return -(rgba2float(texture2D(depthTex, uv)) * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
