/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3","../../../../chunks/vec3f64"],(function(e,t,c,n){"use strict";function o(e,n,o){e.worldUpAtPosition(n,s),c.subtract(r,o,n);const i=c.length(r);return 0===i?0:t.acosClamped(c.dot(r,s)/i)}const s=n.create(),r=n.create();e.viewAngle=o,Object.defineProperty(e,"__esModule",{value:!0})}));
