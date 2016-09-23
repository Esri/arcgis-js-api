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

define(["require","exports","dojo/string","../../../../core/Error","../../../../tasks/support/ClassBreaksDefinition"],function(e,n,i,t,r){function o(e){return!e.url}function a(e){return E.test(e.url)}function l(e){return i.pad(e,2,"0")}function s(e,n){var i;return"date"===n||"number"===n?("number"===n&&(e=new Date(e)),i="TIMESTAMP'"+e.getUTCFullYear()+"-"+l(e.getUTCMonth()+1)+"-"+l(e.getUTCDate())+" "+l(e.getUTCHours())+":"+l(e.getUTCMinutes())+":"+l(e.getUTCSeconds())+"'"):i=e,i}function u(e,n){var i;if(n instanceof Date)i="date";else if("number"==typeof n)i="number";else if("string"==typeof n){var t=e.getField(n);"<now>"===n.toLowerCase()?i="":t&&t.type===F&&(i="field")}return i}function d(e,n,i,t){var r="("+s(i,u(e,i))+" - "+s(n,u(e,n))+")",o=x[t],a="/";1>o&&(o=1/o,a="*");var l=1===o?r:"("+r+" "+a+" "+o+")";return{sqlExpression:l,sqlWhere:null}}function c(e,n){return d(e,new Date(0),n,"milliseconds").sqlExpression}function f(e,n){var i=e.field,t=e.normalizationType,r=e.normalizationField,o=i;return"percent-of-total"===t?o="(("+i+" / "+n+") * 100)":"log"===t?o="(log("+i+") * "+D+")":"field"===t&&(o="("+i+" / "+r+")"),o}function p(e){var n,i=e.layer,t=e.field,r=e.normalizationType,o=e.normalizationField,a=i.definitionExpression;return"log"===r?n="(NOT "+t+" = 0)":"field"===r&&(n="(NOT "+o+" = 0)"),{where:n?n+(a?" AND "+a:""):a,excludeZerosExpr:n}}function m(e,n){var i=e.field,t=e.classificationMethod||C,o=e.normalizationType,a=e.normalizationField,l=new r;return l.classificationField=i,l.breakCount=n,l.classificationMethod=t,l.standardDeviationInterval="standard-deviation"===t?e.standardDeviationInterval||b:void 0,l.normalizationType=o,l.normalizationField="field"===o?a:void 0,l}function v(e,n){return new t(e,n)}function g(e,n,i){var t=null!=n?e+" >= "+n:"",r=null!=i?e+" <= "+i:"",o="";return o=t&&r?t+" AND "+r:t||r,o?"("+o+")":""}function y(e,n,i,t,r){var o;return i?(i.name===n.objectIdField||-1===r.indexOf(i.type))&&(e.reject(v(t,"'field' should be one of these types: "+r.join(","))),o=!0):(e.reject(v(t,"unknown 'field'.")),o=!0),o}function T(e,n,i,t){var r;return i?(i.name===n.objectIdField||-1===h.indexOf(i.type))&&(e.reject(v(t,"'field' should be numeric.")),r=!0):(e.reject(v(t,"unknown 'field'.")),r=!0),r}var h=["integer","small-integer","single","double"],F="date",x={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},E=/(https?:)?\/\/services.*\.arcgis\.com/i,C="equal-interval",b=1,D=Math.LOG10E;n.isFeatureCollection=o,n.canUseSQL92Expression=a,n.msSinceUnixEpochSQL=c,n.getFieldExpr=f,n.getGRWhereInfo=p,n.createCBDefn=m,n.createError=v,n.getRangeExpr=g,n.verifyFieldType=y,n.verifyNumericField=T});