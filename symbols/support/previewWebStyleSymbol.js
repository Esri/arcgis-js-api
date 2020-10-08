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

define(["require","exports","../../request","../../core/screenUtils"],(function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.previewWebStyleSymbol=void 0,t.previewWebStyleSymbol=function(e,t,r){var h=e.thumbnail&&e.thumbnail.url;return h?i(h,{responseType:"image"}).then((function(e){var t=function(e,t){var i=!/\\.svg$/i.test(e.src)&&t&&t.disableUpsampling,r=Math.max(e.width,e.height),h=t&&null!=t.maxSize?n.pt2px(t.maxSize):120;i&&(h=Math.min(r,h));var a=Math.min(h,t&&null!=t.size?n.pt2px(t.size):r);if(a!==r){var u=0!==e.width&&0!==e.height?e.width/e.height:1;u>=1?(e.width=a,e.height=a/u):(e.width=a*u,e.height=a)}return e}(e.data,r);return r&&r.node?(r.node.appendChild(t),r.node):t})):e.fetchSymbol().then((function(e){return t(e,r)}))}}));