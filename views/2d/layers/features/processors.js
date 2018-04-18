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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(e,r,t,n){function o(e,r){return i[e]().then(function(e){return e.default}).then(function(e){var n=r.serviceAndViewInfo,o=r.remoteClient,i=r.tileStore;return new e(t({},n,{tileStore:i,remoteClient:o}))})}Object.defineProperty(r,"__esModule",{value:!0});var i={symbol:function(){return n.create(function(r){return e(["./processors/SymbolProcessor"],r)})}};r.createProcessor=o});