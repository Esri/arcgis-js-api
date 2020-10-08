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

define(["require","exports","./terrainUtils","./TileAgent","./tileUtils"],(function(t,e,i,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TilePerLayerInfo=void 0;var o=function(){function t(t,e){this._pool=e,this.waitingAgents=[],this.data=null,this._upsampleInfo=null,this.loadingAgent=null,this.requestPromise=null,this.requestAbort=null,this.pendingUpdates=0,this.elevationBounds=void 0,this.init(t)}return t.prototype.init=function(t){this.waitingAgents.length=0,this.data=null,this.dataMissing=!1,this.dataInvalidated=!1,this._unsetUpsampleInfo(),this.loadingAgent=null,this.requestPromise=null,this.requestAbort=null,this.pendingUpdates=0,0===t&&(this.elevationBounds=null)},t.prototype.invalidateSourceData=function(){this.dataInvalidated=!0,this.dataMissing=!1,this._unsetUpsampleInfo()},t.prototype.abortRequest=function(){this.requestPromise&&(this.requestAbort.abort(),this.requestPromise=null,this.requestAbort=null)},t.prototype.dispose=function(){this.loadingAgent&&this.loadingAgent!==s.TILE_AGENT_DONE&&this.loadingAgent.dispose(),this.loadingAgent=null,this.abortRequest(),this._unsetUpsampleInfo(),this.pendingUpdates=0,this.disposeData()},t.prototype.disposeData=function(){this.data=i.releaseTileData(this.data)},Object.defineProperty(t.prototype,"upsampleInfo",{get:function(){return this._upsampleInfo},enumerable:!1,configurable:!0}),t.prototype._unsetUpsampleInfo=function(){this._upsampleInfo&&(this._upsampleInfo.tile.unrefMapData(),this._pool.release(this._upsampleInfo),this._upsampleInfo=null)},t.prototype.setUpsampleInfo=function(t,e){if(t!==e&&null!=e){if(null==this._upsampleInfo)this._upsampleInfo=this._pool.acquire();else{if(this._upsampleInfo.tile===e)return;this._upsampleInfo.tile.unrefMapData()}e.refMapData(),n.computeUpsampleInfo(t,e,this._upsampleInfo)}else this._unsetUpsampleInfo()},t.makeEmptyLayerInfo=function(e,i,s){return s?(s.init(e),s):new t(e,i)},t}();e.TilePerLayerInfo=o}));