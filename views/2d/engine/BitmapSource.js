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

define(["require","exports","../../../core/ArrayPool"],function(t,e,i){var a=new i,r=function(){function t(t){this._readySignals=null,this.coords=[0,0],this._height=0,this.resolution=0,this.rotation=0,this._width=0,this._loadHandler=this._loadHandler.bind(this),this.data=t}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){if(this._data&&this._data.removeEventListener("load",this._loadHandler),this._data=t,this._width=this._height=0,t instanceof HTMLImageElement)t.naturalWidth?(this._width=t.naturalWidth,this._height=t.naturalHeight,this._emitReady()):t.addEventListener("load",this._loadHandler);else{if(!(t.width>0&&t.height>0))throw this._data=null,new Error("[BitmapSource] data cannot have size 0");this._width=t.width,this._height=t.height,this._emitReady()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return this._width>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),t.prototype.draw=function(t,e,i,a,r,n,h,d,o){this.ready&&t.drawImage(this._data,e,i,a,r,n,h,d,o)},t.prototype.onReady=function(t){this.ready?t(this):(this._readySignals||(this._readySignals=a.acquire()),this._readySignals.push(t))},t.prototype._emitReady=function(){if(this._readySignals){for(var t=0,e=this._readySignals;t<e.length;t++){var i=e[t];i(this)}a.release(this._readySignals),this._readySignals=null}},t.prototype._loadHandler=function(t){var e=t.target;e.removeEventListener("load",this._loadHandler),this._width=e.naturalWidth,this._height=e.naturalHeight,this._emitReady()},t}();return r});