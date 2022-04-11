/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";t.Vec3Compact=void 0,function(t){function n(t,n){const e=t[n],o=t[n+1],c=t[n+2];return Math.sqrt(e*e+o*o+c*c)}function e(t,n){const e=t[n],o=t[n+1],c=t[n+2],i=1/Math.sqrt(e*e+o*o+c*c);t[n]*=i,t[n+1]*=i,t[n+2]*=i}function o(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e}function c(t,n,e,o,c,i=n){(c=c||t)[i]=t[n]+e[o],c[i+1]=t[n+1]+e[o+1],c[i+2]=t[n+2]+e[o+2]}function i(t,n,e,o,c,i=n){(c=c||t)[i]=t[n]-e[o],c[i+1]=t[n+1]-e[o+1],c[i+2]=t[n+2]-e[o+2]}t.length=n,t.normalize=e,t.scale=o,t.add=c,t.subtract=i}(t.Vec3Compact||(t.Vec3Compact={})),Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
