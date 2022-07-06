/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(){return[0,0,0]}function t(n){return[n[0],n[1],n[2]]}function r(n,t,r){return[n,t,r]}function e(t){const r=n(),e=Math.min(3,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,3)}function o(){return n()}function a(){return r(1,1,1)}function s(){return r(1,0,0)}function c(){return r(0,1,0)}function i(){return r(0,0,1)}const f=o(),l=a(),_=s(),O=c(),b=i(),g=Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:o,ones:a,unitX:s,unitY:c,unitZ:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:O,UNIT_Z:b},Symbol.toStringTag,{value:"Module"}));export{l as O,b as U,f as Z,t as a,u as b,n as c,e as d,s as e,r as f,c as g,_ as h,O as i,a as o,i as u,g as v,o as z};
