/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}export{e as C_256_TO_RAD,r as C_2PI,c as C_DEG_TO_256,f as C_DEG_TO_RAD,n as C_INFINITY,t as C_PI,u as C_PI_BY_2,o as C_RAD_TO_256,i as C_SQRT2,I as C_SQRT2_INV,g as between,M as degToByte,b as interpolate,P as log2,a as positiveMod,h as radToByte,T as sqr};
