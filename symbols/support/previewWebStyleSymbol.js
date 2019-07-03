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

define(["require","exports","../../request","../../core/screenUtils"],function(e,t,i,n){function r(e,t,n){var r=e.thumbnail&&e.thumbnail.url;return r?i(r,{responseType:"image"}).then(function(e){var t=h(e.data,n);return n&&n.node?(n.node.appendChild(t),n.node):t}):e.fetchSymbol().then(function(e){return t(e,n)})}function h(e,t){var i=/\\.svg$/i.test(e.src),r=!i&&t&&t.disableUpsampling,h=Math.max(e.width,e.height),a=t&&null!=t.maxSize?n.pt2px(t.maxSize):120;r&&(a=Math.min(h,a));var u=Math.min(a,t&&null!=t.size?n.pt2px(t.size):h);if(u!==h){var l=0!==e.width&&0!==e.height?e.width/e.height:1;l>=1?(e.width=u,e.height=u/l):(e.width=u*l,e.height=u)}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.previewWebStyleSymbol=r});