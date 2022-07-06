/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,f){const d=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*n,l=(f&&f.srcIndex?f.srcIndex:0)*r;for(let s=0;s<c;++s)d[u]=o[l],d[u+1]=o[l+1],d[u+2]=o[l+2],u+=n,l+=r}function t(e,t,f,d,n){const o=e.typedBuffer,r=e.typedBufferStride,c=n?.count??e.count;let u=(n?.dstIndex??0)*r;for(let l=0;l<c;++l)o[u]=t,o[u+1]=f,o[u+2]=d,u+=r}const f=Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:t},Symbol.toStringTag,{value:"Module"}));export{e as c,t as f,f as v};
