/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(4);return e[0]=1,e[3]=1,e}function r(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function n(e,t,r,n){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o}function o(e,t){return new Float32Array(e,t,4)}const c=Object.freeze(Object.defineProperty({__proto__:null,create:t,clone:r,fromValues:n,createView:o},Symbol.toStringTag,{value:"Module"}));e.clone=r,e.create=t,e.createView=o,e.fromValues=n,e.mat2f32=c}));
