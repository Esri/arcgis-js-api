/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let u=(n&&n.dstIndex?n.dstIndex:0)*o,s=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[u]=c[s],u+=o,s+=d}function n(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const r=Object.freeze(Object.defineProperty({__proto__:null,copy:t,makeDense:n},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.makeDense=n,e.scalar=r}));
