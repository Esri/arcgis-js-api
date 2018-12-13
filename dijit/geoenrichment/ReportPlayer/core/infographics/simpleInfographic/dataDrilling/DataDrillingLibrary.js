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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","./_FieldInfoBuilder","../../../supportClasses/tableJson/TableJsonUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","./_config","./EnrichUtil"],function(t,e,a,n,r,i){function o(t){return"string"==typeof t?t.split(",").map(function(t){return t+"/"}):t}var l={};return i.ddLibrary=l,l.getDrillingOptions=function(t,e,a){if(e){var i=function(){var i;if("string"==typeof e){var o=r.getById(t+"."+e);return o?[o]:null}i=e;var l=i.usedFields||a&&a(i);if(l=l&&l.map(function(t){return t.toUpperCase()}),!i.variableID&&!l)return null;var s=i.variableID&&i.variableID.toUpperCase(),f=r.LIBRARY[t];for(var c in f){var u=c.toUpperCase(),d=n.createFieldNameFromVariable(c).toUpperCase();if(function(t,e){return!(!s||-1===s.indexOf(t))||l&&l.some(function(a){return-1!==a.indexOf(t)||-1!==a.indexOf(e)})}(u,d))return f[c]}return null}();return i&&i.forEach(function(t){l._provideStateData(t)}),i}},l.getDrillingOptionByStandardId=function(t,e){},l.getDrillingOptionInfo=function(e,n,r,o,s,f,c){var u=l.getDrillingOptions(e,n,c),d=u&&u.filter(function(t){return t.name===r})[0];if(!d)return null;!f&&d.defaultState&&(f=d.defaultState),f=f&&f.charAt(0)||"n";var p;d.calcGroup&&(p=t.clone(d.calcGroup),p.value=f+"/");var I=d.stateData[f],v=a.createSingleCellTable({fieldInfo:I.fieldInfo,width:o,height:s});return{calculationStatesGroup:p,tableJson:t.clone(v),enrichInfos:i._getStandardEnrichInfosForTableInfo(d,!0)}},l._provideStateData=function(a){if(!a.stateData){a.stateData={n:{fieldInfo:a.fieldInfo}},a.states&&(a.states=o(a.states),a.states.forEach(function(e){var n=e.charAt(0);if("n"!==n){var i=t.clone(a.fieldInfo);if(a.stateData[n]={fieldInfo:i},i.isChart){i.chartJson.visualProperties.title.text+=" ("+r.STATE_LOCALIZATION_MAP_SHORT[n]+")",i.chartJson.visualProperties.yAxis.title=r.STATE_LOCALIZATION_MAP[n];var o=a.dataLabelsDecimals&&a.dataLabelsDecimals[n];void 0!==o?i.chartJson.visualProperties.dataLabelsDecimals=o:("p"!==n&&"a"!==n||(i.chartJson.visualProperties.dataLabelsDecimals=1),"i"===n&&(i.chartJson.visualProperties.dataLabelsDecimals=0))}}}),a.calcGroup=l.createCalculationStatesGroup(a.states),delete a.states,delete a.dataLabelsDecimals);for(var n in a.stateData){var i=a.stateData[n];i.fieldInfo.isChart&&i.fieldInfo.chartJson.seriesItems.forEach(function(t){t.points.forEach(function(a){e.provideFieldInfoForChartPoint(a,t,1===i.fieldInfo.chartJson.seriesItems.length,n,i.fieldInfo.chartJson.comparisonInfo&&i.fieldInfo.chartJson.comparisonInfo.calculatorName)})})}delete a.fieldInfo}},l.createCalculationStatesGroup=function(t){if(t)return t=o(t),{states:{ids:t,names:t.slice(),labels:t.map(function(t){return r.STATE_LOCALIZATION_MAP_SHORT[t.charAt(0)]})},value:t[0]}},l});