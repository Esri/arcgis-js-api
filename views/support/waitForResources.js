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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/watch"],function(e,t,r,n,i,a,u){function o(e,t){var r=c(e);return t?r(e,t):i.create(function(t){return r(e,t)})}function c(e){switch(e.type){case"2d":return g;case"3d":return p;default:return s}}function s(e,t){t()}function g(e,t){function r(){n()?setTimeout(r,16):t()}var n=function(){return!(e.ready&&!e.updating&&e.stationary&&!0!==e.get("layerViewManager.updating")&&!0!==e.get("labelManager.updating")&&!0!==e.get("graphicsView.updating")&&(!0!==e.get("magnifier.visible")||e.get("_magnifierView.mask")&&e.get("_magnifierView.overlay"))&&!e.allLayerViews.some(function(e){return!0===e.updating}))||!!e.allLayerViews.find(function(e){var t=!e.isFulfilled(),r=e.updating&&!e.suspended,n=e.rendering;return t||r||n})};setTimeout(r,16)}function p(e,t){if(!e)return void t();u.dispatch(),a.whenNotOnce(e,"updating",t)}return o});