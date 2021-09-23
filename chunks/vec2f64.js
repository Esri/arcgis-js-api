/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function r(){return[0,0]}function e(n){return[n[0],n[1]]}function t(n,r){return[n,r]}function o(n){const e=r(),t=Math.min(2,n.length);for(let r=0;r<t;++r)e[r]=n[r];return e}function u(n,r){return new Float64Array(n,r,2)}function c(){return r()}function i(){return t(1,1)}function f(){return t(1,0)}function a(){return t(0,1)}const s=c(),l=i(),_=f(),N=a();var m=Object.freeze({__proto__:null,create:r,clone:e,fromValues:t,fromArray:o,createView:u,zeros:c,ones:i,unitX:f,unitY:a,ZEROS:s,ONES:l,UNIT_X:_,UNIT_Y:N});n.ONES=l,n.UNIT_X=_,n.UNIT_Y=N,n.ZEROS=s,n.clone=e,n.create=r,n.createView=u,n.fromArray=o,n.fromValues=t,n.ones=i,n.unitX=f,n.unitY=a,n.vec2f64=m,n.zeros=c}));
