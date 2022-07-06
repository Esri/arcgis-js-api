/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=1e-6,a=Math.random,e=Math.PI/180,n=180/Math.PI;function o(t){return t*e}function r(t){return t*n}function s(a,e){return Math.abs(a-e)<=t*Math.max(1,Math.abs(a),Math.abs(e))}const u=Object.freeze(Object.defineProperty({__proto__:null,EPSILON:t,RANDOM:a,toRadian:o,toDegree:r,equals:s},Symbol.toStringTag,{value:"Module"}));export{t as E,a as R,r as a,u as c,s as e,o as t};
