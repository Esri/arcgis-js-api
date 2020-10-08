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

define(["require","exports","tslib","../../../core/maybe","./TerrainConst","./terrainUtils","./tileUtils"],(function(e,t,i,s,l,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TILE_AGENT_DONE=t.TileAgent=void 0;var r=new Error("Abstract method called on TileAgent"),o=function(){function e(){}return Object.defineProperty(e.prototype,"updating",{get:function(){return!!this._tileRequested},enumerable:!1,configurable:!0}),e.prototype.init=function(e,t,i,s){this.tile=e,this._layerIdx=t,this._layerClass=i,this._suspended=s,this._tileLayerInfo=e.getLayerInfo(t,i),this._tileRequested=null;var l=this._findAncestorWithData();this._setUpsampleTile(l)},e.prototype.startLoading=function(){return this._requestNext()},e.prototype.dispose=function(){this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null),this.tile=null,this._tileLayerInfo=null},e.prototype.setSuspension=function(e){e!==this._suspended&&(this._suspended=e,e?this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null):this._tileLayerInfo.data||this.update())},e.prototype.update=function(){var e=this._findAncestorWithData();return this._setUpsampleTile(e),this._requestNext()},e.prototype.dataArrived=function(e){this._setUpsampleTile(e),this._tileRequested=null,e===this.tile?this.tile.updateRenderData(this._layerClass):this._requestNext()},e.prototype.dataMissing=function(){this._tileRequested=null,this._tileLayerInfo.disposeData(),this._requestNext()},e.prototype._agentDone=function(){this.tile.agentDone(this._layerIdx,this._layerClass),this.dispose()},e.prototype._requestNext=function(){if(this._suspended)return!0;var e=this._findNextDownload();if(l.TILE_LOADING_DEBUGLOG&&console.log(a.tile2str(this.tile),"next",a.tile2str(e)),this._tileRequested){if(e===this._tileRequested)return!0;this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null}return e?e.requestLayerData(this._layerIdx,this._layerClass,this)&&(this._tileRequested=e):this._agentDone(),!!this._tileRequested},e.prototype._findNextDownload=function(){for(var e,t=this._layerIdx,i=this._layerClass,r=this.tile.surface.layerViewByIndex(t,i),o=n.getLayerWithExtentRange(r),u=r.dataLevelRange,h=u.minLevel,d=u.maxLevel,_=this._desiredMinLevelDelta,p=this._loadingLevelDelta+_,f=this._scaleRangeEnabled?a.fallsWithinLayer:function(){return!0},y=this.tile,c=0,L=this._tileLayerInfo.upsampleInfo,v=L?L.tile.level:-1,D=s.get(o,"tilemapCache");y&&f(y,o,!1)&&y.level>=h;){var I=y.level,g=y.layerInfo[i][t];if(g.data&&c>=_){I>v&&this._setUpsampleTile(y),g.dataInvalidated&&(e=y);break}if((s.isNone(D)||"unavailable"!==D.getAvailability(y.lij[0],y.lij[1],y.lij[2]))&&I<=d&&!g.data&&!g.dataMissing&&((!e||I%l.LOADING_LEVEL_MODULO==0||this.tile.level-e.level<_)&&(e=y),c>=p))break;y=y.parent,c++}return e&&this.tile.level-e.level<_&&this._tileLayerInfo.upsampleInfo&&(e=null),e},e.prototype._findAncestorWithData=function(){for(var e,t=this.tile.vlevel,i=this._desiredMinLevelDelta,s=this.tile;s;s=s.parent)if(s.hasLayerData(this._layerIdx,this._layerClass)){if(t-s.level>=i)return s;e=s}return e},e.prototype._setUpsampleTile=function(e){this._tileLayerInfo.setUpsampleInfo(this.tile,e),this.tile.updateRenderData(this._layerClass)},Object.defineProperty(e.prototype,"test",{get:function(){var e=this;return{findNextDownload:function(){return e._findNextDownload()},tileLayerInfo:this._tileLayerInfo}},enumerable:!1,configurable:!0}),e}();t.TileAgent=o;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),Object.defineProperty(t.prototype,"_desiredMinLevelDelta",{get:function(){throw r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_loadingLevelDelta",{get:function(){throw r},enumerable:!1,configurable:!0}),t}(o);t.TILE_AGENT_DONE=new u}));