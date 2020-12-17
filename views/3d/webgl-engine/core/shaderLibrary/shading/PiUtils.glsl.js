/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(t,e){"use strict";t.PiUtils=function(t){t.vertex.code.add(e.glsl`
    const float PI = 3.141592653589793;
  `),t.fragment.code.add(e.glsl`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)},Object.defineProperty(t,"__esModule",{value:!0})}));
