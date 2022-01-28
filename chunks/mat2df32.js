/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function r(n){const t=new Float32Array(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function e(n,t,r,e,o,a){const c=new Float32Array(6);return c[0]=n,c[1]=t,c[2]=r,c[3]=e,c[4]=o,c[5]=a,c}function o(n,t){return new Float32Array(n,t,6)}function a(n,t,r,e){const o=t[e],a=t[e+1];n[e]=r[0]*o+r[2]*a+r[4],n[e+1]=r[1]*o+r[3]*a+r[5]}function c(n,t,r,e=0,o=0,c=2){const f=o||t.length/c;for(let s=e;s<f;s++){a(n,t,r,s*c)}}const f=Object.freeze({__proto__:null,create:t,clone:r,fromValues:e,createView:o,transform:a,transformMany:c});n.clone=r,n.create=t,n.createView=o,n.fromValues=e,n.mat2df32=f,n.transform=a,n.transformMany=c}));
