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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","../../reportContainerGrid/utils/PageQueryUtil","../../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,r,n,i,a,o,l,s,d,c,m,u){var p={reportPlayerClass:n,dataProviderClass:o,initPlayer:function(){var e=r.create("div",{class:"esriGEAbsoluteStretched esriGEOffscreen"},document.body),t=new p.dataProviderClass;t.registerCommand(l.PRINT),t.registerCommand(l.IMAGE);var n=new p.reportPlayerClass({theme:a.DARK,dataProvider:t,resizeMode:i.FIT_WINDOW,isDataDrillingPlayer:!0}).placeAt(e);return n.__playerDiv=e,n},destroyPlayer:function(e){e.destroy(),r.destroy(e.__playerDiv)}},g={},P=!1;return g.setReportPlayerClass=function(e){p.reportPlayerClass=e},g.setDataProviderClass=function(e){p.dataProviderClass=e},g.canPrintDataDrilling=function(e){return!m.isMobileDevice()&&!!s.getParentReportPlayer(e).dataProvider.getCommandById(l.PRINT)},g.canExportDataDrilling=function(e){if(m.isMobileDevice())return!1;var t=s.getParentReportPlayer(e),r=t.dataProvider.getCommandById(l.IMAGE);return r&&r.isBrowserSupported()},g.printDataDrilling=function(e){g._createTemporaryPlayerAndExport(e,!0)},g.exportDataDrilling=function(e){g._createTemporaryPlayerAndExport(e,!1)},g._createTemporaryPlayerAndExport=function(r,n){if(!P){P=!0;var i,a=s.getParentReportPlayer(r),o=a.getReportData(),l=a.dataProvider.reportDataToSingleAreaReportData(o,{currentFeatureIndex:r.currentFeatureIndex||0,reportTitle:a.getReportTitle(),templateJson:function(){var t=r._getDataDrillingPanelDimensions(),n=d.createBlankTemplate({elementWidth:t.w,elementHeight:t.h,layout:{numRows:1,numColumns:1}});n.theme=e.clone(r.theme),delete n.theme.document.backgroundImage,i=r._drillingSections[0].getVisualState();var a=r._drillingSections[0].toJson(),o=c.createFieldInfoFromSection(a),l=n.sectionsTables[0].data;return l.data[0].fieldInfos[l.columns[0].field]=o,n}()}),m=p.initPlayer();m.onCommandSettingsShown=function(e){u.showProgressPromise(r.dataDrillingViewDiv,e),g.unitTesting_onCommandSettingsShown()},m.onCommandStart=function(e){u.showProgressPromise(r.dataDrillingViewDiv,e)},t(m.setReportData(l,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),function(){var e={pages:[{cells:[i]}]};return t(m.getCurrentReportContainer().setVisualState(e),function(){return t(m[n?"executePrint":"executeExport"](),function(e){p.destroyPlayer(m),g.unitTesting_onExportCommandFinished(e)})})}).always(function(){P=!1})}},g.unitTesting_onCommandSettingsShown=function(){},g.unitTesting_onExportCommandFinished=function(e){},g});