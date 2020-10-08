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

define(["require","exports","../../core/promiseUtils","../../core/scheduling","../../core/watchUtils","../../core/accessorSupport/watch"],(function(e,i,r,n,t,a){"use strict";return function(e){switch(e.type){case"2d":return function(e){var i=r.createResolver();function t(){var r,d,o,u,s,l;!e.destroyed&&(a.dispatch(),n.debug.dispatch(),!e.ready||e.updating||!e.stationary||e.rendering||!0===(null===(r=e.layerViewManager)||void 0===r?void 0:r.updating)||!0===(null===(d=e.labelManager)||void 0===d?void 0:d.updating)||!0===(null===(o=e.graphicsView)||void 0===o?void 0:o.updating)||!(!0!==(null===(u=e.magnifier)||void 0===u?void 0:u.visible)||(null===(s=e._magnifierView)||void 0===s?void 0:s.mask)&&(null===(l=e._magnifierView)||void 0===l?void 0:l.overlay))||e.allLayerViews.some((function(e){return!0===e.updating}))||e.allLayerViews.find((function(e){var i=!e.isFulfilled(),r=e.updating&&!e.suspended;return i||r})))?setTimeout(t,16):i()}return setTimeout(t,16),i.promise}(e);case"3d":if(e)return a.dispatch(),n.debug.dispatch(),t.whenNotOnce(e,"updating")}return r.resolve()}}));