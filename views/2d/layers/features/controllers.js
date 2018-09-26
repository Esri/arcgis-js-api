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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../../../core/promiseUtils"],function(e,r,t,o,n){function i(e){return e&&"openPorts"in e}function s(e){if(!e)return null;var r={};return e.geometry&&(r.geometry=e.geometry.toJSON()),e.where&&(r.where=e.where),r}function u(e){var r=e.source;return"stream"===e.type?n.resolve().then(function(){return{type:"stream",filter:s(e.filter),purgeOptions:e.purgeOptions}}):e.capabilities.operations.supportsQuery?i(r)?n.resolve().then(function(){return{type:"memory",processing:e.processing&&e.processing.toWorker()||null}}):n.resolve({type:"on-demand",gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime(),processing:e.processing&&e.processing.toWorker()||null}):n.reject(new o("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e}))}function l(r,o){var i;return i="memory"===r?n.create(function(r){return e(["./controllers/MemoryController"],r)}):"stream"===r?n.create(function(r){return e(["./controllers/StreamController"],r)}):n.create(function(r){return e(["./controllers/OnDemandController"],r)}),i.then(function(e){return e.default}).then(function(e){var r=o.serviceAndViewInfo,n=o.remoteClient,i=o.tileStore;return new e(t({},r,{tileStore:i,remoteClient:n}))})}Object.defineProperty(r,"__esModule",{value:!0}),r.getControllerConfiguration=u,r.createController=l});