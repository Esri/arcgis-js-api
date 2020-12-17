/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){return new Float32Array(3)}function e(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,e){const r=new Float32Array(3);return r[0]=n,r[1]=t,r[2]=e,r}function u(n,t){return new Float32Array(n,t,3)}function o(){return t()}function c(){return r(1,1,1)}function i(){return r(1,0,0)}function a(){return r(0,1,0)}function f(){return r(0,0,1)}const s=o(),l=c(),_=i(),N=a(),w=f();var I=Object.freeze({__proto__:null,create:t,clone:e,fromValues:r,createView:u,zeros:o,ones:c,unitX:i,unitY:a,unitZ:f,ZEROS:s,ONES:l,UNIT_X:_,UNIT_Y:N,UNIT_Z:w});n.ONES=l,n.UNIT_X=_,n.UNIT_Y=N,n.UNIT_Z=w,n.ZEROS=s,n.clone=e,n.create=t,n.createView=u,n.fromValues=r,n.ones=c,n.unitX=i,n.unitY=a,n.unitZ=f,n.vec3f32=I,n.zeros=o}));
