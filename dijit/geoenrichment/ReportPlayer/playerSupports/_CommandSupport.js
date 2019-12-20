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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/utils/DeviceUtil"],function(t,e,n,i,o,a,r){return t(null,{_initCommands:function(){if(r.isMobileDevice()||!a.modules.exportCommands)return void this.playerToolbar.notifyCommandButtonsAdded();i(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(t){this._createCommandButtons(t),this.playerToolbar.notifyCommandButtonsAdded()}.bind(this))},_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,_createCommandButtons:function(t){function e(t){var e=new n,r=new n;return a.onCommandSettingsShown(e.promise),a._saveVisualState(),i(a._getPrintableContainer({commandId:t,showDialog:!0}),function(t){if(!t)return void i(a._applySavedVisualState(),function(){a.onCommandCanceled(),r.resolve()});var e=t.getSelectedCommandId();e&&e!==o.PRINT&&(a._lastNonPrintCommandId=e),i(a._executeCommand(e,{printableContainer:t}),r.resolve,r.reject)}).always(e.resolve),r.promise}var a=this;if(t&&t.length){var r,s=t.filter(function(t){return t.id!==o.PRINT||(r=t,!1)});s.length&&(this._executeExportCallback=function(){return e(a._lastNonPrintCommandId||s[0].id)},this._createCommandButton(s[0],this._executeExportCallback)),r&&(this._executePrintCallback=function(){return e(r.id)},this._createCommandButton(r,this._executePrintCallback))}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,e){return this.playerToolbar.createCommandButton(t,e)},getCommandExportDialogSettings:function(){return this._getPrintDialogSettings()},executeCommand:function(t,n){this._saveVisualState();var o=this;return i(this._getPrintableContainer({commandId:t,showDialog:!1,exportSettings:n&&n.exportSettings}),function(i){return o._executeCommand(t,e.mixin({printableContainer:i},n))})},_executeCommand:function(t,e){function a(){i(r.dataProvider.executeCommand&&r.dataProvider.executeCommand(t,r,e,function(t){r.onCommandProgress(t)}),s.resolve,s.reject)}var r=this;t!==o.PDF&&t!==o.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskIDs||(e.creditsTaskIDs=this._viewModel.dynamicReportInfo.fieldData.runReportTaskIDs);var s=new n;setTimeout(a);var u=s.promise.then(function(t){return i(r._applySavedVisualState(),function(){return t})});return this.onCommandStart(u,t),this._showWaiting(u),u.always(function(){r.onCommandEnd(u)}),u},_visualStateMemo:null,_saveVisualState:function(){this._visualStateMemo=this.getVisualState()},_applySavedVisualState:function(){var t=this;return this.setVisualState(this._visualStateMemo).then(function(){t._visualStateMemo=null})},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,e){},onCommandProgress:function(t){},onCommandEnd:function(t){}})});