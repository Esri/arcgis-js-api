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

define(["require","exports","../../../intl"],(function(e,t,i){"use strict";function r(e,t){return!t}Object.defineProperty(t,"__esModule",{value:!0}),t.isImageryStretchedLegend=t.isRendererTitle=t.getTitle=t.attachToNode=void 0,t.attachToNode=function(e){e.appendChild(this)},t.getTitle=function(e,t,n){if(t){if("string"==typeof t)return t;if("value"in t||"unit"in t)return i.substitute(e.dotValue,t);if("colorName"in t||"bandName"in t)return e[t.colorName]+": "+(e[t.bandName]||t.bandName);if("showCount"in t)return t.showCount?e.clusterCountTitle:null;var o=null;return!function(e,t){return t}(0,n)?r(t,n)&&(o=t.normField?"showNormField":t.normByPct?"showNormPct":t.field?"showField":null):o=t.ratioPercentTotal?"showRatioPercentTotal":t.ratioPercent?"showRatioPercent":t.ratio?"showRatio":t.normField?"showNormField":t.field?"showField":null,o?i.substitute("showField"===o?"{field}":e[o],{field:t.field,normField:t.normField}):null}},t.isRendererTitle=r,t.isImageryStretchedLegend=function(e,t){return!!(t&&"Stretched"===t&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}}));