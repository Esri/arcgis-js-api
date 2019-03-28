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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Handles","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../support/earthUtils","../../support/FrustumExtentIntersection"],function(t,e,i,r,n,s,u,o,a,l){var p=-.3*a.earthRadius;return function(t){function e(){var e=t.call(this)||this;return e.suspended=!0,e._frustumVisibilityDirty=!0,e.extent=null,e.extentIntersectionDirty=!0,e._isVisibleBelowSurface=!1,e.handles=new s,e.layerView=null,e}return i(e,t),Object.defineProperty(e.prototype,"frustumVisibilityDirty",{get:function(){return this._frustumVisibilityDirty},set:function(t){t!==this._frustumVisibilityDirty&&(this._frustumVisibilityDirty=t,this.notifyChange("updating"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return this.frustumVisibilityDirty},enumerable:!0,configurable:!0}),e.prototype.setup=function(t){var e=this;this.layerView=t,this.extentIntersection=new l.FrustumExtentIntersection({renderCoordsHelper:t.view.renderCoordsHelper});var i=t.view,r=i.basemapTerrain,n=i.resourceController.scheduler;this.handles.add([i.on("resize",function(){return e.viewChange()}),i.state.watch("camera",function(){return e.viewChange()},!0),n.registerTask(6,function(){return e.update()},function(){return e.needsUpdate()}),r.on("elevation-bounds-change",function(){return e.elevationBoundsChange()})]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add(u.init(r,["opacity","wireframe"],function(){return e.isVisibleBelowSurface=!r.isOpaque()}))},e.prototype.destroy=function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)},e.prototype.setExtent=function(t){this.extent=t,this.extentIntersectionDirty=!0,this.frustumVisibilityDirty=!0},e.prototype.viewChange=function(){this.frustumVisibilityDirty=!0},e.prototype.elevationBoundsChange=function(){this.frustumVisibilityDirty=!0,this.extentIntersectionDirty=!0},Object.defineProperty(e.prototype,"isVisibleBelowSurface",{set:function(t){this._isVisibleBelowSurface=t,this.frustumVisibilityDirty=!0,this.extentIntersectionDirty=!0},enumerable:!0,configurable:!0}),e.prototype.needsUpdate=function(){return this.frustumVisibilityDirty},e.prototype.update=function(){this.updateSuspendFrustumVisible(),this.frustumVisibilityDirty=!1},e.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var t,e=this.layerView.view;if(this._isVisibleBelowSurface)t=p;else{var i=e.basemapTerrain.getElevationBounds(),r=i[0],n=i[1];t=r-Math.max(1,(n-r)*(1.2-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}},e.prototype.updateSuspendFrustumVisible=function(){if(!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();var t=this.layerView.view.frustum;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(t))},r([o.property({readOnly:!0})],e.prototype,"suspended",void 0),r([o.property({readOnly:!0})],e.prototype,"updating",null),e=r([o.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],e)}(o.declared(n))});