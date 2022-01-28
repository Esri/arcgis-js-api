/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const f=e.typedBuffer,d=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,l=n?n.count:t.count;let r=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*u;for(let i=0;i<l;++i)f[r]=o[c],f[r+1]=o[c+1],f[r+2]=o[c+2],f[r+3]=o[c+3],r+=d,c+=u}function n(e,t,n,f,d,o){var u,l;const r=e.typedBuffer,c=e.typedBufferStride,i=null!=(u=null==o?void 0:o.count)?u:e.count;let s=(null!=(l=null==o?void 0:o.dstIndex)?l:0)*c;for(let p=0;p<i;++p)r[s]=t,r[s+1]=n,r[s+2]=f,r[s+3]=d,s+=c}const f=Object.freeze({__proto__:null,copy:t,fill:n});e.copy=t,e.fill=n,e.vec4=f}));
