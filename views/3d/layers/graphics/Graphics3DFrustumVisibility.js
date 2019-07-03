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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Handles","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../support/earthUtils","../../support/FrustumExtentIntersection"],function(e,t,i,n,r,s,o,u,a,c){var l=-.3*a.earthRadius;return function(e){function t(){var t=e.call(this)||this;return t.suspended=!1,t._dirty=!0,t.extent=null,t.extentIntersectionDirty=!0,t._isVisibleBelowSurface=!1,t.handles=new s,t.layerView=null,t}return i(t,e),Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty},set:function(e){e!==this._dirty&&(this._dirty=e,this.notifyChange("updating"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.dirty},enumerable:!0,configurable:!0}),t.prototype.setup=function(e){var t=this;this.layerView=e,this.extentIntersection=new c.FrustumExtentIntersection({renderCoordsHelper:e.view.renderCoordsHelper});var i=e.view,n=i.basemapTerrain,r=i.resourceController.scheduler;this.handles.add([i.on("resize",function(){return t.viewChange()}),i.state.watch("camera",function(){return t.viewChange()},!0),r.registerTask(6,function(){return t.update()},function(){return t.dirty}),n.on("elevation-bounds-change",function(){return t.elevationBoundsChange()})]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add(o.init(n,["opacity","wireframe"],function(){return t.isVisibleBelowSurface=!n.isOpaque()}))},t.prototype.destroy=function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.setExtent=function(e){this.extent=e,this.extentIntersectionDirty=!0,this.dirty=!0},t.prototype.viewChange=function(){this.dirty=!0},t.prototype.elevationBoundsChange=function(){this.dirty=!0,this.extentIntersectionDirty=!0},Object.defineProperty(t.prototype,"isVisibleBelowSurface",{set:function(e){this._isVisibleBelowSurface=e,this.dirty=!0,this.extentIntersectionDirty=!0},enumerable:!0,configurable:!0}),t.prototype.update=function(){this.updateSuspendFrustumVisible(),this.dirty=!1},t.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var e,t=this.layerView.view;if(this._isVisibleBelowSurface)e=l;else{var i=t.basemapTerrain.getElevationBounds(),n=i[0],r=i[1];e=n-Math.max(1,(r-n)*(1.2-1))}this.extentIntersection.update(this.extent,t.spatialReference,e)}},t.prototype.updateSuspendFrustumVisible=function(){if(!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();var e=this.layerView.view.frustum;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e))},n([u.property({readOnly:!0})],t.prototype,"suspended",void 0),n([u.property({readOnly:!0})],t.prototype,"updating",null),t=n([u.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],t)}(u.declared(r))});