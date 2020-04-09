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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){void 0===e&&(e=400),this.duration=e,this._lastTime=0,this._elapsed=0,this._value=0,this._finished=!1}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this._lastTime=0,this._elapsed=0,this._value=0},e.prototype.step=function(){var e=performance.now();if(0===this._lastTime)return this._lastTime=e,this._value=0,!0;if(this._elapsed>=this.duration)return!0;var t=e-this._lastTime;return this._elapsed+=t,this._lastTime=e,this._value=Math.min(this._elapsed/this.duration,1),!1},e}();t.default=i}));