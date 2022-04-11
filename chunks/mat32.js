/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,o){const r=e.typedBuffer,n=e.typedBufferStride,d=t.typedBuffer,f=t.typedBufferStride,c=o?o.count:t.count;let u=(o&&o.dstIndex?o.dstIndex:0)*n,p=(o&&o.srcIndex?o.srcIndex:0)*f;for(let s=0;s<c;++s){for(let e=0;e<9;++e)r[u+e]=d[p+e];u+=n,p+=f}}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.mat3=o}));
