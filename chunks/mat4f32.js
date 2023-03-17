/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function r(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function n(e,t,r,n,o,c,a,u,l,f,i,s,w,y,T,m){const A=new Float32Array(16);return A[0]=e,A[1]=t,A[2]=r,A[3]=n,A[4]=o,A[5]=c,A[6]=a,A[7]=u,A[8]=l,A[9]=f,A[10]=i,A[11]=s,A[12]=w,A[13]=y,A[14]=T,A[15]=m,A}function o(e,t){return new Float32Array(e,t,16)}const c=t(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:r,create:t,createView:o,fromValues:n},Symbol.toStringTag,{value:"Module"}));e.IDENTITY=c,e.clone=r,e.create=t,e.createView=o,e.fromValues=n,e.mat4f32=a}));
