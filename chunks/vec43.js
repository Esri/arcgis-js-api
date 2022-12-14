/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,f){const n=e.typedBuffer,o=e.typedBufferStride,d=t.typedBuffer,r=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*o,l=(f&&f.srcIndex?f.srcIndex:0)*r;for(let i=0;i<c;++i)n[u]=d[l],n[u+1]=d[l+1],n[u+2]=d[l+2],n[u+3]=d[l+3],u+=o,l+=r}function f(e,t,f,n,o,d){const r=e.typedBuffer,c=e.typedBufferStride,u=d?.count??e.count;let l=(d?.dstIndex??0)*c;for(let i=0;i<u;++i)r[l]=t,r[l+1]=f,r[l+2]=n,r[l+3]=o,l+=c}const n=Object.freeze(Object.defineProperty({__proto__:null,copy:t,fill:f},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.fill=f,e.vec4=n}));
