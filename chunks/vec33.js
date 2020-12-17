/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,c=t.typedBufferStride,o=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*c;for(let e=0;e<o;++e)d[u]=n[p],d[u+1]=n[p+1],d[u+2]=n[p+2],u+=f,p+=c}var r=Object.freeze({__proto__:null,copy:t});e.copy=t,e.vec3=r}));
