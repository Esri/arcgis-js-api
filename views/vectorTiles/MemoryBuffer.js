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

define(["require","exports"],function(e,r){var t=function(){function e(e){this._array=[],0>=e&&console.error("strideInBytes must be positive!"),this._stride=e}return Object.defineProperty(e.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return 4*this._array.length/this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"itemSize",{get:function(){return this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sizeInBytes",{get:function(){return 4*this._array.length},enumerable:!0,configurable:!0}),e.prototype.toBuffer=function(){var e=new Uint32Array(this._array);return e.buffer},e.i1616to32=function(e,r){return 65535&e|r<<16},e.i8888to32=function(e,r,t,n){return 255&e|(255&r)<<8|(255&t)<<16|n<<24},e.i8816to32=function(e,r,t){return 255&e|(255&r)<<8|t<<16},e}();return t});