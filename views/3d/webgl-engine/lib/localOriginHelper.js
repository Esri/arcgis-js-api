/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.applyToModelMatrix=function(e,t){const o=t,n=-e[0],i=-e[1],c=-e[2],p=o[3],r=o[7],s=o[11],u=o[15];o[0]+=p*n,o[1]+=p*i,o[2]+=p*c,o[4]+=r*n,o[5]+=r*i,o[6]+=r*c,o[8]+=s*n,o[9]+=s*i,o[10]+=s*c,o[12]+=u*n,o[13]+=u*i,o[14]+=u*c},e.applyToViewMatrix=function(e,t){const o=t,n=e[0],i=e[1],c=e[2];o[12]+=n*o[0]+i*o[4]+c*o[8],o[13]+=n*o[1]+i*o[5]+c*o[9],o[14]+=n*o[2]+i*o[6]+c*o[10],o[14]+=n*o[3]+i*o[7]+c*o[11]},Object.defineProperty(e,"__esModule",{value:!0})}));
