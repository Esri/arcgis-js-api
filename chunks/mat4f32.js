/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function t(e){const r=new Float32Array(16);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function n(e,r,t,n,o,c,a,u,f,l,i,s,w,y,A,F){const I=new Float32Array(16);return I[0]=e,I[1]=r,I[2]=t,I[3]=n,I[4]=o,I[5]=c,I[6]=a,I[7]=u,I[8]=f,I[9]=l,I[10]=i,I[11]=s,I[12]=w,I[13]=y,I[14]=A,I[15]=F,I}function o(e,r){return new Float32Array(e,r,16)}const c=r();var a=Object.freeze({__proto__:null,create:r,clone:t,fromValues:n,createView:o,IDENTITY:c});e.IDENTITY=c,e.clone=t,e.create=r,e.createView=o,e.fromValues=n,e.mat4f32=a}));
