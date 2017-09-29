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

define(["require","exports","dojo/_base/lang","../../../core/promiseUtils","./support/utils","../support/utils","../../../tasks/support/UniqueValueDefinition","../../../tasks/support/GenerateRendererParameters","../../../layers/support/fieldUtils"],function(e,r,n,t,u,a,i,l,o){function s(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return t.reject(u.createError("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));var r=n.mixin({},e),i=[0,1,2],l=a.createLayerAdapter(r.layer,i);return r.layer=l,l?l.load().then(function(){var e=a.getFieldsList({field:r.field,valueExpression:r.valueExpression}),n=u.verifyBasicFieldValidity(l,e,"unique-values:invalid-parameters");return n?t.reject(n):r}):t.reject(u.createError("unique-values:invalid-parameters","'layer' must be one of these types: "+a.getLayerTypeLabels(i).join(", ")))}function c(e){var r=e.layer;return r.uniqueValues(e).then(function(r){return f(e,r,y)})}function d(e){var r=e.layer,t=e.field,u=new i;u.attributeField=t;var a=new l;return a.classificationDefinition=u,r.generateRenderer(a).then(function(u){var a={},i=r.getField(t),l=o.numericTypes.indexOf(i&&i.type)>-1;return u.uniqueValueInfos.forEach(function(e){var r=e.value;(null==r||""===r||"string"==typeof r&&(""===n.trim(r)||"<null>"===r.toLowerCase()))&&(r=null),null==a[r]?a[r]={count:e.count,data:l&&r?Number(r):r}:a[r].count=a[r].count+e.count}),f(e,{count:a},m)})}function f(e,r,n){var t=r.count,u=e.field,a=e.layer,i=u?a.getField(u):null,l=i&&a.getFieldDomain(u),o=[];if(e.returnAllCodedValues&&l&&"coded-value"===l.type){var s=l;s.codedValues.forEach(function(e){var r=e.code;t.hasOwnProperty(r)||(t[r]={data:r,count:0})})}for(var c in t){var d=t[c];o.push({value:d.data,count:d.count,label:d.label})}return{uniqueValueInfos:o}}function p(e){return c(e).otherwise(function(r){return e.field?d(e):r})}function v(e){return s(e).then(function(e){return p(e)})}var y="service-query",m="service-generate-renderer";return v});