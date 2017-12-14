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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../geometry/SpatialReference","../../../geometry/Point","../../../geometry/support/scaleUtils","../lib/glMatrix","./earthUtils","./projectionUtils","../webgl-engine/lib/BufferVectorMath","../webgl-engine/lib/Util"],function(e,t,r,o,n,i,c,a,s,p,l){function d(e,t){return"global"===e?new f(t):new v(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createRenderCoordsHelper=d;var u=function(){function e(e,t){this.spatialReference=e,this.unitInMeters=t}return e.prototype.toRenderCoords=function(e,t,r){return e instanceof n?s.pointToVector(e,t,this.spatialReference):s.vectorToVector(e,t,r,this.spatialReference)},e.prototype.fromRenderCoords=function(e,t,r){return t instanceof n?s.vectorToPoint(e,this.spatialReference,t,r):t instanceof o?s.vectorToPoint(e,this.spatialReference,t):s.vectorToVector(e,this.spatialReference,t,r)},e}();t.RenderCoordsHelper=u;var f=function(e){function t(t){return e.call(this,t||s.SphericalECEFSpatialReference,1)||this}return r(t,e),t.prototype.getAltitude=function(e,t){void 0===t&&(t=0);var r=p.Vec3Compact.length(e,t);return r-a.earthRadius},t.prototype.setAltitude=function(e,t){var r=(e+a.earthRadius)/p.Vec3Compact.length(t,0);p.Vec3Compact.scale(t,0,r)},t.prototype.setAltitudeOfTransformation=function(e,t){var r=12,o=(e+a.earthRadius)/p.Vec3Compact.length(t,r);p.Vec3Compact.scale(t,r,o)},t.prototype.worldUpAtPosition=function(e,t){return c.vec3d.normalize(e||[0,0,0],t)},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=c.vec3d.create()),l.raySphere(e,t,null,a.earthRadius+r,y)?c.vec3d.dot(c.vec3d.direction(y,e,R),t)<0?!1:(c.vec3d.set(y,o),!0):!1},t}(u),v=function(e){function t(t){var r=e.call(this,t,i.getMetersPerUnitForSR(t))||this;return r.worldUp=[0,0,1],r}return r(t,e),t.prototype.getAltitude=function(e,t){return t?e[t+2]:e[2]},t.prototype.setAltitude=function(e,t){t[2]=e},t.prototype.setAltitudeOfTransformation=function(e,t){t[14]=e},t.prototype.worldUpAtPosition=function(e,t){return c.vec3d.set(this.worldUp,t)},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=c.vec3d.create()),c.vec4d.set4(this.worldUp[0],this.worldUp[1],this.worldUp[2],-r,h),l.rayPlane(e,t,h,y)?c.vec3d.dot(c.vec3d.direction(y,e,R),t)<0?!1:(c.vec3d.set(y,o),!0):!1},t}(u),h=c.vec4d.create(),y=c.vec3d.create(),R=c.vec3d.create()});