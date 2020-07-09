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

define(["require","exports","../../../renderers/support/HeatmapColorStop"],(function(r,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.getHeatmapRampStops=function(r){var e=r.colorStops,t=e.length-1;if(e&&e[0]){var a=e[t];a&&1!==a.ratio&&((e=e.slice(0)).push(new o({ratio:1,color:a.color})),t++)}return e.map((function(r,e){var o="";return 0===e?o="low":e===t&&(o="high"),{color:r.color,label:o,ratio:r.ratio}})).reverse()}}));