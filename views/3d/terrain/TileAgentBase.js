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

// (c) the LOD falls within the visibility range of the layer (checked by fallsWithinLayer())

// = (c)

define(["./UpsampleInfo","./tileUtils"],function(e,t){var i=6,a=new Error("Abstract method called on TileAgentBase"),s=function(){};s.prototype.init=function(t,i,a,s){if(this.tile=t,this.layerIdx=i,this.layerClass=a,this._tileLayerInfo=t.getLayerInfo(i,a),this._dataRequested=null,this.suspended=s,!t.data){var l=this._findAncestorWithData();return l?(this._setUpsamplingTile(l.tile),e.Pool.release(l)):(this._tileLayerInfo.upsampleFromTile&&e.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=null),this._requestNext(!0)}},s.prototype.dispose=function(){this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null),this.tile=null,this._tileLayerInfo=null},s.prototype.setSuspension=function(e){e!==this.suspended&&(this.suspended=e,e?this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())},s.prototype.update=function(){var t=this._findAncestorWithData();return t&&this._tileLayerInfo.upsampleFromTile&&t.tile!==this._tileLayerInfo.upsampleFromTile.tile?this._setUpsamplingTile(t.tile):t&&e.Pool.release(t),this._requestNext()},s.prototype.dataArrived=function(e){throw a},s.prototype.dataMissing=function(e){this._dataRequested=null,this._agentDone()},s.prototype._agentDone=function(){this.tile.agentDone(this.layerIdx,this.layerClass),this.dispose()},s.prototype._requestNext=function(e){if(this.suspended)return!0;var t=this._findNextDownload();if(this._dataRequested){if(t===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null}if(t){var i=t.requestLayerData(this.layerIdx,this.layerClass,this);i&&(this._dataRequested=t)}else e||this._agentDone();return!!this._dataRequested},s.prototype._findNextDownload=function(){for(var e,i=this.layerIdx,a=this.layerClass,s=this.tile.parentSurface.layerViewByIndex(i,a),l=s.minDataLevel,r=s.maxDataLevel,n=this._desiredMinLevelDelta(),o=this.START_LOADING_LEVEL_DELTA+n,h=this.SCALE_RANGE_ENABLED,u=this.tile,d=u.lij[0],p=0,_=this._tileLayerInfo.upsampleFromTile?this._tileLayerInfo.upsampleFromTile.tile.lij[0]:-1,y=this.tile.parentSurface,f=y.getTilemapTile(u),L=y.tilemapStats,m=!1;u&&(o>=p||!e)&&(!h||t.fallsWithinLayer(u,s,!1))&&u.lij[0]>=l;){var D=u.layerInfo[a][i];if(D.data&&p>=n){u.lij[0]>_&&this._setUpsamplingTile(u);break}f&&!f.tileDataAvailable(u,i,a)?m=!0:u.lij[0]<=r&&!D.data&&(e=u),u=u.parent,f=f?f.parent:null,p++}return e&&d-e.lij[0]<n&&this._tileLayerInfo.upsampleFromTile&&(e=null),!e&&m&&L.tilesNotPresent++,e},s.prototype._findAncestorWithData=function(){return l(this.tile,this.layerIdx,this.layerClass,1,0,0,0)};var l=function(t,a,s,r,n,o,h){if(!t.parent||h>i)return null;if(r*=.5,n*=.5,o*=.5,1&t.lij[2]&&(n+=.5),0===(1&t.lij[1])&&(o+=.5),t.parent.hasLayerData(a,s)){var u=e.Pool.acquire();return u.init(t.parent,n,o,r),u}return l(t.parent,a,s,r,n,o,h+1)};return s.prototype._desiredMinLevelDelta=function(){throw a},s.prototype.START_LOADING_LEVEL_DELTA=4,s.prototype.SCALE_RANGE_ENABLED=!1,s});