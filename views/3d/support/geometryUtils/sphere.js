/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/ray","../../../../chunks/sphere","./ray"],(function(e,t,r,n){"use strict";function c(e,t,c,o){const u=n.fromScreenAtEye(t,c,s);return r.intersectRay(e,u,o)}const s=t.create();e.intersectScreen=c,Object.defineProperty(e,"__esModule",{value:!0})}));
