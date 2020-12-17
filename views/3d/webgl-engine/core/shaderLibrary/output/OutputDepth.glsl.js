/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../util/RgbaFloatEncoding.glsl"],(function(t,e,a){"use strict";t.OutputDepth=function(t,l){t.fragment.include(a.RgbaFloatEncoding),3===l.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(e.glsl`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===l.output&&t.fragment.code.add(e.glsl`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)},Object.defineProperty(t,"__esModule",{value:!0})}));
