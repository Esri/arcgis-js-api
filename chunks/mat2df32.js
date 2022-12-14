/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function e(n){const t=new Float32Array(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function r(n,t,e,r,o,a){const c=new Float32Array(6);return c[0]=n,c[1]=t,c[2]=e,c[3]=r,c[4]=o,c[5]=a,c}function o(n,t){return new Float32Array(n,t,6)}function a(n,t,e,r){const o=t[r],a=t[r+1];n[r]=e[0]*o+e[2]*a+e[4],n[r+1]=e[1]*o+e[3]*a+e[5]}function c(n,t,e,r=0,o=0,c=2){const f=o||t.length/c;for(let u=r;u<f;u++){a(n,t,e,u*c)}}const f=Object.freeze(Object.defineProperty({__proto__:null,create:t,clone:e,fromValues:r,createView:o,transform:a,transformMany:c},Symbol.toStringTag,{value:"Module"}));n.clone=e,n.create=t,n.createView=o,n.fromValues=r,n.mat2df32=f,n.transform=a,n.transformMany=c}));
