// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","./core/promiseUtils","./core/has","./support/revision","dojo/_base/kernel"],function(e,r,n,s,i){!function(){var e=i.config,r=void 0!==e.useDeferredInstrumentation,s=e.has&&void 0!==e.has["config-deferredInstrumentation"],o=e.has&&void 0!==e.has["config-useDeferredInstrumentation"];r||s||o||(n.add("config-deferredInstrumentation",!1,!0,!0),n.add("config-useDeferredInstrumentation",!1,!0,!0))}();var o={version:"4.13",workerMessages:{request:function(n){return r.create(function(r){e(["./request"],r)}).then(function(e){var r=n.options||{};return r.responseType="array-buffer",e(n.url,r)}).then(function(e){return{result:{data:e.data,ssl:e.ssl},transferList:[e.data]}})}},revision:s.commitHash};return!n("host-webworker")&&n("esri-console-log-version")&&(n("esri-next")?console.warn("Using ArcGIS API for JavaScript "+o.version+"-next [Date: "+s.buildDate+", Revision: "+o.revision.slice(0,8)+"]"):console.debug("Using ArcGIS API for JavaScript "+o.version+" [Date: "+s.buildDate+", Revision: "+o.revision.slice(0,8)+"]")),o});