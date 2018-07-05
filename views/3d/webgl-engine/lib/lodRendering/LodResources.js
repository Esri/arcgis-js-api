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

define(["require","exports","../../../../../core/arrayUtils","../../../../../geometry/support/aaBoundingBox"],function(e,n,o,r){function t(e){var n=[];return e.levels.forEach(function(e){e.components.forEach(function(e){n.push(e.material)})}),o.unique(n)}function u(e){var n=[];return e.levels.forEach(function(e){e.components.forEach(function(e){e.textures&&n.push.apply(n,e.textures)})}),o.unique(n)}function c(e){var n=[];return e.components.forEach(function(e){n.push(e.geometry)}),o.unique(n)}function i(e){var n=[];return e.levels.forEach(function(e){e.components.forEach(function(e){n.push(e.geometry)})}),o.unique(n)}function a(e){var n=r.empty();return c(e).forEach(function(e){var o=e.getBoundingInfo();r.expand(n,o.getBBMin()),r.expand(n,o.getBBMax())}),n}function s(e){var n=0;return c(e).forEach(function(e){n+=e.data.indexCount/3}),n}Object.defineProperty(n,"__esModule",{value:!0}),n.materialsFromLodResources=t,n.texturesFromLodResources=u,n.geometriesFromLodLevelResources=c,n.geometriesFromLodResources=i,n.computeBoundingBox=a,n.computeFaceCount=s});