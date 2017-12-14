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

define(["dojo/_base/lang","./_FieldInfoBuilder","../../supportClasses/TableUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","./_config","./EnrichUtil"],function(t,e,a,n,i,r){function o(t){return"string"==typeof t?t.split(",").map(function(t){return t+"/"}):t}var l={};return r.ddLibrary=l,l.hasDrillingOptions=function(t,e,a){return!!l.getDrillingOptions(t,e,a)},l.getDrillingOptions=function(t,e,a){function r(){function r(t,e){return l&&-1!==l.indexOf(t)?!0:o&&o.some(function(a){return-1!==a.indexOf(t)||-1!==a.indexOf(e)})}var o=e.usedFields||a&&a(e);if(o=o&&o.map(function(t){return t.toUpperCase()}),!e.variableID&&!o)return null;var l=e.variableID&&e.variableID.toUpperCase(),s=i.LIBRARY[t];for(var f in s){var c=f.toUpperCase(),u=n.createFieldNameFromVariable(f).toUpperCase();if(r(c,u))return s[f]}return null}if(e){var o=r();return o&&o.forEach(function(t){l._provideStateData(t)}),o}},l.getDrillingOptionInfo=function(e,n,i,o,s,f,c){var u=l.getDrillingOptions(e,n,c),d=u&&u.filter(function(t){return t.name===i})[0];if(!d)return null;!f&&d.defaultState&&(f=d.defaultState),f=f&&f.charAt(0)||"n";var p;d.calcGroup&&(p=t.clone(d.calcGroup),p.value=f+"/");var I=d.stateData[f],v=a.createSingleCellTable({fieldInfo:I.fieldInfo,width:o,height:s});return{calculationStatesGroup:p,tableJson:t.clone(v),enrichInfos:r._getStandardEnrichInfosForTableInfo(d,!0)}},l._provideStateData=function(a){if(!a.stateData){a.stateData={n:{fieldInfo:a.fieldInfo}},a.states&&(a.states=o(a.states),a.states.forEach(function(e){var n=e.charAt(0);if("n"!==n){var r=t.clone(a.fieldInfo);if(a.stateData[n]={fieldInfo:r},r.isChart){r.chartJson.visualProperties.title.text+=" ("+i.STATE_LOCALIZATION_MAP_SHORT[n]+")",r.chartJson.visualProperties.yAxis.title=i.STATE_LOCALIZATION_MAP[n];var o=a.dataLabelsDecimals&&a.dataLabelsDecimals[n];void 0!==!o?r.chartJson.visualProperties.dataLabelsDecimals=o:(("p"===n||"a"===n)&&(r.chartJson.visualProperties.dataLabelsDecimals=2),"i"===n&&(r.chartJson.visualProperties.dataLabelsDecimals=0))}}}),a.calcGroup=l.createCalculationStatesGroup(a.states),delete a.states,delete a.dataLabelsDecimals);for(var n in a.stateData){var r=a.stateData[n];r.fieldInfo.isChart&&r.fieldInfo.chartJson.seriesItems.forEach(function(t){t.points.forEach(function(a){e.provideFieldInfoForChartPoint(a,t,1===r.fieldInfo.chartJson.seriesItems.length,n,r.fieldInfo.chartJson.comparisonInfo&&r.fieldInfo.chartJson.comparisonInfo.calculatorName)})})}delete a.fieldInfo}},l.createCalculationStatesGroup=function(t){return t?(t=o(t),{states:{ids:t,names:t.slice(),labels:t.map(function(t){return i.STATE_LOCALIZATION_MAP_SHORT[t.charAt(0)]})},value:t[0]}):void 0},l});