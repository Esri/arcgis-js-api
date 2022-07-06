/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,r){const o=e.typedBuffer,d=e.typedBufferStride,f=t.typedBuffer,n=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*d,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)o[u+e]=f[l+e];u+=d,l+=n}}const t=Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));export{e as c,t as m};
