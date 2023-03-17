/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function a(t,a,n){return 2*Math.atan(Math.sqrt(a*a+n*n)*Math.tan(.5*t)/a)}function n(t,a,n){return 2*Math.atan(Math.sqrt(a*a+n*n)*Math.tan(.5*t)/n)}function o(t,a,n){return 2*Math.atan(a*Math.tan(.5*t)/Math.sqrt(a*a+n*n))}function r(t,a,n){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(a*a+n*n))}t.fovd2fovx=o,t.fovd2fovy=r,t.fovx2fovd=a,t.fovy2fovd=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
