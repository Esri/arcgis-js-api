/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";t.Vec3Compact=void 0,function(t){function n(t,n){const c=t[n],e=t[n+1],o=t[n+2];return Math.sqrt(c*c+e*e+o*o)}function c(t,n){const c=t[n],e=t[n+1],o=t[n+2],i=1/Math.sqrt(c*c+e*e+o*o);t[n]*=i,t[n+1]*=i,t[n+2]*=i}function e(t,n,c){t[n]*=c,t[n+1]*=c,t[n+2]*=c}function o(t,n,c,e,o,i=n){(o=o||t)[i]=t[n]+c[e],o[i+1]=t[n+1]+c[e+1],o[i+2]=t[n+2]+c[e+2]}function i(t,n,c,e,o,i=n){(o=o||t)[i]=t[n]-c[e],o[i+1]=t[n+1]-c[e+1],o[i+2]=t[n+2]-c[e+2]}t.length=n,t.normalize=c,t.scale=e,t.add=o,t.subtract=i}(t.Vec3Compact||(t.Vec3Compact={})),Object.defineProperty(t,"__esModule",{value:!0})}));
