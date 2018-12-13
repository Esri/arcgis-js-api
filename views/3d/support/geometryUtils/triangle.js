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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/gl-matrix","../stack","./lineSegment"],function(e,t,c,r,n,v){function a(e){return e?{p0:r.vec3f64.clone(e.p0),p1:r.vec3f64.clone(e.p1),p2:r.vec3f64.clone(e.p2)}:{p0:r.vec3f64.create(),p1:r.vec3f64.create(),p2:r.vec3f64.create()}}function s(e,t,c){var r=l.get();return r.p0=e,r.p1=t,r.p2=c,r}function o(e,t){return void 0===t&&(t=a()),p(e.p0,e.p1,e.p2,t)}function p(e,t,c,n){return void 0===n&&(n=a()),r.vec3.copy(n.p0,e),r.vec3.copy(n.p1,t),r.vec3.copy(n.p2,c),n}function u(e,t){var c=e.p0,a=e.p1,s=e.p2,o=r.vec3.subtract(n.sv3d.get(),a,c),p=r.vec3.subtract(n.sv3d.get(),s,a),u=r.vec3.subtract(n.sv3d.get(),c,s),d=r.vec3.subtract(n.sv3d.get(),t,c),i=r.vec3.subtract(n.sv3d.get(),t,a),l=r.vec3.subtract(n.sv3d.get(),t,s),g=r.vec3.cross(o,o,u),b=r.vec3.dot(r.vec3.cross(n.sv3d.get(),o,g),d),m=r.vec3.dot(r.vec3.cross(n.sv3d.get(),p,g),i),y=r.vec3.dot(r.vec3.cross(n.sv3d.get(),u,g),l);if(b>0&&m>0&&y>0){var j=r.vec3.dot(g,d);return j*j/r.vec3.dot(g,g)}var k=v.distance2(v.fromValues(c,o,f.get()),t),O=v.distance2(v.fromValues(a,p,f.get()),t),S=v.distance2(v.fromValues(s,u,f.get()),t);return Math.min(k,O,S)}function d(e,t,c){var n=r.vec2.distance(e,t),v=r.vec2.distance(t,c),a=r.vec2.distance(c,e),s=(n+v+a)/2,o=s*(s-n)*(s-v)*(s-a);return o<=0?0:Math.sqrt(o)}function i(e){return d(e.p0,e.p1,e.p2)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=a,t.wrap=s,t.copy=o,t.fromValues=p,t.distance2=u,t.areaPoints2d=d,t.area2d=i;var f=new c.ObjectStack(v.create),l=new c.ObjectStack(function(){return{p0:null,p1:null,p2:null}})});