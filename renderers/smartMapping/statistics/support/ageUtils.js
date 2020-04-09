// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../support/utils"],(function(e,t,n,r,a,i,s){Object.defineProperty(t,"__esModule",{value:!0});var u=["date","number"];function o(e,t,n){return"var "+n+" = "+("number"===t?e:"date"===t?e.getTime():'$feature["'+e+'"]')+";"}function d(e,t,n,r){var a=s.getDateType(e,t),i=s.getDateType(e,n),u=[o(t,a,"startTime"),o(n,i,"endTime"),'var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "'+r+'");\n    }\n\n    return retVal;'],d=[];return"field"===a&&d.push(t),"field"===i&&d.push(n),function(e){var t=e.map((function(e){return'$feature["'+e+'"];'}));return t.length?t.join("\n")+"\n":""}(d)+u.join("\n")}t.supportedAgeUnits=["years","months","days","hours","minutes","seconds"],t.verifyDates=function(e,t,n,r){var a=[],o=null;return[t,n].every((function(t){var n=s.getDateType(e,t);return n&&a.push(n),!!n}))?a[0]===a[1]?"field"===a[0]?t===n&&(o=new i(r,"'startTime' and 'endTime' parameters cannot be identical")):o=new i(r,"Invalid combination of 'startTime' and 'endTime' parameters"):u.indexOf(a[0])>-1&&u.indexOf(a[1])>-1&&(o=new i(r,"Invalid combination of 'startTime' and 'endTime' parameters")):o=new i(r,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),o},t.getAgeExpressions=function(e){var t=e.layer,n=e.startTime,r=e.endTime,a=s.createLayerAdapter(t),i=e.unit||"days",u=s.getDateDiffSQL(a,n,r,i);return{valueExpression:d(a,n,r,i),statisticsQuery:u,histogramQuery:u}}}));