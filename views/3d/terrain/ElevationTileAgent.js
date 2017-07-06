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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["./TileAgentBase","./TerrainConst","./UpsampleInfo","../../../core/ObjectPool"],function(e,t,i,o){var r=function(){e.apply(this,arguments)};return r.prototype=new e,r.prototype.constructor=r,r.prototype.dataArrived=function(e){e!==this.tile?this._setUpsamplingTile(e):this.updateGeometry(),this._dataRequested=null,this._requestNext()},r.prototype.updateGeometry=function(){this._tileLayerInfo.pendingUpdates|=t.TileUpdateTypes.UPDATE_GEOMETRY,this.tile.updateGeometry()},r.prototype._findAncestorWithData=function(){for(var e,o=this.layerClass,r=this.layerIdx,l=this.tile,n=l.vlevel;l&&!(l.layerInfo[o][r].data&&(e=l,n-l.lij[0]>=t.ELEVATION_DESIRED_RESOLUTION_LEVEL));)l=l.parent;if(e){var a=i.Pool.acquire();return a.init(e,0,0,1),a}return null},r.prototype._desiredMinLevelDelta=function(){return t.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])},r.prototype.START_LOADING_LEVEL_DELTA=4,r.prototype.SCALE_RANGE_ENABLED=!1,r.prototype._setUpsamplingTile=function(e){this._tileLayerInfo.upsampleFromTile&&i.Pool.release(this._tileLayerInfo.upsampleFromTile);var t=i.Pool.acquire();t.init(e,0,0,1),this._tileLayerInfo.upsampleFromTile=t,this.updateGeometry()},r.Pool=new o(r),r});