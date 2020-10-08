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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Handles","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../geometry/support/geodesicConstants","../../support/FrustumExtentIntersection","../../../support/Scheduler"],(function(e,t,i,n,s,r,o,a,u,p){"use strict";var c=-.3*a.earthRadius;return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.suspended=!1,t.extent=null,t.extentIntersectionDirty=!0,t._isVisibleBelowSurface=!1,t.handles=new s,t.layerView=null,t.updating=!0,t}return i.__extends(t,e),t.prototype.setup=function(e){var t=this;this.layerView=e,this.extentIntersection=new u.FrustumExtentIntersection({renderCoordsHelper:e.view.renderCoordsHelper});var i=e.view,n=i.basemapTerrain,s=i.resourceController.scheduler;this.handles.add([i.on("resize",(function(){return t.viewChange()})),i.state.watch("camera",(function(){return t.viewChange()}),!0),s.registerTask(p.Task.FRUSTUM_VISIBILITY,(function(){return t.update()}),(function(){return t.updating})),n.on("elevation-bounds-change",(function(){return t.elevationBoundsChange()}))]),"local"===i.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([r.init(n,["opacity","wireframe"],(function(){return t.updateIsVisibleBelowSurface()})),r.init(i,"map.ground.navigationConstraint.type",(function(){return t.updateIsVisibleBelowSurface()}))])},t.prototype.destroy=function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype._setDirty=function(){this.updating||this._set("updating",!0)},t.prototype.setExtent=function(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()},t.prototype.viewChange=function(){this._setDirty()},t.prototype.elevationBoundsChange=function(){this._setDirty(),this.extentIntersectionDirty=!0},Object.defineProperty(t.prototype,"isVisibleBelowSurface",{set:function(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0},enumerable:!1,configurable:!0}),t.prototype.updateIsVisibleBelowSurface=function(){var e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,n=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.isOpaque()||n},t.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var e,t=this.layerView.view;if(this._isVisibleBelowSurface)e=c;else{var i=t.basemapTerrain.elevationBounds,n=i.min,s=i.max;e=n-Math.max(1,(s-n)*(1.2-1))}this.extentIntersection.update(this.extent,t.spatialReference,e)}},t.prototype.update=function(){if(this._set("updating",!1),this.extent){this.updateExtentIntersection();var e=this.layerView.view.frustum;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e))}else this._set("suspended",!1)},i.__decorate([o.property({readOnly:!0})],t.prototype,"suspended",void 0),i.__decorate([o.property({readOnly:!0})],t.prototype,"updating",void 0),t=i.__decorate([o.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],t)}(n)}));