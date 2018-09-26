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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/Handles","../../../../core/scheduling","../../../../geometry/support/aaBoundingRect","../../lib/gl-matrix","../debugFlags","../Evented"],function(e,t,n,r,s,a,i,o){Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e){var t=this;this.handles=new n,this.tileGeometryUpdateExtent=s.empty(),this.tileGeometryUpdateSpatialReference=null,this.hasPendingTileGeometryChanges=!0,this.events=new o.Evented,this.centerOnSurfaceInstances=e.centerOnSurfaceInstances,this.renderCoordsHelper=e.renderCoordsHelper,this.state=e.state,this.handles.add(e.surface.on("elevation-change",function(e){return t.tileGeometryChangeHandler(e)}))}return e.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},e.prototype.forceUpdate=function(){this.handles.has("tile-geometry-update")&&this.updateCenterOnGeometryUpdate(),this.hasPendingTileGeometryChanges&&(this.events.emit("request-update",h),this.hasPendingTileGeometryChanges=!1)},e.prototype.hasPendingUpdates=function(){return this.handles.has("tile-geometry-update")},e.prototype.tileGeometryChangeHandler=function(e){var t=this;this.tileGeometryUpdateSpatialReference=e.spatialReference,s.expand(this.tileGeometryUpdateExtent,e.tile.extent),this.handles.has("tile-geometry-update")||this.handles.add(r.schedule(function(){return t.updateCenterOnGeometryUpdate()}),"tile-geometry-update")},e.prototype.updateCenterOnGeometryUpdate=function(){this.handles.remove("tile-geometry-update"),this.centerIntersectsExtent(this.tileGeometryUpdateExtent,this.tileGeometryUpdateSpatialReference)&&(i.DISABLE_POI_UPDATE_ON_SURFACE_GEOMETRY_CHANGES?this.hasPendingTileGeometryChanges=!0:this.events.emit("request-update",h)),s.empty(this.tileGeometryUpdateExtent)},e.prototype.furthestCenterOnSurface=function(){for(var e=this.centerOnSurfaceInstances[0],t=1;t<this.centerOnSurfaceInstances.length;t++){var n=this.centerOnSurfaceInstances[t];n.distance>e.distance&&(e=n)}return e},e.prototype.centerIntersectsExtent=function(e,t){var n=this.state.camera.eye,r=p,a=this.furthestCenterOnSurface();return this.renderCoordsHelper.fromRenderCoords(n,c,t),this.renderCoordsHelper.fromRenderCoords(a.renderLocation,l,t),c[0]<l[0]?(r[0]=c[0],r[2]=l[0]):(r[0]=l[0],r[2]=c[0]),c[1]<l[1]?(r[1]=c[1],r[3]=l[1]):(r[1]=l[1],r[3]=c[1]),s.intersects(r,e)},e}();t.SurfaceGeometryUpdates=d;var h={},c=a.vec3d.create(),l=a.vec3d.create(),p=s.empty();t.default=d});