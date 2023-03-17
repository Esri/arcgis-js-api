/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o,n){for(let t=0;t<n;++t)o[2*t]=e[t],o[2*t+1]=e[t]-o[2*t]}function n(e,o,n){for(let t=0;t<n;++t)o[t]=e[2*t]+e[2*t+1]}function t(e,o){const n=e.length;for(let t=0;t<n;++t)c[0]=e[t],o[t]=c[0];return o}function r(e,o){const n=e.length;for(let t=0;t<n;++t)c[0]=e[t],c[1]=e[t]-c[0],o[t]=c[1];return o}const c=new Float32Array(2);e.decodeDoubleArray=n,e.encodeDoubleArray=o,e.encodeDoubleHi=t,e.encodeDoubleLo=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
