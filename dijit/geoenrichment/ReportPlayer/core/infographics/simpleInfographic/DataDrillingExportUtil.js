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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/dataProviders/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","../../reportContainers/containerGridUtils/PageQueryUtil","../../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,r,t,a,i,n,o,s,l,d,c,p,m){var P={reportPlayerClass:i,dataProviderClass:s,initPlayer:function(){var e=a.create("div",{"class":"esriGEAbsoluteStretched esriGEOffscreen"},document.body),r=new P.dataProviderClass;r.registerCommand(l.PRINT),r.registerCommand(l.IMAGE);var t=new P.reportPlayerClass({theme:o.DARK,dataProvider:r,resizeMode:n.FIT_WINDOW}).placeAt(e);return t.__playerDiv=e,t},destroyPlayer:function(e){e.destroy(),a.destroy(e.__playerDiv)}},y={};return y.setReportPlayerClass=function(e){P.reportPlayerClass=e},y.setDataProviderClass=function(e){P.dataProviderClass=e},y.canPrintDataDrilling=function(e){var r=d.getParentReportPlayer(e);return r.config.dataDrilling.canPrint},y.canExportDataDrilling=function(e){var r=d.getParentReportPlayer(e);if(!r.config.dataDrilling.canExport)return!1;var t=r.dataProvider.getCommandById(l.IMAGE);return t&&t.isBrowserSupported()},y.printDataDrilling=function(e){y._createTemporaryPlayerAndExport(e,!0)},y.exportDataDrilling=function(e){y._createTemporaryPlayerAndExport(e,!1)},y._createTemporaryPlayerAndExport=function(r,a){function i(){var e=r._getDataDrillingPanelDimensions(),t=c.createBlankTemplate({elementWidth:e.w,elementHeight:e.h,layout:{numRows:1,numColumns:1}});t.theme=r.theme;var a=r._drillingSections[0].toJson(),i=p.createFieldInfoFromSection(a),n=t.sectionsTables[0].data;return n.data[0].fieldInfos[n.columns[0].field]=i,t}var n=d.getParentReportPlayer(r),o=n.getReportData(),s=e.mixin({},o.config);delete s.geoenrichmentUrl;var l={isClassic:o.isClassic,reportType:o.reportType,reportTitle:n.getReportTitle(),templateJson:i(),reportObject:o.reportObject,fieldData:n._viewModel.dynamicReportInfo.fieldData,analysisAreas:[n.getCurrentAnalysisArea()],infographicOptions:o.infographicOptions,attachmentsStore:o.attachmentsStore,config:s},y=P.initPlayer();y.onCommandSettingsShown=function(e){m.showProgressPromise(r.dataDrillingViewDiv,e)},y.onCommandStart=function(e){m.showProgressPromise(r.dataDrillingViewDiv,e)},t(y.setReportData(l,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),function(){t(y[a?"executePrint":"executeExport"](),function(){P.destroyPlayer(y)})})},y});