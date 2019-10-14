// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(n,e){function a(n){return"("+n.map(function(n){return n+" >= 0"}).join(" OR ")+")"}function t(n){return{expression:l(n,{returnFieldName:!0,defaultValue:"'"+e.noDominantCategoryField+"'"})}}function l(n,e){var a=e.returnFieldName,t=e.defaultValue,l=e.integerFields,u=[];if(a&&t){var r=n.map(function(n){return n+" <= 0"}).join(" AND ");u.push("WHEN "+r+" THEN "+t)}for(var i=0,o=n;i<o.length;i++){var s=o[i];!function(e){var t=n.reduce(function(n,a){return e!==a&&n.push(e+" > "+a),n},[]).join(" AND "),r=a&&"'"+e+"'"||(l&&l.indexOf(e)>-1?"cast("+e+" as float)":e);u.push("WHEN "+t+" THEN "+r)}(s)}return"CASE "+u.join(" ")+" ELSE "+(t||"0")+" END"}function u(n,e){var t=e.filter(function(e){return v.indexOf(n.getField(e).type)>-1}),u=e.join(" + "),r={sqlExpression:"("+u+")",sqlWhere:a(e)},i=l(e,{integerFields:t}),m={sqlExpression:"(( ("+i+") / ("+u+") ) * 100)",sqlWhere:a(e)+" AND (("+u+") > 0)"};return{predominantCategory:{valueExpression:o(e)},size:{valueExpression:s(e),statisticsQuery:r,histogramQuery:r},opacity:{valueExpression:f(e),statisticsQuery:m,histogramQuery:m}}}function r(n){return n&&n.map(function(n){return'$feature["'+n+'"];'}).join("\n")+"\n"||""}function i(n,e){void 0===e&&(e=!1);var a=n.map(function(n){return'"'+n+'"'});return"\n  var fieldNames = [ "+a.join(", ")+" ]; \n  var numFields = "+a.length+";\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    "+(e?"\n  if(value != null && value >= 0) {\n    if (totalValue == null) { totalValue = 0; }\n    totalValue = totalValue + value;\n  }\n  ":"")+"\n  }\n  "}function o(n){var e=i(n);return"\n  "+r(n)+"\n  "+e+"\n  return maxValueField;\n  "}function s(n){var e=r(n),a=n.map(function(n){return'"'+n+'"'});return"\n  "+e+"\n  var fieldNames = [ "+a.join(", ")+" ]; \n  var numFields = "+a.length+";\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  "}function f(n){var e=i(n,!0);return"\n  "+r(n)+"\n  "+e+"\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  "}Object.defineProperty(e,"__esModule",{value:!0});var v=["integer","small-integer"];e.noDominantCategoryField="no_dominant_category",e.getSQLForPredominantCategoryName=t,e.getPredominanceExpressions=u,e.getArcadeForPredominantCategory=o});