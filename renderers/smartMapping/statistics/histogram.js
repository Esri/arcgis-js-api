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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/promiseUtils","../../../tasks/support/GenerateRendererParameters","./support/utils","../support/utils","../../../layers/support/fieldUtils"],function(e,r,i,a,n,t,s,l){function o(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return a.reject(t.createError("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=i.mixin({},e);r.normalizationType=t.getNormalizationType(r);var n=[0,1,2],o=s.createLayerAdapter(r.layer,n);return r.layer=o,o?o.load().then(function(){var e=r.valueExpression||r.sqlExpression,i=r.field,n=i?o.getField(i):null,u=!r.classificationMethod||"equal-interval"===r.classificationMethod,d=s.getFieldsList({field:i,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),m=t.verifyBasicFieldValidity(o,d,"histogram:invalid-parameters");if(m)return a.reject(m);if(n){var f=t.verifyFieldType(o,n,"histogram:invalid-parameters",p);if(f)return a.reject(f);if(l.isDateField(n)){if(r.normalizationType)return a.reject(t.createError("histogram:invalid-parameters","Normalization is not allowed for date fields"));if(!u)return a.reject(t.createError("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields"))}}else if(e){if(r.normalizationType)return a.reject(t.createError("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));if(!u)return a.reject(t.createError("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified"))}return r}):a.reject(t.createError("histogram:invalid-parameters","'layer' must be one of these types: "+s.getLayerTypeLabels(n).join(", ")))}function u(e,r,i){var a=[],n=e.classBreakInfos,s=n[0].minValue,l=n[n.length-1].maxValue;return n.forEach(function(e){a.push([e.minValue,e.maxValue])}),{min:s,max:l,intervals:a,sqlExpr:t.getFieldExpr(i,e.normalizationTotal),excludeZerosExpr:r,normTotal:e.normalizationTotal}}function d(e,r){var i=e.layer,a=t.getSQLFilterForNormalization(e),s=e.numBins||x,l=new n({classificationDefinition:t.createCBDefn(e,s),where:t.mergeWhereClauses(a,r)});return i.generateRenderer(l).then(function(r){return u(r,a,e)})}function m(e){var r=e.layer,i=e.minValue,n=e.maxValue,l=e.valueExpression||e.sqlExpression,o=r.supportsSQLExpression,u=null!=i&&null!=n,m=!e.classificationMethod||"equal-interval"===e.classificationMethod;return l||o&&m?r.histogram(e):e.normalizationType||!m?d(e).then(function(r){if(u){if(i>r.max||n<r.min)return a.reject(t.createError("histogram:insufficient-data","Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field"));var l=t.getFieldExpr(e,r.normTotal),o=t.getRangeExpr(l,i,n);return m?s.getBins({layer:e.layer,field:e.field,numBins:e.numBins},{min:i,max:n,sqlExpr:r.sqlExpr,excludeZerosExpr:r.excludeZerosExpr}):d(e,o).then(function(r){return s.getBins({layer:e.layer,field:e.field,numBins:e.numBins},r)})}return s.getBins({layer:e.layer,field:e.field,numBins:e.numBins},r)}):r.histogram(e)}function f(e){return o(e).then(function(e){return m(e)})}var c="date",p=[].concat(l.numericTypes).concat(c),x=10;return f});