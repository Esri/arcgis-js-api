// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","../../_devConfig"],function(a,e){var t={};return t.getAreaDataValue=function(a,t,r,n,o){function i(e){!1!==f&&(s=e[f]),void 0===s&&(s=e[a])}if(!e.showAreaDataUtilUndefinedData&&a){var c=!r;n=void 0===n?0:Number(n)||0;var l=t.areaData[n];if(l){var u=a.indexOf("."),f=!1;-1!==u&&(f=a.substr(u+1)),r||-1===u||(r=a.substr(0,u));var s,v=l[r];if(v&&i(v.data),!c)return s;if(void 0!==s||o||i(t.metadata),void 0===s)for(var d in l){var g=l[d];if(i(g.data),void 0!==s)break}return s}}},t.getAreaDataObjectCalculator=function(a,e,r){var n=a[e];return!n&&r&&(n=a[e]=t.createCalculator()),n},t.createCalculator=function(a,e){return{data:a||{},comparisonLevels:e||[]}},t.setAreaDataValue=function(a,e,r,n,o){o=void 0===o?0:Number(o)||0,t.setAreaDataObjectValue(a,e,r[o],n)},t.setAreaDataObjectValue=function(a,e,r,n){if(r&&n){t.getAreaDataObjectCalculator(r,n,!0).data[a]=e}},t.mergeAreaData=function(a,e){e.forEach(function(e,r){var n=a[r];n&&t.mergeAreaDataObjects(n,e)})},t.mergeAreaDataObjects=function(e,t){for(var r in e){var n=e[r],o=t[r];if(o){if(n.comparisonLevels.length!==o.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(o.data,n.data),n.comparisonLevels.forEach(function(e,t){a.mixin(o.comparisonLevels[t],e)})}else t[r]=n}console.log("AreaDataUtil.js merging area data => areaData"),console.log(t)},t});