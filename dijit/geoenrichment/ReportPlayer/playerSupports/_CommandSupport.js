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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","dojo/i18n!../../../../nls/jsapi"],function(t,n,e,o,i,r,a,d,m,c,s){return s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer,t(null,{_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,postCreate:function(){this.inherited(arguments),this._initCommands()},_initCommands:function(){var t=this;o(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(n){t._createCommandButtons(n)})},_createCommandButtons:function(t){function n(t){var n=new e,r=new e;return i.onCommandSettingsShown(n.promise),o(i._getPrintableContainer({commandId:t,showDialog:!0}),function(t){if(!t)return i.onCommandCanceled(),void r.resolve();var n=t.getSelectedCommandId();n&&n!==c.PRINT&&(i._lastNonPrintCommandId=n),o(i._executeCommand(n,{printableContainer:t}),r.resolve,r.reject)}).always(n.resolve),r.promise}var i=this;if(t&&t.length){var r,a=t.filter(function(t){return t.id!==c.PRINT||(r=t,!1)});a.length&&(this._executeExportCallback=function(){return n(i._lastNonPrintCommandId||a[0].id)},this._createCommandButton(a[0],this._executeExportCallback)),r&&(this._executePrintCallback=function(){return n(r.id)},this._createCommandButton(r,this._executePrintCallback))}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,n){var e=a.create("div",{class:"reportPlayer_commandButtonContainer dijitInline"},this.commandButtonsContainer),o=a.create("div",{class:"reportPlayer_commandButton"},e);return r.add(o,t.id===c.PRINT?"playerPrintButton":"playerExportButton"),m.setTooltipToNode(o,t.id===c.PRINT?s.printInfographic:s.exportInfographic),i(o,"click",n),o},_executeCommand:function(t,n){function i(){o(r.dataProvider.executeCommand&&r.dataProvider.executeCommand(t,r,n,function(t){r.onCommandProgress(t)}),a.resolve,a.reject)}var r=this;t!==c.PDF&&t!==c.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskID||(n.creditsTaskID=this._viewModel.dynamicReportInfo.fieldData.runReportTaskID);var a=new e;return setTimeout(i),this.onCommandStart(a.promise,t),this._showWaiting(a.promise),a.promise.always(function(){r.onCommandEnd()}),a.promise},executeCommand:function(t,e){var i=this;return o(this._getPrintableContainer({commandId:t,showDialog:!1,printSettings:e&&e.printSettings}),function(o){return i._executeCommand(t,n.mixin({printableContainer:o},e))})},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,n){},onCommandProgress:function(t){},onCommandEnd:function(){}})});