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

define(["require","exports"],function(e,r){if(Object.defineProperty(r,"__esModule",{value:!0}),window.performance&&window.performance.measure){var n,o=window.performance;r.windowPerformanceProjectorLogger=function(e,r){switch(o.mark(e),e){case"domEventProcessed":o.measure("eventHandler","domEvent","domEventProcessed");break;case"renderDone":o.measure("renderCycle","renderStart","renderDone");break;case"rendered":o.measure("render",n,"rendered");break;case"patched":o.measure("diff+patch","rendered","patched")}n=e}}else r.windowPerformanceProjectorLogger=function(){}});