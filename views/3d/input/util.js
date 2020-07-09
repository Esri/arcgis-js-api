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

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._gain=e}return e.prototype.reset=function(e){this._value=e},Object.defineProperty(e.prototype,"gain",{set:function(e){this._gain=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return void 0===this._value?0:this._value},enumerable:!0,configurable:!0}),e.prototype.update=function(e){void 0===this._value?this._value=e:this._value=this._gain*e+(1-this._gain)*this._value},e}();t.ExponentialFalloff=i}));