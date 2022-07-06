/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,o){const t=o,c=-n[0],f=-n[1],i=-n[2],s=t[3],u=t[7],e=t[11],p=t[15];t[0]+=s*c,t[1]+=s*f,t[2]+=s*i,t[4]+=u*c,t[5]+=u*f,t[6]+=u*i,t[8]+=e*c,t[9]+=e*f,t[10]+=e*i,t[12]+=p*c,t[13]+=p*f,t[14]+=p*i}function o(n,o){const t=o,c=n[0],f=n[1],i=n[2];t[12]+=c*t[0]+f*t[4]+i*t[8],t[13]+=c*t[1]+f*t[5]+i*t[9],t[14]+=c*t[2]+f*t[6]+i*t[10],t[14]+=c*t[3]+f*t[7]+i*t[11]}export{n as applyToModelMatrix,o as applyToViewMatrix};
