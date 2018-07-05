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

define(["require","exports","./objectResourceUtils","../../webgl-engine/lib/lodRendering/LodResources"],function(e,n,t,r){function o(e){var n=[];return e.stageResources.geometries.forEach(function(t,r){var o=e.materialsByComponent[r][0],c=e.stageResources.textures;n.push({material:o,geometry:t,textures:c})}),{components:n,faceCount:e.lodMetrics?e.lodMetrics.faceCount:null,minScreenSpaceRadius:null,pivotOffset:e.pivotOffset}}function c(e){return{levels:e.map(function(e){return o(e)})}}function i(e,n){return t.fetchLod(e,n).then(function(e){return c(e)})}function s(e,n){void 0===n&&(n=a);var t=r.computeFaceCount(e);return Math.sqrt(t/(n*Math.PI))}function u(e){e.levels.forEach(function(e){e.minScreenSpaceRadius=s(e)}),e.levels[0].minScreenSpaceRadius=Math.min(2,e.levels[0].minScreenSpaceRadius)}Object.defineProperty(n,"__esModule",{value:!0}),n.makeLodLevelResources=o,n.makeLodResources=c,n.fetchObjectLodResources=i,n.estimateMinScreenSpaceRadius=s,n.fillEstimatedMinScreenSpaceRadius=u;var a=.05});