/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/ray","../../../../chunks/sphere","./ray"],(function(e,t,r,n){"use strict";function c(e,t,c,s){const i=n.fromScreenAtEye(t,c,o);return r.intersectRay(e,i,s)}const o=t.create();e.intersectScreen=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
