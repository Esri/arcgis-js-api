/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=128/Math.PI,e=256/360,o=1/Math.LN2;function r(t,n){return(t%=n)>=0?t:t+n}function u(t){return r(t*n,256)}function i(t){return r(t*e,256)}function c(t){return Math.log(t)*o}function f(t,n,e){return t*(1-e)+n*e}function a(t,n,e){return t>=n&&t<=e||t>=e&&t<=n}t.between=a,t.degToByte=i,t.interpolate=f,t.log2=c,t.positiveMod=r,t.radToByte=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
