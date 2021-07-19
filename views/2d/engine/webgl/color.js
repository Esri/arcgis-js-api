/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./number"],(function(r,t){"use strict";const n=[255,255,255,1],e=[0,0,0,0];function u(r,t){return Array.isArray(t)?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):(r[0]=t.r,r[1]=t.g,r[2]=t.b,r[3]=t.a),r}function i(r,t=0,n=!1){const e=r[t+3];return r[t+0]*=e,r[t+1]*=e,r[t+2]*=e,n||(r[t+3]*=255),r}function o(r){return i(u([],r))}function l(r){return i(u(e,r)),t.i8888to32(e[0],e[1],e[2],e[3])}function p(r){if(!r)return 0;const{r:n,g:e,b:u,a:i}=r,o=n*i,l=e*i,p=u*i,c=255*i;return t.i8888to32(o,l,p,c)}function c(r){if(!r)return 0;const[n,e,u,i]=r,o=n*(i/255),l=e*(i/255),p=u*(i/255),c=i;return t.i8888to32(o,l,p,c)}r.copyAndPremultiply=o,r.premultiplyAlpha=i,r.premultiplyAlphaRGBA=p,r.premultiplyAlphaRGBAArray=c,r.premultiplyAlphaUint32=l,r.white=n,Object.defineProperty(r,"__esModule",{value:!0})}));
