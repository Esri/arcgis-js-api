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

define(["require","exports","../../../renderers/support/HeatmapColorStop"],(function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.getHeatmapRampStops=void 0,o.getHeatmapRampStops=function(e){var o=e.colorStops,t=o.length-1;if(o&&o[0]){var a=o[t];a&&1!==a.ratio&&((o=o.slice(0)).push(new r({ratio:1,color:a.color})),t++)}return o.map((function(e,o){var r="";return 0===o?r="low":o===t&&(r="high"),{color:e.color,label:r,ratio:e.ratio}})).reverse()}}));