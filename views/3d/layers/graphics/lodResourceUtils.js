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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,r,t,n,o){function s(e){var r=[];return e.stageResources.geometries.forEach((function(t,n){var o=e.stageResources.materials[n],s=e.stageResources.textures;r.push({material:o,geometry:t,textures:s})})),{components:r,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function a(e,r){void 0===r&&(r=i);var t=o.computeFaceCount(e);return Math.sqrt(t/(r*Math.PI))}Object.defineProperty(r,"__esModule",{value:!0}),r.makeLodLevelResources=s,r.makeLodResources=function(e){return{levels:e.map((function(e){return s(e)}))}},r.estimateMinScreenSpaceRadius=a,r.fillEstimatedMinScreenSpaceRadius=function(e){e.levels.forEach((function(e){e.minScreenSpaceRadius||(e.minScreenSpaceRadius=a(e))}))};var i=.05}));