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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../infographicUtils/InfographicJsonUtil"],function(a,n){var e={processChartJson:function(a,n){var r=[];a.seriesItems.forEach(function(a){a.points.forEach(function(a){r.push({fieldName:a.fieldInfo.name,mapTo:n?n(a.fieldInfo.fullName):a.fieldInfo.fullName})})});var i=a.comparisonInfo;return this.createChartInfo(r,i&&i.levels,e.buildCalculatorNameForChart(a))},createChartInfo:function(a,n,r){a=a||[];var i={isChart:!0,fields:[],levels:n,calculatorName:r,_cache:{}};return a.forEach(function(a){e.addField(i,a)}),i},buildCalculatorNameForChart:function(a){var n=a.comparisonInfo;if(n&&n.calculatorName)return n.calculatorName;var e=n&&n.levels&&n.levels.length?n.levels.join("_"):null;return e&&(n.calculatorName=e),e},processEsriInfographic:function(a){return{isInfographic:!0,variables:a.variables.slice(),levels:n.getLevels(a)}},createGeneralInfo:function(a){a=a||[];var n={isGeneral:!0,fields:[],_cache:{}};return a.forEach(function(a){e.addField(n,a)}),n},addGeneralFieldInfo:function(a,n){n&&n.fullName&&(a._cache[n.name]||(a._cache[n.name]=!0,a.fields.push({fieldName:n.name,mapTo:n.fullName})))},addField:function(a,n){n&&n.fieldName&&(a._cache[n.fieldName]||(a._cache[n.fieldName]=!0,a.fields.push(n)))},optimizeInfos:function(a){var n=[],r=[],i=[];a.forEach(function(a){a.isGeneral?n.push(a):a.isChart?r.push(a):a.isInfographic&&i.push(a)});var o=e.createGeneralInfo();n.forEach(function(a){a.fields.forEach(function(a){e.addField(o,a)})});var f={};r.forEach(function(a){if(a.calculatorName){var n=f[a.calculatorName]=f[a.calculatorName]||a;n!==a&&a.fields.forEach(function(a){e.addField(n,a)})}else a.fields.forEach(function(a){e.addField(o,a)})});var l={};i.forEach(function(a){var n=a.variables.join("_")+"_"+a.levels.join("_");l[n]=a});var t=[];o.fields.length&&t.push(o);for(var c in f)t.push(f[c]);for(c in l)t.push(l[c]);return t}},r={};return r.ddLibrary=null,r._getStandardEnrichInfos=function(a,n,e){var i=[],o=r.ddLibrary.getDrillingOptions(a,n,e);return o?(o.forEach(function(a){i=i.concat(r._getStandardEnrichInfosForTableInfo(a,!1))}),i):i},r._getStandardEnrichInfosForTableInfo=function(a,n){var r=[];for(var i in a.stateData){var o=a.stateData[i];o.fieldInfo.isChart?r.push(e.processChartJson(o.fieldInfo.chartJson,function(a){var n="n"===i?"":"_"+i.toUpperCase();return a+n})):!n&&o.fieldInfo.isInfographic&&o.fieldInfo.infographicJson.variables&&r.push(e.processEsriInfographic(o.fieldInfo.infographicJson))}return r},r._getCustomEnrichInfos=function(n){var r=[];return a.processSectionFieldInfos(n,function(a){a.isInfographic&&a.infographicJson.variables&&r.push(e.processEsriInfographic(a.infographicJson))}),r},r.getEnrichInfosForTemplateJson=function(n,i){var o=[];return a.processTemplateFieldInfos(i,function(a){a.isInfographic&&a.infographicJson.variableTables&&a.infographicJson.variableTables.forEach(function(e){if(e.variable&&e.variable.fieldInfo){var i=a.infographicJson.dataDrilling&&a.infographicJson.dataDrilling[e.variable.fieldInfo.templateName];if(i&&i.sectionJson)return void(o=o.concat(r._getCustomEnrichInfos(i.sectionJson)));o=o.concat(r._getStandardEnrichInfos(n,e.variable.fieldInfo))}})}),e.optimizeInfos(o)},r.buildCalculatorNameForChart=e.buildCalculatorNameForChart,r.optimizeInfos=e.optimizeInfos,r});