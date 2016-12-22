// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../tasks/support/StatisticDefinition","./classBreaks","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,i,a,t,n,s,l){function o(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return n.reject(s.createError("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var r=i.mixin({},e);return r.normalizationType=s.getNormalizationType(r),r.layer=l.createLayerAdapter(r.layer),r.layer?r.layer.load().then(function(){var e=r.layer,i=r.field,a=r.normalizationType,t="function"==typeof i,o=r.valueExpression||r.sqlExpression,u=i?e.getField(i):null,m=u?u.type===p:!1,d=l.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),c=s.verifyBasicFieldValidity(e,d,"summary-statistics:invalid-parameters");if(c)return n.reject(c);if(u){var f=s.verifyFieldType(e,u,"summary-statistics:invalid-parameters",v);if(f)return n.reject(f);if(m&&a)return n.reject(s.createError("summary-statistics:invalid-parameters","Normalization is not allowed for date fields"))}else if(o&&a)return n.reject(s.createError("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));return e.hasLocalSource||r.features||t?n.reject(s.createError("summary-statistics:not-implemented","Client-side calculation is not implemented yet")):e.supportsSQLExpression||!m&&!o?r:n.reject(s.createError("summary-statistics:not-supported","Layer does not support standardized SQL expression for queries"))}):n.reject(s.createError("summary-statistics:invalid-parameters","'layer' must be one of these types: "+g))}function u(e){var r=e.normalizationType,i=e.normalizationField;return t({layer:e.layer,field:e.field,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:r,normalizationField:"field"===r?i:void 0,minValue:e.minValue,maxValue:e.maxValue}).then(function(e){var r,i,a;if(e.classBreakInfos.some(function(e){return e.hasAvg&&(r=e),!!r}),r){var t=r.maxValue-r.minValue;i=r.minValue+t/2,a=4*t}return{min:e.minValue,max:e.maxValue,avg:i,stddev:a}})}function m(e){var r=e.layer,i=e.field,t=e.sqlExpression||i,n=t?s.getRangeExpr(t,e.minValue,e.maxValue):null,l={sqlFormat:e.sqlExpression?"standard":null,where:s.mergeWhereClauses(e.sqlWhere,n),outStatistics:E.map(function(e){var r=new a;return r.statisticType=e,r.onStatisticField=t,r.outStatisticFieldName=("var"===e?"variance":e)+y,r})};return r.queryStatistics(l).then(function(e){var r=e&&e.features,i=r&&r[0]&&r[0].attributes,a={};for(var t in i)a[t.replace(x,"").toLowerCase()]=i[t];return a.min===a.max&&null!=a.min&&null==a.stddev&&(a.stddev=a.variance=0),a})}function d(e,r){var a,t=e.field,n=e.layer;return n.supportsSQLExpression&&r&&(a=i.mixin({},e),delete a.field,a.sqlExpression=s.msSinceUnixEpochSQL(n,t)),m(a||e).then(function(e){return r&&(["min","max","avg","stddev","sum","variance"].forEach(function(r){null!=e[r]&&(e[r]=Math.ceil(e[r]))}),e.min===e.max&&null!=e.min&&(e.avg=e.min,e.stddev=e.variance=0)),e})}function c(e){return o(e).then(function(e){var r=e.field?e.layer.getField(e.field):null,i=r?r.type===p:!1;return e.normalizationType?u(e):d(e,i)})}var p="date",f=["integer","small-integer","single","double"],v=[].concat(f).concat(p),y="_value",x=/_value$/i,E=["min","max","avg","stddev","count","sum","var"],g=l.supportedLayerTypes.join(", ");return c});