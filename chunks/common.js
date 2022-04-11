/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=1e-6,n=Math.random,a=Math.PI/180,o=180/Math.PI;function r(t){return t*a}function u(t){return t*o}function c(t,n){return Math.abs(t-n)<=e*Math.max(1,Math.abs(t),Math.abs(n))}const i=Object.freeze(Object.defineProperty({__proto__:null,EPSILON:e,RANDOM:n,toRadian:r,toDegree:u,equals:c},Symbol.toStringTag,{value:"Module"}));t.EPSILON=e,t.RANDOM=n,t.common=i,t.equals=c,t.toDegree=u,t.toRadian=r}));
