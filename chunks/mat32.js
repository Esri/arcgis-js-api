/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,r){const f=e.typedBuffer,d=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*d,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<c;++e){for(let e=0;e<9;++e)f[u+e]=n[p+e];u+=d,p+=o}}var r=Object.freeze({__proto__:null,copy:t});e.copy=t,e.mat3=r}));
