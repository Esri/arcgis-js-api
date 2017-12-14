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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","./HeaderFooterSettingsBuilder"],function(e,n,t,o,r,a,i){return e(null,{_checkPrintSettings:function(e){function r(){return d.getAllReportContainers().some(function(e){return e.hasHiddenContent()})}function i(){return n.mixin({needAutoScale:r(),addHeader:!1,addDataSource:!1,addFooter:!1,pageSettings:d.getCurrentReportContainer().documentOptions,commandId:e.commandId,allAreas:!0},e.printSettings)}function s(){o(d._applyPrintSettings(i()),c.resolve,c.reject)}function l(){o(d._player.dataProvider.getCommands(),function(t){var s={needAutoScale:r(),showLayoutOptions:!0,currentPageSettings:d.getCurrentReportContainer().documentOptions,commandId:e.commandId,canAddHeaderAndFooter:!0,showAllAreasOptions:d.getAllReportContainers().length>1,showDataDrillingOptions:e.commandId!==a.PRINT,exportCommands:e.commandId===a.PRINT?null:t.filter(function(e){return e.id!==a.PRINT})},l=new d._player.printConfig.printDialogClass;l.onPrint=function(e){o(d._applyPrintSettings(n.mixin(i(),e)),c.resolve,c.reject)},l.onCancel=function(){c.resolve("cancel")},l.show(s)})}var d=this,c=new t;return e.showDialog?l():s(),c.promise},_applyPrintSettings:function(e){function n(){e.allAreas?d.getAllReportContainers().forEach(function(e){e.resizeRowHeightToShowCellsContent()}):d.getCurrentReportContainer().resizeRowHeightToShowCellsContent();var n=new t;return setTimeout(n.resolve,500),n.promise}function s(){d._pageSettings=e.pageSettings;var n=r.getPageBox(e.pageSettings);d._pageFitParams={w:n.w,h:n.h,hAlign:"center",vAlign:"top"}}function l(){return o(i.createHeaderFooterParams(d._player,d._viewModel,e),function(e){d._headerFooterParams=e})}var d=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling,this._exportAllAreas=e.allAreas;var c,u,p=e.commandId!==a.DYNAMIC_HTML&&e.needAutoScale;return p&&(c=this.getCurrentReportContainer().toJson()),e.allAreas&&(u=this._player._showAllContainers()),this._pageSettingsRollBackFunc=function(){return u&&u.undo(),u=null,p?(d._player.updateTemplateJson(c),d._player.refresh({rerenderContent:!0})):void 0},o(p&&n(),function(){return s(),l()})}})});