/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";var n;(n=t.Vec3Compact||(t.Vec3Compact={})).length=function(t,n){const e=t[n],c=t[n+1],o=t[n+2];return Math.sqrt(e*e+c*c+o*o)},n.normalize=function(t,n){const e=t[n],c=t[n+1],o=t[n+2],r=1/Math.sqrt(e*e+c*c+o*o);t[n]*=r,t[n+1]*=r,t[n+2]*=r},n.scale=function(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e},n.add=function(t,n,e,c,o,r=n){(o=o||t)[r]=t[n]+e[c],o[r+1]=t[n+1]+e[c+1],o[r+2]=t[n+2]+e[c+2]},n.subtract=function(t,n,e,c,o,r=n){(o=o||t)[r]=t[n]-e[c],o[r+1]=t[n+1]-e[c+1],o[r+2]=t[n+2]-e[c+2]},Object.defineProperty(t,"__esModule",{value:!0})}));
