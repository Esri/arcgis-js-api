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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","../../core/scheduling","../../core/watchUtils","../../core/accessorSupport/watch"],(function(e,r,t,i,n,a,u,o){return function(e){switch(e.type){case"2d":return n.create((function(r){return function(e,r){setTimeout((function t(){e.ready&&!e.updating&&e.stationary&&!0!==e.get("layerViewManager.updating")&&!0!==e.get("labelManager.updating")&&!0!==e.get("graphicsView.updating")&&(!0!==e.get("magnifier.visible")||e.get("_magnifierView.mask")&&e.get("_magnifierView.overlay"))&&!e.allLayerViews.some((function(e){return!0===e.updating}))&&!e.allLayerViews.find((function(e){var r=!e.isFulfilled(),t=e.updating&&!e.suspended,i="rendering"in e&&e.rendering;return r||t||i}))?r():setTimeout(t,16)}),16)}(e,r)}));case"3d":if(e)return o.dispatch(),a.debug.dispatch(),u.whenNotOnce(e,"updating")}return n.resolve()}}));