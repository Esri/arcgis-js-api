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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../PropertiesPool","./PointOfInterest"],function(e,t,r,i,o,n,a,s,u,c,d){Object.defineProperty(t,"__esModule",{value:!0});var p=Array,l=function(e){function t(t){var r=e.call(this,t)||this;return r._dirtyTimeStamp=0,r.propertiesPool=new c.default({location:u,renderLocation:p},r),r.estimatedSurfaceAltitude=0,r.pendingElevationQuery=null,r.renderLocation=s.vec3f64.create(),r}return r(t,e),t.prototype.initialize=function(){var e=this;if(null!=this.scheduler){var t=function(){return e.measureSurfaceAltitude()};this.handles.add(this.scheduler.registerTask(1,t,function(){return e.needsUpdate()}))}if(this.measureSurfaceAltitude(),this.map){var r=function(){return e._setDirty()};this.handles.add([o.on(this.map,"ground.layers","change",r,r,r)])}},t.prototype.destroy=function(){this.cancelPendingRequest(),this.propertiesPool.destroy(),this.propertiesPool=null},Object.defineProperty(t.prototype,"location",{get:function(){var e=this.propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),t.prototype.update=function(e){this._setDirty(),this.updateCameraOnSurface()},t.prototype.forceUpdate=function(){this.measureSurfaceAltitude(),this.updateCameraOnSurface()},t.prototype.hasPendingUpdates=function(){return this._dirtyTimeStamp>0},t.prototype._setDirty=function(){this._dirtyTimeStamp=this._dirtyTimeStamp||this.scheduler.now},t.prototype.needsUpdate=function(){return!this.pendingElevationQuery&&this._dirtyTimeStamp>0&&this.scheduler.now-this._dirtyTimeStamp>=this.altitudeEstimationInterval},t.prototype.cancelPendingRequest=function(){var e=this.pendingElevationQuery;e&&(this.pendingElevationQuery=null,e.cancel())},t.prototype.measureSurfaceAltitude=function(){var e=this;if(this.cancelPendingRequest(),this._dirtyTimeStamp=0,!this.map||!this.map.ground)return void this.updateSurfaceAltitude(0);this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,f,this.state.spatialReference);var t=this.map.ground.queryElevation(f).then(function(t){return e.updateSurfaceAltitude(t.geometry.z)}).catch(function(t){t&&"cancel"===t.dojoType||e.updateSurfaceAltitude(0)}).catch(function(){}).then(function(){e.pendingElevationQuery===t&&(e.pendingElevationQuery=null)});t.isFulfilled()||(this.pendingElevationQuery=t)},t.prototype.updateSurfaceAltitude=function(e){this.estimatedSurfaceAltitude!==e&&(this.estimatedSurfaceAltitude=e,this.updateCameraOnSurface())},t.prototype.updateCameraOnSurface=function(){a.vec3.copy(h,this.state.camera.eye),this.renderCoordsHelper.setAltitude(this.estimatedSurfaceAltitude,h);var e=this._get("renderLocation");a.vec3.equals(e,h)||this._set("renderLocation",a.vec3.copy(this.propertiesPool.get("renderLocation"),h))},i([n.property({constructOnly:!0})],t.prototype,"scheduler",void 0),i([n.property({constructOnly:!0})],t.prototype,"altitudeEstimationInterval",void 0),i([n.property({readOnly:!0,dependsOn:["renderLocation"]})],t.prototype,"location",null),i([n.property({constructOnly:!0})],t.prototype,"map",void 0),i([n.property({readOnly:!0})],t.prototype,"renderLocation",void 0),t=i([n.subclass("esri.views.3d.support.CameraOnSurface")],t)}(n.declared(d.PointOfInterest));t.CameraOnSurface=l;var h=s.vec3f64.create(),f=new u;t.default=l});