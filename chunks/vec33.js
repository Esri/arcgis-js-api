/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,n){const f=e.typedBuffer,d=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,l=n?n.count:t.count;let r=(n&&n.dstIndex?n.dstIndex:0)*d,c=(n&&n.srcIndex?n.srcIndex:0)*u;for(let i=0;i<l;++i)f[r]=o[c],f[r+1]=o[c+1],f[r+2]=o[c+2],r+=d,c+=u}function n(e,t,n,f,d){var o,u;const l=e.typedBuffer,r=e.typedBufferStride,c=null!=(o=null==d?void 0:d.count)?o:e.count;let i=(null!=(u=null==d?void 0:d.dstIndex)?u:0)*r;for(let s=0;s<c;++s)l[i]=t,l[i+1]=n,l[i+2]=f,i+=r}const f=Object.freeze({__proto__:null,copy:t,fill:n});e.copy=t,e.fill=n,e.vec3=f}));
