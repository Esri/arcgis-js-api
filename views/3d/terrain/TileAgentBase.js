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

define(["./UpsampleInfo"],function(t){var e=6,s=new Error("Abstract method called on TileAgentBase"),i=function(){};i.prototype.init=function(e,s,i,a){if(this.tile=e,this.layerIdx=s,this.layerClass=i,this._tileLayerInfo=e.getLayerInfo(s,i),this._dataRequested=null,this.suspended=a,!e.data){var r=this._findAncestorWithData();return r?(this._setUpsamplingTile(r.tile),t.Pool.release(r)):(this._tileLayerInfo.upsampleFromTile&&t.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=null),this._requestNext(!0)}},i.prototype.dispose=function(t){this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this,t),this._dataRequested=null),this.tile=null,this._tileLayerInfo=null},i.prototype.setSuspension=function(t){t!==this.suspended&&(this.suspended=t,t?this._dataRequested&&(this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null):this._tileLayerInfo.data||this.update())},i.prototype.update=function(){var e=this._findAncestorWithData();return e&&this._tileLayerInfo.upsampleFromTile&&e.tile!==this._tileLayerInfo.upsampleFromTile.tile?this._setUpsamplingTile(e.tile):e&&t.Pool.release(e),this._requestNext()},i.prototype.dataArrived=function(t){throw s},i.prototype.dataMissing=function(t){this._dataRequested=null,this._agentDone()},i.prototype._agentDone=function(){this.tile.agentDone(this.layerIdx,this.layerClass),this.dispose()},i.prototype._requestNext=function(t){if(this.suspended)return!0;var e=this._findNextDownload();if(this._dataRequested){if(e===this._dataRequested)return!0;this._dataRequested.unrequestLayerData(this.layerIdx,this.layerClass,this),this._dataRequested=null}if(e){var s=e.requestLayerData(this.layerIdx,this.layerClass,this);s&&(this._dataRequested=e)}else t||this._agentDone();return!!this._dataRequested},i.prototype._findAncestorWithData=function(){return a(this.tile,this.layerIdx,this.layerClass,1,0,0,0)};var a=function(s,i,r,n,l,o,u){if(!s.parent||u>e)return null;if(n*=.5,l*=.5,o*=.5,1&s.lij[2]&&(l+=.5),0===(1&s.lij[1])&&(o+=.5),s.parent.hasLayerData(i,r)){var h=t.Pool.acquire();return h.init(s.parent,l,o,n),h}return a(s.parent,i,r,n,l,o,u+1)};return i.prototype._findNextDownload=function(){throw s},i});