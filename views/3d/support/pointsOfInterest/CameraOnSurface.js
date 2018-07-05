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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/throttle","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../geometry/Point","../../lib/glMatrix","../PropertiesPool","./PointOfInterest"],function(e,t,r,o,i,n,a,u,s,d,c){Object.defineProperty(t,"__esModule",{value:!0});var l=Array,p=function(e){function t(t){var r=e.call(this,t)||this;return r.propertiesPool=new d.default({location:u,renderLocation:l},r),r.estimatedSurfaceAltitude=0,r.pendingElevationQuery=null,r.renderLocation=[0,0,0],r}return r(t,e),t.prototype.initialize=function(){var e=this;this.measureSurfaceAltitudeThrottle=i.throttle(this.measureSurfaceAltitude,this.altitudeEstimationInterval,this),this.handles.add(this.measureSurfaceAltitudeThrottle),this.measureSurfaceAltitude();var t=function(){return e.measureSurfaceAltitudeThrottle()};this.map&&this.handles.add([n.on(this.map,"ground.layers","change",t,t,t)])},t.prototype.destroy=function(){this.cancelPendingRequest()},Object.defineProperty(t.prototype,"location",{get:function(){var e=this.propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),t.prototype.update=function(e){this.measureSurfaceAltitudeThrottle(),this.updateCameraOnSurface()},t.prototype.forceUpdate=function(){this.measureSurfaceAltitudeThrottle.forceUpdate(),this.updateCameraOnSurface()},t.prototype.hasPendingUpdates=function(){return this.measureSurfaceAltitudeThrottle.hasPendingUpdates()||!!this.pendingElevationQuery},t.prototype.cancelPendingRequest=function(){var e=this.pendingElevationQuery;e&&(this.pendingElevationQuery=null,e.cancel())},t.prototype.measureSurfaceAltitude=function(){var e=this;if(this.cancelPendingRequest(),!this.map||!this.map.ground)return void this.updateSurfaceAltitude(0);this.renderCoordsHelper.fromRenderCoords(this.state.camera.eye,f,this.state.spatialReference);var t=this.map.ground.queryElevation(f).then(function(t){e.updateSurfaceAltitude(t.geometry.z)}).catch(function(t){t&&"cancel"===t.dojoType||e.updateSurfaceAltitude(0)}).catch(function(){}).then(function(){e.pendingElevationQuery===t&&(e.pendingElevationQuery=null)});t.isFulfilled()||(this.pendingElevationQuery=t)},t.prototype.updateSurfaceAltitude=function(e){this.estimatedSurfaceAltitude!==e&&(this.estimatedSurfaceAltitude=e,this.updateCameraOnSurface())},t.prototype.updateCameraOnSurface=function(){s.vec3d.set(this.state.camera.eye,h),this.renderCoordsHelper.setAltitude(this.estimatedSurfaceAltitude,h);var e=this._get("renderLocation");e[0]===h[0]&&e[1]===h[1]&&e[2]===h[2]||this._set("renderLocation",s.vec3d.set(h,this.propertiesPool.get("renderLocation")))},t.RELATIVE_ALTITUDE_CHANGE_THRESHOLD=.05,o([a.property({constructOnly:!0})],t.prototype,"altitudeEstimationInterval",void 0),o([a.property({readOnly:!0,dependsOn:["renderLocation"]})],t.prototype,"location",null),o([a.property({constructOnly:!0})],t.prototype,"map",void 0),o([a.property({readOnly:!0})],t.prototype,"renderLocation",void 0),t=o([a.subclass("esri.views.3d.support.CameraOnSurface")],t)}(a.declared(c.PointOfInterest));t.CameraOnSurface=p;var h=s.vec3d.create(),f=new u;t.default=p});