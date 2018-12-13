// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,r,i,s,a,t,n){function l(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(t.createError("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return s.reject(t.createError("summary-statistics:missing-parameters","View is required when 'valueExpression' is specified"));var r=i({},e);r.normalizationType=n.getNormalizationType(r);var l=[0,1,2,3],o=n.createLayerAdapter(r.layer,l);return r.layer=o,o?o.load().then(function(){var e=r.field,i=r.normalizationType,l=r.valueExpression||r.sqlExpression,p=e?o.getField(e):null,m=n.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),d=t.verifyBasicFieldValidity(o,m,"summary-statistics:invalid-parameters");if(d)return s.reject(d);if(p){var c=t.verifyFieldType(o,p,"summary-statistics:invalid-parameters",u);if(c)return s.reject(c);if(a.isDateField(p)&&i)return s.reject(t.createError("summary-statistics:invalid-parameters","Normalization is not allowed for date fields"))}else if(l&&i)return s.reject(t.createError("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));return r}):s.reject(t.createError("summary-statistics:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(l).join(", ")))}function o(e){return l(e).then(function(e){var r=e.layer,i={field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:e.normalizationType,normalizationField:e.normalizationField,minValue:e.minValue,maxValue:e.maxValue,features:e.features,view:e.view};return r.summaryStatistics(i)})}var u=a.numericTypes.concat(["date"]);return o});