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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils","./utils","../../statistics/summaryStatistics","../../support/utils","../../../support/utils"],function(e,t,r,n,i,a,s,u){function o(e,t,r,n){var a=[],u=null;return[t,r].every(function(t){var r=s.getDateType(e,t);return r&&a.push(r),!!r})?a[0]===a[1]?"field"===a[0]?t===r&&(u=i.createError(n,"'startTime' and 'endTime' parameters cannot be identical")):u=i.createError(n,"invalid combination of 'startTime' and 'endTime' parameters"):y.indexOf(a[0])>-1&&y.indexOf(a[1])>-1&&(u=i.createError(n,"invalid combination of 'startTime' and 'endTime' parameters")):u=i.createError(n,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),u}function l(e,t,r){if("string"==typeof e){var n=r.getField(e);if(n&&"date"===n.type)return n.alias||n.name}else if("number"==typeof e||e instanceof Date){var i=T.indexOf(t)>-1?null:"date";return u.formatDate(e,{selector:i})}return e}function m(e){var r=Math.abs(e.avg),n=null;return t.supportedAgeUnits.some(function(e){var t=s.unitValueInDays[e];return r>2*t&&(n=e),!!n}),n}function d(e){var t=e.view,r=e.layer,a=e.startTime,s=e.endTime;return g({view:t,layer:r,startTime:a,endTime:s,unit:"days"}).then(function(e){var u=e.statistics,o=e.valueExpression;if(null==u.avg)return n.reject(i.createError("getSuggestedAgeUnit","'avg' statistic is not available"));var l=m(u);return"days"===l?{unit:l,statistics:u,valueExpression:o}:g({view:t,layer:r,startTime:a,endTime:s,unit:l}).then(function(e){var t=e.statistics,r=e.valueExpression;return null==t.avg?n.reject(i.createError("getSuggestedAgeUnit","'avg' statistic is not available for suggested unit")):{unit:l,statistics:t,valueExpression:r}})})}function c(e){var t=e.map(function(e){return'$feature["'+e+'"];'});return t.length?t.join("\n")+"\n":""}function f(e,t,r){var n;return n="number"===t?e:"date"===t?e.getTime():'$feature["'+e+'"]',"var "+r+" = "+n+";"}function v(e,t,r,n){var i=s.getDateType(e,t),a=s.getDateType(e,r),u=[f(t,i,"startTime"),f(r,a,"endTime"),'var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "'+n+'");\n    }\n\n    return retVal;'],o=[];return"field"===i&&o.push(t),"field"===a&&o.push(r),c(o)+u.join("\n")}function p(e){var t=e.startTime,r=e.endTime,n=e.unit||"days",i=e.layer,a=s.getDateDiffSQL(i,t,r,n);return{valueExpression:v(i,t,r,n),statisticsQuery:a,histogramQuery:a}}function g(e){var t=e.view,n=e.layer,i=e.startTime,s=e.endTime,u=e.unit,o=p({layer:n,startTime:i,endTime:s,unit:u}),l=o.valueExpression,m=o.statisticsQuery,d=r({layer:n,valueExpression:l},m,{view:t});return a(d).then(function(e){return{unit:u,statistics:e,valueExpression:l}})}Object.defineProperty(t,"__esModule",{value:!0}),t.supportedAgeUnits=["years","months","days","hours","minutes","seconds"];var T=["hours","minutes","seconds"],y=["date","number"];t.verifyDates=o,t.formatDate=l,t.getSuggestedAgeUnit=d,t.getAgeExpressions=p,t.getAgeStatistics=g});