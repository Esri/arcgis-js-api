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

define(["require","exports"],function(){var e=20,t=function(){function t(){this.elevationDirtyGraphicsQueue=[],this.elevationDirtyGraphicsSet={},this.elevationUpdateEventHandle=null,this.eventHandles=[],this.updateElevation=!1,this.layerView=null,this.graphicsCore=null}return t.prototype.initialize=function(e,t,i,a){var r=this;this.layerView=e,this.graphicsCore=i,this.elevationChangedCallback=t,this.elevationUpdateEventHandle=a.on("elevation-change",function(e){return r.elevationUpdateHandler(e)}),this.eventHandles.push(this.layerView.watch("suspended",function(){return r.suspendedChange()}))},t.prototype.destroy=function(){this.elevationDirtyGraphicsQueue=null,this.elevationDirtyGraphicsSet=null,this.elevationUpdateEventHandle&&(this.elevationUpdateEventHandle.remove(),this.elevationUpdateEventHandle=null),this.eventHandles.forEach(function(e){return e.remove()}),this.eventHandles=null,this.layerView=null,this.graphicsCore=null,this.elevationChangedCallback=null},t.prototype.clear=function(){this.elevationDirtyGraphicsSet={},this.elevationDirtyGraphicsQueue=[]},t.prototype.suspendedChange=function(){this.layerView.suspended===!0?this.updateElevation=!1:this.layerView.suspended===!1&&this.updateElevation&&this.markAllGraphicsElevationDirty()},t.prototype.isUpdating=function(){return this.elevationDirtyGraphicsQueue.length>0},t.prototype.numNodesUpdating=function(){return this.elevationDirtyGraphicsQueue.length},t.prototype.needsIdleUpdate=function(){return this.layerView.view.basemapTerrain&&this.elevationDirtyGraphicsQueue.length>0},t.prototype.idleUpdate=function(t){if(!t.done()){var i=this.layerView.view,a=this.elevationDirtyGraphicsQueue.length;if(a>0){var r=this.graphicsCore.stageLayer.getId(),n=this.graphicsCore.labelStageLayer?this.graphicsCore.labelStageLayer.getId():null,s=0,l=0;for(l=0;a>l;l++){var h=this.elevationDirtyGraphicsQueue[l],o=this.graphicsCore.graphics[h];if(o&&o.alignWithElevation(i.basemapTerrain,i.renderCoordsHelper),delete this.elevationDirtyGraphicsSet[h],s++,s>=e){if(i._stage.processDirtyLayer(r),null!=n&&i._stage.processDirtyLayer(n),t.done())break;s=0}}i._stage.processDirtyLayer(r),null!=n&&i._stage.processDirtyLayer(n),this.elevationDirtyGraphicsQueue.splice(0,l+1),i.labelManager.setDirty(),this.layerView._evaluateUpdatingState()}}},t.prototype.markAllGraphicsElevationDirty=function(){for(var e in this.graphicsCore.graphics)this.markGraphicElevationDirty(this.graphicsCore.graphics[e].graphic.id);this.layerView._evaluateUpdatingState()},t.prototype.markGraphicElevationDirty=function(e){this.elevationDirtyGraphicsSet[e]||(this.elevationDirtyGraphicsSet[e]=!0,this.elevationDirtyGraphicsQueue.push(e))},t.prototype.elevationUpdateHandler=function(e){var t=this,i=e.extent;if(this.layerView.suspended){if(!this.updateElevation){var a=this.graphicsCore.computedExtent;a&&i[2]>a.xmin&&i[0]<a.xmax&&i[3]>a.ymin&&i[1]<a.ymax&&(this.updateElevation=!0)}}else i[0]===-1/0?this.markAllGraphicsElevationDirty():this.elevationChangedCallback(i,e.spatialReference,function(e,i){for(var a=!1,r=0;i>r;r++){var n=e[r],s=t.graphicsCore.graphics[n];s&&s.mustAlignToTerrain()&&(t.markGraphicElevationDirty(n),a=!0)}a&&t.layerView._evaluateUpdatingState()})},t}();return t});