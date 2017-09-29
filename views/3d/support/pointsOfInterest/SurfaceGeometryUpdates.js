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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/HandleRegistry","../../../../core/Scheduler","../../lib/glMatrix","../Evented","../aaBoundingRect"],function(e,t,n,r,s,a,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){var t=this;this.handles=new n,this.tileGeometryUpdateExtent=i.create(i.NEGATIVE_INFINITY),this.tileGeometryUpdateSpatialReference=null,this.hasPendingTileGeometryChanges=!0,this.events=new a.Evented,this.centerOnSurfaceInstances=e.centerOnSurfaceInstances,this.renderCoordsHelper=e.renderCoordsHelper,this.viewState=e.viewState,this.handles.add(e.surface.on("tile-geometry-change",function(e){return t.tileGeometryChangeHandler(e)}))}return e.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},e.prototype.forceUpdate=function(){this.handles.has("tile-geometry-update")&&this.updateCenterOnGeometryUpdate(),this.hasPendingTileGeometryChanges&&(this.events.emit("request-update",d),this.hasPendingTileGeometryChanges=!1)},e.prototype.hasPendingUpdates=function(){return this.handles.has("tile-geometry-update")},e.prototype.tileGeometryChangeHandler=function(e){var t=this;this.tileGeometryUpdateSpatialReference=e.spatialReference,i.expand(this.tileGeometryUpdateExtent,e.tile.extent),this.handles.has("tile-geometry-update")||this.handles.add(r.schedule(function(){return t.updateCenterOnGeometryUpdate()}),"tile-geometry-update")},e.prototype.updateCenterOnGeometryUpdate=function(){this.handles.remove("tile-geometry-update"),this.centerIntersectsExtent(this.tileGeometryUpdateExtent,this.tileGeometryUpdateSpatialReference)&&(e.UPDATE_ON_SURFACE_GEOMETRY_CHANGES?this.events.emit("request-update",d):this.hasPendingTileGeometryChanges=!0),i.set(this.tileGeometryUpdateExtent,i.NEGATIVE_INFINITY)},e.prototype.furthestCenterOnSurface=function(){for(var e=this.centerOnSurfaceInstances[0],t=1;t<this.centerOnSurfaceInstances.length;t++){var n=this.centerOnSurfaceInstances[t];n.distance>e.distance&&(e=n)}return e},e.prototype.centerIntersectsExtent=function(e,t){var n=this.viewState.camera.eye,r=l,s=this.furthestCenterOnSurface();return this.renderCoordsHelper.fromRenderCoords(n,h,t),this.renderCoordsHelper.fromRenderCoords(s.renderLocation,c,t),h[0]<c[0]?(r[0]=h[0],r[2]=c[0]):(r[0]=c[0],r[2]=h[0]),h[1]<c[1]?(r[1]=h[1],r[3]=c[1]):(r[1]=c[1],r[3]=h[1]),i.intersects(r,e)},e.UPDATE_ON_SURFACE_GEOMETRY_CHANGES=!0,e}();t.SurfaceGeometryUpdates=o;var d={},h=s.vec3d.create(),c=s.vec3d.create(),l=i.create(i.NEGATIVE_INFINITY);t["default"]=o});