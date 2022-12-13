/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){const t=-e[0],i=-e[1],n=-e[2],l=o[3],u=o[7],a=o[11],c=o[15];o[0]+=l*t,o[1]+=l*i,o[2]+=l*n,o[4]+=u*t,o[5]+=u*i,o[6]+=u*n,o[8]+=a*t,o[9]+=a*i,o[10]+=a*n,o[12]+=c*t,o[13]+=c*i,o[14]+=c*n}function t(e,o){const t=e[0],i=e[1],n=e[2];o[12]+=t*o[0]+i*o[4]+n*o[8],o[13]+=t*o[1]+i*o[5]+n*o[9],o[14]+=t*o[2]+i*o[6]+n*o[10],o[14]+=t*o[3]+i*o[7]+n*o[11]}e.applyToModelMatrix=o,e.applyToViewMatrix=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
