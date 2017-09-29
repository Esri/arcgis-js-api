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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

// (c) the service indicates that it contains data at that level (minDataLevel)

// = (c)

define(["require","exports","./UpsampleInfo","./tileUtils"],function(e,t,i,a){function s(e,t,a,r,n,o,u){if(!e.parent||u>l)return null;if(r*=.5,n*=.5,o*=.5,1&e.lij[2]&&(n+=.5),0===(1&e.lij[1])&&(o+=.5),e.parent.hasLayerData(t,a)){var h=i.Pool.acquire();return h.init(e.parent,n,o,r),h}return s(e.parent,t,a,r,n,o,u+1)}var l=6,r=new Error("Abstract method called on TileAgentBase"),n=function(){function e(){}return e.prototype.init=function(e,t,a,s){this.tile=e,this.layerIdx=t,this.layerClass=a,this.suspended=s,this._tileLayerInfo=e.getLayerInfo(t,a),this._dataRequested=null;var l=this._findAncestorWithData();return l?(this._setUpsamplingTile(l.tile),i.Pool.release(l)):(this._tileLayerInfo.upsampleFromTile&&i.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=null),this._requestNext(!0)},e.prototype.dispose=function(){this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null),this.tile=null,this._tileLayerInfo=null},e.prototype.setSuspension=function(e){e!==this.suspended&&(this.suspended=e,e?this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())},e.prototype.update=function(){var e=this._findAncestorWithData();return e&&this._tileLayerInfo.upsampleFromTile&&e.tile!==this._tileLayerInfo.upsampleFromTile.tile?this._setUpsamplingTile(e.tile):e&&i.Pool.release(e),this._requestNext()},e.prototype.dataArrived=function(e){throw r},e.prototype.dataMissing=function(e){this._dataRequested=null,this._tileLayerInfo.disposeData(),this._requestNext()},e.prototype._agentDone=function(){this.tile.agentDone(this.layerIdx,this.layerClass),this.dispose()},e.prototype._requestNext=function(e){if(void 0===e&&(e=!1),this.suspended)return!0;var t=this._findNextDownload();if(this._dataRequested){if(t===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null}if(t){var i=t.requestLayerData(this.layerIdx,this.layerClass,this);i&&(this._dataRequested=t)}else e||this._agentDone();return!!this._dataRequested},e.prototype._findNextDownload=function(){for(var t,i=this.layerIdx,s=this.layerClass,l=this.tile.parentSurface.layerViewByIndex(i,s),r=l.minDataLevel,n=l.maxDataLevel,o=this._desiredMinLevelDelta(),u=e.START_LOADING_LEVEL_DELTA+o,h=this._scaleRangeEnabled,p=this.tile,d=0,y=p.lij[0],_=this._tileLayerInfo.upsampleFromTile?this._tileLayerInfo.upsampleFromTile.tile.lij[0]:-1,f=this.tile.parentSurface,m=f.tilemapStats,L=f.getTilemapTile(p),I=!1;p&&(!h||a.fallsWithinLayer(p,l.layer,!1))&&p.lij[0]>=r;){var T=p.layerInfo[s][i];if(T.data&&d>=o){p.lij[0]>_&&this._setUpsamplingTile(p),T.dataInvalidated&&(t=p);break}if(L&&!L.tileDataAvailable(p,i,s))I=!0;else if(p.lij[0]<=n&&!T.data&&!T.dataMissing&&(t=p,d>=u))break;p=p.parent,p&&L&&(L=L.parent||f.getTilemapTile(p)),d++}return t&&y-t.lij[0]<o&&this._tileLayerInfo.upsampleFromTile&&(t=null),!t&&I&&m.tilesNotPresent++,t},e.prototype._findAncestorWithData=function(){return s(this.tile,this.layerIdx,this.layerClass,1,0,0,0)},e.prototype._desiredMinLevelDelta=function(){throw r},e.prototype._setUpsamplingTile=function(e){throw r},e.prototype._unsetUpsamplingTile=function(){this._tileLayerInfo.upsampleFromTile&&i.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=null},e.START_LOADING_LEVEL_DELTA=4,e.AGENT_DONE=new e,e}();return n});