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

define(["./TileAgentBase","./TileUtils","./UpsampleInfo","../../../core/ObjectPool"],function(e,t,i,l){var a=4,s=function(){e.apply(this,arguments)};return s.prototype=new e,s.prototype.constructor=s,s.prototype.dataArrived=function(e){e!==this.tile?this._setUpsamplingTile(e):this.tile.updateTexture(),this._dataRequested=null,e!==this.tile&&this._requestNext()},s.prototype._findNextDownload=function(){var e,i=this.layerIdx,l=this.layerClass,s=this.tile.parentSurface.layerViewByIndex(i,l),r=s.minDataLevel,n=s.maxDataLevel;if(this._tileLayerInfo.data||r>this.tile.lij[0])e=null;else{for(var o=0,p=this.tile,u=this.tile.parentSurface,f=u.getTilemapTile(p),h=u.tilemapStats,m=!1;p&&a>=o&&t.fallsWithinLayer(p,s,!1)&&p.lij[0]>=r;){if(p.layerInfo[l][i].data){this._setUpsamplingTile(p);break}f&&!f.tileDataAvailable(p,i,l)?m=!0:p.lij[0]<=n&&(e=p),p=p.parent,f=f?f.parent:null,o++}!e&&m&&h.tilesNotPresent++}return e},s.prototype._setUpsamplingTile=function(e){this._tileLayerInfo.upsampleFromTile&&this._tileLayerInfo.upsampleFromTile.tile===e||(this._tileLayerInfo.upsampleFromTile&&i.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=t.computeUpsampleInfoForAncestor(this.tile,e),this.tile.updateTexture())},s.Pool=new l(s,function(){},!1),s});