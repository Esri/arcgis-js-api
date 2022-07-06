/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,s=(r&&r.srcIndex?r.srcIndex:0)*d;for(let p=0;p<f;++p)n[u]=c[s],u+=o,s+=d}function t(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}const r=Object.freeze(Object.defineProperty({__proto__:null,copy:e,makeDense:t},Symbol.toStringTag,{value:"Module"}));export{e as c,t as m,r as s};
