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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../_devConfig"],function(a,e,t){var r={};return r.getAreaDataValue=function(a){function r(a){!1!==d&&(m=a[d]),void 0===m&&(m=a[o])}function n(){!f&&i&&r(i.metadata)}var o=a.fieldName,i=a.fieldData,c=a.areaDataObject,l=a.calculatorName,u=a.featureIndex,s=a.comparisonIndex,f=a.ignoreMetadata;if(isMultiFeature=a.isMultiFeature,!t.showAreaDataUtilUndefinedData&&o){var v=o.indexOf("."),d=!1;-1!==v&&(d=o.substr(v+1)),l||-1===v||(l=o.substr(0,v)),u=void 0===u?0:Number(u)||0;var c=a.areaDataObject||i.areaData[u];if(c){var m;isMultiFeature&&l===e.AREA_ATTRIBUTES_CALCULATOR_NAME&&n(),void 0===m&&function(){var a=c[l];a&&r(s>=0?a.comparisonLevels[s]:a.data)}();if(!!l)return m;if(void 0===m&&n(),void 0===m)for(var D in c){var A=c[D];if(r(s>=0?A.comparisonLevels[s]:A.data),void 0!==m)break}return m}}},r.getAreaDataObjectCalculator=function(a,e,t){if(!a)return null;var n=a[e];return!n&&t&&(n=a[e]=r.createCalculator()),n},r.createCalculator=function(a,e){return{data:a||{},comparisonLevels:e||[]}},r.combineAreaDataObjectCalculators=function(a,e,t){var n=[],o=[];return a.forEach(function(a){var t=r.getAreaDataObjectCalculator(a,e);t&&(n.push(t.data),o=o.concat(t.comparisonLevels))}),t&&t.removeDuplicates&&(o=r.removeDuplicacatedCalcData(o)),{thisAreas:n,comparisonLevels:o}},r.removeDuplicacatedCalcData=function(a){if(!a.length)return a;var e=[],t={},r=Object.keys(a[0]);return a.forEach(function(a){var n=function(a){var e="";return r.forEach(function(t){e+=a[t]+";"}),e}(a);t[n]||(t[n]=!0,e.push(a))}),a=e},r.setAreaDataValue=function(a,e,t,n,o){o=void 0===o?0:Number(o)||0,r.setAreaDataObjectValue(a,e,t[o],n)},r.setAreaDataObjectValue=function(a,e,t,n){if(t&&n){r.getAreaDataObjectCalculator(t,n,!0).data[a]=e}},r.mergeAreaData=function(a,e){e.forEach(function(e,t){var n=a[t];n&&r.mergeAreaDataObjects(n,e)})},r.mergeAreaDataObjects=function(e,t){for(var r in e){var n=e[r],o=t[r];if(o){if(n.comparisonLevels.length!==o.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(o.data,n.data),n.comparisonLevels.forEach(function(e,t){a.mixin(o.comparisonLevels[t],e)})}else t[r]=n}console.log("AreaDataUtil.js merging area data => areaData"),console.log(t)},r});