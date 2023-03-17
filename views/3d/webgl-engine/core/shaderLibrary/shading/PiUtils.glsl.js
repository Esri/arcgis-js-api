/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(t,o){"use strict";function e(t){t.vertex.code.add(o.glsl`const float PI = 3.141592653589793;`),t.fragment.code.add(o.glsl`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}t.PiUtils=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
