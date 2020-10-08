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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,s,t){"use strict";function r(e){var s=[];return e.stageResources.geometries.forEach((function(t,r){var n=e.stageResources.materials[r],i=e.stageResources.textures;s.push({material:n,geometry:t,textures:i})})),{components:s,minScreenSpaceRadius:e.lodThreshold,pivotOffset:e.pivotOffset}}function n(e,s){void 0===s&&(s=i);var r=t.computeFaceCount(e);return Math.sqrt(r/(s*Math.PI))}Object.defineProperty(s,"__esModule",{value:!0}),s.fillEstimatedMinScreenSpaceRadius=s.estimateMinScreenSpaceRadius=s.makeLodResources=s.makeLodLevelResources=void 0,s.makeLodLevelResources=r,s.makeLodResources=function(e){return{levels:e.map((function(e){return r(e)}))}},s.estimateMinScreenSpaceRadius=n,s.fillEstimatedMinScreenSpaceRadius=function(e){e.levels.forEach((function(e){e.minScreenSpaceRadius||(e.minScreenSpaceRadius=n(e))}))};var i=.05}));