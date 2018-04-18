// COPYRIGHT © 201 Esri
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

define(["../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../infographicUtils/InfographicJsonUtil"],function(n,a){var e={processChartJson:function(n,a){var i=[];n.seriesItems.forEach(function(n){n.points.forEach(function(n){i.push({fieldName:n.fieldInfo.name,mapTo:a?a(n.fieldInfo.fullName):n.fieldInfo.fullName})})});var o=n.comparisonInfo;return this.createChartInfo(i,o&&o.levels,e.buildCalculatorNameForChart(n))},createChartInfo:function(n,a,i){n=n||[];var o={isChart:!0,fields:[],levels:a,calculatorName:i,_cache:{}};return n.forEach(function(n){e.addField(o,n)}),o},buildCalculatorNameForChart:function(n){var a=n.comparisonInfo;if(a&&a.calculatorName)return a.calculatorName;var e=a&&a.levels&&a.levels.length?a.levels.join("_"):null;return e&&(a.calculatorName=e),e},processEsriInfographic:function(n){return{isInfographic:!0,variables:n.variables&&n.variables.slice(),fieldInfos:n.fieldInfos&&n.fieldInfos,levels:a.getLevels(n)}},createGeneralInfo:function(n){n=n||[];var a={isGeneral:!0,fields:[],_cache:{}};return n.forEach(function(n){e.addField(a,n)}),a},addGeneralFieldInfo:function(n,a){a&&a.fullName&&(n._cache[a.name]||(n._cache[a.name]=!0,n.fields.push({fieldName:a.name,mapTo:a.fullName})))},addField:function(n,a){a&&a.fieldName&&(n._cache[a.fieldName]||(n._cache[a.fieldName]=!0,n.fields.push(a)))},optimizeInfos:function(n){var a=[],i=[],o=[];n.forEach(function(n){n.isGeneral?a.push(n):n.isChart?i.push(n):n.isInfographic&&o.push(n)});var r=e.createGeneralInfo();a.forEach(function(n){n.fields.forEach(function(n){e.addField(r,n)})});var f={};i.forEach(function(n){if(n.calculatorName){var a=f[n.calculatorName]=f[n.calculatorName]||n;a!==n&&n.fields.forEach(function(n){e.addField(a,n)})}else n.fields.forEach(function(n){e.addField(r,n)})});var l={};o.forEach(function(n){var a=n.fieldInfos&&n.fieldInfos.map(function(n){return n.fullName}).join("_")||n.variables.join("_"),e=a+"_"+n.levels.join("_");l[e]=n});var s=[];r.fields.length&&s.push(r);for(var c in f)s.push(f[c]);for(c in l)s.push(l[c]);return s}},i={};return i.ddLibrary=null,i._getStandardEnrichInfos=function(n,a,e){var o=[],r=i.ddLibrary.getDrillingOptions(n,a,e);return r?(r.forEach(function(n){o=o.concat(i._getStandardEnrichInfosForTableInfo(n,!1))}),o):o},i._getStandardEnrichInfosForTableInfo=function(n,a){var i=[];for(var o in n.stateData){var r=n.stateData[o];r.fieldInfo.isChart?i.push(e.processChartJson(r.fieldInfo.chartJson,function(n){return n+("n"===o?"":"_"+o.toUpperCase())})):!a&&r.fieldInfo.isInfographic&&(r.fieldInfo.infographicJson.variables||r.fieldInfo.infographicJson.fieldInfos)&&i.push(e.processEsriInfographic(r.fieldInfo.infographicJson))}return i},i._getCustomEnrichInfos=function(a){var i=[];return n.processSectionFieldInfos(a,function(n){n.isInfographic&&(n.infographicJson.variables||n.infographicJson.fieldInfos)&&i.push(e.processEsriInfographic(n.infographicJson))}),i},i.getEnrichInfosForTemplateJson=function(a,o){var r=[];return n.processTemplateFieldInfos(o,function(n){n.isInfographic&&n.infographicJson.variableTables&&n.infographicJson.variableTables.forEach(function(e){if(e.variable&&e.variable.fieldInfo){var o=n.infographicJson.dataDrilling&&n.infographicJson.dataDrilling[e.variable.fieldInfo.templateName];if(o&&o.sectionJson)return void(r=r.concat(i._getCustomEnrichInfos(o.sectionJson)));r=r.concat(i._getStandardEnrichInfos(a,e.variable.fieldInfo))}})}),e.optimizeInfos(r)},i.buildCalculatorNameForChart=e.buildCalculatorNameForChart,i.optimizeInfos=e.optimizeInfos,i});