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

define(["require","exports","../../core/promiseUtils","../../core/scheduling","../../core/watchUtils","../../core/accessorSupport/watch"],(function(e,t,i,r,n,a){return function(e){switch(e.type){case"2d":return function(e){var t=i.createResolver(),n=function(){return a.dispatch(),r.debug.dispatch(),!(e.ready&&!e.updating&&e.stationary&&!e._stage.renderRequested&&!0!==e.get("layerViewManager.updating")&&!0!==e.get("labelManager.updating")&&!0!==e.get("graphicsView.updating")&&(!0!==e.get("magnifier.visible")||e.get("_magnifierView.mask")&&e.get("_magnifierView.overlay"))&&!e.allLayerViews.some((function(e){return!0===e.updating})))||!!e.allLayerViews.find((function(e){var t=!e.isFulfilled(),i=e.updating&&!e.suspended;return t||i}))};return setTimeout((function e(){n()?setTimeout(e,16):t()}),16),t.promise}(e);case"3d":if(e)return a.dispatch(),r.debug.dispatch(),n.whenNotOnce(e,"updating")}return i.resolve()}}));