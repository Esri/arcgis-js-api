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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../renderers/support/HeatmapColorStop"],function(o,r,e){function t(o){var r=o.colorStops,t=r.length-1;if(r&&r[0]){var a=r[t];a&&1!==a.ratio&&(r=r.slice(0),r.push(new e.HeatmapColorStop({ratio:1,color:a.color})),t++)}return r.map(function(o,r){var e="";return 0===r?e="low":r===t&&(e="high"),{color:o.color,label:e,ratio:o.ratio,offset:1-o.ratio}}).reverse()}Object.defineProperty(r,"__esModule",{value:!0}),r.getHeatmapRampStops=t});