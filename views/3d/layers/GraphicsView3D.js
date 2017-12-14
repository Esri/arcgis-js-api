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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../layers/GraphicsView","./graphics/Graphics3DCore","./graphics/Graphics3DSpatialIndex","./graphics/Graphics3DElevationAlignment","../support/PromiseLightweight","../../../core/promiseUtils"],function(e,t,i,r,n,a,s,p,o,l,h){var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphicsCore=null,t.spatialIndex=null,t.elevationAlignment=null,t.supportsDraping=!0,t._overlayUpdating=!1,t._eventHandles=[],t}return i(t,e),Object.defineProperty(t.prototype,"graphics",{set:function(e){e!==this.loadedGraphics&&(this.loadedGraphics=e),this._set("graphics",e)},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this.mockLayerId="__sceneView.graphics-"+Date.now().toString(16),this.spatialIndex=new p,this.spatialIndex.whenLoaded().then(function(){return e.deferredInitialize()})},t.prototype.deferredInitialize=function(){var e=this;if(!this.destroyed){this.loadedGraphics=this.graphics,this.graphicsCore=new s,this.elevationAlignment=new o;var t={id:this.mockLayerId,uid:this.mockLayerId};this.spatialIndex.initialize(this,t,this.view.spatialReference,this.graphicsCore),this.elevationAlignment.initialize(this,function(t,i,r){e.spatialIndex.intersects(t,i,r)},this.graphicsCore,this.view.elevationProvider),this.graphicsCore.initialize(this,t,this.elevationAlignment,null,this.spatialIndex,null,null,null,null,this.view.basemapTerrain),this._eventHandles.push(this.view.watch("clippingArea",function(){return e.updateClippingExtent()})),this.updateClippingExtent(),this.view.resourceController.registerIdleFrameWorker(this,{needsUpdate:this._needsIdleUpdate,idleFrame:this._idleUpdate})}},t.prototype.destroy=function(){this._eventHandles.forEach(function(e){return e.remove()}),this._eventHandles=null,this.view.resourceController.deregisterIdleFrameWorker(this),this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null),this.elevationAlignment&&(this.elevationAlignment.destroy(),this.elevationAlignment=null),this.graphicsCore&&(this.graphicsCore.destroy(),this.graphicsCore=null),this.loadedGraphics=null},t.prototype.getGraphicsFromStageObject=function(e,t){var i=e.getMetadata().graphicId,r=null;this.loadedGraphics&&this.loadedGraphics.some(function(e){return e.uid===i?(r=e,!0):!1});var n=new l.Promise;return null!==r?n.done(r):n.reject(),n},t.prototype.whenGraphicBounds=function(e){var t=this;return this.spatialIndex?this.spatialIndex.whenLoaded().then(function(){return t.graphicsCore?t.graphicsCore.whenGraphicBounds(e):h.reject()}):h.reject()},t.prototype._needsIdleUpdate=function(){return this.elevationAlignment.needsIdleUpdate()},t.prototype._idleUpdate=function(e){this.elevationAlignment.idleUpdate(e)},t.prototype._notifySuspendedChange=function(){},t.prototype._notifyDrapedDataChange=function(){this.view.basemapTerrain&&this.view.basemapTerrain.overlayManager.setOverlayDirty()},t.prototype._evaluateUpdatingState=function(){if(this.elevationAlignment){var e=0;e+=this.elevationAlignment.numNodesUpdating(),e+=this.graphicsCore.numNodesUpdating();var t=!1;t=t||e>0,t=t||this._overlayUpdating,t=t||this.spatialIndex.isUpdating(),t=t||this.elevationAlignment.isUpdating(),t=t||this.graphicsCore.needsIdleUpdate(),this.updating=t}else this.updating=!1},t.prototype.updateClippingExtent=function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()},r([n.property()],t.prototype,"graphics",null),r([n.property()],t.prototype,"loadedGraphics",void 0),r([n.property({value:!0})],t.prototype,"updating",void 0),r([n.property({value:!1})],t.prototype,"suspended",void 0),t=r([n.subclass("esri.views.3d.layers.GraphicsView3D")],t)}(n.declared(a));return d});