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

define(["require","exports"],function(e,s){function i(){return function(e,s){e.__managedDisposables__=e.__managedDisposables__||[],e.__managedDisposables__.push(s)}}Object.defineProperty(s,"__esModule",{value:!0});var o=function(){function e(){this._isDisposed=!1}return e.prototype.dispose=function(){for(var e=this.__proto__.__managedDisposables__||[],s=e.length-1;s>=0;s--){var i=e[s];this[i]&&"function"==typeof this[i].dispose&&this[i].dispose(),this[i]=null}this._isDisposed=!0},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!0,configurable:!0}),e}();s.AutoDisposable=o,s.autoDispose=i});