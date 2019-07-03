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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/watch"],function(e,t,n){function r(e,t){switch(e.type){case"2d":return i(e,t);case"3d":return a(e,t);default:t()}}function i(e,t){function n(){r()?setTimeout(n,16):t()}var r=function(){return!(e.ready&&!e.updating&&e.stationary&&!0!==e.get("layerViewManager.updating")&&!0!==e.get("labelManager.updating")&&!0!==e.get("graphicsView.updating")&&!e.allLayerViews.some(function(e){return!0===e.updating}))||!!e.allLayerViews.find(function(e){var t=!e.isFulfilled(),n=e.updating&&!e.suspended,r=e.rendering;return t||n||r})};setTimeout(n,16)}function a(e,t){function r(){return n.dispatch(),!e.ready||e.updating||e._stage.renderView.isLoadingResources||e.basemapTerrain&&e.basemapTerrain.tilingScheme&&e._stage.renderView.needsRender()||e._stage.renderView.test.textureRepository.getLoadingCount()>0}function i(){e.destroyed||(r()?setTimeout(i,16):t())}if(!e)return void t();setTimeout(i,16)}return r});