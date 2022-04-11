/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function r(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function n(e,t,r,n,o,c,a,u,l){const f=new Float32Array(9);return f[0]=e,f[1]=t,f[2]=r,f[3]=n,f[4]=o,f[5]=c,f[6]=a,f[7]=u,f[8]=l,f}function o(e,t){return new Float32Array(e,t,9)}const c=Object.freeze(Object.defineProperty({__proto__:null,create:t,clone:r,fromValues:n,createView:o},Symbol.toStringTag,{value:"Module"}));e.clone=r,e.create=t,e.createView=o,e.fromValues=n,e.mat3f32=c}));
