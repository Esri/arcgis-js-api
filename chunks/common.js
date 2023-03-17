/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=1e-6;function n(){return e}function o(t){e=t}const a=Math.random,r=Math.PI/180,i=180/Math.PI;function s(t){return t*r}function u(t){return t*i}function c(t,n){return Math.abs(t-n)<=e*Math.max(1,Math.abs(t),Math.abs(n))}const l=Object.freeze(Object.defineProperty({__proto__:null,RANDOM:a,equals:c,getEpsilon:n,setEpsilon:o,toDegree:u,toRadian:s},Symbol.toStringTag,{value:"Module"}));t.RANDOM=a,t.common=l,t.equals=c,t.getEpsilon=n,t.setEpsilon=o,t.toDegree=u,t.toRadian=s}));
