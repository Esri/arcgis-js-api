// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec2","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../stack","./lineSegment"],function(e,c,t,r,n,v,a,s){function o(e){return e?{p0:v.vec3f64.clone(e.p0),p1:v.vec3f64.clone(e.p1),p2:v.vec3f64.clone(e.p2)}:{p0:v.vec3f64.create(),p1:v.vec3f64.create(),p2:v.vec3f64.create()}}function p(e,c,t){var r=b.get();return r.p0=e,r.p1=c,r.p2=t,r}function u(e,c){return void 0===c&&(c=o()),i(e.p0,e.p1,e.p2,c)}function i(e,c,t,r){return void 0===r&&(r=o()),n.vec3.copy(r.p0,e),n.vec3.copy(r.p1,c),n.vec3.copy(r.p2,t),r}function d(e,c){var t=e.p0,r=e.p1,v=e.p2,o=n.vec3.subtract(a.sv3d.get(),r,t),p=n.vec3.subtract(a.sv3d.get(),v,r),u=n.vec3.subtract(a.sv3d.get(),t,v),i=n.vec3.subtract(a.sv3d.get(),c,t),d=n.vec3.subtract(a.sv3d.get(),c,r),f=n.vec3.subtract(a.sv3d.get(),c,v),l=n.vec3.cross(o,o,u),b=n.vec3.dot(n.vec3.cross(a.sv3d.get(),o,l),i),m=n.vec3.dot(n.vec3.cross(a.sv3d.get(),p,l),d),y=n.vec3.dot(n.vec3.cross(a.sv3d.get(),u,l),f);if(b>0&&m>0&&y>0){var j=n.vec3.dot(l,i);return j*j/n.vec3.dot(l,l)}var k=s.distance2(s.fromValues(t,o,g.get()),c),x=s.distance2(s.fromValues(r,p,g.get()),c),O=s.distance2(s.fromValues(v,u,g.get()),c);return Math.min(k,x,O)}function f(e,c,t){var n=r.vec2.distance(e,c),v=r.vec2.distance(c,t),a=r.vec2.distance(t,e),s=(n+v+a)/2,o=s*(s-n)*(s-v)*(s-a);return o<=0?0:Math.sqrt(o)}function l(e){return f(e.p0,e.p1,e.p2)}Object.defineProperty(c,"__esModule",{value:!0}),c.create=o,c.wrap=p,c.copy=u,c.fromValues=i,c.distance2=d,c.areaPoints2d=f,c.area2d=l;var g=new t.ObjectStack(s.create),b=new t.ObjectStack(function(){return{p0:null,p1:null,p2:null}})});