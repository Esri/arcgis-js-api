/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(){return[0,0,0,1,0,0,0,0]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]}function r(e,t,n,r,o,u,a,c){return[e,t,n,r,o,u,a,c]}function o(e,t,n,r,o,u,a){const c=.5*o,i=.5*u,f=.5*a;return[e,t,n,r,c*r+i*n-f*t,i*r+f*e-c*n,f*r+c*t-i*e,-c*e-i*t-f*n]}function u(e,t){return new Float64Array(e,t,8)}const a=Object.freeze(Object.defineProperty({__proto__:null,create:t,clone:n,fromValues:r,fromRotationTranslationValues:o,createView:u},Symbol.toStringTag,{value:"Module"}));e.clone=n,e.create=t,e.createView=u,e.fromRotationTranslationValues=o,e.fromValues=r,e.quat2f64=a}));
