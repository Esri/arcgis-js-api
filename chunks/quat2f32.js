/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(){const n=new Float32Array(8);return n[3]=1,n}function t(n){const t=new Float32Array(8);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function r(n,t,r,e,o,a,c,s){const u=new Float32Array(8);return u[0]=n,u[1]=t,u[2]=r,u[3]=e,u[4]=o,u[5]=a,u[6]=c,u[7]=s,u}function e(n,t,r,e,o,a,c){const s=new Float32Array(8);s[0]=n,s[1]=t,s[2]=r,s[3]=e;const u=.5*o,l=.5*a,f=.5*c;return s[4]=u*e+l*r-f*t,s[5]=l*e+f*n-u*r,s[6]=f*e+u*t-l*n,s[7]=-u*n-l*t-f*r,s}function o(n,t){return new Float32Array(n,t,8)}const a=Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,fromRotationTranslationValues:e,createView:o},Symbol.toStringTag,{value:"Module"}));export{t as a,e as b,n as c,o as d,r as f,a as q};
