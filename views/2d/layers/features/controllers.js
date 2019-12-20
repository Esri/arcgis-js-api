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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/promiseUtils"],function(e,r,t,o,n,l,c){function a(r){switch(r){case"on-demand":return c.create(function(r){return e(["./controllers/OnDemandController"],r)});case"stream":return c.create(function(r){return e(["./controllers/StreamController"],r)});default:return c.reject(new l("mapview-controller:bad-type","Unable to create controller for unknown type: "+r))}}Object.defineProperty(r,"__esModule",{value:!0}),r.loadControllerModule=a});