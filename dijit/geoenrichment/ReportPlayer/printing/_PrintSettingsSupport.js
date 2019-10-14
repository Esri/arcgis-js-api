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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","./HeaderFooterSettingsBuilder","./PageSizeUtil"],function(e,t,n,i,r,o,a,l,s,c,u){return t(null,{_checkPrintSettings:function(e){function t(){var t=n.mixin({},e.exportSettings);return delete t.pageSettings,n.mixin({commandId:e.commandId,noAutoScale:!i._checkNeedAutoScale(),pageSettings:n.mixin({},i.getCurrentReportContainer().documentOptions,e.exportSettings&&e.exportSettings.pageSettings),addHeader:!1,addDataSource:!1,addFooter:!1,reportTitle:void 0,reportSubtitle:void 0,allowDataDrilling:!0,allowFallbackMaps:!0},t)}var i=this,a=new r;return e.showDialog?function(){o(i._getPrintDialogSettings(e.commandId),function(e){i._loadDialogClass().then(function(r){var l=new r;l.onPrint=function(e){o(i._applyPrintSettings(n.mixin(t(),e)),a.resolve,a.reject)},l.onCancel=function(){a.resolve("cancel")},l.show(e)})})}():function(){o(i._applyPrintSettings(t()),a.resolve,a.reject)}(),a.promise},_loadDialogClass:function(){var t=new r,n=this._player.printConfig.printDialogClass;return"string"==typeof n?e([n],function(e){t.resolve(e)}):t.resolve(n),t.promise},getPrintDialogSettings:function(){return this._getPrintDialogSettings()},_getPrintDialogSettings:function(e){var t=this;return o(this._player.dataProvider.getCommands(),function(n){var i={canAutoScale:t._checkNeedAutoScale(),pageSettings:{pagesize:t.getCurrentReportContainer().documentOptions.pagesize,orientation:t.getCurrentReportContainer().documentOptions.orientation},reportTitle:t._player.getReportTitle(),reportSubtitle:t._player.printConfig.subtitle,supportedPageSizes:u.getSupportedPageSizes().map(function(e){return{label:e.label,id:e.value}})};return e&&(i.commandId=e),i.exportCommands=e?e===s.PRINT?null:n.filter(function(e){return e.id!==s.PRINT}):n,i.exportCommands&&(i.exportCommands=i.exportCommands.map(function(e){return{label:e.label,id:e.id}})),i})},_checkNeedAutoScale:function(){return this.getAllReportContainers().some(function(e){return e.hasHiddenContent()})},_applyPrintSettings:function(e){function t(){u._pageSettings=e.pageSettings;var t=l.getPageBox(e.pageSettings);u._pageFitParams={w:t.w,h:t.h,hAlign:"center",vAlign:"top"}}function r(){return o(c.createHeaderFooterParams(u._player,u._viewModel,e),function(e){u._headerFooterParams=e})}var u=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling,this._allowFallbackMaps=e.allowFallbackMaps;var g,p,d=e.commandId===s.DYNAMIC_HTML||e.noAutoScale;return d||(g=n.clone(this._player.getReportData().templateJson)),p=this._player._showAllContainers(),this._pageSettingsRollBackFunc=function(){if(p&&p.undo(),p=null,!d)return u._player.getReportData().templateJson=g,u._player.refresh()},o(!d&&function(){return i(u.getAllReportContainers().map(function(e){return e.resizeRowHeightToShowCellsContent()})).then(function(){return a.delay(500)})}(),function(){return t(),r()})}})});