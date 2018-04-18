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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/scaleUtils","../lib/glMatrix","./earthUtils","./mathUtils","./projectionUtils","../webgl-engine/lib/Util"],function(e,t,r,o,n,i,s,c,a,d,l){function u(e,t){return"global"===e?new h(t):new v(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createRenderCoordsHelper=u;var p;!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(p=t.BasisDimension||(t.BasisDimension={}));var f=function(){function e(e,t){this.spatialReference=e,this.unitInMeters=t}return e.prototype.toRenderCoords=function(e,t,r){return e instanceof o?d.pointToVector(e,t,this.spatialReference):d.vectorToVector(e,t,r,this.spatialReference)},e.prototype.fromRenderCoords=function(e,t,r){return t instanceof o?d.vectorToPoint(e,this.spatialReference,t,r):t instanceof n?d.vectorToPoint(e,this.spatialReference,t):d.vectorToVector(e,this.spatialReference,t,r)},e}();t.RenderCoordsHelper=f;var h=function(e){function t(t){return e.call(this,t||d.SphericalECEFSpatialReference,1)||this}return r(t,e),t.prototype.getAltitude=function(e){return s.vec3d.length(e)-c.earthRadius},t.prototype.setAltitude=function(e,t){var r=(e+c.earthRadius)/s.vec3d.length(t);s.vec3d.scale(t,r)},t.prototype.setAltitudeOfTransformation=function(e,t){var r=t[12],o=t[13],n=t[14],i=Math.sqrt(r*r+o*o+n*n),s=(e+c.earthRadius)/i;t[12]=r*s,t[13]=o*s,t[14]=n*s},t.prototype.worldUpAtPosition=function(e,t){return this.worldBasisAtPosition(e,p.Z,t)},t.prototype.worldBasisAtPosition=function(e,t,r){switch(t){case p.X:a.cartesianToSpherical(e||M,y);var o=y[2];return s.vec3d.set3(-Math.sin(o),Math.cos(o),0,r);case p.Y:a.cartesianToSpherical(e||M,y);var n=y[1],o=y[2],i=Math.sin(n);return s.vec3d.set3(-i*Math.cos(o),-i*Math.sin(o),Math.cos(n),r);case p.Z:return s.vec3d.normalize(e||M,r)}},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=s.vec3d.create()),!!l.raySphere(e,t,null,c.earthRadius+r,y)&&(!(s.vec3d.dot(s.vec3d.direction(y,e,R),t)<0)&&(s.vec3d.set(y,o),!0))},t}(f),v=function(e){function t(t){var r=e.call(this,t,i.getMetersPerUnitForSR(t))||this;return r.worldX=[1,0,0],r.worldY=[0,1,0],r.worldZ=[0,0,1],r}return r(t,e),t.prototype.getAltitude=function(e,t){return t?e[t+2]:e[2]},t.prototype.setAltitude=function(e,t){t[2]=e},t.prototype.setAltitudeOfTransformation=function(e,t){t[14]=e},t.prototype.worldUpAtPosition=function(e,t){return s.vec3d.set(this.worldZ,t)},t.prototype.worldBasisAtPosition=function(e,t,r){switch(t){case p.X:return s.vec3d.set(this.worldX,r);case p.Y:return s.vec3d.set(this.worldY,r);case p.Z:return s.vec3d.set(this.worldZ,r)}},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=s.vec3d.create()),s.vec4d.set4(this.worldZ[0],this.worldZ[1],this.worldZ[2],-r,w),!!l.rayPlane(e,t,w,y)&&(!(s.vec3d.dot(s.vec3d.direction(y,e,R),t)<0)&&(s.vec3d.set(y,o),!0))},t}(f),w=s.vec4d.create(),y=s.vec3d.create(),R=s.vec3d.create(),M=[0,0,0]});