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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/on"],function(e,n,r){var t=6e4,o={};return o.waitForLoad=function(o){function i(){return o.updating&&u("update-end",6e4)}function u(n,t){function i(e){u&&u.remove(),c&&clearTimeout(c),e?d.resolve():d.reject(new Error("The map can't be loaded."))}var u,c,d=new e;return u=r.once(o,n,function(){i(!0)}),c=setTimeout(function(){i(!1)},t),d.promise}return n(function(){return!o.loaded&&u("load",t)}(),function(){return n(i(),function(){return o})})},o});