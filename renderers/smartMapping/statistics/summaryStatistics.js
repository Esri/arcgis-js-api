// COPYRIGHT © 2017 Esri
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

define(["require","exports","dojo/_base/lang","./classBreaks","../../../core/promiseUtils","./support/utils","../support/utils","../../../layers/support/fieldUtils"],function(e,r,a,i,s,t,n,l){function o(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(t.createError("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=a.mixin({},e);r.normalizationType=t.getNormalizationType(r);var i=[0,1,2],o=n.createLayerAdapter(r.layer,i);return r.layer=o,o?o.load().then(function(){var e=r.field,a=r.normalizationType,i=r.valueExpression||r.sqlExpression,u=e?o.getField(e):null,m=n.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),d=t.verifyBasicFieldValidity(o,m,"summary-statistics:invalid-parameters");if(d)return s.reject(d);if(u){var p=t.verifyFieldType(o,u,"summary-statistics:invalid-parameters",c);if(p)return s.reject(p);if(l.isDateField(u)&&a)return s.reject(t.createError("summary-statistics:invalid-parameters","Normalization is not allowed for date fields"))}else if(i&&a)return s.reject(t.createError("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));return r}):s.reject(t.createError("summary-statistics:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(i).join(", ")))}function u(e){var r=e.normalizationType,a=e.normalizationField;return i({layer:e.layer,field:e.field,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:r,normalizationField:"field"===r?a:void 0,minValue:e.minValue,maxValue:e.maxValue}).then(function(e){var r,a,i;if(e.classBreakInfos.some(function(e){return e.hasAvg&&(r=e),!!r}),r){var s=r.maxValue-r.minValue;a=r.minValue+s/2,i=4*s}return{min:e.minValue,max:e.maxValue,avg:a,stddev:i}}).then(n.processSummaryStatisticsResult)}function m(e){var r=e.field,a=e.layer,i={field:r,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,minValue:e.minValue,maxValue:e.maxValue,features:e.features};return a.summaryStatistics(i)}function d(e){return o(e).then(function(e){return e.normalizationType?u(e):m(e)})}var p="date",c=[].concat(l.numericTypes).concat(p);return d});