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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","../../reportContainerGrid/utils/PageQueryUtil","../../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,r,n,i,a,o,s,l,d,c,m,p){var g={reportPlayerClass:i,dataProviderClass:s,initPlayer:function(){var e=n.create("div",{class:"esriGEAbsoluteStretched esriGEOffscreen"},document.body),t=new g.dataProviderClass;t.registerCommand(l.PRINT),t.registerCommand(l.IMAGE);var r=new g.reportPlayerClass({theme:o.DARK,dataProvider:t,resizeMode:a.FIT_WINDOW}).placeAt(e);return r.__playerDiv=e,r},destroyPlayer:function(e){e.destroy(),n.destroy(e.__playerDiv)}},u={};return u.setReportPlayerClass=function(e){g.reportPlayerClass=e},u.setDataProviderClass=function(e){g.dataProviderClass=e},u.canPrintDataDrilling=function(e){return d.getParentReportPlayer(e).config.dataDrilling.canPrint},u.canExportDataDrilling=function(e){var t=d.getParentReportPlayer(e);if(!t.config.dataDrilling.canExport)return!1;var r=t.dataProvider.getCommandById(l.IMAGE);return r&&r.isBrowserSupported()},u.printDataDrilling=function(e){u._createTemporaryPlayerAndExport(e,!0)},u.exportDataDrilling=function(e){u._createTemporaryPlayerAndExport(e,!1)},u._createTemporaryPlayerAndExport=function(t,n){var i=d.getParentReportPlayer(t),a=i.getReportData(),o=e.mixin({},a.config);delete o.geoenrichmentUrl;var s={isClassic:a.isClassic,reportType:a.reportType,reportTitle:i.getReportTitle(),templateJson:function(){var r=t._getDataDrillingPanelDimensions(),n=c.createBlankTemplate({elementWidth:r.w,elementHeight:r.h,layout:{numRows:1,numColumns:1}});n.theme=e.clone(t.theme),delete n.theme.document.backgroundImage;var i=t._drillingSections[0].toJson(),a=m.createFieldInfoFromSection(i),o=n.sectionsTables[0].data;return o.data[0].fieldInfos[o.columns[0].field]=a,n}(),reportObject:a.reportObject,fieldData:i._viewModel.dynamicReportInfo.fieldData,analysisAreas:[i.getCurrentAnalysisArea()],infographicOptions:a.infographicOptions,attachmentsStore:a.attachmentsStore,config:o},l=g.initPlayer();l.onCommandSettingsShown=function(e){p.showProgressPromise(t.dataDrillingViewDiv,e),u.unitTesting_onCommandSettingsShown()},l.onCommandStart=function(e){p.showProgressPromise(t.dataDrillingViewDiv,e)},r(l.setReportData(s,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),function(){r(l[n?"executePrint":"executeExport"](),function(e){g.destroyPlayer(l),u.unitTesting_onExportCommandFinished(e)})})},u.unitTesting_onCommandSettingsShown=function(){},u.unitTesting_onExportCommandFinished=function(e){},u});