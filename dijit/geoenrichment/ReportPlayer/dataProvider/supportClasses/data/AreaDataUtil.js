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

define(["dojo/_base/lang","../../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../_devConfig"],(function(a,e,t){var r={getAreaDataValue:function(a){var r=a.fieldName,n=a.fieldData,o=a.areaDataObject,i=a.calculatorName,c=a.featureIndex,l=a.featureAttributes,u=a.ignoreMetadata,f=a.isMultiFeature;if(!t.showAreaDataUtilUndefinedData&&r){var s=r.indexOf("."),v=!1;if(-1!==s&&(v=r.substr(s+1)),i||-1===s||(i=r.substr(0,s)),c=void 0===c?0:Number(c)||0,(o=a.areaDataObject||n.areaData[c])||l){var d;if(f&&i===e.AREA_ATTRIBUTES_CALCULATOR_NAME&&A(),void 0===d&&function(){if(l)D(l);else{var a=o[i];a&&D(a.data)}}(),!!i)return d;if(void 0===d&&A(),void 0===d&&!l)for(var m in o){if(D(o[m].data),void 0!==d)break}return d}}function D(a){!1!==v&&(d=a[v]),void 0===d&&(d=a[r])}function A(){!u&&n&&D(n.metadata)}},getAreaDataObjectCalculator:function(a,e,t){if(!a)return null;var n=a[e];return!n&&t&&(n=a[e]=r.createCalculator()),n},createCalculator:function(a,e){return{data:a||{},comparisonLevels:e||[]}},combineAreaDataObjectCalculators:function(a,e,t){var n=[],o=[];return a.forEach((function(a){var t=r.getAreaDataObjectCalculator(a,e);t&&(n.push(t.data),o=o.concat(t.comparisonLevels))})),t&&t.removeDuplicates&&(o=r.removeDuplicacatedCalcData(o)),{thisAreas:n,comparisonLevels:o}},removeDuplicacatedCalcData:function(a){if(!a.length)return a;var e=[],t={},r=Object.keys(a[0]);return a.forEach((function(a){var n=function(a){var e="";return r.forEach((function(t){e+=a[t]+";"})),e}(a);t[n]||(t[n]=!0,e.push(a))})),a=e},setAreaDataValue:function(a,e,t,n,o){o=void 0===o?0:Number(o)||0,r.setAreaDataObjectValue(a,e,t[o],n)},setAreaDataObjectValue:function(a,e,t,n){t&&n&&null!=e&&(r.getAreaDataObjectCalculator(t,n,!0).data[a]=e)},mergeAreaData:function(a,e){e.forEach((function(e,t){var n=a[t];n&&r.mergeAreaDataObjects(n,e)}))},mergeAreaDataObjects:function(e,t){for(var r in e){var n=e[r],o=t[r];if(o){if(n.comparisonLevels.length!==o.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(o.data,n.data),n.comparisonLevels.forEach((function(e,t){a.mixin(o.comparisonLevels[t],e)}))}else t[r]=n}console.log("AreaDataUtil.js merging area data => areaData"),console.log(t)}};return r}));