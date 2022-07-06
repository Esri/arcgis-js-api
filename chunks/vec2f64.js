/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(){return[0,0]}function t(n){return[n[0],n[1]]}function r(n,t){return[n,t]}function e(t){const r=n(),e=Math.min(2,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function o(n,t){return new Float64Array(n,t,2)}function u(){return n()}function a(){return r(1,1)}function s(){return r(1,0)}function c(){return r(0,1)}const f=u(),i=a(),l=s(),_=c(),O=Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:o,zeros:u,ones:a,unitX:s,unitY:c,ZEROS:f,ONES:i,UNIT_X:l,UNIT_Y:_},Symbol.toStringTag,{value:"Module"}));export{i as O,l as U,f as Z,n as a,e as b,o as c,t as d,c as e,r as f,_ as g,a as o,s as u,O as v,u as z};
