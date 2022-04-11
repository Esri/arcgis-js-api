/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3","../../../../chunks/vec3f64"],(function(e,t,o,c){"use strict";function n(e,c,n){e.worldUpAtPosition(c,s),o.subtract(r,n,c);const i=o.length(r);return 0===i?0:t.acosClamped(o.dot(r,s)/i)}const s=c.create(),r=c.create();e.viewAngle=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
