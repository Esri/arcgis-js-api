/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){const n=new Float32Array(8);return n[3]=1,n}function e(n){const t=new Float32Array(8);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function r(n,t,e,r,o,a,c,u){const l=new Float32Array(8);return l[0]=n,l[1]=t,l[2]=e,l[3]=r,l[4]=o,l[5]=a,l[6]=c,l[7]=u,l}function o(n,t,e,r,o,a,c){const u=new Float32Array(8);u[0]=n,u[1]=t,u[2]=e,u[3]=r;const l=.5*o,s=.5*a,i=.5*c;return u[4]=l*r+s*e-i*t,u[5]=s*r+i*n-l*e,u[6]=i*r+l*t-s*n,u[7]=-l*n-s*t-i*e,u}function a(n,t){return new Float32Array(n,t,8)}const c=Object.freeze({__proto__:null,create:t,clone:e,fromValues:r,fromRotationTranslationValues:o,createView:a});n.clone=e,n.create=t,n.createView=a,n.fromRotationTranslationValues=o,n.fromValues=r,n.quat2f32=c}));
