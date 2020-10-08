// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/pointUtils","../../../support/projectionUtils"],(function(e,t,r,n,o,i,a,c,s,u,v){"use strict";var l;!function(e){e.boundingSphere=function(e,t){var n=t.center;r.vec3.set(n,0,0,0);for(var o=0;o<e.length;++o)r.vec3.add(n,n,e[o]);r.vec3.scale(n,n,1/e.length);var i=0;for(o=0;o<e.length;++o)i=Math.max(i,r.vec3.squaredDistance(n,e[o]));t.radius=Math.sqrt(i)},e.bestFitPlane=function(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");s.planeFromPoints(e[0],e[1],e[2],t)},e.planePointDistance=function(e,t){return r.vec3.dot(e,t)+e[3]},e.segmentLengthEuclidean=function(e,t,n){return u.pointToVector(e,f,n)&&u.pointToVector(t,g,n)?r.vec3.distance(f,g):0},e.segmentLengthGeodesic=function(e,t){if(!u.pointToWGS84ComparableLonLat(e,f)||!u.pointToWGS84ComparableLonLat(t,g))return 0;var r={distance:null};return c.inverseGeodeticSolver(r,[f[0],f[1]],[g[0],g[1]]),r.distance},e.segmentLengthGeodesicVector=function(e,t){var r={distance:null};return c.inverseGeodeticSolver(r,[e[0],e[1]],[t[0],t[1]]),r.distance},e.triangleAreaEuclidean=function(e,t,r){var n=t[0]-e[0],o=t[1]-e[1],i=r[0]-e[0],a=r[1]-e[1];return.5*Math.abs(n*a-o*i)},e.triangleAreaGeodesic=function(e,t,r,n){var i=d;return v.vectorToWGS84ComparableLonLat(e,n,f)&&v.vectorToWGS84ComparableLonLat(t,n,g)&&v.vectorToWGS84ComparableLonLat(r,n,p)?(i.setPoint(0,0,f),i.setPoint(0,1,g),i.setPoint(0,2,p),Math.abs(o.geodesicArea(i,"square-meters"))):0},e.tangentFrame=function(e,t,n){Math.abs(e[0])>Math.abs(e[1])?r.vec3.set(t,0,1,0):r.vec3.set(t,1,0,0),r.vec3.cross(n,e,t),r.vec3.normalize(t,t),r.vec3.cross(t,n,e),r.vec3.normalize(n,n)},e.fitHemisphere=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!0);var o=function(e,t){if(0===t[0]&&0===t[1]&&0===t[2])return!1;for(var n=0;n<e.length;++n)if(r.vec3.dot(t,e[n])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return t&&r.vec3.copy(t,e[0]),!0;r.vec3.set(m,0,0,0);for(var i=0;i<e.length;++i)r.vec3.add(m,m,e[i]);if(r.vec3.normalize(m,m),o(e,m))return t&&r.vec3.copy(t,m),!0;if(!n)return!1;for(i=0;i<e.length;++i)for(var a=0;a<e.length;++a)if(i!==a&&(r.vec3.cross(m,e[i],e[a]),r.vec3.normalize(m,m),o(e,m)))return t&&r.vec3.copy(t,m),!0;return!1},e.compareSets=function(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(var r=0;r<e.size;++r)if(!t.has(e[r]))return!1;return!0}}(l||(l={}));var f=n.vec3f64.create(),g=n.vec3f64.create(),p=n.vec3f64.create(),d=new i({rings:[[f,g,p]],spatialReference:a.WGS84}),m=n.vec3f64.create();return l}));