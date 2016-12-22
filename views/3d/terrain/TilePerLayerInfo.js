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

define(["require","exports","./TerrainConst","../../webgl/Texture","../../vectorTiles/VectorTileDisplayObject"],function(t,i,e,n,l){var s=function(){function t(t){this.waitingAgents=[],this.data=null,this.tilemapData=null,this.tilemapRequest=null,this.upsampleFromTile=null,this.loadingAgent=null,this.requestPromise=null,this.rawData=null,this.pendingUpdates=0,this.elevationBounds=void 0,this.init(t)}return t.prototype.init=function(t){this.waitingAgents.length=0,this.data=null,this.tilemapData=null,this.tilemapRequest=null,this.upsampleFromTile=null,this.loadingAgent=null,this.requestPromise=null,this.rawData=null,this.pendingUpdates=0,t===e.LayerClass.ELEVATION&&(this.elevationBounds=null)},t.prototype.releaseResources=function(){this.waitingAgents.length=0,this.tilemapData=null,this.tilemapRequest=null,this.upsampleFromTile=null,this.loadingAgent=null,this.requestPromise=null,this.rawData=null,this.pendingUpdates=0;var t=this.data;t&&(t instanceof n?t.dispose():t instanceof l&&t.dispose())},t.makeEmptyLayerInfo=function(i,e){return e?(e.init(i),e):new t(i)},t}();return s});