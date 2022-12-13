// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","../reportContainerGrid/utils/PageQueryUtil","../supportClasses/templateJsonUtils/BlankTemplateJsonUtil","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],(function(e,t,r,n,i,o,a,l,s,d,u,c,m){var g={reportPlayerClass:n,dataProviderClass:a,initPlayer:function(){var e=r.create("div",{class:"esriGEAbsoluteStretched esriGEOffscreen"},document.body),t=new g.dataProviderClass;t.registerCommand(l.PRINT),t.registerCommand(l.IMAGE);var n=new g.reportPlayerClass({theme:o.DARK,dataProvider:t,resizeMode:i.FIT_WINDOW,isDataDrillingPlayer:!0}).placeAt(e);return n.__playerDiv=e,n},destroyPlayer:function(e){e.destroy(),r.destroy(e.__playerDiv)}},p={},P=!1;return p.setReportPlayerClass=function(e){g.reportPlayerClass=e},p.setDataProviderClass=function(e){g.dataProviderClass=e},p.canPrintDataDrilling=function(e){return!c.isMobileDevice()&&!!s.getParentReportPlayer(e).dataProvider.getCommandById(l.PRINT)},p.canExportDataDrilling=function(e){if(c.isMobileDevice())return!1;var t=s.getParentReportPlayer(e).dataProvider.getCommandById(l.IMAGE);return t&&t.isBrowserSupported()},p.printDataDrilling=function(e){p._createTemporaryPlayerAndExport(e,!0)},p.exportDataDrilling=function(e){p._createTemporaryPlayerAndExport(e,!1)},p._createTemporaryPlayerAndExport=function(r,n){if(!P){var i;P=!0;var o=s.getParentReportPlayer(r.parentWidget),a=o.getReportData(),l=o.dataProvider.reportDataToSingleAreaReportData(a,{currentFeatureIndex:r.currentFeatureIndex||0,reportTitle:o.getReportTitle(),templateJson:function(){var t=r.getSection().toJson(),n=r.getDataDrillingPanelDimensions(t),o=d.createBlankTemplate({elementWidth:n.w,elementHeight:n.h,layout:{numRows:1,numColumns:1}});o.theme=e.clone(r.theme),delete o.theme.document.backgroundImage,i=r.getSection().getVisualState();var a=u.createFieldInfoFromSection(t),l=o.sectionsTables[0];return l.rows[0].fieldInfos[l.columns[0].field]=a,o}()}),c=g.initPlayer();c.onWaitingShown=function(e){m.showProgressPromise(r.dataDrillingViewDiv,e)},c.onCommandSettingsShown=function(e){p.unitTesting_onCommandSettingsShown()},t(c.setReportData(l,{waitUntilAllContentIsReady:!0,disableAnimation:!0}),(function(){var e={pages:[{cells:[i]}]},o=c.getCurrentReportContainer().getLayoutCells()[0].content;return o.getPreviewValueFunction=r.getPreviewValueFunction,t(o.refresh()).then((function(){return t(c.onWaitingShown(c.getCurrentReportContainer().setVisualState(e)),(function(){return t(c[n?"executePrint":"executeExport"](),(function(e){g.destroyPlayer(c),p.unitTesting_onExportCommandFinished(e)}))}))}))})).finally((function(){P=!1}))}},p.unitTesting_onCommandSettingsShown=function(){},p.unitTesting_onExportCommandFinished=function(e){},p}));