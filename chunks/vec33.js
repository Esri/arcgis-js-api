/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const o=e.typedBuffer,d=e.typedBufferStride,f=t.typedBuffer,l=t.typedBufferStride,r=n?n.count:t.count;let u=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*l;for(let i=0;i<r;++i)o[u]=f[c],o[u+1]=f[c+1],o[u+2]=f[c+2],u+=d,c+=l}function n(e,t,n,o,d){var f,l;const r=e.typedBuffer,u=e.typedBufferStride,c=null!=(f=null==d?void 0:d.count)?f:e.count;let i=(null!=(l=null==d?void 0:d.dstIndex)?l:0)*u;for(let p=0;p<c;++p)r[i]=t,r[i+1]=n,r[i+2]=o,i+=u}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,fill:n},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.fill=n,e.vec3=o}));
