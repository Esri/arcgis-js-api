/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e,n){t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2]}function n(t,e,n){t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2]}function o(t,e,n){t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n}function c(t,e){let n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];n>0&&(n=1/Math.sqrt(n),t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n)}function r(t,e,n){t[0]=e[1]*n[2]-e[2]*n[1],t[1]=e[2]*n[0]-e[0]*n[2],t[2]=e[0]*n[1]-e[1]*n[0]}const i=Object.freeze(Object.defineProperty({__proto__:null,add:e,cross:r,normalize:c,scale:o,subtract:n},Symbol.toStringTag,{value:"Module"}));t.add=e,t.cross=r,t.normalize=c,t.scale=o,t.subtract=n,t.vec3Inline=i}));
