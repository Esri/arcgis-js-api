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

define(["require","exports","tslib"],(function(s,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.autoDispose=i.AutoDisposable=i.AutoDisposableMixin=void 0,i.AutoDisposableMixin=function(s){return function(s){function i(){var i=null!==s&&s.apply(this,arguments)||this;return i._isDisposed=!1,i}return e.__extends(i,s),i.prototype.dispose=function(){for(var s,i=0,e=null!==(s=this._managedDisposables)&&void 0!==s?s:[];i<e.length;i++){var n=e[i],o=this[n];this[n]=null,o&&"function"==typeof o.dispose&&o.dispose()}this._isDisposed=!0},Object.defineProperty(i.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!1,configurable:!0}),i}(s)};var n=function(s){function i(){return null!==s&&s.apply(this,arguments)||this}return e.__extends(i,s),i}(i.AutoDisposableMixin((function(){})));i.AutoDisposable=n,i.autoDispose=function(){return function(s,i){var e,n;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!==(n=null===(e=s._managedDisposables)||void 0===e?void 0:e.slice())&&void 0!==n?n:[]),s._managedDisposables.unshift(i)}}}));