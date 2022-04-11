/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){const t=o,i=-e[0],n=-e[1],l=-e[2],u=t[3],a=t[7],c=t[11],r=t[15];t[0]+=u*i,t[1]+=u*n,t[2]+=u*l,t[4]+=a*i,t[5]+=a*n,t[6]+=a*l,t[8]+=c*i,t[9]+=c*n,t[10]+=c*l,t[12]+=r*i,t[13]+=r*n,t[14]+=r*l}function t(e,o){const t=o,i=e[0],n=e[1],l=e[2];t[12]+=i*t[0]+n*t[4]+l*t[8],t[13]+=i*t[1]+n*t[5]+l*t[9],t[14]+=i*t[2]+n*t[6]+l*t[10],t[14]+=i*t[3]+n*t[7]+l*t[11]}e.applyToModelMatrix=o,e.applyToViewMatrix=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
