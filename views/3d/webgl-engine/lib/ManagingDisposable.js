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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function s(){return function(e,n){e.__managedDisposables__=e.__managedDisposables__||[],e.__managedDisposables__.push(n)}}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.dispose=function(){var e=this;(this.__proto__.__managedDisposables__||[]).forEach(function(n){e[n]&&(e[n].dispose(),e[n]=void 0)})},e}();n.ManagingDisposable=o,n.manageDisposal=s});