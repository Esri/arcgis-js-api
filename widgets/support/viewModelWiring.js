// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/watchUtils"],function(e){function t(e){var t="viewModel."+e;return function(){return this.get(t)}}function n(e){return function(t){var n=this.get("viewModel");n&&n.set(e,t)}}function r(e){var t="viewModel."+e;return function(){var e=this.get(t);return e?e.apply(this.viewModel,arguments):void 0}}function i(t,n){var r=o(t,n),i=e.init(t,"viewModel",function(e,i){r.forEach(function(e){e.remove()}),r.length=0,e&&(r=o(t,n)),t.own.apply(t,r)});t.own(i)}function o(e,t){return Array.isArray(t)||(t=[t]),t.map(function(t){return e.viewModel.on(t,function(n){e.emit(t,n)})})}return{createGetterDelegate:t,createSetterDelegate:n,createMethodDelegate:r,setUpEventDelegates:i}});