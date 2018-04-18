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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","../../reportContainers/containerGridUtils/PageQueryUtil","../../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,r,i,a,n,o,l,s,d,c,p,m){var P={reportPlayerClass:a,dataProviderClass:l,initPlayer:function(){var e=i.create("div",{class:"esriGEAbsoluteStretched esriGEOffscreen"},document.body),t=new P.dataProviderClass;t.registerCommand(s.PRINT),t.registerCommand(s.IMAGE);var r=new P.reportPlayerClass({theme:o.DARK,dataProvider:t,resizeMode:n.FIT_WINDOW}).placeAt(e);return r.__playerDiv=e,r},destroyPlayer:function(e){e.destroy(),i.destroy(e.__playerDiv)}},y={};return y.setReportPlayerClass=function(e){P.reportPlayerClass=e},y.setDataProviderClass=function(e){P.dataProviderClass=e},y.canPrintDataDrilling=function(e){return d.getParentReportPlayer(e).config.dataDrilling.canPrint},y.canExportDataDrilling=function(e){var t=d.getParentReportPlayer(e);if(!t.config.dataDrilling.canExport)return!1;var r=t.dataProvider.getCommandById(s.IMAGE);return r&&r.isBrowserSupported()},y.printDataDrilling=function(e){y._createTemporaryPlayerAndExport(e,!0)},y.exportDataDrilling=function(e){y._createTemporaryPlayerAndExport(e,!1)},y._createTemporaryPlayerAndExport=function(t,i){var a=d.getParentReportPlayer(t),n=a.getReportData(),o=e.mixin({},n.config);delete o.geoenrichmentUrl;var l={isClassic:n.isClassic,reportType:n.reportType,reportTitle:a.getReportTitle(),templateJson:function(){var e=t._getDataDrillingPanelDimensions(),r=c.createBlankTemplate({elementWidth:e.w,elementHeight:e.h,layout:{numRows:1,numColumns:1}});r.theme=t.theme;var i=t._drillingSections[0].toJson(),a=p.createFieldInfoFromSection(i),n=r.sectionsTables[0].data;return n.data[0].fieldInfos[n.columns[0].field]=a,r}(),reportObject:n.reportObject,fieldData:a._viewModel.dynamicReportInfo.fieldData,analysisAreas:[a.getCurrentAnalysisArea()],infographicOptions:n.infographicOptions,attachmentsStore:n.attachmentsStore,config:o},s=P.initPlayer();s.onCommandSettingsShown=function(e){m.showProgressPromise(t.dataDrillingViewDiv,e)},s.onCommandStart=function(e){m.showProgressPromise(t.dataDrillingViewDiv,e)},r(s.setReportData(l,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),function(){r(s[i?"executePrint":"executeExport"](),function(){P.destroyPlayer(s)})})},y});