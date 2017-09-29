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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

//            copyrightText: String,

define(["dojo/_base/declare","dojo/Deferred","dojo/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","esri/dijit/geoenrichment/utils/DateUtil"],function(e,t,n,o,r,a){return e(null,{_checkPrintSettings:function(e){function o(){var t={needAutoScale:!1,addHeader:!1,addDataSource:!1,addFooter:!1,pageSettings:i._getReportContainer().documentOptions,commandId:e.commandId};n(i.__applyPrintSettings(t),s.resolve,s.reject)}function a(){n(i._player.dataProvider.getCommands(),function(t){var o={needAutoScale:e.commandId!==r.DYNAMIC_HTML&&i._getReportContainer().hasHiddenContent(),showLayoutOptions:!0,currentPageSettings:i._getReportContainer().documentOptions,commandId:e.commandId,canAddHeaderAndFooter:!0,exportCommands:e.commandId==r.PRINT?null:t.filter(function(e){return e.id!=r.PRINT})},a=new i._player.printConfig.printDialogClass;a.onPrint=function(e){n(i.__applyPrintSettings(e),s.resolve,s.reject)},a.onCancel=function(){s.resolve("cancel")},a.show(o)})}var i=this,s=new t;return e.showDialog?a():o(),s.promise},__applyPrintSettings:function(e){function r(){s._getReportContainer().resizeRowHeightToShowCellsContent();var e=new t;return setTimeout(e.resolve,500),e.promise}function a(){s._pageSettings=e.pageSettings;var t=o.getPageBox(e.pageSettings);s._pageFitParams={w:t.w,h:t.h,hAlign:"center",vAlign:"top"}}function i(){return n(s._createHeaderFooterParams(e),function(e){s._headerFooterParams=e})}var s=this;this._commandId=e.commandId||this._commandId;var d=this._getReportContainer().toJson();return this._pageSettingsRollBackFunc=function(){return s._player.updateTemplateJson(d),s._player.refresh({rerenderContent:!0})},n(!e.needAutoScale||r(),function(){return a(),i()})},_createHeaderFooterParams:function(e){var t=this._player.getCurrentAnalysisArea(),n=this._viewModel.getDocumentDefaultStyles(),o=this._player.getReportData().reportObject.dataVintageDescription;return{header:{show:e.addHeader,title:this._player.getReportTitle(),subtitle:this._player.printConfig.subtitle,siteName:t.name,siteDesc:t.description,siteAddr:t.address,latitude:t.latitude,longitude:t.longitude,style:{headerStyle:n,titleStyle:this._viewModel.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:this._viewModel.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:o&&e.addDataSource,sourceText:"<b>Source: </b>"+o,style:{dataSourceStyle:n}},footer:{show:e.addFooter,copyrightText:"©"+(new Date).getFullYear()+" Esri",formattedDate:a.getReportFooterDate(),style:{footerStyle:n}},documentStyle:n}}})});