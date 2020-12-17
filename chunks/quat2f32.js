/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){const n=new Float32Array(8);return n[3]=1,n}function r(n){const t=new Float32Array(8);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function e(n,t,r,e,o,a,c,u){const l=new Float32Array(8);return l[0]=n,l[1]=t,l[2]=r,l[3]=e,l[4]=o,l[5]=a,l[6]=c,l[7]=u,l}function o(n,t,r,e,o,a,c){const u=new Float32Array(8);u[0]=n,u[1]=t,u[2]=r,u[3]=e;const l=.5*o,i=.5*a,s=.5*c;return u[4]=l*e+i*r-s*t,u[5]=i*e+s*n-l*r,u[6]=s*e+l*t-i*n,u[7]=-l*n-i*t-s*r,u}function a(n,t){return new Float32Array(n,t,8)}var c=Object.freeze({__proto__:null,create:t,clone:r,fromValues:e,fromRotationTranslationValues:o,createView:a});n.clone=r,n.create=t,n.createView=a,n.fromRotationTranslationValues=o,n.fromValues=e,n.quat2f32=c}));
