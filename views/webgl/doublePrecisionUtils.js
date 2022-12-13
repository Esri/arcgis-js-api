/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o,n){for(let t=0;t<n;++t)o[2*t]=e[t],o[2*t+1]=e[t]-o[2*t]}function n(e,o,n){for(let t=0;t<n;++t)o[t]=e[2*t]+e[2*t+1]}function t(e,o){const n=e.length;for(let t=0;t<n;++t)l[0]=e[t],o[t]=l[0];return o}function r(e,o){const n=e.length;for(let t=0;t<n;++t)l[0]=e[t],l[1]=e[t]-l[0],o[t]=l[1];return o}const l=new Float32Array(2);e.decodeDoubleArray=n,e.encodeDoubleArray=o,e.encodeDoubleHi=t,e.encodeDoubleLo=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
