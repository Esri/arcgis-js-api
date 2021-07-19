/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){l[0]=e,l[1]=e-l[0],o[0]=l[0],o[1]=l[1]}function n(e,o,n){for(let r=0;r<n;++r)o[2*r]=e[r],o[2*r+1]=e[r]-o[2*r]}function r(e,o,n){for(let r=0;r<n;++r)o[r]=e[2*r]+e[2*r+1]}function t(e,o,r,t){for(let u=0;u<t;++u)c[0]=e[u],n(c,l,1),o[u]=l[0],r[u]=l[1]}const c=new Float64Array(1),l=new Float32Array(2);e.decodeDoubleArray=r,e.encodeDouble=o,e.encodeDoubleArray=n,e.encodeDoubleArraySplit=t,Object.defineProperty(e,"__esModule",{value:!0})}));
