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

define(["require","exports","./TileAgentBase","./TerrainConst","./UpsampleInfo","../../webgl/Texture","../../vectorTiles/VectorTileDisplayObject"],function(t,i,e,s,l,n,a){var o=function(){function t(t){this.waitingAgents=[],this.data=null,this.tilemap=null,this.tilemapRequest=null,this.upsampleFromTile=null,this.loadingAgent=null,this.requestPromise=null,this.rawData=null,this.pendingUpdates=0,this.elevationBounds=void 0,this.init(t)}return t.prototype.init=function(t){this.waitingAgents.length=0,this.data=null,this.dataMissing=!1,this.dataInvalidated=!1,this.tilemap=null,this.tilemapRequest=null,this.upsampleFromTile=null,this.loadingAgent=null,this.requestPromise=null,this.rawData=null,this.pendingUpdates=0,t===s.LayerClass.ELEVATION&&(this.elevationBounds=null)},t.prototype.invalidateSourceData=function(){this.tilemap=null,this.dataInvalidated=!0,this.dataMissing=!1,this.upsampleFromTile&&(l.Pool.release(this.upsampleFromTile),this.upsampleFromTile=null)},t.prototype.dispose=function(){this.loadingAgent&&this.loadingAgent!==e.AGENT_DONE&&(this.loadingAgent.dispose(),this.loadingAgent=null),this.requestPromise&&(this.requestPromise.cancel(),this.requestPromise=null),this.tilemap=null,this.tilemapRequest&&(this.tilemapRequest.cancel(),this.tilemapRequest=null),this.upsampleFromTile&&(l.Pool.release(this.upsampleFromTile),this.upsampleFromTile=null),this.rawData=null,this.pendingUpdates=0,this.disposeData()},t.prototype.disposeData=function(){var t=this.data;t&&(t instanceof n?t.dispose():t instanceof a&&t.dispose(),this.data=null)},t.makeEmptyLayerInfo=function(i,e){return e?(e.init(i),e):new t(i)},t}();return o});