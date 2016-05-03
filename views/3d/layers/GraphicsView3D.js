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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessoireSupport/typescript","../../layers/GraphicsView","./graphics/Graphics3DCore","./graphics/Graphics3DSpatialIndex","./graphics/Graphics3DSharedResources","./graphics/Graphics3DElevationAlignment","../support/PromiseLightweight"],function(e,t,i,s,r,a,n,o,p,h,l){var d=function(e){function t(){e.call(this),this.graphicsCore=null,this.spatialIndex=null,this.sharedResources=null,this.elevation=null,this.supportsDraping=!0,this._overlayUpdating=!1,this._progressMaxNumNodes=0,this._eventHandles=null}return i(t,e),t.prototype.initialize=function(){var e=this;this.loadedGraphics=this.graphics,this.graphicsCore=new n,this.spatialIndex=new o,this.sharedResources=new p,this.elevation=new h,this.supportsDraping=!0,this._overlayUpdating=!1,this._progressMaxNumNodes=0,this._eventHandles=[],this.mockLayerId="__sceneView.graphics-"+Date.now().toString(16);var t={id:this.mockLayerId};this.sharedResources.initialize(this.view._stage,this.view.resourceController,null),this.spatialIndex.initialize(this,t,this.view.spatialReference,this.graphicsCore),this.elevation.initialize(this,function(t,i,s){e.spatialIndex.intersects(t,i,s)},this.graphicsCore,this.view.basemapTerrain),this.graphicsCore.initialize(this,t,this.elevation,this.sharedResources,null,this.spatialIndex,null,null,null,this.view.basemapTerrain),this._eventHandles.push(this.view.watch("clippingArea",function(){return e.updateClippingExtent()})),this.updateClippingExtent(),this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate})},t.prototype.destroy=function(){this._eventHandles.forEach(function(e){return e.remove()}),this._eventHandles=null,this.view.resourceController.deregisterIdleFrameWorker(this),this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null),this.elevation&&(this.elevation.destroy(),this.elevation=null),this.graphicsCore&&(this.graphicsCore.destroy(),this.graphicsCore=null),this.sharedResources&&(this.sharedResources.destroy(),this.sharedResources=null),this.loadedGraphics=null},t.prototype.getGraphicsFromStageObject=function(e){var t=e.getMetadata().graphicId,i=null;this.loadedGraphics&&this.loadedGraphics.some(function(e){return e.id===t?(i=e,!0):!1});var s=new l.Promise;return null!==i?s.done(i):s.reject(),s},t.prototype.whenGraphicBounds=function(e){return this.graphicsCore.whenGraphicBounds(e)},t.prototype._needsIdleUpdate=function(){return this.elevation.needsIdleUpdate()},t.prototype._idleUpdate=function(e){this.elevation.idleUpdate(e)},t.prototype._notifySuspendedChange=function(){},t.prototype._notifyDrapedDataChange=function(){this.view.basemapTerrain&&this.view.basemapTerrain.overlayManager.setOverlayDirty()},t.prototype._evaluateUpdatingState=function(){if(this.elevation){var e=0;e+=this.elevation.numNodesUpdating(),e+=this.graphicsCore.numNodesUpdating();var t=!1;t=t||e>0,t=t||this._overlayUpdating,t=t||this.spatialIndex.isUpdating(),this.updating=t}else this.updating=!1},t.prototype.updateClippingExtent=function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()},s([r.shared("esri.views.3d.layers.GraphicsView3D")],t.prototype,"declaredClass",void 0),s([r.property({setter:function(e){return e!==this.loadedGraphics&&(this.loadedGraphics=e),e}})],t.prototype,"graphics",void 0),s([r.property()],t.prototype,"loadedGraphics",void 0),s([r.property({value:!0})],t.prototype,"updating",void 0),s([r.property({value:!1})],t.prototype,"suspended",void 0),t=s([r.subclass([])],t)}(a);return d});