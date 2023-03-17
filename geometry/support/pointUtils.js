/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e){const n=t.x-e.x,s=t.y-e.y,r=t.hasZ&&e.hasZ?t.z-e.z:0;return Math.sqrt(n*n+s*s+r*r)}function n(t,e){const n=t.x-e.x,s=t.y-e.y,r=t.hasZ&&e.hasZ?t.z-e.z:0;return n*n+s*s+r*r}t.distance=e,t.squareDistance=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
