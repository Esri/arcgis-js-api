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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","./TerrainConst","./TileAgent","./UpsampleInfo"],function(e,t,i,n,r,l,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._scaleRangeEnabled=!1,t}return i(t,e),t.prototype.dataArrived=function(e){e!==this.tile?this._setUpsamplingTile(e):(this._unsetUpsamplingTile(),this.updateGeometry()),this._dataRequested=null,this._requestNext()},t.prototype.updateGeometry=function(){this._tileLayerInfo.pendingUpdates|=r.TileUpdateTypes.UPDATE_GEOMETRY,this.tile.updateGeometry()},t.prototype._findAncestorWithData=function(){for(var e,t=this.layerClass,i=this.layerIdx,n=this.tile,l=n.vlevel;n&&!(n.layerInfo[t][i].data&&(e=n,l-n.lij[0]>=r.ELEVATION_DESIRED_RESOLUTION_LEVEL));)n=n.parent;if(e){var s=o.Pool.acquire();return s.init(e,0,0,1),s}return null},t.prototype._desiredMinLevelDelta=function(){return r.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])},t.prototype._setUpsamplingTile=function(e){this._unsetUpsamplingTile();var t=o.Pool.acquire();t.init(e,0,0,1),this._tileLayerInfo.upsampleFromTile=t,this.updateGeometry()},t.Pool=new n(t),t}(l)});