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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","dojo/i18n!../../../../nls/jsapi"],function(t,e,n,o,i,r,a,d,m,s,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,t(null,{_lastNonPrintCommandId:null,_executeExportCallback:null,_executePrintCallback:null,postCreate:function(){this.inherited(arguments),this._initCommands()},_initCommands:function(){var t=this;o(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(e){t._createCommandButtons(e)})},_createCommandButtons:function(t){function e(t){var e=new n,r=new n;return i.onCommandSettingsShown(e.promise),o(i._getPrintableContainer({commandId:t,showDialog:!0}),function(t){if(!t)return i.onCommandCanceled(),void r.resolve();var e=t.getSelectedCommandId();e&&e!==s.PRINT&&(i._lastNonPrintCommandId=e),o(i._executeCommand(e,{printableContainer:t}),r.resolve,r.reject)}).always(e.resolve),r.promise}var i=this;if(t&&t.length){var r,a=t.filter(function(t){return t.id===s.PRINT?(r=t,!1):!0});a.length&&(this._executeExportCallback=function(){return e(i._lastNonPrintCommandId||a[0].id)},this._createCommandButton(a[0],this._executeExportCallback)),r&&(this._executePrintCallback=function(){return e(r.id)},this._createCommandButton(r,this._executePrintCallback))}},executeExport:function(){return this._executeExportCallback&&this._executeExportCallback()},executePrint:function(){return this._executePrintCallback&&this._executePrintCallback()},_createCommandButton:function(t,e){var n=a.create("div",{"class":"reportPlayer_commandButtonContainer dijitInline"},this.commandButtonsContainer),o=a.create("div",{"class":"reportPlayer_commandButton"},n);return r.add(o,t.id===s.PRINT?"playerPrintButton":"playerExportButton"),m.setTooltipToNode(o,t.id===s.PRINT?c.printInfographic:c.exportInfographic),i(o,"click",e),o},_executeCommand:function(t,e){function i(){o(r.dataProvider.executeCommand&&r.dataProvider.executeCommand(t,r,e,function(t){r.onCommandProgress(t)}),a.resolve,a.reject)}var r=this;t!==s.PDF&&t!==s.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskID||(e.creditsTaskID=this._viewModel.dynamicReportInfo.fieldData.runReportTaskID);var a=new n;return setTimeout(i),this.onCommandStart(a.promise,t),this._showWaiting(a.promise),a.promise.always(function(){r.onCommandEnd()}),a.promise},executeCommand:function(t,n){var i=this;return o(this._getPrintableContainer({commandId:t,showDialog:!1,printSettings:n&&n.printSettings}),function(o){return i._executeCommand(t,e.mixin({printableContainer:o},n))})},onCommandSettingsShown:function(t){},onCommandCanceled:function(){},onCommandStart:function(t,e){},onCommandProgress:function(t){},onCommandEnd:function(){}})});