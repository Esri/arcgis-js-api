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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../support/utils","../../support/adapters/support/layerUtils"],(function(e,t,n,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAgeExpressions=t.verifyDates=t.supportedAgeUnits=void 0;var i=["date","number"];function s(e,t,n){return"var "+n+" = "+("number"===t?e:"date"===t?e.getTime():'$feature["'+e+'"]')+";"}function u(e,t,n,a){var i=r.getDateType(e,t),u=r.getDateType(e,n),o=[s(t,i,"startTime"),s(n,u,"endTime"),'var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "'+a+'");\n    }\n\n    return retVal;'],d=[];return"field"===i&&d.push(t),"field"===u&&d.push(n),function(e){var t=e.map((function(e){return'$feature["'+e+'"];'}));return t.length?t.join("\n")+"\n":""}(d)+o.join("\n")}t.supportedAgeUnits=["years","months","days","hours","minutes","seconds"],t.verifyDates=function(e,t,a,s){var u=[],o=null;return[t,a].every((function(t){var n=r.getDateType(e,t);return n&&u.push(n),!!n}))?u[0]===u[1]?"field"===u[0]?t===a&&(o=new n(s,"'startTime' and 'endTime' parameters cannot be identical")):o=new n(s,"Invalid combination of 'startTime' and 'endTime' parameters"):i.indexOf(u[0])>-1&&i.indexOf(u[1])>-1&&(o=new n(s,"Invalid combination of 'startTime' and 'endTime' parameters")):o=new n(s,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),o},t.getAgeExpressions=function(e){var t=e.layer,n=e.startTime,i=e.endTime,s=a.createLayerAdapter(t),o=e.unit||"days",d=r.getDateDiffSQL(s,n,i,o);return{valueExpression:u(s,n,i,o),statisticsQuery:d,histogramQuery:d}}}));