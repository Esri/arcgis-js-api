// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/on"],(function(e,n,r){var o={};return o.waitForLoad=function(o){function t(n,t,i){var u,c,d=new e;function a(e){u&&u.remove(),c&&clearTimeout(c),e||!i?d.resolve():d.reject(new Error("The map can't be loaded."))}return u=r.once(o,n,(function(){a(!0)})),c=setTimeout((function(){a(!1)}),t),d.promise}return n(!o.loaded&&t("load",6e4,!0),(function(){return n(o.updating&&t("update-end",3e4,!1),(function(){return o}))}))},o}));