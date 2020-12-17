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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil","../../dataProvider/supportClasses/data/AreaDataUtil","dojo/i18n!esri/nls/jsapi"],(function(a,e,t){t=t.geoenrichment.dijit.ReportPlayer.ReportPlayer;var r={valueFormatFunction:function(e,r){return r&&r.isMissing?t.missingVariable:void 0===e||"string"==typeof e?e:a.formatNumber(e,{places:r.decimals,preserveTrailingZeroes:!0})},copyValueToCalculatorData:function(a,e){var t=r._findAttrsInCalcData(e,a);t&&(t[e.fieldName]=a[e.fieldName])},copyValueFromCalculatorData:function(a,e){var t=r._findAttrsInCalcData(e,a);t&&(a[e.fieldName]=t[e.fieldName])},_findAttrsInCalcData:function(a,t){var r,i;if(a.isMultiFeature){var l=e.combineAreaDataObjectCalculators(a.fieldData.areaData,a.calculatorName);r=l&&l.comparisonLevels||[]}else{var o=e.getAreaDataObjectCalculator(a.fieldData.areaData[a.currentFeatureIndex],a.calculatorName);r=o&&o.comparisonLevels||[]}return r.some((function(a){if(a.StdGeographyLevel&&a.StdGeographyLevel===t.StdGeographyLevel&&a.StdGeographyID===t.StdGeographyID)return i=a,!0})),i}};return r}));