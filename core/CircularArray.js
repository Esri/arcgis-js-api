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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}return Object.defineProperty(t.prototype,"entries",{get:function(){return this._buffer},enumerable:!0,configurable:!0}),t.prototype.enqueue=function(t){if(this.size===this.maxSize){var i=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,i}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null},t.prototype.dequeue=function(){if(0===this.size)return null;var t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t},t}();i.default=e}));