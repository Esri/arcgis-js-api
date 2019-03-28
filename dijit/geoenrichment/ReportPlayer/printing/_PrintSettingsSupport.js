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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","./HeaderFooterSettingsBuilder","./PageSizeUtil"],function(e,t,n,r,i,o,a,l){return e(null,{_checkPrintSettings:function(e){function i(){var n=t.mixin({},e.exportSettings);return delete n.pageSettings,t.mixin({commandId:e.commandId,noAutoScale:!o._checkNeedAutoScale(),pageSettings:t.mixin({},o.getCurrentReportContainer().documentOptions,e.exportSettings&&e.exportSettings.pageSettings),addHeader:!1,addDataSource:!1,addFooter:!1,reportTitle:void 0,reportSubtitle:void 0,allowDataDrilling:!0},n)}var o=this,a=new n;return e.showDialog?function(){r(o._getPrintDialogSettings(e.commandId),function(e){var n=new o._player.printConfig.printDialogClass;n.onPrint=function(e){r(o._applyPrintSettings(t.mixin(i(),e)),a.resolve,a.reject)},n.onCancel=function(){a.resolve("cancel")},n.show(e)})}():function(){r(o._applyPrintSettings(i()),a.resolve,a.reject)}(),a.promise},getPrintDialogSettings:function(){return this._getPrintDialogSettings()},_getPrintDialogSettings:function(e){var t=this;return r(this._player.dataProvider.getCommands(),function(n){var r={canAutoScale:t._checkNeedAutoScale(),pageSettings:{pagesize:t.getCurrentReportContainer().documentOptions.pagesize,orientation:t.getCurrentReportContainer().documentOptions.orientation},reportTitle:t._player.getReportTitle(),reportSubtitle:t._player.printConfig.subtitle,supportedPageSizes:l.getSupportedPageSizes().map(function(e){return{label:e.label,id:e.value}})};return e&&(r.commandId=e),r.exportCommands=e?e===o.PRINT?null:n.filter(function(e){return e.id!==o.PRINT}):n,r.exportCommands&&(r.exportCommands=r.exportCommands.map(function(e){return{label:e.label,id:e.id}})),r})},_checkNeedAutoScale:function(){return this.getAllReportContainers().some(function(e){return e.hasHiddenContent()})},_applyPrintSettings:function(e){function t(){s._pageSettings=e.pageSettings;var t=i.getPageBox(e.pageSettings);s._pageFitParams={w:t.w,h:t.h,hAlign:"center",vAlign:"top"}}function l(){return r(a.createHeaderFooterParams(s._player,s._viewModel,e),function(e){s._headerFooterParams=e})}var s=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling;var u,c,g=e.commandId===o.DYNAMIC_HTML||e.noAutoScale;return g||(u=this.getCurrentReportContainer().toJson()),c=this._player._showAllContainers(),this._pageSettingsRollBackFunc=function(){if(c&&c.undo(),c=null,!g)return s._player.updateTemplateJson(u),s._player.refresh({rerenderContent:!0})},r(!g&&function(){s.getAllReportContainers().forEach(function(e){e.resizeRowHeightToShowCellsContent()});var e=new n;return setTimeout(e.resolve,500),e.promise}(),function(){return t(),l()})}})});