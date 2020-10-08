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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Evented","../../../../core/Handles","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","../../../support/Scheduler"],(function(e,t,r,n,o,s,a,i,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SurfaceGeometryUpdates=void 0;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handles=new s,t._tileGeometryUpdateExtent=c.empty(),t._tileGeometryUpdateSpatialReference=null,t.events=new o,t.updating=!1,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add([this.surface.on("elevation-change",(function(t){return e._tileGeometryChanged(t)})),this.scheduler.registerTask(p.Task.SURFACE_GEOMETRY_UPDATES,(function(){return e.update()}),(function(){return e.updating}))])},t.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.update=function(){this.updating&&(this._centerIntersectsExtent(this._tileGeometryUpdateExtent,this._tileGeometryUpdateSpatialReference)&&this.events.emit("request-update",u),c.empty(this._tileGeometryUpdateExtent),this._set("updating",!1))},t.prototype._tileGeometryChanged=function(e){this._tileGeometryUpdateSpatialReference=e.spatialReference,c.expand(this._tileGeometryUpdateExtent,e.tile.extent),this._set("updating",!0)},t.prototype._furthestCenterOnSurface=function(){for(var e=this.centerOnSurfaces[0],t=1;t<this.centerOnSurfaces.length;t++){var r=this.centerOnSurfaces[t];r.distance>e.distance&&(e=r)}return e},t.prototype._centerIntersectsExtent=function(e,t){var r=this.state.camera.eye,n=h,o=this._furthestCenterOnSurface();return this.renderCoordsHelper.fromRenderCoords(r,l,t),this.renderCoordsHelper.fromRenderCoords(o.renderLocation,y,t),l[0]<y[0]?(n[0]=l[0],n[2]=y[0]):(n[0]=y[0],n[2]=l[0]),l[1]<y[1]?(n[1]=l[1],n[3]=y[1]):(n[1]=y[1],n[3]=l[1]),c.intersects(n,e)},r.__decorate([a.property({constructOnly:!0})],t.prototype,"state",void 0),r.__decorate([a.property({constructOnly:!0})],t.prototype,"centerOnSurfaces",void 0),r.__decorate([a.property({constructOnly:!0})],t.prototype,"renderCoordsHelper",void 0),r.__decorate([a.property({constructOnly:!0})],t.prototype,"scheduler",void 0),r.__decorate([a.property({constructOnly:!0})],t.prototype,"surface",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updating",void 0),t=r.__decorate([a.subclass("esri.views.3d.support.SurfaceGeometryUpdates")],t)}(n);t.SurfaceGeometryUpdates=d;var u={},l=i.vec3f64.create(),y=i.vec3f64.create(),h=c.empty();t.default=d}));