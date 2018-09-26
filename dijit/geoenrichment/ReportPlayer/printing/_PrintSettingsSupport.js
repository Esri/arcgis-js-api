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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","./HeaderFooterSettingsBuilder"],function(e,t,n,r,o,i,a){return e(null,{_checkPrintSettings:function(e){function o(){return l.getAllReportContainers().some(function(e){return e.hasHiddenContent()})}function a(){return t.mixin({commandId:e.commandId,needAutoScale:o(),pageSettings:l.getCurrentReportContainer().documentOptions,addHeader:!1,addDataSource:!1,addFooter:!1,reportTitle:void 0,reportSubtitle:void 0,allowDataDrilling:!0},e.printSettings)}var l=this,s=new n;return e.showDialog?function(){r(l._player.dataProvider.getCommands(),function(n){var d={canAutoScale:o(),currentPageSettings:l.getCurrentReportContainer().documentOptions,commandId:e.commandId,reportTitle:l._player.getReportTitle(),reportSubtitle:l._player.printConfig.subtitle,exportCommands:e.commandId===i.PRINT?null:n.filter(function(e){return e.id!==i.PRINT})},c=new l._player.printConfig.printDialogClass;c.onPrint=function(e){r(l._applyPrintSettings(t.mixin(a(),e)),s.resolve,s.reject)},c.onCancel=function(){s.resolve("cancel")},c.show(d)})}():function(){r(l._applyPrintSettings(a()),s.resolve,s.reject)}(),s.promise},_applyPrintSettings:function(e){function t(){s._pageSettings=e.pageSettings;var t=o.getPageBox(e.pageSettings);s._pageFitParams={w:t.w,h:t.h,hAlign:"center",vAlign:"top"}}function l(){return r(a.createHeaderFooterParams(s._player,s._viewModel,e),function(e){s._headerFooterParams=e})}var s=this;this._commandId=e.commandId||this._commandId,this._allowDataDrilling=e.allowDataDrilling;var d,c,u=e.commandId!==i.DYNAMIC_HTML&&e.needAutoScale;return u&&(d=this.getCurrentReportContainer().toJson()),c=this._player._showAllContainers(),this._pageSettingsRollBackFunc=function(){if(c&&c.undo(),c=null,u)return s._player.updateTemplateJson(d),s._player.refresh({rerenderContent:!0})},r(u&&function(){s.getAllReportContainers().forEach(function(e){e.resizeRowHeightToShowCellsContent()});var e=new n;return setTimeout(e.resolve,500),e.promise}(),function(){return t(),l()})}})});