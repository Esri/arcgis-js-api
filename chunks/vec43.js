/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,f){const d=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*n,l=(f&&f.srcIndex?f.srcIndex:0)*r;for(let s=0;s<c;++s)d[u]=o[l],d[u+1]=o[l+1],d[u+2]=o[l+2],d[u+3]=o[l+3],u+=n,l+=r}function t(e,t,f,d,n,o){const r=e.typedBuffer,c=e.typedBufferStride,u=o?.count??e.count;let l=(o?.dstIndex??0)*c;for(let s=0;s<u;++s)r[l]=t,r[l+1]=f,r[l+2]=d,r[l+3]=n,l+=c}const f=Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:t},Symbol.toStringTag,{value:"Module"}));export{e as c,t as f,f as v};
