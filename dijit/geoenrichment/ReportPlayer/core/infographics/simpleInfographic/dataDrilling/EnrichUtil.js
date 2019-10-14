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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../../utils/InfographicJsonUtil"],function(n,a){var e={processChartJson:function(n,a){var o=[];n.seriesItems.forEach(function(n){n.points.forEach(function(n){o.push({fieldName:n.fieldInfo.name,mapTo:a?a(n.fieldInfo.fullName):n.fieldInfo.fullName})})});var r=n.comparisonInfo;return this._createChartInfo(o,r&&r.levels,e.buildCalculatorNameForChart(n))},_createChartInfo:function(n,a,o){n=n||[];var r={isChart:!0,fields:[],levels:a,calculatorName:o,_cache:{}};return n.forEach(function(n){e._addField(r,n)}),r},buildCalculatorNameForChart:function(n){var a=n.comparisonInfo;if(a&&a.calculatorName)return a.calculatorName;var e=a&&a.levels&&a.levels.length?a.levels.join("_"):null;return e&&(a.calculatorName=e),e},processEsriInfographic:function(n){return{isInfographic:!0,type:n.type,variables:n.variables&&n.variables.slice(),fieldInfos:n.fieldInfos&&n.fieldInfos,levels:a.getLevels(n)}},optimizeInfos:function(n){var a=[],o=[],r=[];n.forEach(function(n){n.isGeneral?a.push(n):n.isChart?o.push(n):n.isInfographic&&r.push(n)});var i=e._createGeneralInfo();a.forEach(function(n){n.fields.forEach(function(n){e._addField(i,n)})});var f={};o.forEach(function(n){if(n.calculatorName){var a=f[n.calculatorName]=f[n.calculatorName]||n;a!==n&&n.fields.forEach(function(n){e._addField(a,n)})}else n.fields.forEach(function(n){e._addField(i,n)})});var l={};r.forEach(function(n){var a=n.fieldInfos&&n.fieldInfos.map(function(n){return n.fullName}).join("_")||n.variables.join("_"),e=a+"_"+n.levels.join("_");l[e]=n});var s=[];i.fields.length&&s.push(i);for(var t in f)s.push(f[t]);for(t in l)s.push(l[t]);return s},_createGeneralInfo:function(n){n=n||[];var a={isGeneral:!0,fields:[],_cache:{}};return n.forEach(function(n){e._addField(a,n)}),a},_addField:function(n,a){a&&a.fieldName&&(n._cache[a.fieldName]||(n._cache[a.fieldName]=!0,n.fields.push(a)))}},o={};return o.ddLibrary=null,o._getStandardEnrichInfos=function(n,a,e){var r=[],i=o.ddLibrary.getDrillingOptions(n,a,e);return i?(i.forEach(function(n){r=r.concat(o._getStandardEnrichInfosForTableInfo(n,!1))}),r):r},o._getStandardEnrichInfosForTableInfo=function(n,a){var o=[];for(var r in n.stateData){var i=n.stateData[r];i.fieldInfo.isChart?o.push(e.processChartJson(i.fieldInfo.chartJson,function(n){return n+("n"===r?"":"_"+r.toUpperCase())})):!a&&i.fieldInfo.isInfographic&&(i.fieldInfo.infographicJson.variables||i.fieldInfo.infographicJson.fieldInfos)&&o.push(e.processEsriInfographic(i.fieldInfo.infographicJson))}return o},o._getCustomEnrichInfos=function(a){var o=[];return n.processSectionFieldInfos(a,function(n){n.isInfographic&&(n.infographicJson.variables||n.infographicJson.fieldInfos)&&o.push(e.processEsriInfographic(n.infographicJson))}),o},o.getEnrichInfosForTemplateJson=function(r,i){var f=[];return n.processTemplateFieldInfos(i,function(n){n.isInfographic&&n.infographicJson.variableTables&&n.infographicJson.variableTables.forEach(function(e,i){if(e.variable&&e.variable.fieldInfo){var l=a.getDataDrilling(n.infographicJson,i);l&&(l.sectionJson?f=f.concat(o._getCustomEnrichInfos(l.sectionJson)):l.isStandard&&(f=f.concat(o._getStandardEnrichInfos(r,l.standardId||e.variable.fieldInfo))))}})}),e.optimizeInfos(f)},o.buildCalculatorNameForChart=e.buildCalculatorNameForChart,o.optimizeInfos=e.optimizeInfos,o});