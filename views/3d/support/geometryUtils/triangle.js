// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack","./lineSegment"],(function(e,t,c,r,a,n,v,s){"use strict";function o(e){return e?{p0:n.vec3f64.clone(e.p0),p1:n.vec3f64.clone(e.p1),p2:n.vec3f64.clone(e.p2)}:{p0:n.vec3f64.create(),p1:n.vec3f64.create(),p2:n.vec3f64.create()}}function i(e,t,c,r){return void 0===r&&(r=o()),a.vec3.copy(r.p0,e),a.vec3.copy(r.p1,t),a.vec3.copy(r.p2,c),r}function u(e,t,c){var a=r.vec2.distance(e,t),n=r.vec2.distance(t,c),v=r.vec2.distance(c,e),s=(a+n+v)/2,o=s*(s-a)*(s-n)*(s-v);return o<=0?0:Math.sqrt(o)}Object.defineProperty(t,"__esModule",{value:!0}),t.areaPoints3d=t.area2d=t.areaPoints2d=t.intersectRay=t.distance2=t.fromValues=t.copy=t.wrap=t.create=void 0,t.create=o,t.wrap=function(e,t,c){var r=d.get();return r.p0=e,r.p1=t,r.p2=c,r},t.copy=function(e,t){return void 0===t&&(t=o()),i(e.p0,e.p1,e.p2,t)},t.fromValues=i,t.distance2=function(e,t){var c=e.p0,r=e.p1,n=e.p2,o=a.vec3.subtract(v.sv3d.get(),r,c),i=a.vec3.subtract(v.sv3d.get(),n,r),u=a.vec3.subtract(v.sv3d.get(),c,n),d=a.vec3.subtract(v.sv3d.get(),t,c),f=a.vec3.subtract(v.sv3d.get(),t,r),l=a.vec3.subtract(v.sv3d.get(),t,n),g=a.vec3.cross(o,o,u),b=a.vec3.dot(a.vec3.cross(v.sv3d.get(),o,g),d),m=a.vec3.dot(a.vec3.cross(v.sv3d.get(),i,g),f),y=a.vec3.dot(a.vec3.cross(v.sv3d.get(),u,g),l);if(b>0&&m>0&&y>0){var P=a.vec3.dot(g,d);return P*P/a.vec3.dot(g,g)}var V=s.distance2(s.fromValues(c,o,p.get()),t),j=s.distance2(s.fromValues(r,i,p.get()),t),k=s.distance2(s.fromValues(n,u,p.get()),t);return Math.min(V,j,k)},t.intersectRay=function(e,t,c){var r=t.direction,n=t.origin,v=e.p0,s=e.p1,o=e.p2,i=s[0]-v[0],u=s[1]-v[1],p=s[2]-v[2],d=o[0]-v[0],f=o[1]-v[1],l=o[2]-v[2],g=r[1]*l-f*r[2],b=r[2]*d-l*r[0],m=r[0]*f-d*r[1],y=i*g+u*b+p*m;if(y>-1e-5&&y<1e-5)return!1;var P=1/y,V=n[0]-v[0],j=n[1]-v[1],k=n[2]-v[2],w=P*(V*g+j*b+k*m);if(w<0||w>1)return!1;var x=j*p-u*k,O=k*i-p*V,S=V*u-i*j,h=P*(r[0]*x+r[1]*O+r[2]*S);if(h<0||w+h>1)return!1;if(c){var M=P*(d*x+f*O+l*S);a.vec3.scale(c,r,M),a.vec3.add(c,n,c)}return!0},t.areaPoints2d=u,t.area2d=function(e){return u(e.p0,e.p1,e.p2)},t.areaPoints3d=function(e,t,c){return a.vec3.subtract(f,t,e),a.vec3.subtract(l,c,e),a.vec3.length(a.vec3.cross(f,f,l))/2};var p=new c.ObjectStack(s.create),d=new c.ObjectStack((function(){return{p0:null,p1:null,p2:null}})),f=n.vec3f64.create(),l=n.vec3f64.create()}));