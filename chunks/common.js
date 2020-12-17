/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=1e-6,a=Math.random,n=Math.PI/180,o=180/Math.PI;function r(t){return t*n}function u(t){return t*o}function s(t,a){return Math.abs(t-a)<=e*Math.max(1,Math.abs(t),Math.abs(a))}var M=Object.freeze({__proto__:null,EPSILON:e,RANDOM:a,toRadian:r,toDegree:u,equals:s});t.EPSILON=e,t.RANDOM=a,t.common=M,t.equals=s,t.toDegree=u,t.toRadian=r}));
