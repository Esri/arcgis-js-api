/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(){const e=new Float32Array(4);return e[0]=1,e[3]=1,e}function t(e){const r=new Float32Array(4);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function n(e,r,t,n){const o=new Float32Array(4);return o[0]=e,o[1]=r,o[2]=t,o[3]=n,o}function o(e,r){return new Float32Array(e,r,4)}var a=Object.freeze({__proto__:null,create:r,clone:t,fromValues:n,createView:o});e.clone=t,e.create=r,e.createView=o,e.fromValues=n,e.mat2f32=a}));
