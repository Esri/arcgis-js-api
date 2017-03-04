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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./TileAgentBase","./tileUtils","./UpsampleInfo","../../../core/ObjectPool"],function(e,t,i,o){var l=function(){e.apply(this,arguments)};return l.prototype=new e,l.prototype.constructor=l,l.prototype.dataArrived=function(e){e!==this.tile?this._setUpsamplingTile(e):this.tile.updateTexture(),this._dataRequested=null,e!==this.tile&&this._requestNext()},l.prototype._desiredMinLevelDelta=function(){return 0},l.prototype.START_LOADING_LEVEL_DELTA=4,l.prototype.SCALE_RANGE_ENABLED=!0,l.prototype._setUpsamplingTile=function(e){this._tileLayerInfo.upsampleFromTile&&this._tileLayerInfo.upsampleFromTile.tile===e||(this._tileLayerInfo.upsampleFromTile&&i.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=t.computeUpsampleInfoForAncestor(this.tile,e),this.tile.updateTexture())},l.Pool=new o(l),l});