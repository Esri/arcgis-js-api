/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){return[0,0,0,0]}function r(n){return[n[0],n[1],n[2],n[3]]}function e(n,t,r,e){return[n,t,r,e]}function u(n){const r=t(),e=Math.min(4,n.length);for(let t=0;t<e;++t)r[t]=n[t];return r}function o(n,t){return new Float64Array(n,t,4)}function i(){return t()}function c(){return e(1,1,1,1)}function f(){return e(1,0,0,0)}function a(){return e(0,1,0,0)}function _(){return e(0,0,1,0)}function s(){return e(0,0,0,1)}const N=i(),l=c(),I=f(),T=a(),U=_(),Z=s();var m=Object.freeze({__proto__:null,create:t,clone:r,fromValues:e,fromArray:u,createView:o,zeros:i,ones:c,unitX:f,unitY:a,unitZ:_,unitW:s,ZEROS:N,ONES:l,UNIT_X:I,UNIT_Y:T,UNIT_Z:U,UNIT_W:Z});n.ONES=l,n.UNIT_W=Z,n.UNIT_X=I,n.UNIT_Y=T,n.UNIT_Z=U,n.ZEROS=N,n.clone=r,n.create=t,n.createView=o,n.fromArray=u,n.fromValues=e,n.ones=c,n.unitW=s,n.unitX=f,n.unitY=a,n.unitZ=_,n.vec4f64=m,n.zeros=i}));
