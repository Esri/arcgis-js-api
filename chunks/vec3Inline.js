/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(n,t,c){n[0]=t[0]+c[0],n[1]=t[1]+c[1],n[2]=t[2]+c[2]}function c(n,t,c){n[0]=t[0]-c[0],n[1]=t[1]-c[1],n[2]=t[2]-c[2]}function e(n,t,c){n[0]=t[0]*c,n[1]=t[1]*c,n[2]=t[2]*c}function o(n,t){let c=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];c>0&&(c=1/Math.sqrt(c),n[0]=t[0]*c,n[1]=t[1]*c,n[2]=t[2]*c)}function s(n,t,c){n[0]=t[1]*c[2]-t[2]*c[1],n[1]=t[2]*c[0]-t[0]*c[2],n[2]=t[0]*c[1]-t[1]*c[0]}const i=Object.freeze({__proto__:null,add:t,subtract:c,scale:e,normalize:o,cross:s});n.add=t,n.cross=s,n.normalize=o,n.scale=e,n.subtract=c,n.vec3Inline=i}));
