/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n;!function(n){function t(n,t){const c=n[t],o=n[t+1],r=n[t+2];return Math.sqrt(c*c+o*o+r*r)}function c(n,t){const c=n[t],o=n[t+1],r=n[t+2],u=1/Math.sqrt(c*c+o*o+r*r);n[t]*=u,n[t+1]*=u,n[t+2]*=u}function o(n,t,c){n[t]*=c,n[t+1]*=c,n[t+2]*=c}function r(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]+c[o],r[u+1]=n[t+1]+c[o+1],r[u+2]=n[t+2]+c[o+2]}function u(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]-c[o],r[u+1]=n[t+1]-c[o+1],r[u+2]=n[t+2]-c[o+2]}n.length=t,n.normalize=c,n.scale=o,n.add=r,n.subtract=u}(n||(n={}));export{n as Vec3Compact};
