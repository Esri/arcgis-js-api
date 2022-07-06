/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(){const n=new Float32Array(6);return n[0]=1,n[3]=1,n}function t(n){const t=new Float32Array(6);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function r(n,t,r,e,o,a){const c=new Float32Array(6);return c[0]=n,c[1]=t,c[2]=r,c[3]=e,c[4]=o,c[5]=a,c}function e(n,t){return new Float32Array(n,t,6)}function o(n,t,r,e){const o=t[e],a=t[e+1];n[e]=r[0]*o+r[2]*a+r[4],n[e+1]=r[1]*o+r[3]*a+r[5]}function a(n,t,r,e=0,a=0,c=2){const s=a||t.length/c;for(let u=e;u<s;u++){o(n,t,r,u*c)}}const c=Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,createView:e,transform:o,transformMany:a},Symbol.toStringTag,{value:"Module"}));export{t as a,e as b,n as c,o as d,r as f,c as m,a as t};
