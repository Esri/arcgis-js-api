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

define(["dojo/_base/lang","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../_devConfig"],function(a,e,t){var r={};return r.getAreaDataValue=function(a){function r(a){!1!==d&&(m=a[d]),void 0===m&&(m=a[n])}function o(){!f&&i&&r(i.metadata)}var n=a.fieldName,i=a.fieldData,c=a.areaDataObject,l=a.calculatorName,u=a.featureIndex,s=a.comparisonIndex,f=a.ignoreMetadata;if(isMultiFeature=a.isMultiFeature,!t.showAreaDataUtilUndefinedData&&n){var v=n.indexOf("."),d=!1;-1!==v&&(d=n.substr(v+1)),l||-1===v||(l=n.substr(0,v)),u=void 0===u?0:Number(u)||0;var c=a.areaDataObject||i.areaData[u];if(c){var m;isMultiFeature&&l===e.AREA_ATTRIBUTES_CALCULATOR_NAME&&o(),void 0===m&&function(){var a=c[l];a&&r(s>=0?a.comparisonLevels[s]:a.data)}();if(!!l)return m;if(void 0===m&&o(),void 0===m)for(var A in c){var D=c[A];if(r(s>=0?D.comparisonLevels[s]:D.data),void 0!==m)break}return m}}},r.getAreaDataObjectCalculator=function(a,e,t){if(!a)return null;var o=a[e];return!o&&t&&(o=a[e]=r.createCalculator()),o},r.createCalculator=function(a,e){return{data:a||{},comparisonLevels:e||[]}},r.combineAreaDataObjectCalculators=function(a,e,t){var o=[],n=[];if(a.forEach(function(a){var t=r.getAreaDataObjectCalculator(a,e);t&&(o.push(t.data),n=n.concat(t.comparisonLevels))}),t&&t.removeDuplicates){var i=[],c={},l=Object.keys(n[0]);n.forEach(function(a){var e=function(a){var e="";return l.forEach(function(t){e+=a[t]+";"}),e}(a);c[e]||(c[e]=!0,i.push(a))}),n=i}return{thisAreas:o,comparisonLevels:n}},r.setAreaDataValue=function(a,e,t,o,n){n=void 0===n?0:Number(n)||0,r.setAreaDataObjectValue(a,e,t[n],o)},r.setAreaDataObjectValue=function(a,e,t,o){if(t&&o){r.getAreaDataObjectCalculator(t,o,!0).data[a]=e}},r.mergeAreaData=function(a,e){e.forEach(function(e,t){var o=a[t];o&&r.mergeAreaDataObjects(o,e)})},r.mergeAreaDataObjects=function(e,t){for(var r in e){var o=e[r],n=t[r];if(n){if(o.comparisonLevels.length!==n.comparisonLevels.length){console.log("Error: can't merge calculators with different comparison levels!");continue}a.mixin(n.data,o.data),o.comparisonLevels.forEach(function(e,t){a.mixin(n.comparisonLevels[t],e)})}else t[r]=o}console.log("AreaDataUtil.js merging area data => areaData"),console.log(t)},r});