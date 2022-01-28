/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=1e-6,n=Math.random,a=Math.PI/180,o=180/Math.PI;function r(t){return t*a}function u(t){return t*o}function s(t,n){return Math.abs(t-n)<=e*Math.max(1,Math.abs(t),Math.abs(n))}const c=Object.freeze({__proto__:null,EPSILON:e,RANDOM:n,toRadian:r,toDegree:u,equals:s});t.EPSILON=e,t.RANDOM=n,t.common=c,t.equals=s,t.toDegree=u,t.toRadian=r}));
