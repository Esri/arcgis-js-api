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

define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../intl"],function(e,t,i,n){function r(e,t){return t}function o(e){var t=this;e.appendChild(t)}function l(e,t){if(e){if("string"==typeof e)return e;if("value"in e||"unit"in e)return n.substitute(i.dotValue,e);var o=null;return r(e,t)?o=e.ratioPercentTotal?"showRatioPercentTotal":e.ratioPercent?"showRatioPercent":e.ratio?"showRatio":e.normField?"showNormField":e.field?"showField":null:d(e,t)&&(o=e.normField?"showNormField":e.normByPct?"showNormPct":e.field?"showField":null),o?n.substitute("showField"===o?"{field}":i[o],{field:e.field,normField:e.normField}):null}}function d(e,t){return!t}function u(e,t){return!!(t&&"Stretched"===t&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}Object.defineProperty(t,"__esModule",{value:!0}),t.attachToNode=o,t.getTitle=l,t.isRendererTitle=d,t.isImageryStretchedLegend=u});