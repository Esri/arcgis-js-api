// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/SortUtil"],(function(e){var r={ABOVE_AVERAGE:"aboveAverage",BELOW_AVERAGE:"belowAverage",TOP_N:"topN",BOTTOM_N:"bottomN",RANGE:"range",NONE:"none",isSupported:function(e){for(var n in r)if(r[n]===e)return!0;return!1},isNumElementsType:function(e){return e===r.TOP_N||e===r.BOTTOM_N},isRangeType:function(e){return e===r.RANGE},filterData:function(n,t){if(!n.length)return[];function u(){var e=0;return n.forEach((function(r){e+=r})),e/n.length}switch(n=n.slice().sort(e.compareNumeric),t.method){case r.ABOVE_AVERAGE:var i=u();return n.filter((function(e){return e>i}));case r.BELOW_AVERAGE:i=u();return n.filter((function(e){return e<i}));case r.TOP_N:if((a=t.numElements)>=n.length)return n;var o=n.slice().reverse()[a-1];return n.filter((function(e){return e>=o}));case r.BOTTOM_N:var a;if((a=t.numElements)>=n.length)return n;var c=n[a-1];return n.filter((function(e){return e<=c}));case r.RANGE:return n.filter((function(e){return t.ranges.some((function(n){return r._checkValueMatchesRange(e,n)}))}));case r.NONE:return n;default:throw new Error("Method is not supported!")}},_checkValueMatchesRange:function(e,r){return r.conditions.length&&r.conditions.every((function(r){return function(e,r,n){switch(r){case"=":return e===n;case"<":return e<n;case">":return e>n;case"<=":return e<=n;case">=":return e>=n}return!1}(e,r.operator,Number(r.value))}))},getRangeStatistics:function(e){var r=-1/0,n=1/0;return e&&e.forEach((function(e){e.conditions.forEach((function(e){">"===e.operator||">="===e.operator?r=Math.max(r,e.value):n=Math.min(n,e.value)}))})),{min:r,max:n}}};return r}));