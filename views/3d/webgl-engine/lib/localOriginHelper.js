/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function o(t,o){const e=-t[0],n=-t[1],i=-t[2],c=o[3],r=o[7],a=o[11],l=o[15];o[0]+=c*e,o[1]+=c*n,o[2]+=c*i,o[4]+=r*e,o[5]+=r*n,o[6]+=r*i,o[8]+=a*e,o[9]+=a*n,o[10]+=a*i,o[12]+=l*e,o[13]+=l*n,o[14]+=l*i}function e(t,o){const e=t[0],n=t[1],i=t[2];o[12]+=e*o[0]+n*o[4]+i*o[8],o[13]+=e*o[1]+n*o[5]+i*o[9],o[14]+=e*o[2]+n*o[6]+i*o[10],o[14]+=e*o[3]+n*o[7]+i*o[11]}t.applyToModelMatrix=o,t.applyToViewMatrix=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
