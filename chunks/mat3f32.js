/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function n(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function r(e,t,n,r,o,c,a,u,f){const l=new Float32Array(9);return l[0]=e,l[1]=t,l[2]=n,l[3]=r,l[4]=o,l[5]=c,l[6]=a,l[7]=u,l[8]=f,l}function o(e,t){return new Float32Array(e,t,9)}const c=Object.freeze({__proto__:null,create:t,clone:n,fromValues:r,createView:o});e.clone=n,e.create=t,e.createView=o,e.fromValues=r,e.mat3f32=c}));
