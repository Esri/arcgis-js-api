/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o,n){for(let r=0;r<n;++r)o[2*r]=e[r],o[2*r+1]=e[r]-o[2*r]}const n=new Float64Array(1),r=new Float32Array(2);e.decodeDoubleArray=function(e,o,n){for(let r=0;r<n;++r)o[r]=e[2*r]+e[2*r+1]},e.encodeDouble=function(e,o){r[0]=e,r[1]=e-r[0],o[0]=r[0],o[1]=r[1]},e.encodeDoubleArray=o,e.encodeDoubleArraySplit=function(e,t,c,l){for(let u=0;u<l;++u)n[0]=e[u],o(n,r,1),t[u]=r[0],c[u]=r[1]},Object.defineProperty(e,"__esModule",{value:!0})}));
