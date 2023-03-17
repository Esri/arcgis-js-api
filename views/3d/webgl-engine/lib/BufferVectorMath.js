/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";t.Vec3Compact=void 0,function(t){function n(t,n){const c=t[n],o=t[n+1],e=t[n+2];return Math.sqrt(c*c+o*o+e*e)}function c(t,n){const c=t[n],o=t[n+1],e=t[n+2],i=1/Math.sqrt(c*c+o*o+e*e);t[n]*=i,t[n+1]*=i,t[n+2]*=i}function o(t,n,c){t[n]*=c,t[n+1]*=c,t[n+2]*=c}function e(t,n,c,o,e,i=n){(e=e||t)[i]=t[n]+c[o],e[i+1]=t[n+1]+c[o+1],e[i+2]=t[n+2]+c[o+2]}function i(t,n,c,o,e,i=n){(e=e||t)[i]=t[n]-c[o],e[i+1]=t[n+1]-c[o+1],e[i+2]=t[n+2]-c[o+2]}t.length=n,t.normalize=c,t.scale=o,t.add=e,t.subtract=i}(t.Vec3Compact||(t.Vec3Compact={})),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
