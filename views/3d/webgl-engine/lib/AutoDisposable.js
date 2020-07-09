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

define(["require","exports","tslib"],(function(s,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.AutoDisposableMixin=function(s){return function(s){function e(){var e=null!==s&&s.apply(this,arguments)||this;return e._isDisposed=!1,e}return i.__extends(e,s),e.prototype.dispose=function(){for(var s=this.__proto__.__managedDisposables__||[],e=s.length-1;e>=0;e--){var i=s[e];this[i]&&"function"==typeof this[i].dispose&&this[i].dispose(),this[i]=null}this._isDisposed=!0},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!0,configurable:!0}),e}(s)};var n=function(s){function e(){return null!==s&&s.apply(this,arguments)||this}return i.__extends(e,s),e}(e.AutoDisposableMixin((function(){})));e.AutoDisposable=n,e.autoDispose=function(){return function(s,e){s.hasOwnProperty("__managedDisposables__")||(s.__managedDisposables__=s.__managedDisposables__?s.__managedDisposables__.slice():[]),s.__managedDisposables__.push(e)}}}));