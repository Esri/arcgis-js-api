// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/config","esri/dijit/geoenrichment/utils/ArrayUtil"],(function(e,l){var t={getDefaultLevels:function(){var l=e.levels.slice();return l.push(e.highestLevel),l},getLevels:function(e){var a=e.levels&&e.levels.length?e.levels:t.getDefaultLevels();return l.removeDuplicates(a)},getSubLevels:function(e){var l=t.getLevels(e);return l.pop(),l},getHighestLevel:function(e){var l=t.getLevels(e);return l[l.length-1]},setLevels:function(e,a){a=l.removeDuplicates(a||[]),e.levels=a.length?a:t.getDefaultLevels()},getDataDrilling:function(e,l){var t;if("string"==typeof l)t=l;else{var a=e.variableTables&&e.variableTables[l];t=a&&a.variable.fieldInfo&&a.variable.fieldInfo.templateName}return e.dataDrilling&&e.dataDrilling[t]},setDataDrilling:function(e,l,t){l&&(e.dataDrilling=e.dataDrilling||{},t?e.dataDrilling[l]=t:delete e.dataDrilling[l])},validateDataDrilling:function(e){var l=e.dataDrilling;if(l){var t={};e.variableTables.forEach((function(e){e.variable&&e.variable.fieldInfo&&e.variable.fieldInfo.templateName&&(t[e.variable.fieldInfo.templateName]=!0)})),Object.keys(l).forEach((function(e){t[e]||delete l[e]}))}},analyzeVariables:function(e){var l;if(1===(l=e.fieldInfos?e.fieldInfos.map((function(e){return e.fullName})):e.variables).length&&-1!==l[0].indexOf(".*"))return{dataCollectionID:l[0].substr(0,l[0].indexOf("."))};var t,a,i={};return l.forEach((function(e,l){i[e.substr(0,e.indexOf("."))]=1,t=e.substr(e.indexOf(".")+1),a=e})),{dataCollectionID:1===Object.keys(i).length?Object.keys(i)[0]:null,variableID:1===l.length?t:null,fullName:1===l.length?a:null}}};return t}));