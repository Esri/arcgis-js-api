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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}return t.prototype.enqueue=function(t){if(this.size===this.maxSize){var e=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,e}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null},t.prototype.dequeue=function(){if(0===this.size)throw new Error("Cannot dequeue from empty buffer");var t=this._buffer[this._start];return this.size--,this._start=(this._start+1)%this.maxSize,t},t}();e.default=i});