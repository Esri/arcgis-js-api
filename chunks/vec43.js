/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,f){const d=e.typedBuffer,n=e.typedBufferStride,r=t.typedBuffer,c=t.typedBufferStride,o=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*n,s=(f&&f.srcIndex?f.srcIndex:0)*c;for(let e=0;e<o;++e)d[u]=r[s],d[u+1]=r[s+1],d[u+2]=r[s+2],d[u+3]=r[s+3],u+=n,s+=c}function f(e,t,f,d,n,r){const c=e.typedBuffer,o=e.typedBufferStride,u=r?r.count:e.count;let s=(r&&r.dstIndex?r.dstIndex:0)*o;for(let e=0;e<u;++e)c[s]=t,c[s+1]=f,c[s+2]=d,c[s+3]=n,s+=o}var d=Object.freeze({__proto__:null,copy:t,fill:f});e.copy=t,e.fill=f,e.vec4=d}));
