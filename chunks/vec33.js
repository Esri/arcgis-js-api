/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,f){const n=e.typedBuffer,o=e.typedBufferStride,d=t.typedBuffer,r=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*o,l=(f&&f.srcIndex?f.srcIndex:0)*r;for(let i=0;i<c;++i)n[u]=d[l],n[u+1]=d[l+1],n[u+2]=d[l+2],u+=o,l+=r}function f(e,t,f,n,o){const d=e.typedBuffer,r=e.typedBufferStride,c=o?.count??e.count;let u=(o?.dstIndex??0)*r;for(let l=0;l<c;++l)d[u]=t,d[u+1]=f,d[u+2]=n,u+=r}const n=Object.freeze(Object.defineProperty({__proto__:null,copy:t,fill:f},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.fill=f,e.vec3=n}));
