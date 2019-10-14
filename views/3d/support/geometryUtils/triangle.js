// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack","./lineSegment"],function(e,c,t,r,n,v,a,s){function o(e){return e?{p0:v.vec3f64.clone(e.p0),p1:v.vec3f64.clone(e.p1),p2:v.vec3f64.clone(e.p2)}:{p0:v.vec3f64.create(),p1:v.vec3f64.create(),p2:v.vec3f64.create()}}function i(e,c,t){var r=m.get();return r.p0=e,r.p1=c,r.p2=t,r}function u(e,c){return void 0===c&&(c=o()),p(e.p0,e.p1,e.p2,c)}function p(e,c,t,r){return void 0===r&&(r=o()),n.vec3.copy(r.p0,e),n.vec3.copy(r.p1,c),n.vec3.copy(r.p2,t),r}function d(e,c){var t=e.p0,r=e.p1,v=e.p2,o=n.vec3.subtract(a.sv3d.get(),r,t),i=n.vec3.subtract(a.sv3d.get(),v,r),u=n.vec3.subtract(a.sv3d.get(),t,v),p=n.vec3.subtract(a.sv3d.get(),c,t),d=n.vec3.subtract(a.sv3d.get(),c,r),f=n.vec3.subtract(a.sv3d.get(),c,v),l=n.vec3.cross(o,o,u),g=n.vec3.dot(n.vec3.cross(a.sv3d.get(),o,l),p),m=n.vec3.dot(n.vec3.cross(a.sv3d.get(),i,l),d),y=n.vec3.dot(n.vec3.cross(a.sv3d.get(),u,l),f);if(g>0&&m>0&&y>0){var j=n.vec3.dot(l,p);return j*j/n.vec3.dot(l,l)}var k=s.distance2(s.fromValues(t,o,b.get()),c),x=s.distance2(s.fromValues(r,i,b.get()),c),O=s.distance2(s.fromValues(v,u,b.get()),c);return Math.min(k,x,O)}function f(e,c,t){var r=c.direction,v=c.origin,a=e.p0,s=e.p1,o=e.p2,i=s[0]-a[0],u=s[1]-a[1],p=s[2]-a[2],d=o[0]-a[0],f=o[1]-a[1],l=o[2]-a[2],g=r[1]*l-f*r[2],b=r[2]*d-l*r[0],m=r[0]*f-d*r[1],y=i*g+u*b+p*m;if(y>-1e-5&&y<1e-5)return!1;var j=1/y,k=v[0]-a[0],x=v[1]-a[1],O=v[2]-a[2],S=j*(k*g+x*b+O*m);if(S<0||S>1)return!1;var V=x*p-u*O,w=O*i-p*k,M=k*u-i*x,h=j*(r[0]*V+r[1]*w+r[2]*M);if(h<0||S+h>1)return!1;if(t){var q=j*(d*V+f*w+l*M);n.vec3.scale(t,r,q),n.vec3.add(t,v,t)}return!0}function l(e,c,t){var n=r.vec2.distance(e,c),v=r.vec2.distance(c,t),a=r.vec2.distance(t,e),s=(n+v+a)/2,o=s*(s-n)*(s-v)*(s-a);return o<=0?0:Math.sqrt(o)}function g(e){return l(e.p0,e.p1,e.p2)}Object.defineProperty(c,"__esModule",{value:!0}),c.create=o,c.wrap=i,c.copy=u,c.fromValues=p,c.distance2=d,c.intersectRay=f,c.areaPoints2d=l,c.area2d=g;var b=new t.ObjectStack(s.create),m=new t.ObjectStack(function(){return{p0:null,p1:null,p2:null}})});