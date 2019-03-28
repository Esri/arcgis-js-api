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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/promiseUtils"],function(e,r,t,n,o,i,s){function l(e){return e&&"openPorts"in e}function c(e){if(!e)return null;var r={};return e.geometry&&(r.geometry=e.geometry.toJSON()),e.where&&(r.where=e.where),r}function u(e,r){var t=e.source,n=r&&r.toJSON();if("stream"===e.type){var o={type:"stream",purgeOptions:e.purgeOptions,filter:n,serviceFilter:c(e.filter),processing:null};return s.resolve(o)}if(!e.capabilities.operations.supportsQuery)return s.reject(new i("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e}));if(l(t)){var u={type:"memory",filter:n,processing:"processing"in e&&e.processing&&e.processing.toWorker()||null};return s.resolve(u)}var a={type:"on-demand",gdbVersion:"gdbVersion"in e?e.gdbVersion:null,historicMoment:"historicMoment"in e&&e.historicMoment?e.historicMoment.getTime():null,processing:"processing"in e&&e.processing?e.processing.toWorker():null,filter:n};return s.resolve(a)}function a(r){switch(r){case"on-demand":return s.create(function(r){return e(["./controllers/OnDemandController"],r)});case"memory":return s.create(function(r){return e(["./controllers/MemoryController"],r)});case"stream":return s.create(function(r){return e(["./controllers/StreamController"],r)});default:return s.reject(new i("mapview-controller:bad-type","Unable to create controller for unknown type: "+r))}}function p(e,r){return o(this,void 0,void 0,function(){var o,i,s,l,c;return n(this,function(n){switch(n.label){case 0:return[4,a(e.type)];case 1:return o=n.sent().default,i=r.serviceAndViewInfo,s=r.remoteClient,l=r.tileStore,c=new o(t({},i,{configuration:e,tileStore:l,remoteClient:s})),[4,c.setFilter({index:0,filter:e.filter})];case 2:return n.sent(),[2,c]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.getControllerConfiguration=u,r.createController=p});