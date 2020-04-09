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

define(["require","exports","../../../../../core/arrayUtils"],(function(e,o,n){function r(e){var o=[];return e.components.forEach((function(e){o.push(e.geometry)})),n.unique(o)}Object.defineProperty(o,"__esModule",{value:!0}),o.materialsFromLodResources=function(e){var o=[];return e.levels.forEach((function(e){e.components.forEach((function(e){o.push(e.material)}))})),n.unique(o)},o.texturesFromLodResources=function(e){var o=[];return e.levels.forEach((function(e){e.components.forEach((function(e){e.textures&&o.push.apply(o,e.textures)}))})),n.unique(o)},o.geometriesFromLodLevelResources=r,o.geometriesFromLodResources=function(e){var o=[];return e.levels.forEach((function(e){e.components.forEach((function(e){o.push(e.geometry)}))})),n.unique(o)},o.computeFaceCount=function(e){var o=0;return r(e).forEach((function(e){o+=e.data.indexCount/3})),o}}));