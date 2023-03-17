/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(o,t){"use strict";function e(o){const e=257;o.code.add(t.glsl`
    float lineFactorAtPosition(float value) {
      float pos = value * ${t.glsl.float(e)};
      if(pos < 0.5 || pos > ${t.glsl.float(e-.5)}) {
        return 1.0;
      }

      pos = pos + 0.5;
      float modulo = mod(pos, 16.0);
      return modulo <= 2.0 ?  1.0 - abs(modulo - 1.0) : 0.0;
    }

    float lineFactorAtUV(vec2 uv) {
      return max(lineFactorAtPosition(uv.x), lineFactorAtPosition(uv.y));
    }

    float lineFactor(vec2 uv) {
      vec2 offset = fwidth(uv) * 0.25;
      return (lineFactorAtUV(vec2(uv.x + offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x + offset.x, uv.y - offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y - offset.y))) / 4.0;
    }

    vec3 gridColor(vec2 uv) {
      float line = lineFactor(uv) * 0.1 + 0.9;
      return vec3(1.0, 0.972, 0.918) * line;
    }`)}o.BackgroundGrid=e,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
