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

define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/mathUtils","../../../support/projectionUtils"],function(e,r,t,n,o,i,c,a,s,v){var u;!function(e){function r(e,r){var n=r.center;t.vec3.set(n,0,0,0);for(var o=0;o<e.length;++o)t.vec3.add(n,n,e[o]);t.vec3.scale(n,n,1/e.length);for(var i=0,o=0;o<e.length;++o)i=Math.max(i,t.vec3.squaredDistance(n,e[o]));r.radius=Math.sqrt(i)}function o(e,r){if(e.length<3)throw new Error("need at least 3 points to fit a plane");s.planeFromPoints(e[0],e[1],e[2],r)}function u(e,r){return t.vec3.dot(e,r)+e[3]}function h(e,r,n){return v.pointToVector(e,g,n),v.pointToVector(r,d,n),t.vec3.distance(g,d)}function m(e,r){var t=i.WGS84;return v.pointToVector(e,g,t),v.pointToVector(r,d,t),c.inverseGeodeticSolver(a.deg2rad(g[1]),a.deg2rad(g[0]),a.deg2rad(d[1]),a.deg2rad(d[0])).geodesicDistance}function G(e,r){return c.inverseGeodeticSolver(a.deg2rad(e[1]),a.deg2rad(e[0]),a.deg2rad(r[1]),a.deg2rad(r[0])).geodesicDistance}function S(e,r,t){var n=r[0]-e[0],o=r[1]-e[1],i=t[0]-e[0],c=t[1]-e[1];return.5*Math.abs(n*c-o*i)}function y(e,r,t,o){var c=l;return v.vectorToVector(e,o,g,i.WGS84),v.vectorToVector(r,o,d,i.WGS84),v.vectorToVector(t,o,f,i.WGS84),c.setPoint(0,0,g),c.setPoint(0,1,d),c.setPoint(0,2,f),Math.abs(n.geodesicArea(c,"square-meters"))}function V(e,r,n){Math.abs(e[0])>Math.abs(e[1])?t.vec3.set(r,0,1,0):t.vec3.set(r,1,0,0),t.vec3.cross(n,e,r),t.vec3.normalize(r,r),t.vec3.cross(r,n,e),t.vec3.normalize(n,n)}function b(e,r,n){void 0===r&&(r=null),void 0===n&&(n=!0);var o=function(e,r){if(0===r[0]&&0===r[1]&&0===r[2])return!1;for(var n=0;n<e.length;++n)if(t.vec3.dot(r,e[n])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return r&&t.vec3.copy(r,e[0]),!0;t.vec3.set(p,0,0,0);for(var i=0;i<e.length;++i)t.vec3.add(p,p,e[i]);if(t.vec3.normalize(p,p),o(e,p))return r&&t.vec3.copy(r,p),!0;if(!n)return!1;for(var i=0;i<e.length;++i)for(var c=0;c<e.length;++c)if(i!==c&&(t.vec3.cross(p,e[i],e[c]),t.vec3.normalize(p,p),o(e,p)))return r&&t.vec3.copy(r,p),!0;return!1}function z(e,r){if(e===r)return!0;if(e.size!==r.size)return!1;for(var t=0;t<e.size;++t)if(!r.has(e[t]))return!1;return!0}e.boundingSphere=r,e.bestFitPlane=o,e.planePointDistance=u,e.segmentLengthEuclidean=h,e.segmentLengthGeodesic=m,e.segmentLengthGeodesicVector=G,e.triangleAreaEuclidean=S,e.triangleAreaGeodesic=y,e.tangentFrame=V,e.fitHemisphere=b,e.compareSets=z}(u||(u={}));var g=t.vec3f64.create(),d=t.vec3f64.create(),f=t.vec3f64.create(),l=new o({rings:[[g,d,f]],spatialReference:i.WGS84}),p=t.vec3f64.create();return u});