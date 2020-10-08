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

define(["require","exports","tslib","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../PropertiesPool","./PointOfInterest"],(function(e,t,r,o,n,i,a,s,u,d,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CameraOnSurface=void 0;var l=Array,p=function(e){function t(t){var r=e.call(this,t)||this;return r._dirty=!1,r._propertiesPool=new d.default({location:u,renderLocation:l},r),r._estimatedSurfaceAltitude=0,r._pendingElevationQueryController=null,r.renderLocation=s.vec3f64.create(),r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;if(this.handles.add(this.scheduler.registerTask(this.task,(function(){return e._measureSurfaceAltitude()}),(function(){return e._needsUpdate()}))),this._measureSurfaceAltitude(),this.map){var t=function(){return e._setDirty()};this.handles.add([n.on(this.map,"ground.layers","change",t,t,t)])}},t.prototype.destroy=function(){this._cancelPendingRequest(),this._propertiesPool.destroy(),this._propertiesPool=null},Object.defineProperty(t.prototype,"location",{get:function(){var e=this._propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._dirty||null!=this._pendingElevationQueryController},enumerable:!1,configurable:!0}),t.prototype.updateRenderLocation=function(){this._setDirty(),this._updateRenderLocation()},t.prototype.update=function(){this._measureSurfaceAltitude(),this._updateRenderLocation()},t.prototype._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))},t.prototype._needsUpdate=function(){return!this._pendingElevationQueryController&&this._dirty},t.prototype._cancelPendingRequest=function(){var e=this._pendingElevationQueryController;e&&(this._pendingElevationQueryController=null,e.abort(),this.notifyChange("updating"))},t.prototype._measureSurfaceAltitude=function(){var e=this;if(this._cancelPendingRequest(),this._dirty=!1,this.notifyChange("updating"),this.map&&this.map.ground){this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,y,this.state.spatialReference);var t=o.createAbortController();this.map.ground.queryElevation(y,{signal:t.signal}).then((function(t){return e._updateSurfaceAltitude(t.geometry.z)})).catch((function(t){o.isAbortError(t)||e._updateSurfaceAltitude(0)})).catch((function(){})).then((function(){e._pendingElevationQueryController===t&&(e._pendingElevationQueryController=null,e.notifyChange("updating")),t=null})),this._pendingElevationQueryController=t}else this._updateSurfaceAltitude(0)},t.prototype._updateSurfaceAltitude=function(e){this._estimatedSurfaceAltitude!==e&&(this._estimatedSurfaceAltitude=e,this._updateRenderLocation())},t.prototype._updateRenderLocation=function(){a.vec3.copy(h,this.state.camera.eye),this.renderCoordsHelper.setAltitude(this._estimatedSurfaceAltitude,h),a.vec3.exactEquals(this._get("renderLocation"),h)||this._set("renderLocation",a.vec3.copy(this._propertiesPool.get("renderLocation"),h))},r.__decorate([i.property({constructOnly:!0})],t.prototype,"scheduler",void 0),r.__decorate([i.property({constructOnly:!0})],t.prototype,"task",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["renderLocation"]})],t.prototype,"location",null),r.__decorate([i.property({constructOnly:!0})],t.prototype,"map",void 0),r.__decorate([i.property({readOnly:!0})],t.prototype,"renderLocation",void 0),r.__decorate([i.property({readOnly:!0})],t.prototype,"updating",null),t=r.__decorate([i.subclass("esri.views.3d.support.CameraOnSurface")],t)}(c.PointOfInterest);t.CameraOnSurface=p;var h=s.vec3f64.create(),y=new u;t.default=p}));