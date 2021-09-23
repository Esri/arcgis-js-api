/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const f=e.typedBuffer,d=e.typedBufferStride,r=t.typedBuffer,u=t.typedBufferStride,l=n?n.count:t.count;let o=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*u;for(let i=0;i<l;++i)f[o]=r[c],f[o+1]=r[c+1],f[o+2]=r[c+2],f[o+3]=r[c+3],o+=d,c+=u}function n(e,t,n,f,d,r){var u,l;const o=e.typedBuffer,c=e.typedBufferStride,i=null!=(u=null==r?void 0:r.count)?u:e.count;let p=(null!=(l=null==r?void 0:r.dstIndex)?l:0)*c;for(let s=0;s<i;++s)o[p]=t,o[p+1]=n,o[p+2]=f,o[p+3]=d,p+=c}var f=Object.freeze({__proto__:null,copy:t,fill:n});e.copy=t,e.fill=n,e.vec4=f}));
