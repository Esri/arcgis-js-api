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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../../core/supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../core/supportClasses/tableJson/TableJsonUtil","../../core/sections/sectionUtils/SectionJsonUtil","../../core/infographics/InfographicTypes","../../core/infographics/utils/InfographicJsonUtil"],(function(n,e,l,o,t,s){var a={},u=function(n){var e,l;return{numRows:e=n<=2?1:n<=6?2:n<=12?3:Math.ceil(n/4),numColumns:l=1===n?1:n<=4?2:n<=9?3:4,numVarsInLastRow:l-(e*l-n),lastRowCellIndexes:null,lastRowCellWidths:null}},i=function(n,e,o){2===e.numColumns?1===e.numVarsInLastRow&&(l.modifyTableJson(n,e.numRows-1,0,{columnSpan:2}),e.lastRowCellWidths=[2*o]):3===e.numColumns?1===e.numVarsInLastRow?(l.modifyTableJson(n,e.numRows-1,0,{columnSpan:3}),e.lastRowCellWidths=[3*o]):2===e.numVarsInLastRow&&(l.modifyTableJson(n,e.numRows-1,0,{cellStyle:{width:1.5*o}}),l.modifyTableJson(n,e.numRows-1,1,{columnSpan:2,cellStyle:{width:.5*o}}),e.lastRowCellWidths=[1.5*o,1.5*o]):4===e.numColumns&&(1===e.numVarsInLastRow?(l.modifyTableJson(n,e.numRows-1,0,{columnSpan:4}),e.lastRowCellWidths=[4*o]):2===e.numVarsInLastRow?(l.modifyTableJson(n,e.numRows-1,0,{columnSpan:2}),l.modifyTableJson(n,e.numRows-1,2,{columnSpan:2}),e.lastRowCellIndexes=[0,2],e.lastRowCellWidths=[2*o,2*o]):3===e.numVarsInLastRow&&(l.modifyTableJson(n,e.numRows-1,0,{cellStyle:{width:4*o/3}}),l.modifyTableJson(n,e.numRows-1,1,{columnSpan:2,cellStyle:{width:2*o/3}}),l.modifyTableJson(n,e.numRows-1,2,{cellStyle:{width:2*o/3}}),l.modifyTableJson(n,e.numRows-1,3,{cellStyle:{width:4*o/3}}),e.lastRowCellIndexes=[0,1,3],e.lastRowCellWidths=[4*o/3,4*o/3,4*o/3]))},r=function(n,e,l){void 0===e.currentRowIndex&&(e.currentRowIndex=0,e.currentColumnIndex=0);var o=e.currentRowIndex===e.numRows-1,t=o&&e.lastRowCellIndexes?e.lastRowCellIndexes[e.currentColumnIndex]:e.currentColumnIndex,s=o&&e.lastRowCellWidths&&e.lastRowCellWidths[e.currentColumnIndex],a="field"+t;n.data.data[e.currentRowIndex].fieldInfos[a]=l(s),e.currentColumnIndex++,e.currentColumnIndex>e.numColumns-1&&(e.currentColumnIndex=0,e.currentRowIndex++)};return a.generateTemplatesFromFieldInfos=function(t){var s=u(t.length),m=n.createBlankTemplate({elementWidth:500,elementHeight:250,layout:{numRows:s.numRows,numColumns:s.numColumns}}),c=m.sectionsTables[0];return i(c,s,500),t.forEach((function(n){r(c,s,(function(t){var s=a._createInfographicJson(n,t||500,250),u=l.createSingleCellTable({width:t||500,height:250,fieldInfo:e.createFieldInfoFromInfographic(s)});return e.createFieldInfoFromSection(o.wrapInDetailsSectionJson(u))}))})),m},a._createInfographicJson=function(n,e,l){return{type:t.ONE_VAR,title:n.alias,style:{width:e,height:l},levels:s.getDefaultLevels(),fieldInfos:[n],calcData:{calculatorName:n.templateName.substr(0,n.templateName.indexOf(".")),variables:[n.fullName]}}},a}));