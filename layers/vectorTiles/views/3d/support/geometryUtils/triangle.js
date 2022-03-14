// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","./lineSegment"],(function(e,c,t,r){function d(e,c,r){var d=t.vec2d.dist(e,c),v=t.vec2d.dist(c,r),a=t.vec2d.dist(r,e),n=(d+v+a)/2;return Math.sqrt(n*(n-d)*(n-v)*(n-a))}Object.defineProperty(c,"__esModule",{value:!0}),c.create=function(e,c,r){return void 0===e&&(e=t.vec3d.create()),void 0===c&&(c=t.vec3d.create()),void 0===r&&(r=t.vec3d.create()),{p0:e,p1:c,p2:r}},c.distance2=function(e,c){var d=e.p0,p=e.p1,b=e.p2,g=t.vec3d.subtract(p,d,v),l=t.vec3d.subtract(b,p,a),m=t.vec3d.subtract(d,b,n),M=t.vec3d.subtract(c,d,i),O=t.vec3d.subtract(c,p,o),A=t.vec3d.subtract(c,b,s),V=t.vec3d.cross(g,m),h=t.vec3d.dot(t.vec3d.cross(g,V,u),M),q=t.vec3d.dot(t.vec3d.cross(l,V,u),O),x=t.vec3d.dot(t.vec3d.cross(m,V,u),A);if(h>0&&q>0&&x>0){var P=t.vec3d.dot(V,M);return P*P/t.vec3d.dot(V,V)}var _=r.distance2(r.fromOriginAndVector(d,g,f),c),j=r.distance2(r.fromOriginAndVector(p,l,f),c),y=r.distance2(r.fromOriginAndVector(b,m,f),c);return Math.min(_,j,y)},c.areaPoints2d=d,c.area2d=function(e){return d(e.p0,e.p1,e.p2)};var v=t.vec3d.create(),a=t.vec3d.create(),n=t.vec3d.create(),i=t.vec3d.create(),o=t.vec3d.create(),s=t.vec3d.create(),u=t.vec3d.create(),f=r.create()}));