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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/now"],function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._maximumAge=e,this._values=[]}return Object.defineProperty(e.prototype,"values",{get:function(){return this._values},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this._values=[]},e.prototype.add=function(e,t){var r=void 0!==t?t:i();this._values.push({value:e,timeStamp:r}),this._cleanup(r)},Object.defineProperty(e.prototype,"newest",{get:function(){var e=this._values.length;return e>0?this._values[e-1]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"oldest",{get:function(){var e=this._values.length;return e>0?this._values[0]:void 0},enumerable:!0,configurable:!0}),e.prototype._cleanup=function(e){for(;this._values.length>0;){var t=this._values[0];if(!(t.timeStamp+this._maximumAge<e))break;this._values.shift()}},e}();t.ValueHistory=r});