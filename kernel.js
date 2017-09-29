// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","./core/requireUtils","dojo/main","dojo/has"],function(e,n,r,t){function o(){var e=r.config,n=void 0!==e.useDeferredInstrumentation,o=e.has&&void 0!==e.has["config-deferredInstrumentation"],s=e.has&&void 0!==e.has["config-useDeferredInstrumentation"];n||o||s||(t.add("config-deferredInstrumentation",!1,!0,!0),t.add("config-useDeferredInstrumentation",!1,!0,!0))}o();var s={version:"4.5",workerMessages:{request:function(r){return n.when(e,"./request").then(function(e){var n=r.options||{};return n.responseType="array-buffer",e(r.url,n)}).then(function(e){return{data:{data:e.data,ssl:e.ssl},buffers:[e.data]}}).otherwise(function(e){throw e.toJSON()})}}};return s});