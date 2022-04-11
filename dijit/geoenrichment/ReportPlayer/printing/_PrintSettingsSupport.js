// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","../PlayerCommands","../PlayerViewModes","./HeaderFooterSettingsBuilder","./PageSizeUtil"],(function(e,t,n,i,r,o,a,l,s,c,g,p,u){return t(null,{_checkPrintSettings:function(e){var t,i=this,a=new r;function l(t){var r=n.mixin({},e.exportSettings);return delete r.pageSettings,n.mixin({commandId:e.commandId,noAutoScale:!i._checkNeedAutoScale(),pageSettings:n.mixin({},i.getCurrentReportContainer().documentOptions,e.exportSettings&&e.exportSettings.pageSettings),addHeader:!1,addDataSource:!1,addFooter:!1,reportTitle:void 0,reportSubtitle:void 0,allowDataDrilling:!0,allowFallbackMaps:!0,canSplitPages:!1,splitPages:!1},r)}return e.showDialog?(t=new r,e.onShowWaiting(t.promise),o(i._getPrintDialogSettings(e.commandId),(function(e){return i._loadDialogClass().then((function(t){var r=new t;r.onPrint=function(e){o(i._applyPrintSettings(n.mixin(l(),e)),a.resolve,a.reject)},r.onCancel=function(){a.resolve("cancel")},r.show(e)})).always(t.resolve)}))):o(i._applyPrintSettings(l()),a.resolve,a.reject),a.promise},_loadDialogClass:function(){var t=new r,n=this._player.printConfig.printDialogClass;return"string"==typeof n?e([n],(function(e){t.resolve(e)})):t.resolve(n),t.promise},getPrintDialogSettings:function(){return this._getPrintDialogSettings()},_getPrintDialogSettings:function(e){var t=this;return o(this._player.dataProvider.getCommands(),(function(n){var i={canAutoScale:t._checkNeedAutoScale(),pageSettings:{pagesize:t.getCurrentReportContainer().documentOptions.pagesize,orientation:t.getCurrentReportContainer().documentOptions.orientation},reportTitle:t._player.getReportTitle(),reportSubtitle:t._player.printConfig.subtitle,supportedPageSizes:u.getSupportedPageSizes().map((function(e){return{label:e.label,id:e.value}})),canSplitPages:t._player.viewMode===g.PANELS_IN_STACK_ALL};return e&&(i.commandId=e),i.exportCommands=e?e===c.PRINT?null:n.filter((function(e){return e.id!==c.PRINT})):n,i.exportCommands&&(i.exportCommands=i.exportCommands.map((function(e){return{label:e.label,id:e.id}}))),i}))},_checkNeedAutoScale:function(){return this.getAllReportContainers().some((function(e){return e.hasHiddenContent()}))},_applyPrintSettings:function(e){var t=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling,this._allowFallbackMaps=e.allowFallbackMaps,this._splitPages=e.splitPages,this._needAutoScale=this._checkNeedAutoScale();var r,g,u=e.commandId===c.DYNAMIC_HTML||this._needAutoScale&&e.noAutoScale;return u||(r=n.clone(this._player.getReportData().templateJson)),g=this._player._showAllContainers(),this._pageSettingsRollBackFunc=function(){if(g&&g.undo(),g=null,!u)return t._player.getReportData().templateJson=r,t._player.refresh()},o(!u&&i(t.getAllReportContainers().map((function(e){return e.resizePanelsToShowContent()}))).then((function(){return l.isPlayerOnServer?null:a.delay(500)})),(function(){t._pageSettings=e.pageSettings;var n=s.getPageBox(e.pageSettings);return t._pageFitParams={w:n.w,h:n.h,hAlign:"center",vAlign:"top"},o(p.createHeaderFooterParams(t._player,t._viewModel,e),(function(e){t._headerFooterParams=e}))}))}})}));