/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3","../../../../chunks/vec3f64"],(function(e,t,c,n){"use strict";function o(e,n,o){e.worldUpAtPosition(n,r),c.subtract(s,o,n);const i=c.length(s);return 0===i?0:t.acosClamped(c.dot(s,r)/i)}const r=n.create(),s=n.create();e.viewAngle=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
