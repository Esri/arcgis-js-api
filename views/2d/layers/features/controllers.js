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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../../../core/promiseUtils"],function(e,r,o,t,n){function i(e){return e&&"esri.layers.graphics.sources.CSVSource"===e.declaredClass}function s(e){var r=e.source;return e.capabilities.operations.supportsQuery?i(r)?n.resolve().then(function(){return{type:"memory",processing:e.processing&&e.processing.toWorker()||null}}):n.resolve({type:"on-demand",gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime(),processing:e.processing&&e.processing.toWorker()||null}):n.reject(new t("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e}))}function c(r,t){var i;return i="memory"===r?n.create(function(r){return e(["./controllers/MemoryController"],r)}):n.create(function(r){return e(["./controllers/OnDemandController"],r)}),i.then(function(e){return e.default}).then(function(e){var r=t.serviceAndViewInfo,n=t.remoteClient,i=t.tileStore;return new e(o({},r,{tileStore:i,remoteClient:n}))})}Object.defineProperty(r,"__esModule",{value:!0}),r.getControllerConfiguration=s,r.createController=c});