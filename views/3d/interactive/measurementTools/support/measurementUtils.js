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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../geometry/geometryEngine","../../../../../geometry/Polygon","../../../../../geometry/SpatialReference","../../../../../geometry/support/geodesicUtils","../../../support/mathUtils","../../../support/projectionUtils"],(function(e,t,r,n,o,a,i,c,s,v){var u;!function(e){e.boundingSphere=function(e,t){var n=t.center;r.vec3.set(n,0,0,0);for(var o=0;o<e.length;++o)r.vec3.add(n,n,e[o]);r.vec3.scale(n,n,1/e.length);var a=0;for(o=0;o<e.length;++o)a=Math.max(a,r.vec3.squaredDistance(n,e[o]));t.radius=Math.sqrt(a)},e.bestFitPlane=function(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");s.planeFromPoints(e[0],e[1],e[2],t)},e.planePointDistance=function(e,t){return r.vec3.dot(e,t)+e[3]},e.segmentLengthEuclidean=function(e,t,n){return v.pointToVector(e,l,n)&&v.pointToVector(t,f,n)?r.vec3.distance(l,f):0},e.segmentLengthGeodesic=function(e,t){if(!v.pointToWGS84ComparableLonLat(e,l))return 0;if(!v.pointToWGS84ComparableLonLat(t,f))return 0;var r={distance:null};return c.inverseGeodeticSolver(r,[l[0],l[1]],[f[0],f[1]]),r.distance},e.segmentLengthGeodesicVector=function(e,t){var r={distance:null};return c.inverseGeodeticSolver(r,[e[0],e[1]],[t[0],t[1]]),r.distance},e.triangleAreaEuclidean=function(e,t,r){var n=t[0]-e[0],o=t[1]-e[1],a=r[0]-e[0],i=r[1]-e[1];return.5*Math.abs(n*i-o*a)},e.triangleAreaGeodesic=function(e,t,r,n){var a=p;return v.vectorToWGS84ComparableLonLat(e,n,l)&&v.vectorToWGS84ComparableLonLat(t,n,f)&&v.vectorToWGS84ComparableLonLat(r,n,g)?(a.setPoint(0,0,l),a.setPoint(0,1,f),a.setPoint(0,2,g),Math.abs(o.geodesicArea(a,"square-meters"))):0},e.tangentFrame=function(e,t,n){Math.abs(e[0])>Math.abs(e[1])?r.vec3.set(t,0,1,0):r.vec3.set(t,1,0,0),r.vec3.cross(n,e,t),r.vec3.normalize(t,t),r.vec3.cross(t,n,e),r.vec3.normalize(n,n)},e.fitHemisphere=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!0);var o=function(e,t){if(0===t[0]&&0===t[1]&&0===t[2])return!1;for(var n=0;n<e.length;++n)if(r.vec3.dot(t,e[n])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return t&&r.vec3.copy(t,e[0]),!0;r.vec3.set(d,0,0,0);for(var a=0;a<e.length;++a)r.vec3.add(d,d,e[a]);if(r.vec3.normalize(d,d),o(e,d))return t&&r.vec3.copy(t,d),!0;if(!n)return!1;for(a=0;a<e.length;++a)for(var i=0;i<e.length;++i)if(a!==i&&(r.vec3.cross(d,e[a],e[i]),r.vec3.normalize(d,d),o(e,d)))return t&&r.vec3.copy(t,d),!0;return!1},e.compareSets=function(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(var r=0;r<e.size;++r)if(!t.has(e[r]))return!1;return!0}}(u||(u={}));var l=n.vec3f64.create(),f=n.vec3f64.create(),g=n.vec3f64.create(),p=new a({rings:[[l,f,g]],spatialReference:i.WGS84}),d=n.vec3f64.create();return u}));