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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands"],function(t,e,n,o,a){return t(null,{_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,_visualStateMemo:null,_initCommands:function(){if(this._viewModel.isMobileDevice())return void this.playerToolbar.notifyCommandButtonsAdded();o(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(t){this._createCommandButtons(t),this.playerToolbar.notifyCommandButtonsAdded()}.bind(this))},_createCommandButtons:function(t){function e(t){var e=new n,r=new n;return i.onCommandSettingsShown(e.promise),i._visualStateMemo=i.getCurrentReportContainer().getVisualState&&i.getCurrentReportContainer().getVisualState(),o(i._getPrintableContainer({commandId:t,showDialog:!0}),function(t){if(!t)return i.onCommandCanceled(),void r.resolve();var e=t.getSelectedCommandId();e&&e!==a.PRINT&&(i._lastNonPrintCommandId=e),o(i._executeCommand(e,{printableContainer:t}),r.resolve,r.reject)}).always(e.resolve),r.promise}var i=this;if(t&&t.length){var r,u=t.filter(function(t){return t.id!==a.PRINT||(r=t,!1)});u.length&&(this._executeExportCallback=function(){return e(i._lastNonPrintCommandId||u[0].id)},this._createCommandButton(u[0],this._executeExportCallback)),r&&(this._executePrintCallback=function(){return e(r.id)},this._createCommandButton(r,this._executePrintCallback))}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,e){return this.playerToolbar.createCommandButton(t,e)},_executeCommand:function(t,e){function i(){o(r.dataProvider.executeCommand&&r.dataProvider.executeCommand(t,r,e,function(t){r.onCommandProgress(t)}),u.resolve,u.reject)}var r=this;t!==a.PDF&&t!==a.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskID||(e.creditsTaskID=this._viewModel.dynamicReportInfo.fieldData.runReportTaskID);var u=new n;setTimeout(i);var d=u.promise.then(function(t){return o(r.isContentLoading(),function(){return o(r._visualStateMemo&&r.getCurrentReportContainer().setVisualState(r._visualStateMemo),function(){return t})})});return this.onCommandStart(d,t),this._showWaiting(d),d.always(function(){r.onCommandEnd(d)}),d},executeCommand:function(t,n){var a=this;return o(this._getPrintableContainer({commandId:t,showDialog:!1,printSettings:n&&n.printSettings}),function(o){return a._executeCommand(t,e.mixin({printableContainer:o},n))})},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,e){},onCommandProgress:function(t){},onCommandEnd:function(t){}})});