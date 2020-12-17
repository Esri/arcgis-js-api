/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./vec3","../views/3d/support/stack","./vector"],(function(n,r,e,t){"use strict";function o(n=p){return[n[0],n[1],n[2],n[3]]}function u(n,r,t,o){return c(n,r,t,o,e.sv4d.get())}function i(n,r){return c(n[0],n[1],n[2],r,e.sv4d.get())}function s(n,r=o()){return c(n[0],n[1],n[2],n[3],r)}function c(n,r,e,t,u=o()){return u[0]=n,u[1]=r,u[2]=e,u[3]=t,u}function f(n,e,t=o()){return r.copy(t,n),t[3]=e,t}function a(n,e,u=o()){return r.cross(u,n,e),r.normalize(u,u),u[3]=t.angle(n,e),u}function l(n){return n}const p=[0,0,1,0];var A=Object.freeze({__proto__:null,create:o,wrap:u,wrapAxisAngle:i,copy:s,fromValues:c,fromAxisAndAngle:f,fromPoints:a,axis:l,UP:p});n.UP=p,n.axis=l,n.axisAngleModule=A,n.copy=s,n.create=o,n.fromAxisAndAngle=f,n.fromPoints=a,n.fromValues=c,n.wrap=u,n.wrapAxisAngle=i}));
