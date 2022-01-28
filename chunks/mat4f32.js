/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function n(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function r(e,t,n,r,o,c,a,u,f,l,i,s,w,y,A,F){const I=new Float32Array(16);return I[0]=e,I[1]=t,I[2]=n,I[3]=r,I[4]=o,I[5]=c,I[6]=a,I[7]=u,I[8]=f,I[9]=l,I[10]=i,I[11]=s,I[12]=w,I[13]=y,I[14]=A,I[15]=F,I}function o(e,t){return new Float32Array(e,t,16)}const c=t(),a=Object.freeze({__proto__:null,create:t,clone:n,fromValues:r,createView:o,IDENTITY:c});e.IDENTITY=c,e.clone=n,e.create=t,e.createView=o,e.fromValues=r,e.mat4f32=a}));
