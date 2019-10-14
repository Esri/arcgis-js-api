// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","./lineSegment"],function(e,c,t,r){function d(e,c,r){return void 0===e&&(e=t.vec3d.create()),void 0===c&&(c=t.vec3d.create()),void 0===r&&(r=t.vec3d.create()),{p0:e,p1:c,p2:r}}function v(e,c){var d=e.p0,v=e.p1,a=e.p2,n=t.vec3d.subtract(v,d,i),l=t.vec3d.subtract(a,v,o),m=t.vec3d.subtract(d,a,s),M=t.vec3d.subtract(c,d,u),O=t.vec3d.subtract(c,v,f),A=t.vec3d.subtract(c,a,p),V=t.vec3d.cross(n,m),h=t.vec3d.dot(t.vec3d.cross(n,V,b),M),q=t.vec3d.dot(t.vec3d.cross(l,V,b),O),x=t.vec3d.dot(t.vec3d.cross(m,V,b),A);if(h>0&&q>0&&x>0){var P=t.vec3d.dot(V,M);return P*P/t.vec3d.dot(V,V)}var _=r.distance2(r.fromOriginAndVector(d,n,g),c),j=r.distance2(r.fromOriginAndVector(v,l,g),c),y=r.distance2(r.fromOriginAndVector(a,m,g),c);return Math.min(_,j,y)}function a(e,c,r){var d=t.vec2d.dist(e,c),v=t.vec2d.dist(c,r),a=t.vec2d.dist(r,e),n=(d+v+a)/2;return Math.sqrt(n*(n-d)*(n-v)*(n-a))}function n(e){return a(e.p0,e.p1,e.p2)}Object.defineProperty(c,"__esModule",{value:!0}),c.create=d,c.distance2=v,c.areaPoints2d=a,c.area2d=n;var i=t.vec3d.create(),o=t.vec3d.create(),s=t.vec3d.create(),u=t.vec3d.create(),f=t.vec3d.create(),p=t.vec3d.create(),b=t.vec3d.create(),g=r.create()});