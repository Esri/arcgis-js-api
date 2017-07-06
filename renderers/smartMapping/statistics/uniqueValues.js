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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../core/promiseUtils","./support/utils","../support/utils","../../../tasks/support/StatisticDefinition","../../../tasks/support/UniqueValueDefinition","../../../tasks/support/GenerateRendererParameters"],function(e,t,r,n,u,i,a,o,l){function s(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return n.reject(u.createError("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));var t=r.mixin({},e);return t.layer=i.createLayerAdapter(t.layer),t.layer?t.layer.load().then(function(){var e=t.layer,r=i.getFieldsList({field:t.field,valueExpression:t.valueExpression}),a=u.verifyBasicFieldValidity(e,r,"unique-values:invalid-parameters");return a?n.reject(a):t}):n.reject(u.createError("unique-values:invalid-parameters","'layer' must be one of these types: "+y))}function c(e){var t=e.layer,n=e.field,i=e.sqlExpression,o="countOF"+(n||"Expr"),l=new a;l.statisticType="count",l.onStatisticField=i?"*":n,l.outStatisticFieldName=o;var s={sqlFormat:i?"standard":null,where:e.sqlWhere,outStatistics:[l],groupByFieldsForStatistics:[n||i]};return t.queryStatistics(s).then(function(e){var i=e&&e.features,a={},l=!1;if(i.forEach(function(e){var t=e.attributes,i=u.getAttributeVal(t,o),s=n?u.getAttributeVal(t,n):u.getCustomExprVal(t,o);null===s&&0===i&&(l=!0),(null==s||"string"==typeof s&&""===r.trim(s))&&(s=null),null==a[s]?a[s]={count:i,data:s}:a[s].count=a[s].count+i}),n&&l){var s=n+" is NULL";return t.queryFeatureCount(s).then(function(e){return e=e||0,a["null"].count=a["null"].count+e,{count:a}}).otherwise(function(e){return{count:a}})}return{count:a}}).then(function(t){return f(e,t,g)})}function d(e){var t=e.layer,n=e.field,u=new o;u.attributeField=n;var i=new l;return i.classificationDefinition=u,t.generateRenderer(i).then(function(u){var i={},a=t.getField(n),o=m.indexOf(a&&a.type)>-1;return u.uniqueValueInfos.forEach(function(e){var t=e.value;(null==t||""===t||"string"==typeof t&&(""===r.trim(t)||"<null>"===t.toLowerCase()))&&(t=null),null==i[t]?i[t]={count:e.count,data:o&&t?Number(t):t}:i[t].count=i[t].count+e.count}),f(e,{count:i},h)})}function f(e,t,r){var n=t.count,u=e.field,i=e.layer,a=u?i.getField(u):null,o=a&&i.getFieldDomain(u),l=[];if(e.returnAllCodedValues&&o&&"coded-value"===o.type){var s=o;s.codedValues.forEach(function(e){var t=e.code;n.hasOwnProperty(t)||(n[t]={data:t,count:0})})}for(var c in n){var d=n[c];l.push({value:d.data,count:d.count})}return{uniqueValueInfos:l}}function p(e){var t=e.layer,r=e.valueExpression&&(!e.sqlExpression||!t.supportsSQLExpression),i=t.hasLocalSource||e.features||r;return i?n.reject(u.createError("unique-values:not-implemented","Client-side calculation is not implemented yet")):c(e).otherwise(function(t){return e.field?d(e):t})}function v(e){return s(e).then(function(e){return p(e)})}var y=i.supportedLayerTypes.join(", "),m=["integer","small-integer","single","double"],g="service-query",h="service-generate-renderer";return v});