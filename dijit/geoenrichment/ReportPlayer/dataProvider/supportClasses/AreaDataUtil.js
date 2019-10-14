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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../_devConfig"],function(a,e,t){var r={};return r.getAreaDataValue=function(a){function r(a){!1!==m&&(D=a[m]),void 0===D&&(D=a[o])}function n(){!f&&i&&r(i.metadata)}var o=a.fieldName,i=a.fieldData,c=a.areaDataObject,l=a.calculatorName,u=a.featureIndex,s=a.comparisonIndex,f=a.ignoreMetadata,v=a.isMultiFeature;if(!t.showAreaDataUtilUndefinedData&&o){var d=o.indexOf("."),m=!1;-1!==d&&(m=o.substr(d+1)),l||-1===d||(l=o.substr(0,d)),u=void 0===u?0:Number(u)||0;var c=a.areaDataObject||i.areaData[u];if(c){var D;v&&l===e.AREA_ATTRIBUTES_CALCULATOR_NAME&&n(),void 0===D&&function(){var a=c[l];a&&r(s>=0?a.comparisonLevels[s]:a.data)}();if(!!l)return D;if(void 0===D&&n(),void 0===D)for(var A in c){var g=c[A];if(r(s>=0?g.comparisonLevels[s]:g.data),void 0!==D)break}return D}}},r.getAreaDataObjectCalculator=function(a,e,t){if(!a)return null;var n=a[e];return!n&&t&&(n=a[e]=r.createCalculator()),n},r.createCalculator=function(a,e){return{data:a||{},comparisonLevels:e||[]}},r.combineAreaDataObjectCalculators=function(a,e,t){var n=[],o=[];return a.forEach(function(a){var t=r.getAreaDataObjectCalculator(a,e);t&&(n.push(t.data),o=o.concat(t.comparisonLevels))}),t&&t.removeDuplicates&&(o=r.removeDuplicacatedCalcData(o)),{thisAreas:n,comparisonLevels:o}},r.removeDuplicacatedCalcData=function(a){if(!a.length)return a;var e=[],t={},r=Object.keys(a[0]);return a.forEach(function(a){var n=function(a){var e="";return r.forEach(function(t){e+=a[t]+";"}),e}(a);t[n]||(t[n]=!0,e.push(a))}),a=e},r.setAreaDataValue=function(a,e,t,n,o){o=void 0===o?0:Number(o)||0,r.setAreaDataObjectValue(a,e,t[o],n)},r.setAreaDataObjectValue=function(a,e,t,n){if(t&&n&&null!==e&&void 0!==e){r.getAreaDataObjectCalculator(t,n,!0).data[a]=e}},r.mergeAreaData=function(a,e){e.forEach(function(e,t){var n=a[t];n&&r.mergeAreaDataObjects(n,e)})},r.mergeAreaDataObjects=function(e,t){for(var r in e){var n=e[r],o=t[r];if(o){if(n.comparisonLevels.length!==o.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(o.data,n.data),n.comparisonLevels.forEach(function(e,t){a.mixin(o.comparisonLevels[t],e)})}else t[r]=n}console.log("AreaDataUtil.js merging area data => areaData"),console.log(t)},r});