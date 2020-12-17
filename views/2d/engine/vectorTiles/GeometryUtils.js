/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=Number.POSITIVE_INFINITY,n=Math.PI,_=2*n,r=n/2,o=128/n,u=n/128,i=256/360,I=n/180,c=1.414213562,T=1/Math.LN2;function f(t,e){return(t%=e)>=0?t:t+e}t.C_256_TO_RAD=u,t.C_2PI=_,t.C_DEG_TO_256=i,t.C_DEG_TO_RAD=I,t.C_INFINITY=e,t.C_PI=n,t.C_PI_BY_2=r,t.C_RAD_TO_256=o,t.C_SQRT2=c,t.C_SQRT2_INV=.707106781373095,t.between=function(t,e,n){return t>=e&&t<=n||t>=n&&t<=e},t.degToByte=function(t){return f(t*i,256)},t.interpolate=function(t,e,n){return t*(1-n)+e*n},t.log2=function(t){return Math.log(t)*T},t.positiveMod=f,t.radToByte=function(t){return f(t*o,256)},t.sqr=function(t){return t*t},Object.defineProperty(t,"__esModule",{value:!0})}));
