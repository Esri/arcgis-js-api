/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=Number.POSITIVE_INFINITY,n=Math.PI,_=2*n,r=n/2,o=128/n,u=n/128,i=256/360,I=n/180,T=1.414213562,c=1/T,f=1/Math.LN2;function C(t,e){return(t%=e)>=0?t:t+e}function a(t){return C(t*o,256)}function l(t){return C(t*i,256)}function s(t){return Math.log(t)*f}function d(t){return t*t}function N(t,e,n){return t*(1-n)+e*n}function M(t,e,n){return t>=e&&t<=n||t>=n&&t<=e}t.C_256_TO_RAD=u,t.C_2PI=_,t.C_DEG_TO_256=i,t.C_DEG_TO_RAD=I,t.C_INFINITY=e,t.C_PI=n,t.C_PI_BY_2=r,t.C_RAD_TO_256=o,t.C_SQRT2=T,t.C_SQRT2_INV=c,t.between=M,t.degToByte=l,t.interpolate=N,t.log2=s,t.positiveMod=C,t.radToByte=a,t.sqr=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
