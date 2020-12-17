// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(t,e,n,i,o,a,r){return t(null,{_initCommands:function(){!r.isMobileDevice()&&a.modules.exportCommands?i(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(t){this._createCommandButtons(t),this.playerToolbar&&this.playerToolbar.notifyCommandButtonsAdded()}.bind(this)):this.playerToolbar.notifyCommandButtonsAdded()},_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,_createCommandButtons:function(t){var e=this;if(t&&t.length){var a,r=t.filter((function(t){return t.id!==o.PRINT||(a=t,!1)}));r.length&&(this._executeExportCallback=function(){return s(e._lastNonPrintCommandId||r[0].id)},this._createCommandButton(r[0],this._executeExportCallback)),a&&(this._executePrintCallback=function(){return s(a.id)},this._createCommandButton(a,this._executePrintCallback))}function s(t){var a=new n,r=new n;return e.onCommandSettingsShown(a.promise),e._saveVisualState(),i(e._getPrintableContainer({commandId:t,showDialog:!0}),(function(t){if(t){var n=t.getSelectedCommandId();n&&n!==o.PRINT&&(e._lastNonPrintCommandId=n),i(e._executeCommand(n,{printableContainer:t}),r.resolve,r.reject)}else i(e._applySavedVisualState(),(function(){e.onCommandCanceled(),r.resolve()}))})).always(a.resolve),r.promise}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,e){return this.playerToolbar&&this.playerToolbar.createCommandButton(t,e)},getCommandExportDialogSettings:function(){return this._getPrintDialogSettings()},executeCommand:function(t,n){n=n||{},this._saveVisualState();var a=this._viewModel.dynamicReportInfo.fieldData;!this.isPlayerOnServer||t!==o.PDF&&t!==o.IMAGE||(n.exportSettings=e.mixin({},a.reportInfo&&a.reportInfo.exportSettings,n.exportSettings));var r=this;return i(this._getPrintableContainer({commandId:t,showDialog:!1,exportSettings:n.exportSettings}),(function(i){return r._executeCommand(t,e.mixin({printableContainer:i},n))}))},_executeCommand:function(t,e){var a=this,r=this._viewModel.dynamicReportInfo.fieldData;t!==o.PDF&&t!==o.DYNAMIC_HTML||!r.runReportTaskIDs||(e.creditsTaskIDs=r.runReportTaskIDs);var s=new n;function l(){i(a.dataProvider.executeCommand&&a.dataProvider.executeCommand(t,a,e,(function(t){a.onCommandProgress(t)})),s.resolve,s.reject)}this.isPlayerOnServer?l():setTimeout(l);var u=s.promise.then((function(t){return i(a._applySavedVisualState(),(function(){return t}))}));return this.onCommandStart(u,t),this._showWaiting(u,"executeCommand"),u.always((function(){a.onCommandEnd(u)})),u},_visualStateMemo:null,_saveVisualState:function(){this._visualStateMemo=this.getVisualState()},_applySavedVisualState:function(){var t=this;return this.setVisualState(this._visualStateMemo).then((function(){t._visualStateMemo=null}))},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,e){},onCommandProgress:function(t){},onCommandEnd:function(t){}})}));