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

define(["../../core/supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../core/supportClasses/tableJson/TableJsonUtil","../../core/sections/sectionUtils/SectionJsonUtil","../../core/infographics/InfographicTypes","../../core/infographics/utils/InfographicJsonUtil"],function(e,n,l,o,t,s){var a={},u={calcNumRowsColumns:function(e){var n;n=e<=2?1:e<=6?2:e<=12?3:Math.ceil(e/4);var l;return l=1===e?1:e<=4?2:e<=9?3:4,{numRows:n,numColumns:l,numVarsInLastRow:l-(n*l-e),lastRowCellIndexes:null,lastRowCellWidths:null}}},i={mergeLastRow:function(e,n,o){2===n.numColumns?1===n.numVarsInLastRow&&(l.modifyTableJson(e,n.numRows-1,0,{columnSpan:2}),n.lastRowCellWidths=[2*o]):3===n.numColumns?1===n.numVarsInLastRow?(l.modifyTableJson(e,n.numRows-1,0,{columnSpan:3}),n.lastRowCellWidths=[3*o]):2===n.numVarsInLastRow&&(l.modifyTableJson(e,n.numRows-1,0,{cellStyle:{width:1.5*o}}),l.modifyTableJson(e,n.numRows-1,1,{columnSpan:2,cellStyle:{width:.5*o}}),n.lastRowCellWidths=[1.5*o,1.5*o]):4===n.numColumns&&(1===n.numVarsInLastRow?(l.modifyTableJson(e,n.numRows-1,0,{columnSpan:4}),n.lastRowCellWidths=[4*o]):2===n.numVarsInLastRow?(l.modifyTableJson(e,n.numRows-1,0,{columnSpan:2}),l.modifyTableJson(e,n.numRows-1,2,{columnSpan:2}),n.lastRowCellIndexes=[0,2],n.lastRowCellWidths=[2*o,2*o]):3===n.numVarsInLastRow&&(l.modifyTableJson(e,n.numRows-1,0,{cellStyle:{width:4*o/3}}),l.modifyTableJson(e,n.numRows-1,1,{columnSpan:2,cellStyle:{width:2*o/3}}),l.modifyTableJson(e,n.numRows-1,2,{cellStyle:{width:2*o/3}}),l.modifyTableJson(e,n.numRows-1,3,{cellStyle:{width:4*o/3}}),n.lastRowCellIndexes=[0,1,3],n.lastRowCellWidths=[4*o/3,4*o/3,4*o/3]))}},m={insertNextPanel:function(e,n,l){void 0===n.currentRowIndex&&(n.currentRowIndex=0,n.currentColumnIndex=0);var o=n.currentRowIndex===n.numRows-1,t=o&&n.lastRowCellIndexes?n.lastRowCellIndexes[n.currentColumnIndex]:n.currentColumnIndex,s=o&&n.lastRowCellWidths&&n.lastRowCellWidths[n.currentColumnIndex],a=e.data.data[n.currentRowIndex],u="field"+t;a.fieldInfos[u]=l(s),++n.currentColumnIndex>n.numColumns-1&&(n.currentColumnIndex=0,n.currentRowIndex++)}};return a.generateTemplatesFromFieldInfos=function(t){var s=u.calcNumRowsColumns(t.length),r=e.createBlankTemplate({elementWidth:500,elementHeight:250,layout:{numRows:s.numRows,numColumns:s.numColumns}}),c=r.sectionsTables[0];return i.mergeLastRow(c,s,500),t.forEach(function(e){m.insertNextPanel(c,s,function(t){var s=a._createInfographicJson(e,t||500,250),u=l.createSingleCellTable({width:t||500,height:250,fieldInfo:n.createFieldInfoFromInfographic(s)});return n.createFieldInfoFromSection(o.wrapInDetailsSectionJson(u))})}),r},a._createInfographicJson=function(e,n,l){return{type:t.ONE_VAR,title:e.alias,style:{width:n,height:l},levels:s.getDefaultLevels(),fieldInfos:[e],calcData:{calculatorName:e.templateName.substr(0,e.templateName.indexOf(".")),variables:[e.fullName]}}},a});