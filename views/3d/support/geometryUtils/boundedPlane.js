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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","../../lib/gl-matrix","./plane"],function(e,s,i,r,t){function a(e){return void 0===e&&(e=s.UP),{origin:r.vec3d.create(e.origin),basis1:r.vec3d.create(e.basis1),basis2:r.vec3d.create(e.basis2)}}function n(e,s){return r.vec3d.set(s.origin,e.origin),r.vec3d.set(s.basis1,e.basis1),r.vec3d.set(s.basis2,e.basis2),e}function c(e,s,i,t){return void 0===t&&(t=a()),r.vec3d.set(e,t.origin),r.vec3d.set(s,t.basis1),r.vec3d.set(i,t.basis2),u(t,"fromValues()"),t}function o(e,s){return void 0===s&&(s=t.create()),t.fromVectorsAndPoint(e.basis2,e.basis1,e.origin,s)}function d(e,s,i,r){return o(e,f),!!t.intersectRay(f,s,i,r)&&b(e,s)}function v(e,s){r.vec3d.cross(e.basis1,e.basis2,m);var i=-r.vec3d.dot(m,e.origin);return r.vec3d.dot(m,s)+i<0&&b(e,s)}function b(e,s){r.vec3d.subtract(s,e.origin,l);var i=r.vec3d.length2(e.basis1),t=r.vec3d.length2(e.basis2),a=r.vec3d.dot(e.basis1,l),n=r.vec3d.dot(e.basis2,l);return-a-i<0&&a-i<0&&-n-t<0&&n-t<0}function u(e,s){Math.abs(r.vec3d.dot(e.basis1,e.basis2))>1e-6&&g.warn(s,"Provided basis vectors are not perpendicular")}Object.defineProperty(s,"__esModule",{value:!0});var g=i.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");s.create=a,s.set=n,s.fromValues=c,s.toPlane=o,s.intersectRay=d,s.extrusionContainsPoint=v;var f=t.create(),l=r.vec3d.create(),m=r.vec3d.create();s.UP={origin:r.vec3d.createFrom(0,0,0),basis1:r.vec3d.createFrom(1,0,0),basis2:r.vec3d.createFrom(0,1,0)}});