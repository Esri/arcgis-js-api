/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,f){const n=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*r,s=(f&&f.srcIndex?f.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)n[u+e]=d[s+e];u+=r,s+=o}}const f=Object.freeze({__proto__:null,copy:t});e.copy=t,e.mat3=f}));
