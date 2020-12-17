/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(){return[0,0,0,1,0,0,0,0]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]}function r(e,n,t,r,o,a,u,c){return[e,n,t,r,o,a,u,c]}function o(e,n,t,r,o,a,u){const c=.5*o,i=.5*a,f=.5*u;return[e,n,t,r,c*r+i*t-f*n,i*r+f*e-c*t,f*r+c*n-i*e,-c*e-i*n-f*t]}function a(e,n){return new Float64Array(e,n,8)}var u=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromRotationTranslationValues:o,createView:a});e.clone=t,e.create=n,e.createView=a,e.fromRotationTranslationValues=o,e.fromValues=r,e.quat2f64=u}));
