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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/Deferred","../../../tasks/support/Query","../../../tasks/support/StatisticDefinition","./classBreaks","./support/utils"],function(e,t,i,r,a,s,n,l){function o(e){var t=new r,i=e.normalizationType,a=e.normalizationField,s=e.field;return n({layer:e.layer,field:"string"==typeof s?s:null,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:i,normalizationField:"field"===i?a:void 0,minValue:e.minValue,maxValue:e.maxValue}).then(function(e){var i,r,a;if(e.classBreakInfos.some(function(e){return e.hasAvg&&(i=e),!!i}),i){var s=i.maxValue-i.minValue;r=i.minValue+s/2,a=4*s}t.resolve({min:e.minValue,max:e.maxValue,avg:r,stddev:a})}).otherwise(function(e){t.reject(l.createError("attributeStatistics","unable to calculate class breaks."))}),t.promise}function u(e,t){var i=e;return t&&(i=i?"("+i+") AND ("+t+")":t),i}function c(e){var t=e.layer,i=e.field,n=new r;if(t.url&&t.advancedQueryCapabilities.supportsStatistics){var o=new a,c=["min","max","avg","stddev","count","sum","var"],d="string"==typeof i?e.sqlExpression||i:e.sqlExpression||null,f=d?l.getRangeExpr(d,e.minValue,e.maxValue):null;o.sqlFormat=e.sqlExpression?"standard":null,o.where=u(e.sqlWhere,f),o.outStatistics=c.map(function(e){var t=new s;return t.statisticType=e,t.onStatisticField=d,t.outStatisticFieldName=("var"===e?"variance":e)+y,t}),t.queryFeatures(o).then(function(e){var t=e&&e.features,i=t&&t[0]&&t[0].attributes,r={};for(var a in i)r[a.replace(E,"").toLowerCase()]=i[a];r.min===r.max&&null!=r.min&&null==r.stddev&&(r.stddev=r.variance=0),n.resolve(r)}).otherwise(function(e){n.reject(l.createError("attributeStatistics","Statistics query operation failed."))})}else n.reject(l.createError("attributeStatistics","Statistics query requires a layer that supports statistics."));return n.promise}function d(e,t){var r,a=e.field;return l.canUseSQL92Expression(e.layer)&&t&&(r=i.mixin({},e),delete r.field,r.sqlExpression=l.msSinceUnixEpochSQL(e.layer,"string"==typeof a?a:null)),c(r||e).then(function(e){return t&&(["min","max","avg","stddev","sum","variance"].forEach(function(t){null!=e[t]&&(e[t]=Math.ceil(e[t]))}),e.min===e.max&&null!=e.min&&(e.avg=e.min,e.stddev=e.variance=0)),e})}function f(e,t){var i=t.layer,r=t.field,a=t.normalizationType,s="function"==typeof r,n=t.valueExpression||t.sqlExpression,u="string"==typeof r?i.getField(r):null,c=u?u.type===v:!1;if(u){if(l.verifyFieldType(e,i,u,"attributeStatistics",x))return;if(c&&a)return void e.reject(l.createError("attributeStatistics","normalization is not supported when calculating statistics for date field."))}else if(n&&a)return void e.reject(l.createError("attributeStatistics","normalization is not supported when valueExpression or sqlExpression is specified."));if(l.isFeatureCollection(i)||t.features||s)e.reject(l.createError("attributeStatistics","unable to calculate field statistics."));else{if(!l.canUseSQL92Expression(i)&&(c||n))return void e.reject(l.createError("attributeStatistics","unable to calculate statistics. Make sure the layer supports SQL expressions and standardized queries."));var f=a?o(t):d(t,c);f.then(function(t){e.resolve(t)}).otherwise(function(t){e.reject(l.createError("attributeStatistics","unable to calculate field statistics."))})}}function p(e){var t=new r;return e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)?e.layer.then(function(){f(t,e)}):t.reject(l.createError("attributeStatistics","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required.")),t.promise}var v="date",m=["integer","small-integer","single","double"],x=[].concat(m).concat(v),y="_value",E=/_value$/i;return p});