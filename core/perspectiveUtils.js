/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../chunks/mat3","../chunks/mat3f64","../chunks/vec2","../chunks/vec3","../chunks/vec3f64"],(function(t,e,n,r,s,c){"use strict";const o=c.create(),a=n.create(),u=n.create(),i=n.create();function f(t,n,c){return s.set(o,n[0],n[1],1),s.transformMat3(o,o,e.transpose(a,c)),0===o[2]?r.set(t,o[0],o[1]):r.set(t,o[0]/o[2],o[1]/o[2])}function l(t,n,r){return m(u,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),m(i,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),e.multiply(t,e.adjoint(u,u),i)}function m(t,n,r,c,u,i,f,l,m){e.set(t,n,c,i,r,u,f,1,1,1),s.set(o,l,m,1),e.adjoint(a,t);const[v,d,p]=s.transformMat3(o,o,e.transpose(a,a));return e.set(a,v,0,0,0,d,0,0,0,p),e.multiply(t,a,t)}t.getProjectiveTransform=l,t.transformProjective=f,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
