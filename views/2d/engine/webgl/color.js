/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./number"],(function(r,t){"use strict";const n=[0,0,0,0];function e(r,t){return Array.isArray(t)?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):(r[0]=t.r,r[1]=t.g,r[2]=t.b,r[3]=t.a),r}function u(r,t=0,n=!1){const e=r[t+3];return r[t+0]*=e,r[t+1]*=e,r[t+2]*=e,n||(r[t+3]*=255),r}r.copyAndPremultiply=function(r){return u(e([],r))},r.premultiplyAlpha=u,r.premultiplyAlphaRGBA=function(r){if(!r)return 0;const{r:n,g:e,b:u,a:i}=r,o=n*i,l=e*i,p=u*i,c=255*i;return t.i8888to32(o,l,p,c)},r.premultiplyAlphaRGBAArray=function(r){if(!r)return 0;const[n,e,u,i]=r,o=n*(i/255),l=e*(i/255),p=u*(i/255),c=i;return t.i8888to32(o,l,p,c)},r.premultiplyAlphaUint32=function(r){return u(e(n,r)),t.i8888to32(n[0],n[1],n[2],n[3])},r.white=[255,255,255,1],Object.defineProperty(r,"__esModule",{value:!0})}));
