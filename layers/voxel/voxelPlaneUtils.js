/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/quat","../../chunks/quatf64","../../chunks/vec3f64","../../chunks/common","../../chunks/vec3"],(function(t,e,n,o,a,r){"use strict";const c=o.create(),u=n.create(),s=n.create(),i=n.create(),l=o.fromValues(0,0,1),m=o.fromValues(0,1,0),f=o.fromValues(1,0,0);function g(t){r.copy(c,t),r.normalize(c,c);const o=Math.atan2(c[1],c[0]),u=e.setAxisAngle(n.create(),l,-o);r.transformQuat(c,c,u);const s=-1*Math.atan2(c[2],c[0]);return[a.toDegree(o)+270,a.toDegree(s)+90]}function h(t,n){return e.setAxisAngle(s,l,a.toRadian(t-270)),e.setAxisAngle(i,m,a.toRadian(n-90)),e.multiply(u,s,i),r.copy(c,f),r.transformQuat(c,c,u),r.normalize(c,c),[c[0],c[1],c[2]]}t.computeNormalFromOrientationTilt=h,t.computeOrientationTiltFromNormal=g,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
