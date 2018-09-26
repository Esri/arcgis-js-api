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

define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../core/lang"],function(e,r,t,i){function n(e,r){return r}function o(e){var r=this;e.appendChild(r)}function l(e,r){if(e){if("string"==typeof e)return e;var o=null;return n(e,r)?o=e.ratioPercentTotal?"showRatioPercentTotal":e.ratioPercent?"showRatioPercent":e.ratio?"showRatio":e.normField?"showNormField":e.field?"showField":null:d(e,r)&&(o=e.normField?"showNormField":e.normByPct?"showNormPct":e.field?"showField":null),o?i.substitute({field:e.field,normField:e.normField},"showField"===o?"{field}":t[o]):null}}function d(e,r){return!r}function s(e,r){return!!(r&&"Stretched"===r&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}Object.defineProperty(r,"__esModule",{value:!0}),r.attachToNode=o,r.getTitle=l,r.isRendererTitle=d,r.isImageryStretchedLegend=s});