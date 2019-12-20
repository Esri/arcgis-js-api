// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../PropertiesPool","./PointOfInterest"],function(e,t,r,o,n,i,a,s,u,d,p,c){Object.defineProperty(t,"__esModule",{value:!0});var l=Array,h=function(e){function t(t){var r=e.call(this,t)||this;return r._dirty=!1,r._propertiesPool=new p.default({location:d,renderLocation:l},r),r._estimatedSurfaceAltitude=0,r._pendingElevationQueryController=null,r.renderLocation=u.vec3f64.create(),r}return r(t,e),t.prototype.initialize=function(){var e=this;if(this.handles.add(this.scheduler.registerTask(this.task,function(){return e._measureSurfaceAltitude()},function(){return e._needsUpdate()})),this._measureSurfaceAltitude(),this.map){var t=function(){return e._setDirty()};this.handles.add([i.on(this.map,"ground.layers","change",t,t,t)])}},t.prototype.destroy=function(){this._cancelPendingRequest(),this._propertiesPool.destroy(),this._propertiesPool=null},Object.defineProperty(t.prototype,"location",{get:function(){var e=this._propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._dirty||null!=this._pendingElevationQueryController},enumerable:!0,configurable:!0}),t.prototype.updateRenderLocation=function(){this._setDirty(),this._updateRenderLocation()},t.prototype.update=function(){this._measureSurfaceAltitude(),this._updateRenderLocation()},t.prototype._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))},t.prototype._needsUpdate=function(){return!this._pendingElevationQueryController&&this._dirty},t.prototype._cancelPendingRequest=function(){var e=this._pendingElevationQueryController;e&&(this._pendingElevationQueryController=null,e.abort(),this.notifyChange("updating"))},t.prototype._measureSurfaceAltitude=function(){var e=this;if(this._cancelPendingRequest(),this._dirty=!1,this.notifyChange("updating"),!this.map||!this.map.ground)return void this._updateSurfaceAltitude(0);this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,f,this.state.spatialReference);var t=n.createAbortController();this.map.ground.queryElevation(f,{signal:t.signal}).then(function(t){return e._updateSurfaceAltitude(t.geometry.z)}).catch(function(t){n.isAbortError(t)||e._updateSurfaceAltitude(0)}).catch(function(){}).then(function(){e._pendingElevationQueryController===t&&(e._pendingElevationQueryController=null,e.notifyChange("updating")),t=null}),this._pendingElevationQueryController=t},t.prototype._updateSurfaceAltitude=function(e){this._estimatedSurfaceAltitude!==e&&(this._estimatedSurfaceAltitude=e,this._updateRenderLocation())},t.prototype._updateRenderLocation=function(){s.vec3.copy(y,this.state.camera.eye),this.renderCoordsHelper.setAltitude(this._estimatedSurfaceAltitude,y),s.vec3.exactEquals(this._get("renderLocation"),y)||this._set("renderLocation",s.vec3.copy(this._propertiesPool.get("renderLocation"),y))},o([a.property({constructOnly:!0})],t.prototype,"scheduler",void 0),o([a.property({constructOnly:!0})],t.prototype,"task",void 0),o([a.property({readOnly:!0,dependsOn:["renderLocation"]})],t.prototype,"location",null),o([a.property({constructOnly:!0})],t.prototype,"map",void 0),o([a.property({readOnly:!0})],t.prototype,"renderLocation",void 0),o([a.property({readOnly:!0})],t.prototype,"updating",null),t=o([a.subclass("esri.views.3d.support.CameraOnSurface")],t)}(a.declared(c.PointOfInterest));t.CameraOnSurface=h;var y=u.vec3f64.create(),f=new d;t.default=h});