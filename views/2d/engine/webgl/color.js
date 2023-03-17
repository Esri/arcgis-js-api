/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./number"],(function(r,t,n){"use strict";function e(r,t=0,n=!1){const e=r[t+3];return r[t+0]*=e,r[t+1]*=e,r[t+2]*=e,n||(r[t+3]*=255),r}function o(r){if(!r)return 0;const{r:t,g:e,b:o,a:i}=r,u=t*i,l=e*i,c=o*i,p=255*i;return n.i8888to32(u,l,c,p)}function i(r){if(!r)return 0;const[t,e,o,i]=r,u=t*(i/255),l=e*(i/255),c=o*(i/255),p=i;return n.i8888to32(u,l,c,p)}function u(r,n,e=0){if(t.isNone(n))return r[e+0]=0,r[e+1]=0,r[e+2]=0,void(r[e+3]=0);const{r:o,g:i,b:u,a:l}=n;r[e+0]=o*l/255,r[e+1]=i*l/255,r[e+2]=u*l/255,r[e+3]=l}r.premultiplyAlpha=e,r.premultiplyAlphaRGBA=o,r.premultiplyAlphaRGBAArray=i,r.writeColor=u,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
