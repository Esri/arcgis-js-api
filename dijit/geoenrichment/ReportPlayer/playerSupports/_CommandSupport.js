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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(t,e,n,i,a,o,r){return t(null,{_initCommands:function(){!r.isMobileDevice()&&o.modules.exportCommands?i(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(t){this._createCommandButtons(t),this.playerToolbar.notifyCommandButtonsAdded()}.bind(this)):this.playerToolbar.notifyCommandButtonsAdded()},_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,_createCommandButtons:function(t){var e=this;if(t&&t.length){var o,r=t.filter((function(t){return t.id!==a.PRINT||(o=t,!1)}));r.length&&(this._executeExportCallback=function(){return s(e._lastNonPrintCommandId||r[0].id)},this._createCommandButton(r[0],this._executeExportCallback)),o&&(this._executePrintCallback=function(){return s(o.id)},this._createCommandButton(o,this._executePrintCallback))}function s(t){var o=new n,r=new n;return e.onCommandSettingsShown(o.promise),e._saveVisualState(),i(e._getPrintableContainer({commandId:t,showDialog:!0}),(function(t){if(t){var n=t.getSelectedCommandId();n&&n!==a.PRINT&&(e._lastNonPrintCommandId=n),i(e._executeCommand(n,{printableContainer:t}),r.resolve,r.reject)}else i(e._applySavedVisualState(),(function(){e.onCommandCanceled(),r.resolve()}))})).always(o.resolve),r.promise}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,e){return this.playerToolbar.createCommandButton(t,e)},getCommandExportDialogSettings:function(){return this._getPrintDialogSettings()},executeCommand:function(t,n){this._saveVisualState();var a=this;return i(this._getPrintableContainer({commandId:t,showDialog:!1,exportSettings:n&&n.exportSettings}),(function(i){return a._executeCommand(t,e.mixin({printableContainer:i},n))}))},_executeCommand:function(t,e){var o=this;t!==a.PDF&&t!==a.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskIDs||(e.creditsTaskIDs=this._viewModel.dynamicReportInfo.fieldData.runReportTaskIDs);var r=new n;setTimeout((function(){i(o.dataProvider.executeCommand&&o.dataProvider.executeCommand(t,o,e,(function(t){o.onCommandProgress(t)})),r.resolve,r.reject)}));var s=r.promise.then((function(t){return i(o._applySavedVisualState(),(function(){return t}))}));return this.onCommandStart(s,t),this._showWaiting(s,"executeCommand"),s.always((function(){o.onCommandEnd(s)})),s},_visualStateMemo:null,_saveVisualState:function(){this._visualStateMemo=this.getVisualState()},_applySavedVisualState:function(){var t=this;return this.setVisualState(this._visualStateMemo).then((function(){t._visualStateMemo=null}))},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,e){},onCommandProgress:function(t){},onCommandEnd:function(t){}})}));