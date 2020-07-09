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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/compilerUtils","../../../core/unitUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/vec3","../../../geometry/SpatialReference","../../../layers/graphics/dehydratedFeatures","./earthUtils","./geometryUtils","./projectionUtils","./stack","./geometryUtils/coordinateSystem"],(function(t,e,o,r,i,n,s,a,c,l,d,u,p){Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(t,e,o,r){this.type=t,this.spatialReference=e,this.unitInMeters=o,this.coordinateSystem=r,this.tmpCoordinateSystem=p.create(r)}return Object.defineProperty(t.prototype,"extent",{set:function(t){t&&p.setExtent(this.coordinateSystem,t,this.coordinateSystem)},enumerable:!0,configurable:!0}),t.prototype.getAltitude=function(t){return p.altitudeAt(this.coordinateSystem,t)},t.prototype.setAltitude=function(t,e){p.setAltitudeAt(this.coordinateSystem,e,t,e)},t.prototype.setAltitudeOfTransformation=function(t,e){p.setAltitudeOfTransformation(this.coordinateSystem,e,t,e)},t.prototype.worldUpAtPosition=function(t,e){return p.normalAt(this.coordinateSystem,t,e)},t.prototype.worldBasisAtPosition=function(t,e,o){return p.axisAt(this.coordinateSystem,t,e,o)},t.prototype.basisMatrixAtPosition=function(t,e){var o=this.worldBasisAtPosition(t,0,u.sv3d.get()),r=this.worldBasisAtPosition(t,1,u.sv3d.get()),n=this.worldBasisAtPosition(t,2,u.sv3d.get());return i.mat4.set(e,o[0],o[1],o[2],0,r[0],r[1],r[2],0,n[0],n[1],n[2],0,0,0,0,1),e},t.prototype.intersectManifoldClosestSilhouette=function(t,e,o){return p.elevate(this.coordinateSystem,e,this.tmpCoordinateSystem),p.intersectRayClosestSilhouette(this.tmpCoordinateSystem,t,o),o},t.prototype.intersectManifold=function(t,e,o){p.elevate(this.coordinateSystem,e,this.tmpCoordinateSystem);var r=u.sv3d.get();return!!p.intersectRay(this.tmpCoordinateSystem,t,r)&&(n.vec3.copy(o,r),!0)},t.prototype.intersectInfiniteManifold=function(t,e,o){if("global"===this.type)return this.intersectManifold(t,e,o);p.elevate(this.coordinateSystem,e,this.tmpCoordinateSystem);var r=this.tmpCoordinateSystem.value,i=u.sv3d.get();return!!l.plane.intersectRay(r.plane,t,i)&&(n.vec3.copy(o,i),!0)},t.prototype.toRenderCoords=function(t,e,o){return a.isPoint(t)?d.pointToVector(t,e,this.spatialReference):d.vectorToVector(t,e,o,this.spatialReference)},t.prototype.fromRenderCoords=function(t,e,o){return a.isPoint(e)?d.vectorToPoint(t,this.spatialReference,e,o):e instanceof s?d.vectorToPoint(t,this.spatialReference,e):d.vectorToVector(t,this.spatialReference,e,o)},t.createGlobal=function(e){return new t("global",e,1,p.fromValues(l.sphere,l.sphere.fromValues(c.earthRadius,[0,0,0])))},t.createLocal=function(e){var o=p.fromValues(l.boundedPlane,l.boundedPlane.fromValues([0,0,0],[y,0,0],[0,y,0]));return new t("local",e,r.getMetersPerUnitForSR(e),o)},t.createMode=function(e,r){switch(e){case"local":return t.createLocal(r);case"global":return t.createGlobal(r);default:return void o.neverReached(e)}},t}();e.RenderCoordsHelper=f;var y=Math.pow(2,50)}));