/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/ray","../../../../chunks/sphere","./ray"],(function(e,t,r,n){"use strict";function o(e,t,o,s){const u=n.fromScreenAtEye(t,o,c);return r.intersectRay(e,u,s)}const c=t.create();e.intersectScreen=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
