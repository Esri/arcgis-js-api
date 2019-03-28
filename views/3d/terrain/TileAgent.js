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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

// (c) the service indicates that it contains data at that level (minDataLevel)

/*(c)*/

define(["require","exports","../../../core/tsSupport/extendsHelper","./TerrainConst","./tileUtils"],function(t,e,i,s,a){var l=new Error("Abstract method called on TileAgent"),r=function(){function t(){}return t.prototype.init=function(t,e,i,s){this.tile=t,this._layerIdx=e,this._layerClass=i,this._suspended=s,this._tileLayerInfo=t.getLayerInfo(e,i),this._dataRequested=null;var a=this._findAncestorWithData();this._setUpsampleTile(a)},t.prototype.startLoading=function(){return this._requestNext()},t.prototype.dispose=function(){this._dataRequested&&(this._dataRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._dataRequested=null),this.tile=null,this._tileLayerInfo=null},t.prototype.setSuspension=function(t){t!==this._suspended&&(this._suspended=t,t?this._dataRequested&&(this._dataRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())},t.prototype.update=function(){var t=this._findAncestorWithData();return this._setUpsampleTile(t),this._requestNext()},t.prototype.dataArrived=function(t){this._setUpsampleTile(t),this._dataRequested=null,t===this.tile?this.tile.updateRenderData(this._layerClass):this._requestNext()},t.prototype.dataMissing=function(t){this._dataRequested=null,this._tileLayerInfo.disposeData(),this._requestNext()},t.prototype._agentDone=function(){this.tile.agentDone(this._layerIdx,this._layerClass),this.dispose()},t.prototype._requestNext=function(){if(this._suspended)return!0;var t=this._findNextDownload();if(this._dataRequested){if(t===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._dataRequested=null}return t?t.requestLayerData(this._layerIdx,this._layerClass,this)&&(this._dataRequested=t):this._agentDone(),!!this._dataRequested},t.prototype._findNextDownload=function(){for(var t,e=this._layerIdx,i=this._layerClass,l=this.tile.surface.layerViewByIndex(e,i),r=l.layer,n=l.minDataLevel,h=l.maxDataLevel,d=this._desiredMinLevelDelta(),u=s.START_LOADING_LEVEL_DELTA+d,o=this._scaleRangeEnabled?a.fallsWithinLayer:function(){return!0},_=this.tile,p=0,y=this._tileLayerInfo.upsampleFromTile,f=y?y.tile.lij[0]:-1,c=this.tile.surface,L=c.tilemapStats,D=c.getTilemapTile(_),q=!1;_&&o(_,r,!1)&&_.lij[0]>=n;){var I=_.lij[0],x=_.layerInfo[i][e];if(x.data&&p>=d){I>f&&this._setUpsampleTile(_),x.dataInvalidated&&(t=_);break}if(D&&!D.hasDataAvailable(_,e,i))q=!0;else if(I<=h&&!x.data&&!x.dataMissing&&((!t||I%s.LOADING_LEVEL_MODULO==0||this.tile.lij[0]-t.lij[0]<d)&&(t=_),p>=u))break;_=_.parent,_&&D&&(D=D.parent||c.getTilemapTile(_)),p++}return t&&this.tile.lij[0]-t.lij[0]<d&&this._tileLayerInfo.upsampleFromTile&&(t=null),!t&&q&&L.tilesNotPresent++,t},t.prototype._findAncestorWithData=function(){for(var t,e=this.tile.vlevel,i=this._desiredMinLevelDelta(),s=this.tile;s;s=s.parent)if(s.hasLayerData(this._layerIdx,this._layerClass)){if(e-s.lij[0]>=i)return s;t=s}return t},t.prototype._setUpsampleTile=function(t){this._tileLayerInfo.setUpsampleInfo(this.tile,t),this.tile.updateRenderData(this._layerClass)},t}(),n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype._desiredMinLevelDelta=function(){throw l},e}(r);return function(t){t.DONE=new n}(r||(r={})),r});