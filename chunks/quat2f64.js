/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(){return[0,0,0,1,0,0,0,0]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]}function r(e,n,t,r,o,u,a,c){return[e,n,t,r,o,u,a,c]}function o(e,n,t,r,o,u,a){const c=.5*o,i=.5*u,f=.5*a;return[e,n,t,r,c*r+i*t-f*n,i*r+f*e-c*t,f*r+c*n-i*e,-c*e-i*n-f*t]}function u(e,n){return new Float64Array(e,n,8)}const a=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromRotationTranslationValues:o,createView:u});e.clone=t,e.create=n,e.createView=u,e.fromRotationTranslationValues=o,e.fromValues=r,e.quat2f64=a}));
