/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=Number.POSITIVE_INFINITY,n=Math.PI,_=2*n,r=n/2,o=128/n,u=n/128,i=256/360,I=n/180,c=1.414213562,T=1/c,f=1/Math.LN2;function C(t,e){return(t%=e)>=0?t:t+e}function s(t){return C(t*o,256)}function N(t){return C(t*i,256)}function a(t){return Math.log(t)*f}function d(t){return t*t}function O(t,e,n){return t*(1-n)+e*n}function P(t,e,n){return t>=e&&t<=n||t>=n&&t<=e}t.C_256_TO_RAD=u,t.C_2PI=_,t.C_DEG_TO_256=i,t.C_DEG_TO_RAD=I,t.C_INFINITY=e,t.C_PI=n,t.C_PI_BY_2=r,t.C_RAD_TO_256=o,t.C_SQRT2=c,t.C_SQRT2_INV=T,t.between=P,t.degToByte=N,t.interpolate=O,t.log2=a,t.positiveMod=C,t.radToByte=s,t.sqr=d,Object.defineProperty(t,"__esModule",{value:!0})}));
