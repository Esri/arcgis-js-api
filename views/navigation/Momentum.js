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

define(["require","exports"],(function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e){this._initialVelocity=t,this._stopVelocity=i,this._friction=e,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}return Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0}),t.prototype.isFinished=function(t){return t>this.duration},Object.defineProperty(t.prototype,"friction",{get:function(){return this._friction},enumerable:!0,configurable:!0}),t.prototype.value=function(t){return this.valueFromInitialVelocity(this._initialVelocity,t)},t.prototype.valueDelta=function(t,i){var e=this.value(t);return this.value(t+i)-e},t.prototype.valueFromInitialVelocity=function(t,i){i=Math.min(i,this.duration);var e=1-this.friction;return t*(Math.pow(e,i)-1)/Math.log(e)},t}();i.Momentum=e}));