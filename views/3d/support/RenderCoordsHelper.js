// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../geometry/SpatialReference","../../../geometry/Point","../../../geometry/support/scaleUtils","../lib/glMatrix","./earthUtils","./mathUtils","./projectionUtils","../webgl-engine/lib/BufferVectorMath","../webgl-engine/lib/Util"],function(t,e,n,o,r,i,c,u,a,l,s,d){var f=function(){function t(t){this.spatialReference=t}return t.prototype.toRenderCoords=function(t,e,n){return t instanceof r?l.pointToVector(t,e,this.spatialReference):l.vectorToVector(t,e,n,this.spatialReference)},t.prototype.fromRenderCoords=function(t,e,n){return e instanceof r||e instanceof o?l.vectorToPoint(t,this.spatialReference,e,n):l.vectorToVector(t,this.spatialReference,e,n)},t.prototype.viewAngle=function(t,e){this.worldUpAtPosition(t,p),c.vec3d.subtract(e,t,A);var n=c.vec3d.length(A);return 0===n?0:a.acos(c.vec3d.dot(A,p)/n)},t}();!function(t){var e=function(t){function e(e){var n=t.call(this,e||l.SphericalRenderSpatialReference)||this;return n.unitInMeters=1,n}return n(e,t),e.prototype.getAltitude=function(t,n){return void 0===n&&(n=0),e.getAltitude(t,n)},e.prototype.setAltitude=function(t,n,o){void 0===o&&(o=0),e.setAltitude(t,n,o)},e.prototype.setAltitudeOfTransformation=function(t,n){e.setAltitudeOfTransformation(t,n)},e.prototype.worldUpAtPosition=function(t,n){return e.worldUpAtPosition(t,n)},e.prototype.intersectManifold=function(t,n,o,r){return e.intersectManifold(t,n,o,r)},e.getAltitude=function(t,e){void 0===e&&(e=0);var n=s.Vec3Compact.length(t,e);return n-u.earthRadius},e.setAltitude=function(t,e,n){void 0===n&&(n=0),n=n||0;var o=(t+u.earthRadius)/s.Vec3Compact.length(e,n);s.Vec3Compact.scale(e,n,o)},e.setAltitudeOfTransformation=function(t,n){e.setAltitude(t,n,12)},e.worldUpAtPosition=function(t,e){return c.vec3d.normalize(t||[0,0,0],e||p)},e.intersectManifold=function(t,e,n,o){return void 0===o&&(o=c.vec3d.create()),d.raySphere(t,e,null,u.earthRadius+n,o)},e}(t);t.Spherical=e,function(t){}(e);var o=function(t){function e(e){var n=t.call(this,e)||this;return n.unitInMeters=i.getMetersPerUnitForSR(e),n}return n(e,t),e.prototype.getAltitude=function(t,n){return void 0===n&&(n=0),e.getAltitude(t,n)},e.prototype.setAltitude=function(t,n,o){void 0===o&&(o=0),e.setAltitude(t,n,o)},e.prototype.setAltitudeOfTransformation=function(t,n){e.setAltitudeOfTransformation(t,n)},e.prototype.worldUpAtPosition=function(t,n){return e.worldUpAtPosition(t,n)},e.prototype.intersectManifold=function(t,n,o,r){return e.intersectManifold(t,n,o,r)},e.getAltitude=function(t,e){return e?t[e+2]:t[2]},e.setAltitude=function(t,e,n){n?e[n+2]=t:e[2]=t},e.setAltitudeOfTransformation=function(t,n){e.setAltitude(t,n,12)},e.worldUpAtPosition=function(t,n){return n?c.vec3d.set(e.worldUp,n):e.worldUp},e.intersectManifold=function(t,n,o,r){return void 0===r&&(r=c.vec3d.create()),c.vec4d.set4(e.worldUp[0],e.worldUp[1],e.worldUp[2],-o,v),d.rayPlane(t,n,v,r)?c.vec3d.dot(c.vec3d.subtract(r,t,A),n)<0?!1:!0:!1},e.worldUp=[0,0,1],e}(t);t.Planar=o,function(t){}(o)}(f||(f={}));var p=c.vec3d.create(),v=c.vec4d.create(),A=c.vec3d.create();return f});