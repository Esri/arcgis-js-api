/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function r(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function t(n){const r=new Float32Array(6);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r}function e(n,r,t,e,o,a){const c=new Float32Array(6);return c[0]=n,c[1]=r,c[2]=t,c[3]=e,c[4]=o,c[5]=a,c}function o(n,r){return new Float32Array(n,r,6)}function a(n,r,t,e){const o=r[e],a=r[e+1];n[e]=t[0]*o+t[2]*a+t[4],n[e+1]=t[1]*o+t[3]*a+t[5]}function c(n,r,t,e=0,o=0,c=2){const f=o||r.length/c;for(let o=e;o<f;o++){a(n,r,t,o*c)}}var f=Object.freeze({__proto__:null,create:r,clone:t,fromValues:e,createView:o,transform:a,transformMany:c});n.clone=t,n.create=r,n.createView=o,n.fromValues=e,n.mat2df32=f,n.transform=a,n.transformMany=c}));
