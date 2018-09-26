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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","./objectResourceUtils","../../webgl-engine/lib/lodRendering/LodResources"],function(e,t,n,r,o,c){function s(e){var t=[];return e.stageResources.geometries.forEach(function(n,r){var o=e.materialsByComponent[r][0],c=e.stageResources.textures;t.push({material:o,geometry:n,textures:c})}),{components:t,faceCount:e.lodMetrics?e.lodMetrics.faceCount:null,minScreenSpaceRadius:null,pivotOffset:e.pivotOffset}}function i(e){return{levels:e.map(function(e){return s(e)})}}function u(e,t){return r(this,void 0,void 0,function(){var r;return n(this,function(n){switch(n.label){case 0:return[4,o.fetchLod(e,t)];case 1:return r=n.sent(),[2,i(r)]}})})}function a(e,t){void 0===t&&(t=f);var n=c.computeFaceCount(e);return Math.sqrt(n/(t*Math.PI))}function l(e){e.levels.forEach(function(e){e.minScreenSpaceRadius=a(e)}),e.levels[0].minScreenSpaceRadius=Math.min(2,e.levels[0].minScreenSpaceRadius)}Object.defineProperty(t,"__esModule",{value:!0}),t.makeLodLevelResources=s,t.makeLodResources=i,t.fetchObjectLodResources=u,t.estimateMinScreenSpaceRadius=a,t.fillEstimatedMinScreenSpaceRadius=l;var f=.05});