/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){return[0,0,0]}function r(n){return[n[0],n[1],n[2]]}function e(n,t,r){return[n,t,r]}function u(n){const r=t(),e=Math.min(3,n.length);for(let t=0;t<e;++t)r[t]=n[t];return r}function o(n,t){return new Float64Array(n,t,3)}function c(){return t()}function i(){return e(1,1,1)}function f(){return e(1,0,0)}function a(){return e(0,1,0)}function s(){return e(0,0,1)}const _=c(),l=i(),N=f(),I=a(),T=s(),U=Object.freeze({__proto__:null,create:t,clone:r,fromValues:e,fromArray:u,createView:o,zeros:c,ones:i,unitX:f,unitY:a,unitZ:s,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:I,UNIT_Z:T});n.ONES=l,n.UNIT_X=N,n.UNIT_Y=I,n.UNIT_Z=T,n.ZEROS=_,n.clone=r,n.create=t,n.createView=o,n.fromArray=u,n.fromValues=e,n.ones=i,n.unitX=f,n.unitY=a,n.unitZ=s,n.vec3f64=U,n.zeros=c}));
