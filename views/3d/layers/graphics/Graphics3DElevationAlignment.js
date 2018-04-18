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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/throttle","../../support/aaBoundingRect"],function(e,t,i,a){return function(){function e(){this.dirtyExtent=a.create(a.NEGATIVE_INFINITY),this.numPendingSpatialIndexQueries=0,this.elevationDirtyGraphicsQueue=[],this.elevationDirtyGraphicsSet={},this.elevationUpdateEventHandle=null,this.eventHandles=[],this.updateElevation=!1,this.layerView=null,this.graphicsCore=null,this.markDirtyThrottled=i.throttle(this.markDirty,100,this)}return e.prototype.initialize=function(e,t,i,a){var r=this;this.layerView=e,this.graphicsCore=i,this.elevationProvider=a,this.getGraphicsInExtent=t,this.elevationUpdateEventHandle=a.on("elevation-change",function(e){return r.elevationUpdateHandler(e)}),this.eventHandles.push(this.layerView.watch("suspended",function(){return r.suspendedChange()}))},e.prototype.destroy=function(){this.elevationDirtyGraphicsQueue=null,this.elevationDirtyGraphicsSet=null,this.elevationUpdateEventHandle&&(this.elevationUpdateEventHandle.remove(),this.elevationUpdateEventHandle=null),this.eventHandles.forEach(function(e){return e.remove()}),this.eventHandles=null,this.markDirtyThrottled.remove(),this.layerView=null,this.graphicsCore=null,this.getGraphicsInExtent=null},e.prototype.clear=function(){this.elevationDirtyGraphicsSet={},this.elevationDirtyGraphicsQueue=[]},e.prototype.suspendedChange=function(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&this.markAllGraphicsElevationDirty()},e.prototype.isUpdating=function(){return this.elevationDirtyGraphicsQueue.length>0||this.markDirtyThrottled.hasPendingUpdates()||this.numPendingSpatialIndexQueries>0},e.prototype.numNodesUpdating=function(){return this.elevationDirtyGraphicsQueue.length},e.prototype.needsIdleUpdate=function(){return this.elevationProvider&&this.elevationDirtyGraphicsQueue.length>0},e.prototype.idleUpdate=function(e){if(!e.done()){var t=this.layerView.view,i=this.elevationDirtyGraphicsQueue.length;if(i>0){var a=this.graphicsCore.stageLayer.id,r=this.graphicsCore.labelStageLayer?this.graphicsCore.labelStageLayer.id:null,n=0,s=0;for(s=0;s<i;s++){var h=this.elevationDirtyGraphicsQueue[s],l=this.graphicsCore.graphics[h];if(l&&l.alignWithElevation(this.elevationProvider,t.renderCoordsHelper),delete this.elevationDirtyGraphicsSet[h],++n>=20){if(t._stage.processDirtyLayer(a),null!=r&&t._stage.processDirtyLayer(r),e.done())break;n=0}}t._stage.processDirtyLayer(a),null!=r&&t._stage.processDirtyLayer(r),this.elevationDirtyGraphicsQueue.splice(0,s+1),t.deconflictor.setDirty(),this.layerView._evaluateUpdatingState()}}},e.prototype.markAllGraphicsElevationDirty=function(){for(var e in this.graphicsCore.graphics)this.markGraphicElevationDirty(this.graphicsCore.graphics[e].graphic.uid);this.layerView._evaluateUpdatingState()},e.prototype.markGraphicElevationDirty=function(e){this.elevationDirtyGraphicsSet[e]||(this.elevationDirtyGraphicsSet[e]=!0,this.elevationDirtyGraphicsQueue.push(e))},e.prototype.elevationUpdateHandler=function(e){var t=e.extent;if(this.layerView.suspended){if(!this.updateElevation){var i=this.graphicsCore.computedExtent;i&&t[2]>i.xmin&&t[0]<i.xmax&&t[3]>i.ymin&&t[1]<i.ymax&&(this.updateElevation=!0)}}else a.expand(this.dirtyExtent,t),this.spatialReference=e.spatialReference,this.markDirtyThrottled(),this.layerView._evaluateUpdatingState()},e.prototype.markDirty=function(){var e=this,t=this.dirtyExtent;t[0]===-1/0?this.markAllGraphicsElevationDirty():(this.numPendingSpatialIndexQueries++,this.getGraphicsInExtent(t,this.spatialReference,function(t,i){e.numPendingSpatialIndexQueries--;for(var a=0;a<i;a++){var r=t[a],n=e.graphicsCore.graphics[r];n&&n.needsElevationUpdates()&&e.markGraphicElevationDirty(r)}e.layerView._evaluateUpdatingState()}),this.layerView._evaluateUpdatingState()),a.set(this.dirtyExtent,a.NEGATIVE_INFINITY)},e}()});