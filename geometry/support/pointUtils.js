/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){const n=e.x-t.x,s=e.y-t.y,a=e.hasZ&&t.hasZ?e.z-t.z:0;return Math.sqrt(n*n+s*s+a*a)}function n(e,t){const n=e.x-t.x,s=e.y-t.y,a=e.hasZ&&t.hasZ?e.z-t.z:0;return n*n+s*s+a*a}e.distance=t,e.squareDistance=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
