/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(){return new Float32Array(2)}function t(n){const e=new Float32Array(2);return e[0]=n[0],e[1]=n[1],e}function r(n,e){const t=new Float32Array(2);return t[0]=n,t[1]=e,t}function o(n,e){return new Float32Array(n,e,2)}function u(){return e()}function c(){return r(1,1)}function i(){return r(1,0)}function a(){return r(0,1)}const f=u(),s=c(),l=i(),_=a(),w=Object.freeze({__proto__:null,create:e,clone:t,fromValues:r,createView:o,zeros:u,ones:c,unitX:i,unitY:a,ZEROS:f,ONES:s,UNIT_X:l,UNIT_Y:_});n.ONES=s,n.UNIT_X=l,n.UNIT_Y=_,n.ZEROS=f,n.clone=t,n.create=e,n.createView=o,n.fromValues=r,n.ones=c,n.unitX=i,n.unitY=a,n.vec2f32=w,n.zeros=u}));
