/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const o=e.typedBuffer,d=e.typedBufferStride,f=t.typedBuffer,l=t.typedBufferStride,r=n?n.count:t.count;let u=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*l;for(let i=0;i<r;++i)o[u]=f[c],o[u+1]=f[c+1],o[u+2]=f[c+2],o[u+3]=f[c+3],u+=d,c+=l}function n(e,t,n,o,d,f){var l,r;const u=e.typedBuffer,c=e.typedBufferStride,i=null!=(l=null==f?void 0:f.count)?l:e.count;let p=(null!=(r=null==f?void 0:f.dstIndex)?r:0)*c;for(let s=0;s<i;++s)u[p]=t,u[p+1]=n,u[p+2]=o,u[p+3]=d,p+=c}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,fill:n},Symbol.toStringTag,{value:"Module"}));e.copy=t,e.fill=n,e.vec4=o}));
