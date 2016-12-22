// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../layers/GraphicsView","./graphics/Graphics3DCore","./graphics/Graphics3DSpatialIndex","./graphics/Graphics3DElevationAlignment","../support/PromiseLightweight","../../../core/promiseUtils"],function(e,t,i,r,s,a,n,p,o,h,l){var d=function(e){function t(){e.apply(this,arguments),this.graphicsCore=null,this.spatialIndex=null,this.elevation=null,this.supportsDraping=!0,this._overlayUpdating=!1,this._eventHandles=[]}return i(t,e),Object.defineProperty(t.prototype,"graphics",{set:function(e){e!==this.loadedGraphics&&(this.loadedGraphics=e),this._set("graphics",e)},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this.mockLayerId="__sceneView.graphics-"+Date.now().toString(16),this.spatialIndex=new p,this.spatialIndex.whenLoaded().then(function(){return e.deferredInitialize()})},t.prototype.deferredInitialize=function(){var e=this;if(!this.destroyed){this.loadedGraphics=this.graphics,this.graphicsCore=new n,this.elevation=new o;var t={id:this.mockLayerId};this.spatialIndex.initialize(this,t,this.view.spatialReference,this.graphicsCore),this.elevation.initialize(this,function(t,i,r){e.spatialIndex.intersects(t,i,r)},this.graphicsCore,this.view.basemapTerrain),this.graphicsCore.initialize(this,t,this.elevation,null,this.spatialIndex,null,null,null,this.view.basemapTerrain),this._eventHandles.push(this.view.watch("clippingArea",function(){return e.updateClippingExtent()})),this.updateClippingExtent(),this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate})}},t.prototype.destroy=function(){this._eventHandles.forEach(function(e){return e.remove()}),this._eventHandles=null,this.view.resourceController.deregisterIdleFrameWorker(this),this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null),this.elevation&&(this.elevation.destroy(),this.elevation=null),this.graphicsCore&&(this.graphicsCore.destroy(),this.graphicsCore=null),this.loadedGraphics=null},t.prototype.getGraphicsFromStageObject=function(e,t){var i=e.getMetadata().graphicId,r=null;this.loadedGraphics&&this.loadedGraphics.some(function(e){return e.uid===i?(r=e,!0):!1});var s=new h.Promise;return null!==r?s.done(r):s.reject(),s},t.prototype.whenGraphicBounds=function(e){var t=this;return this.spatialIndex?this.spatialIndex.whenLoaded().then(function(){return t.graphicsCore?t.graphicsCore.whenGraphicBounds(e):l.reject()}):l.reject()},t.prototype._needsIdleUpdate=function(){return this.elevation.needsIdleUpdate()},t.prototype._idleUpdate=function(e){this.elevation.idleUpdate(e)},t.prototype._notifySuspendedChange=function(){},t.prototype._notifyDrapedDataChange=function(){this.view.basemapTerrain&&this.view.basemapTerrain.overlayManager.setOverlayDirty()},t.prototype._evaluateUpdatingState=function(){if(this.elevation){var e=0;e+=this.elevation.numNodesUpdating(),e+=this.graphicsCore.numNodesUpdating();var t=!1;t=t||e>0,t=t||this._overlayUpdating,t=t||this.spatialIndex.isUpdating(),t=t||this.graphicsCore.needsIdleUpdate(),this.updating=t}else this.updating=!1},t.prototype.updateClippingExtent=function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()},r([s.property()],t.prototype,"graphics",null),r([s.property()],t.prototype,"loadedGraphics",void 0),r([s.property({value:!0})],t.prototype,"updating",void 0),r([s.property({value:!1})],t.prototype,"suspended",void 0),t=r([s.subclass("esri.views.3d.layers.GraphicsView3D")],t)}(s.declared(a));return d});