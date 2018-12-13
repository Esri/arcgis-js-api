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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/compilerUtils","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/scaleUtils","../../../layers/graphics/dehydratedFeatures","./earthUtils","./geometryUtils","./projectionUtils","./stack","./geometryUtils/coordinateSystem"],function(e,t,o,r,i,n,s,a,c,l,p,u,d,f){Object.defineProperty(t,"__esModule",{value:!0});var y=function(){function e(e,t,o,r){this.type=e,this.spatialReference=t,this.unitInMeters=o,this.coordinateSystem=r,this.tmpCoordinateSystem=f.create(r)}return Object.defineProperty(e.prototype,"extent",{set:function(e){e&&f.setExtent(this.coordinateSystem,e,this.coordinateSystem)},enumerable:!0,configurable:!0}),e.prototype.getAltitude=function(e){return f.altitudeAt(this.coordinateSystem,e)},e.prototype.setAltitude=function(e,t){f.setAltitudeAt(this.coordinateSystem,t,e,t)},e.prototype.setAltitudeOfTransformation=function(e,t){f.setAltitudeOfTransformation(this.coordinateSystem,t,e,t)},e.prototype.worldUpAtPosition=function(e,t){return f.normalAt(this.coordinateSystem,e,t)},e.prototype.worldBasisAtPosition=function(e,t,o){return f.axisAt(this.coordinateSystem,e,t,o)},e.prototype.intersectManifoldClosestSilhouette=function(e,t,o){return f.elevate(this.coordinateSystem,t,this.tmpCoordinateSystem),f.intersectRayClosestSilhouette(this.tmpCoordinateSystem,e,o),o},e.prototype.intersectManifold=function(e,t,o){f.elevate(this.coordinateSystem,t,this.tmpCoordinateSystem);var r=d.sv3d.get();return!!f.intersectRay(this.tmpCoordinateSystem,e,r)&&(i.vec3.copy(o,r),!0)},e.prototype.intersectInfiniteManifold=function(e,t,o){if("global"===this.type)return this.intersectManifold(e,t,o);f.elevate(this.coordinateSystem,t,this.tmpCoordinateSystem);var r=this.tmpCoordinateSystem.value,n=d.sv3d.get();return!!p.plane.intersectRay(r.plane,e,n)&&(i.vec3.copy(o,n),!0)},e.prototype.toRenderCoords=function(e,t,o){return c.isPoint(e)?u.pointToVector(e,t,this.spatialReference):u.vectorToVector(e,t,o,this.spatialReference)},e.prototype.fromRenderCoords=function(e,t,o){return t instanceof n?u.vectorToPoint(e,this.spatialReference,t,o):t instanceof s?u.vectorToPoint(e,this.spatialReference,t):u.vectorToVector(e,this.spatialReference,t,o)},e.createGlobal=function(t){return void 0===t&&(t=u.SphericalECEFSpatialReference),new e("global",t,1,f.fromValues(p.sphere,p.sphere.fromValues(l.earthRadius,[0,0,0])))},e.createLocal=function(t){var o=f.fromValues(p.boundedPlane,p.boundedPlane.fromValues([0,0,0],[1<<60,0,0],[0,1<<60,0]));return new e("local",t,a.getMetersPerUnitForSR(t),o)},e.createMode=function(t,o){switch(t){case"local":return e.createLocal(o);case"global":return e.createGlobal();default:r.neverReached(t)}},e}();t.RenderCoordsHelper=y});