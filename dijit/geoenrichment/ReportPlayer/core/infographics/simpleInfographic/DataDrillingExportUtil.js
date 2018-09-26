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

define(["dojo/_base/lang","dojo/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","../../reportContainerGrid/utils/PageQueryUtil","../../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,r,n,i,a,o,l,s,d,c,m){var u={reportPlayerClass:n,dataProviderClass:o,initPlayer:function(){var e=r.create("div",{class:"esriGEAbsoluteStretched esriGEOffscreen"},document.body),t=new u.dataProviderClass;t.registerCommand(l.PRINT),t.registerCommand(l.IMAGE);var n=new u.reportPlayerClass({theme:a.DARK,dataProvider:t,resizeMode:i.FIT_WINDOW,isDataDrillingPlayer:!0}).placeAt(e);return n.__playerDiv=e,n},destroyPlayer:function(e){e.destroy(),r.destroy(e.__playerDiv)}},p={},P=!1;return p.setReportPlayerClass=function(e){u.reportPlayerClass=e},p.setDataProviderClass=function(e){u.dataProviderClass=e},p.canPrintDataDrilling=function(e){return s.getParentReportPlayer(e).config.dataDrilling.canPrint},p.canExportDataDrilling=function(e){var t=s.getParentReportPlayer(e);if(!t.config.dataDrilling.canExport)return!1;var r=t.dataProvider.getCommandById(l.IMAGE);return r&&r.isBrowserSupported()},p.printDataDrilling=function(e){p._createTemporaryPlayerAndExport(e,!0)},p.exportDataDrilling=function(e){p._createTemporaryPlayerAndExport(e,!1)},p._createTemporaryPlayerAndExport=function(r,n){if(!P){P=!0;var i=s.getParentReportPlayer(r),a=i.getReportData(),o=i.dataProvider.reportDataToSingleAreaReportData(a,{currentFeatureIndex:r.currentFeatureIndex||0,reportTitle:i.getReportTitle(),templateJson:function(){var t=r._getDataDrillingPanelDimensions(),n=d.createBlankTemplate({elementWidth:t.w,elementHeight:t.h,layout:{numRows:1,numColumns:1}});n.theme=e.clone(r.theme),delete n.theme.document.backgroundImage;var i=r._drillingSections[0].toJson(),a=c.createFieldInfoFromSection(i),o=n.sectionsTables[0].data;return o.data[0].fieldInfos[o.columns[0].field]=a,n}()}),l=u.initPlayer();l.onCommandSettingsShown=function(e){m.showProgressPromise(r.dataDrillingViewDiv,e),p.unitTesting_onCommandSettingsShown()},l.onCommandStart=function(e){m.showProgressPromise(r.dataDrillingViewDiv,e)},t(l.setReportData(o,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),function(){return t(l[n?"executePrint":"executeExport"](),function(e){u.destroyPlayer(l),p.unitTesting_onExportCommandFinished(e)})}).always(function(){P=!1})}},p.unitTesting_onCommandSettingsShown=function(){},p.unitTesting_onExportCommandFinished=function(e){},p});