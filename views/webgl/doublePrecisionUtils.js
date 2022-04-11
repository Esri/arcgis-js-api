/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){u[0]=e,u[1]=e-u[0],o[0]=u[0],o[1]=u[1]}function n(e,o,n){for(let t=0;t<n;++t)o[2*t]=e[t],o[2*t+1]=e[t]-o[2*t]}function t(e,o,n){for(let t=0;t<n;++t)o[t]=e[2*t]+e[2*t+1]}function r(e,o,t,r){for(let c=0;c<r;++c)l[0]=e[c],n(l,u,1),o[c]=u[0],t[c]=u[1]}const l=new Float64Array(1),u=new Float32Array(2);e.decodeDoubleArray=t,e.encodeDouble=o,e.encodeDoubleArray=n,e.encodeDoubleArraySplit=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
