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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../layers/support/timeUtils"],(function(e,i,t,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.AnimationTimer=void 0;var n=function(){function e(e){void 0===e&&(e=!0),this.enabled=e,this._time=0}return Object.defineProperty(e.prototype,"time",{get:function(){return t.isSome(this._forcedTime)?this._forcedTime:o.Milliseconds(this._time)},enumerable:!1,configurable:!0}),e.prototype.advance=function(e){this.enabled&&(this._time+=e)},e.prototype.stopAtTime=function(e){this._forcedTime=e},e}();i.AnimationTimer=n}));