/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const f=e.typedBuffer,d=e.typedBufferStride,r=t.typedBuffer,u=t.typedBufferStride,l=n?n.count:t.count;let o=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*u;for(let i=0;i<l;++i)f[o]=r[c],f[o+1]=r[c+1],f[o+2]=r[c+2],o+=d,c+=u}function n(e,t,n,f,d){var r,u;const l=e.typedBuffer,o=e.typedBufferStride,c=null!=(r=null==d?void 0:d.count)?r:e.count;let i=(null!=(u=null==d?void 0:d.dstIndex)?u:0)*o;for(let p=0;p<c;++p)l[i]=t,l[i+1]=n,l[i+2]=f,i+=o}var f=Object.freeze({__proto__:null,copy:t,fill:n});e.copy=t,e.fill=n,e.vec3=f}));
