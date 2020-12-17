/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function t(e){const r=new Float32Array(9);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function n(e,r,t,n,o,a,c,u,f){const l=new Float32Array(9);return l[0]=e,l[1]=r,l[2]=t,l[3]=n,l[4]=o,l[5]=a,l[6]=c,l[7]=u,l[8]=f,l}function o(e,r){return new Float32Array(e,r,9)}var a=Object.freeze({__proto__:null,create:r,clone:t,fromValues:n,createView:o});e.clone=t,e.create=r,e.createView=o,e.fromValues=n,e.mat3f32=a}));
