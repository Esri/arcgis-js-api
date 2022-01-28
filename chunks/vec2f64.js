/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(){return[0,0]}function r(n){return[n[0],n[1]]}function t(n,e){return[n,e]}function o(n){const r=e(),t=Math.min(2,n.length);for(let e=0;e<t;++e)r[e]=n[e];return r}function u(n,e){return new Float64Array(n,e,2)}function c(){return e()}function i(){return t(1,1)}function f(){return t(1,0)}function a(){return t(0,1)}const s=c(),l=i(),_=f(),N=a(),m=Object.freeze({__proto__:null,create:e,clone:r,fromValues:t,fromArray:o,createView:u,zeros:c,ones:i,unitX:f,unitY:a,ZEROS:s,ONES:l,UNIT_X:_,UNIT_Y:N});n.ONES=l,n.UNIT_X=_,n.UNIT_Y=N,n.ZEROS=s,n.clone=r,n.create=e,n.createView=u,n.fromArray=o,n.fromValues=t,n.ones=i,n.unitX=f,n.unitY=a,n.vec2f64=m,n.zeros=c}));
