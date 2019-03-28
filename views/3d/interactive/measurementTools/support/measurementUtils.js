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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/mathUtils","../../../support/projectionUtils"],function(e,r,t,n,o,c,i,a,s,v,u){var f;!function(e){function r(e,r){var n=r.center;t.vec3.set(n,0,0,0);for(var o=0;o<e.length;++o)t.vec3.add(n,n,e[o]);t.vec3.scale(n,n,1/e.length);for(var c=0,o=0;o<e.length;++o)c=Math.max(c,t.vec3.squaredDistance(n,e[o]));r.radius=Math.sqrt(c)}function n(e,r){if(e.length<3)throw new Error("need at least 3 points to fit a plane");v.planeFromPoints(e[0],e[1],e[2],r)}function c(e,r){return t.vec3.dot(e,r)+e[3]}function f(e,r,n){return u.pointToVector(e,g,n),u.pointToVector(r,d,n),t.vec3.distance(g,d)}function m(e,r){var t=i.WGS84;return u.pointToVector(e,g,t),u.pointToVector(r,d,t),a.inverseGeodeticSolver(s.deg2rad(g[1]),s.deg2rad(g[0]),s.deg2rad(d[1]),s.deg2rad(d[0])).geodesicDistance}function G(e,r){return a.inverseGeodeticSolver(s.deg2rad(e[1]),s.deg2rad(e[0]),s.deg2rad(r[1]),s.deg2rad(r[0])).geodesicDistance}function S(e,r,t){var n=r[0]-e[0],o=r[1]-e[1],c=t[0]-e[0],i=t[1]-e[1];return.5*Math.abs(n*i-o*c)}function y(e,r,t,n){var c=p;return u.vectorToVector(e,n,g,i.WGS84),u.vectorToVector(r,n,d,i.WGS84),u.vectorToVector(t,n,l,i.WGS84),c.setPoint(0,0,g),c.setPoint(0,1,d),c.setPoint(0,2,l),Math.abs(o.geodesicArea(c,"square-meters"))}function b(e,r,n){Math.abs(e[0])>Math.abs(e[1])?t.vec3.set(r,0,1,0):t.vec3.set(r,1,0,0),t.vec3.cross(n,e,r),t.vec3.normalize(r,r),t.vec3.cross(r,n,e),t.vec3.normalize(n,n)}function V(e,r,n){void 0===r&&(r=null),void 0===n&&(n=!0);var o=function(e,r){if(0===r[0]&&0===r[1]&&0===r[2])return!1;for(var n=0;n<e.length;++n)if(t.vec3.dot(r,e[n])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return r&&t.vec3.copy(r,e[0]),!0;t.vec3.set(h,0,0,0);for(var c=0;c<e.length;++c)t.vec3.add(h,h,e[c]);if(t.vec3.normalize(h,h),o(e,h))return r&&t.vec3.copy(r,h),!0;if(!n)return!1;for(var c=0;c<e.length;++c)for(var i=0;i<e.length;++i)if(c!==i&&(t.vec3.cross(h,e[c],e[i]),t.vec3.normalize(h,h),o(e,h)))return r&&t.vec3.copy(r,h),!0;return!1}function z(e,r){if(e===r)return!0;if(e.size!==r.size)return!1;for(var t=0;t<e.size;++t)if(!r.has(e[t]))return!1;return!0}e.boundingSphere=r,e.bestFitPlane=n,e.planePointDistance=c,e.segmentLengthEuclidean=f,e.segmentLengthGeodesic=m,e.segmentLengthGeodesicVector=G,e.triangleAreaEuclidean=S,e.triangleAreaGeodesic=y,e.tangentFrame=b,e.fitHemisphere=V,e.compareSets=z}(f||(f={}));var g=n.vec3f64.create(),d=n.vec3f64.create(),l=n.vec3f64.create(),p=new c({rings:[[g,d,l]],spatialReference:i.WGS84}),h=n.vec3f64.create();return f});