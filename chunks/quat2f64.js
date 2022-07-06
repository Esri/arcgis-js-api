/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1,0,0,0,0]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]}function t(e,n,t,r,o,a,u,c){return[e,n,t,r,o,a,u,c]}function r(e,n,t,r,o,a,u){const c=.5*o,s=.5*a,f=.5*u;return[e,n,t,r,c*r+s*t-f*n,s*r+f*e-c*t,f*r+c*n-s*e,-c*e-s*n-f*t]}function o(e,n){return new Float64Array(e,n,8)}const a=Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:n,fromValues:t,fromRotationTranslationValues:r,createView:o},Symbol.toStringTag,{value:"Module"}));export{n as a,r as b,e as c,o as d,t as f,a as q};
