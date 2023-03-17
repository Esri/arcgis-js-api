/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=Number.POSITIVE_INFINITY,e=Math.PI,r=2*e,o=128/e,u=256/360,i=e/180,_=1/Math.LN2;function c(t,n){return(t%=n)>=0?t:t+n}function I(t){return c(t*o,256)}function f(t){return c(t*u,256)}function T(t){return Math.log(t)*_}function a(t){return t*t}function d(t,n,e){return t*(1-e)+n*e}function l(t,n,e){return t>=n&&t<=e||t>=e&&t<=n}t.C_2PI=r,t.C_DEG_TO_256=u,t.C_DEG_TO_RAD=i,t.C_INFINITY=n,t.C_PI=e,t.C_RAD_TO_256=o,t.between=l,t.degToByte=f,t.interpolate=d,t.log2=T,t.positiveMod=c,t.radToByte=I,t.sqr=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
