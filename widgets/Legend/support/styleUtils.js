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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../core/lang"],function(e,r,n,t){function o(e,r){return r}function i(e){var r=this;e.appendChild(r)}function l(e,r){var i=null;return o(e,r)?i=e.ratioPercentTotal?"showRatioPercentTotal":e.ratioPercent?"showRatioPercent":e.ratio?"showRatio":e.normField?"showNormField":e.field?"showField":null:d(e,r)&&(i=e.normField?"showNormField":e.normByPct?"showNormPct":e.field?"showField":null),i?t.substitute({field:e.field,normField:e.normField},n[i]):null}function d(e,r){return!r}function a(e,r){return!!(r&&"Stretched"===r&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}Object.defineProperty(r,"__esModule",{value:!0}),r.attachToNode=i,r.getTitle=l,r.isRendererTitle=d,r.isImageryStretchedLegend=a});