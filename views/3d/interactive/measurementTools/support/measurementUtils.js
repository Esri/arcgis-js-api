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

define(["require","exports","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../lib/gl-matrix","../../../support/mathUtils","../../../support/mathUtils","../../../support/projectionUtils"],function(e,t,r,n,o,i,a,c,d,s){var u;!function(e){function t(e,t){var r=t.center;a.vec3d.set3(0,0,0,r);for(var n=0;n<e.length;++n)a.vec3d.add(r,e[n]);a.vec3d.scale(r,1/e.length);for(var o=0,n=0;n<e.length;++n)o=Math.max(o,a.vec3d.dist2(r,e[n]));t.radius=Math.sqrt(o)}function n(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");d.planeFromPoints(e[0],e[1],e[2],t)}function u(e,t){return a.vec3d.dot(e,t)+e[3]}function p(e,t,r){return s.pointToVector(e,v,r),s.pointToVector(t,g,r),a.vec3d.dist(v,g)}function m(e,t){var r=o.WGS84;return s.pointToVector(e,v,r),s.pointToVector(t,g,r),i.inverseGeodeticSolver(c.deg2rad(v[1]),c.deg2rad(v[0]),c.deg2rad(g[1]),c.deg2rad(g[0])).geodesicDistance}function G(e,t){return i.inverseGeodeticSolver(c.deg2rad(e[1]),c.deg2rad(e[0]),c.deg2rad(t[1]),c.deg2rad(t[0])).geodesicDistance}function S(e,t,r){var n=t[0]-e[0],o=t[1]-e[1],i=r[0]-e[0],a=r[1]-e[1];return.5*Math.abs(n*a-o*i)}function V(e,t,n,i){var a=l;return s.vectorToVector(e,i,v,o.WGS84),s.vectorToVector(t,i,g,o.WGS84),s.vectorToVector(n,i,f,o.WGS84),a.setPoint(0,0,v),a.setPoint(0,1,g),a.setPoint(0,2,f),Math.abs(r.geodesicArea(a,"square-meters"))}function b(e,t,r){Math.abs(e[0])>Math.abs(e[1])?a.vec3d.set3(0,1,0,t):a.vec3d.set3(1,0,0,t),a.vec3d.cross(e,t,r),a.vec3d.normalize(t),a.vec3d.cross(r,e,t),a.vec3d.normalize(r)}function z(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!0);var n=function(e,t){if(0===t[0]&&0===t[1]&&0===t[2])return!1;for(var r=0;r<e.length;++r)if(a.vec3d.dot(t,e[r])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return t&&a.vec3d.set(e[0],t),!0;a.vec3d.set3(0,0,0,h);for(var o=0;o<e.length;++o)a.vec3d.add(h,e[o]);if(a.vec3d.normalize(h),n(e,h))return t&&a.vec3d.set(h,t),!0;if(!r)return!1;for(var o=0;o<e.length;++o)for(var i=0;i<e.length;++i)if(o!==i&&(a.vec3d.cross(e[o],e[i],h),a.vec3d.normalize(h),n(e,h)))return t&&a.vec3d.set(h,t),!0;return!1}function P(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(var r=0;r<e.size;++r)if(!t.has(e[r]))return!1;return!0}e.boundingSphere=t,e.bestFitPlane=n,e.planePointDistance=u,e.segmentLengthEuclidean=p,e.segmentLengthGeodesic=m,e.segmentLengthGeodesicVector=G,e.triangleAreaEuclidean=S,e.triangleAreaGeodesic=V,e.tangentFrame=b,e.fitHemisphere=z,e.compareSets=P}(u||(u={}));var v=[0,0,0],g=[0,0,0],f=[0,0,0],l=new n({rings:[[v,g,f]],spatialReference:o.WGS84}),h=a.vec3d.create();return u});