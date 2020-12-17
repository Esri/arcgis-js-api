/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.distance=function(e,t){const n=e.x-t.x,s=e.y-t.y,r=e.hasZ&&t.hasZ?e.z-t.z:0;return Math.sqrt(n*n+s*s+r*r)},e.squareDistance=function(e,t){const n=e.x-t.x,s=e.y-t.y,r=e.hasZ&&t.hasZ?e.z-t.z:0;return n*n+s*s+r*r},Object.defineProperty(e,"__esModule",{value:!0})}));
