/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,f=t.typedBufferStride,d=n?n.count:t.count;let u=(n&&n.dstIndex?n.dstIndex:0)*o,s=(n&&n.srcIndex?n.srcIndex:0)*f;for(let e=0;e<d;++e)r[u]=c[s],u+=o,s+=f}function n(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}var r=Object.freeze({__proto__:null,copy:t,makeDense:n});e.copy=t,e.makeDense=n,e.scalar=r}));
