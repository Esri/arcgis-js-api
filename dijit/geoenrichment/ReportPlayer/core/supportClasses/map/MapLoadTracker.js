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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/on"],function(n,e,o){var r=6e4,t={};return t.waitForLoad=function(t){function u(){return t.updating&&i("update-end",6e4)}function i(e,r){function u(n){i&&i.remove(),c&&clearTimeout(c),n?d.resolve():d.reject(new Error("The map can't be loaded."))}var i,c,d=new n;return i=o.once(t,e,function(){u(!0)}),c=setTimeout(function(){u(!1)},r),d.promise}return e(function(){return!t.loaded&&i("load",r)}(),function(){return e(u(),function(){return t})})},t});