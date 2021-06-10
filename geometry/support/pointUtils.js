/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){const n=e.x-t.x,s=e.y-t.y,r=e.hasZ&&t.hasZ?e.z-t.z:0;return Math.sqrt(n*n+s*s+r*r)}function n(e,t){const n=e.x-t.x,s=e.y-t.y,r=e.hasZ&&t.hasZ?e.z-t.z:0;return n*n+s*s+r*r}e.distance=t,e.squareDistance=n,Object.defineProperty(e,"__esModule",{value:!0})}));
