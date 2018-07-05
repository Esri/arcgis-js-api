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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../lib/glMatrix","../../../support/mathUtils","../../../support/projectionUtils"],function(e,t,r,n,o,c,i,a,d){var s;!function(e){function t(e,t){var r=t.center;i.vec3d.set3(0,0,0,r);for(var n=0;n<e.length;++n)i.vec3d.add(r,e[n]);i.vec3d.scale(r,1/e.length);for(var o=0,n=0;n<e.length;++n)o=Math.max(o,i.vec3d.dist2(r,e[n]));t.radius=Math.sqrt(o)}function n(e,t,r,n){i.vec3d.subtract(t,e,P),i.vec3d.subtract(r,e,T),i.vec3d.cross(P,T,n),i.vec3d.normalize(n,n),n[3]=-i.vec3d.dot(e,n)}function s(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");n(e[0],e[1],e[2],t)}function h(e,t){return i.vec3d.dot(e,t)+e[3]}function p(e,t,r){return d.pointToVector(e,v,r),d.pointToVector(t,u,r),i.vec3d.dist(v,u)}function m(e,t){var r=o.WGS84;return d.pointToVector(e,v,r),d.pointToVector(t,u,r),c.inverseGeodeticSolver(a.deg2rad(v[1]),a.deg2rad(v[0]),a.deg2rad(u[1]),a.deg2rad(u[0])).geodesicDistance}function G(e,t){return c.inverseGeodeticSolver(a.deg2rad(e[1]),a.deg2rad(e[0]),a.deg2rad(t[1]),a.deg2rad(t[0])).geodesicDistance}function S(e,t,r){var n=t[0]-e[0],o=t[1]-e[1],c=r[0]-e[0],i=r[1]-e[1];return.5*Math.abs(n*i-o*c)}function b(e,t,n,c){var i=f;return d.vectorToVector(e,c,v,o.WGS84),d.vectorToVector(t,c,u,o.WGS84),d.vectorToVector(n,c,g,o.WGS84),i.setPoint(0,0,v),i.setPoint(0,1,u),i.setPoint(0,2,g),Math.abs(r.geodesicArea(i,"square-meters"))}function z(e,t,r){Math.abs(e[0])>Math.abs(e[1])?i.vec3d.set3(0,1,0,t):i.vec3d.set3(1,0,0,t),i.vec3d.cross(e,t,r),i.vec3d.normalize(t),i.vec3d.cross(r,e,t),i.vec3d.normalize(r)}function V(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!0);var n=function(e,t){if(0===t[0]&&0===t[1]&&0===t[2])return!1;for(var r=0;r<e.length;++r)if(i.vec3d.dot(t,e[r])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return t&&i.vec3d.set(e[0],t),!0;i.vec3d.set3(0,0,0,l);for(var o=0;o<e.length;++o)i.vec3d.add(l,e[o]);if(i.vec3d.normalize(l),n(e,l))return t&&i.vec3d.set(l,t),!0;if(!r)return!1;for(var o=0;o<e.length;++o)for(var c=0;c<e.length;++c)if(o!==c&&(i.vec3d.cross(e[o],e[c],l),i.vec3d.normalize(l),n(e,l)))return t&&i.vec3d.set(l,t),!0;return!1}function M(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(var r=0;r<e.size;++r)if(!t.has(e[r]))return!1;return!0}e.boundingSphere=t,e.planeFromPoints=n;var P=i.vec3d.create(),T=i.vec3d.create();e.bestFitPlane=s,e.planePointDistance=h,e.segmentLengthEuclidean=p,e.segmentLengthGeodesic=m,e.segmentLengthGeodesicVector=G,e.triangleAreaEuclidean=S,e.triangleAreaGeodesic=b,e.tangentFrame=z,e.fitHemisphere=V,e.compareSets=M}(s||(s={}));var v=[0,0,0],u=[0,0,0],g=[0,0,0],f=new n({rings:[[v,u,g]],spatialReference:o.WGS84}),l=i.vec3d.create();return s});