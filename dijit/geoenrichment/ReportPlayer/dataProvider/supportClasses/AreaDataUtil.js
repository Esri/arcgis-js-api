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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","../../_devConfig"],function(a,e){var r={};return r.getAreaDataValue=function(a){function r(a){!1!==d&&(v=a[d]),void 0===v&&(v=a[t])}var t=a.fieldName,n=a.fieldData,o=a.calculatorName,i=a.featureIndex,c=a.comparisonIndex,l=a.ignoreMetadata;if(!e.showAreaDataUtilUndefinedData&&t){var s=!o;i=void 0===i?0:Number(i)||0;var u=n.areaData[i];if(u){var f=t.indexOf("."),d=!1;-1!==f&&(d=t.substr(f+1)),o||-1===f||(o=t.substr(0,f));var v,m=u[o];if(m&&r(c>=0?m.comparisonLevels[c]:m.data),!s)return v;if(void 0!==v||l||r(n.metadata),void 0===v)for(var g in u)if(m=u[g],r(c>=0?m.comparisonLevels[c]:m.data),void 0!==v)break;return v}}},r.getAreaDataObjectCalculator=function(a,e,t){if(!a)return null;var n=a[e];return!n&&t&&(n=a[e]=r.createCalculator()),n},r.createCalculator=function(a,e){return{data:a||{},comparisonLevels:e||[]}},r.setAreaDataValue=function(a,e,t,n,o){o=void 0===o?0:Number(o)||0,r.setAreaDataObjectValue(a,e,t[o],n)},r.setAreaDataObjectValue=function(a,e,t,n){if(t&&n){r.getAreaDataObjectCalculator(t,n,!0).data[a]=e}},r.mergeAreaData=function(a,e){e.forEach(function(e,t){var n=a[t];n&&r.mergeAreaDataObjects(n,e)})},r.mergeAreaDataObjects=function(e,r){for(var t in e){var n=e[t],o=r[t];if(o){if(n.comparisonLevels.length!==o.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(o.data,n.data),n.comparisonLevels.forEach(function(e,r){a.mixin(o.comparisonLevels[r],e)})}else r[t]=n}console.log("AreaDataUtil.js merging area data => areaData"),console.log(r)},r});