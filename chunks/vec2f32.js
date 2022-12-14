/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(){return new Float32Array(2)}function t(e){const n=new Float32Array(2);return n[0]=e[0],n[1]=e[1],n}function r(e,n){const t=new Float32Array(2);return t[0]=e,t[1]=n,t}function o(e,n){return new Float32Array(e,n,2)}function u(){return n()}function c(){return r(1,1)}function i(){return r(1,0)}function a(){return r(0,1)}const f=u(),l=c(),s=i(),_=a(),w=Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,createView:o,zeros:u,ones:c,unitX:i,unitY:a,ZEROS:f,ONES:l,UNIT_X:s,UNIT_Y:_},Symbol.toStringTag,{value:"Module"}));e.ONES=l,e.UNIT_X=s,e.UNIT_Y=_,e.ZEROS=f,e.clone=t,e.create=n,e.createView=o,e.fromValues=r,e.ones=c,e.unitX=i,e.unitY=a,e.vec2f32=w,e.zeros=u}));
