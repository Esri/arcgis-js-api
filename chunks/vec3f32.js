/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(){return new Float32Array(3)}function t(n){const e=new Float32Array(3);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e}function r(n,e,t){const r=new Float32Array(3);return r[0]=n,r[1]=e,r[2]=t,r}function o(n,e){return new Float32Array(n,e,3)}function u(){return e()}function c(){return r(1,1,1)}function i(){return r(1,0,0)}function a(){return r(0,1,0)}function f(){return r(0,0,1)}const l=u(),s=c(),_=i(),N=a(),T=f(),w=Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:t,fromValues:r,createView:o,zeros:u,ones:c,unitX:i,unitY:a,unitZ:f,ZEROS:l,ONES:s,UNIT_X:_,UNIT_Y:N,UNIT_Z:T},Symbol.toStringTag,{value:"Module"}));n.ONES=s,n.UNIT_X=_,n.UNIT_Y=N,n.UNIT_Z=T,n.ZEROS=l,n.clone=t,n.create=e,n.createView=o,n.fromValues=r,n.ones=c,n.unitX=i,n.unitY=a,n.unitZ=f,n.vec3f32=w,n.zeros=u}));
