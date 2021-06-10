/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3f64","../../../../chunks/vec3"],(function(e,t,c,n){"use strict";function o(e,c,o){e.worldUpAtPosition(c,s),n.subtract(r,o,c);const i=n.length(r);return 0===i?0:t.acosClamped(n.dot(r,s)/i)}const s=c.create(),r=c.create();e.viewAngle=o,Object.defineProperty(e,"__esModule",{value:!0})}));
