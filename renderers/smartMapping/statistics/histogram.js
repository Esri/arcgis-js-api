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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../layers/support/fieldUtils","./support/utils","../support/utils"],function(e,r,i,a,s,t,n){function o(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return a.reject(t.createError("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return a.reject(t.createError("histogram:missing-parameters","View is required when 'valueExpression' is specified"));var r=i({},e);r.normalizationType=n.getNormalizationType(r);var o=[0,2,1,3,4],l=n.createLayerAdapter(r.layer,o);return r.layer=l,l?l.load().then(function(){var e=r.valueExpression||r.sqlExpression,i=r.field,o=i?l.getField(i):null,d=!r.classificationMethod||"equal-interval"===r.classificationMethod,u=n.getFieldsList({field:i,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),c=t.verifyBasicFieldValidity(l,u,"histogram:invalid-parameters");if(c)return a.reject(c);if(o){var m=t.verifyFieldType(l,o,"histogram:invalid-parameters",p);if(m)return a.reject(m);if(s.isDateField(o)){if(r.normalizationType)return a.reject(t.createError("histogram:invalid-parameters","Normalization is not allowed for date fields"));if(!d)return a.reject(t.createError("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields"))}}else if(e){if(r.normalizationType)return a.reject(t.createError("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));if(!d)return a.reject(t.createError("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified"))}return r}):a.reject(t.createError("histogram:invalid-parameters","'layer' must be one of these types: "+n.getLayerTypeLabels(o).join(", ")))}function l(e){return o(e).then(function(e){var r=e.layer,i={field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue,features:e.features,view:e.view};return r.histogram(i)})}var p=["date"].concat(s.numericTypes);return l});