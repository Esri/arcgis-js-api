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

// (c) the service indicates that it contains data at that level (minDataLevel)

// = (c)

define(["require","exports","./tileUtils","./UpsampleInfo"],function(e,t,i,a){function s(e,t,i,r,n,o,u){if(!e.parent||u>l)return null;if(r*=.5,n*=.5,o*=.5,1&e.lij[2]&&(n+=.5),0==(1&e.lij[1])&&(o+=.5),e.parent.hasLayerData(t,i)){var h=a.Pool.acquire();return h.init(e.parent,n,o,r),h}return s(e.parent,t,i,r,n,o,u+1)}var l=6,r=new Error("Abstract method called on TileAgent");return function(){function e(){}return e.prototype.init=function(e,t,i,s){this.tile=e,this.layerIdx=t,this.layerClass=i,this.suspended=s,this._tileLayerInfo=e.getLayerInfo(t,i),this._dataRequested=null;var l=this._findAncestorWithData();return l?(this._setUpsamplingTile(l.tile),a.Pool.release(l)):this._unsetUpsamplingTile(),this._requestNext(!0)},e.prototype.dispose=function(){this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null),this.tile=null,this._tileLayerInfo=null},e.prototype.setSuspension=function(e){e!==this.suspended&&(this.suspended=e,e?this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())},e.prototype.update=function(){var e=this._findAncestorWithData(),t=this._tileLayerInfo.upsampleFromTile;return e&&(t&&e.tile!==t.tile&&this._setUpsamplingTile(e.tile),a.Pool.release(e)),this._requestNext()},e.prototype.dataArrived=function(e){throw r},e.prototype.dataMissing=function(e){this._dataRequested=null,this._tileLayerInfo.disposeData(),this._requestNext()},e.prototype._agentDone=function(){this.tile.agentDone(this.layerIdx,this.layerClass),this.dispose()},e.prototype._requestNext=function(e){if(void 0===e&&(e=!1),this.suspended)return!0;var t=this._findNextDownload();if(this._dataRequested){if(t===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null}return t?t.requestLayerData(this.layerIdx,this.layerClass,this)&&(this._dataRequested=t):e||this._agentDone(),!!this._dataRequested},e.prototype._findNextDownload=function(){for(var t,a=this.layerIdx,s=this.layerClass,l=this.tile.parentSurface.layerViewByIndex(a,s),r=l.minDataLevel,n=l.maxDataLevel,o=this._desiredMinLevelDelta(),u=e.START_LOADING_LEVEL_DELTA+o,h=this._scaleRangeEnabled,d=this.tile,p=0,_=d.lij[0],y=this._tileLayerInfo.upsampleFromTile,f=y?y.tile.lij[0]:-1,L=this.tile.parentSurface,c=L.tilemapStats,m=L.getTilemapTile(d),I=!1;d&&(!h||i.fallsWithinLayer(d,l.layer,!1))&&d.lij[0]>=r;){var q=d.layerInfo[s][a];if(q.data&&p>=o){d.lij[0]>f&&this._setUpsamplingTile(d),q.dataInvalidated&&(t=d);break}if(m&&!m.hasDataAvailable(d,a,s))I=!0;else if(d.lij[0]<=n&&!q.data&&!q.dataMissing&&(t=d,p>=u))break;d=d.parent,d&&m&&(m=m.parent||L.getTilemapTile(d)),p++}return t&&_-t.lij[0]<o&&this._tileLayerInfo.upsampleFromTile&&(t=null),!t&&I&&c.tilesNotPresent++,t},e.prototype._findAncestorWithData=function(){return s(this.tile,this.layerIdx,this.layerClass,1,0,0,0)},e.prototype._desiredMinLevelDelta=function(){throw r},e.prototype._setUpsamplingTile=function(e){throw r},e.prototype._unsetUpsamplingTile=function(){this._tileLayerInfo.upsampleFromTile&&a.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=null},e.START_LOADING_LEVEL_DELTA=4,e.AGENT_DONE=new e,e}()});