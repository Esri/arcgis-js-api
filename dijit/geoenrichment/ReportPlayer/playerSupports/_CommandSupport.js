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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","dojo/i18n!../../../../nls/jsapi"],function(n,t,o,e,i,a,r,d,m,s,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,n(null,{_lastNonPrintCommandId:null,postCreate:function(){this.inherited(arguments),this._initCommands()},_initCommands:function(){var n=this;e(this.dataProvider.getCommands&&this.dataProvider.getCommands(),function(t){n._createCommandButtons(t),t&&t.length||(r.destroy(n.commandButtonsContainer),n.commandButtonsContainer=null)})},_createCommandButtons:function(n){function t(n){var t=new o;i.onCommandSettingsShown(t.promise),e(i._getPrintableContainer({commandId:n,showDialog:!0}),function(n){if(!n)return void i.onCommandCanceled();var t=n.getSelectedCommandId();t&&t!=s.PRINT&&(i._lastNonPrintCommandId=t),i._executeCommand(t,{printableContainer:n})}).always(t.resolve)}var i=this;if(n&&n.length){var a;n=n.filter(function(n){return n.id==s.PRINT?(a=n,!1):!0}),n.length&&this._createCommandButton(n[0],function(){t(i._lastNonPrintCommandId||n[0].id)}),a&&this._createCommandButton(a,function(){t(a.id)})}},_createCommandButton:function(n,t){var o=r.create("div",{"class":"reportPlayer_commandButtonContainer dijitInline"},this.commandButtonsContainer),e=r.create("div",{"class":"reportPlayer_commandButton"},o);return a.add(e,n.id==s.PRINT?"playerPrintButton":"playerExportButton"),m.setTooltipToNode(e,n.id==s.PRINT?c.printInfographic:c.exportInfographic),i(e,"click",t),e},_executeCommand:function(n,t){function i(){e(a.dataProvider.executeCommand&&a.dataProvider.executeCommand(n,a,t),r.resolve,r.reject)}var a=this;n!==s.PDF&&n!==s.DYNAMIC_HTML||!this._viewModel.dynamicReportInfo.fieldData.runReportTaskID||(t.creditsTaskID=this._viewModel.dynamicReportInfo.fieldData.runReportTaskID);var r=new o;return setTimeout(i),this.onCommandStart(r.promise,n),this._showWaiting(),r.promise.always(function(){a._removeWaiting(),a.onCommandEnd()}),r.promise},executeCommand:function(n,o){var i=this;return e(this._getPrintableContainer({commandId:n,showDialog:!1}),function(e){return i._executeCommand(n,t.mixin({printableContainer:e},o))})},onCommandSettingsShown:function(n){},onCommandCanceled:function(){},onCommandStart:function(n,t){},onCommandEnd:function(){}})});