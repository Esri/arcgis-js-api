/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3f64","../../../../chunks/vec3"],(function(e,t,c,n){"use strict";const o=c.create(),s=c.create();e.viewAngle=function(e,c,r){e.worldUpAtPosition(c,o),n.subtract(s,r,c);const i=n.length(s);return 0===i?0:t.acosClamped(n.dot(s,o)/i)},Object.defineProperty(e,"__esModule",{value:!0})}));
