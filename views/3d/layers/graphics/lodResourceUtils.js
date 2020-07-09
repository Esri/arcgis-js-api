// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,t,n){function r(e){var t=[];return e.stageResources.geometries.forEach((function(n,r){var s=e.stageResources.materials[r],o=e.stageResources.textures;t.push({material:s,geometry:n,textures:o})})),{components:t,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function s(e,t){void 0===t&&(t=o);var r=n.computeFaceCount(e);return Math.sqrt(r/(t*Math.PI))}Object.defineProperty(t,"__esModule",{value:!0}),t.makeLodLevelResources=r,t.makeLodResources=function(e){return{levels:e.map((function(e){return r(e)}))}},t.estimateMinScreenSpaceRadius=s,t.fillEstimatedMinScreenSpaceRadius=function(e){e.levels.forEach((function(e){e.minScreenSpaceRadius||(e.minScreenSpaceRadius=s(e))}))};var o=.05}));