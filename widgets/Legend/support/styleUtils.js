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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../intl"],(function(e,n,i,t){function r(e,n){return!n}Object.defineProperty(n,"__esModule",{value:!0}),n.attachToNode=function(e){e.appendChild(this)},n.getTitle=function(e,n){if(e){if("string"==typeof e)return e;if("value"in e||"unit"in e)return t.substitute(i.dotValue,e);if("colorName"in e||"bandName"in e)return i[e.colorName]+": "+(i[e.bandName]||e.bandName);var o=null;return!function(e,n){return n}(0,n)?r(e,n)&&(o=e.normField?"showNormField":e.normByPct?"showNormPct":e.field?"showField":null):o=e.ratioPercentTotal?"showRatioPercentTotal":e.ratioPercent?"showRatioPercent":e.ratio?"showRatio":e.normField?"showNormField":e.field?"showField":null,o?t.substitute("showField"===o?"{field}":i[o],{field:e.field,normField:e.normField}):null}},n.isRendererTitle=r,n.isImageryStretchedLegend=function(e,n){return!!(n&&"Stretched"===n&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}}));