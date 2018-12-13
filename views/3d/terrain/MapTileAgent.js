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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","./TileAgent","./tileUtils"],function(e,t,i,l,s,n){return function(e){function t(){var t=e.call(this)||this;return t._scaleRangeEnabled=!0,t}return i(t,e),t.prototype.dataArrived=function(e){e===this.tile?(this._unsetUpsamplingTile(),this.tile.updateTexture()):this._setUpsamplingTile(e),this._dataRequested=null,e!==this.tile&&this._requestNext()},t.prototype._desiredMinLevelDelta=function(){return 0},t.prototype._setUpsamplingTile=function(e){this._tileLayerInfo.upsampleFromTile&&this._tileLayerInfo.upsampleFromTile.tile===e||(this._unsetUpsamplingTile(),this._tileLayerInfo.upsampleFromTile=n.computeUpsampleInfoForAncestor(this.tile,e),this.tile.updateTexture())},t.Pool=new l(t),t}(s)});