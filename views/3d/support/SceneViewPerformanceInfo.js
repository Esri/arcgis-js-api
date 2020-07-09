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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../layers/support/MemoryManagedLayerView","./LayerPerformanceInfo","../terrain/terrainUtils"],(function(e,r,o,t,a){return function(e){var r=this;this.totalMemory=0,this.usedMemory=0,this.quality=1,this.load=0,this.terrainMemory=0,this.edgesMemory=0,this.layerPerformanceInfos=new Array;var s=e.resourceController.memoryController;this.totalMemory=1024*s.maxMemory*1024,this.usedMemory=Math.round(s.usedMemory*this.totalMemory),this.quality=s.memoryFactor,this.load=e.resourceController.scheduler.load,this.terrainMemory=e.basemapTerrain?e.basemapTerrain.getUsedMemory():0;var i=e._stage&&e._stage.renderView&&e._stage.renderView.edgeView;this.edgesMemory=i?i.getUsedMemory():0,e.allLayerViews.items.forEach((function(s){(o.isMemoryManagedLayerView(s)||a.isSurfaceLayerView(s))&&r.layerPerformanceInfos.push(new t(s,e))})),this.layerPerformanceInfos.sort((function(e,r){return r.memory-e.memory}))}}));