// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports"],function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){void 0===e&&(e=250),this.duration=e,this._lastTime=0,this._startTime=0,this._parent=t}return t.prototype.reset=function(){this._lastTime,this._startTime=performance.now()},t.prototype.step=function(){var t=performance.now();if(0===this._lastTime)return this._lastTime=t,this._parent.requestRender(),0;var e=t-this._lastTime;this._lastTime=t;var i=2*this.duration;return t-this._startTime<i&&this._parent.requestRender(),e/this.duration},t}();e.default=i});