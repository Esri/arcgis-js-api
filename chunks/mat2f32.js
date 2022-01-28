/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(4);return e[0]=1,e[3]=1,e}function n(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function r(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o}function o(e,t){return new Float32Array(e,t,4)}const c=Object.freeze({__proto__:null,create:t,clone:n,fromValues:r,createView:o});e.clone=n,e.create=t,e.createView=o,e.fromValues=r,e.mat2f32=c}));
