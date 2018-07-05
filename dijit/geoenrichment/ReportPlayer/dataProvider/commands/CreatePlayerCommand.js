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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","dijit/Dialog","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi","../../_devConfig"],function(e,r,n,a,i,t,o,l,s,d,c){d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer;var m={buildHTMLPageString:function(e,r,n){var a;a=r.config.createPlayerCommand.prettifyDataJson||c.createPlayerCommand.saveDataJsonAsTextFile?JSON.stringify(e,void 0,4):JSON.stringify(e),c.createPlayerCommand.saveDataJsonAsTextFile&&t.saveTextFile(a,"reportDataJson");var o=[];o.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }');var l=[];return c.createPlayerCommand.useTestBuild?(l.push({src:c.createPlayerCommand.configUrl}),l.push({"data-dojo-config":"baseUrl: '"+c.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",src:c.createPlayerCommand.mainUrl})):l.push({src:r.config.playerSourceRootUrl}),i.composeHtmlStringFromParts({reportTitle:r.getReportTitle(),links:[c.createPlayerCommand.useTestBuild?c.createPlayerCommand.esriDijitCssUrl:r.config.esriDijitCssUrl,c.createPlayerCommand.useTestBuild?c.createPlayerCommand.esriCssUrl:r.config.esriCssUrl],cssFiles:o,scripts:l.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/when",\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       when,\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl = UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       var reportDataJson = '+a+';\n       var dataProvider = new DataProviderGE();\n       dataProvider.registerCommand(PlayerCommands.PRINT);\n       if (!has("ie") && !has("trident"))\n           dataProvider.registerCommand(PlayerCommands.IMAGE);\n       var player = new ReportPlayer({\n           dataProvider: dataProvider,\n           viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n           enableDataDrilling: '+n+",\n           onError: function(e) {\n               console.log(e);\n           }\n       }).placeAt(layoutNode);\n       player.reportDataFromJson(reportDataJson);\n   });\n});"]),contentString:'<div id="layoutNode"></div>'})}};return e(null,{id:l.DYNAMIC_HTML,label:d.createDynamicHTMLCommandLabel,errorMessage:d.exportInfographicError,execute:function(e,r){function a(n){var a=m.buildHTMLPageString(n,e,c);i=a;var o=e.getReportTitle()+".html";return a&&!r.returnAsHtmlText&&l._confirmSaveFile(o,function(){t.saveTextFile(a,o,"text/html")})}r=r||{};var i,l=this,d=r.printableContainer,c=d.allowDataDrilling();return n(o.collectMapsAsImages(e,{saveImagesAsDataUrl:!0}),function(t){return n(e.reportDataToJson({allowDataDrilling:c,mapImageInfos:t}),function(t){return r.returnReportDataJson?void(i=t):n(a(t),function(){r.creditsTaskID&&s.consumeCredits(e.getReportData().config.geoenrichmentUrl,r.creditsTaskID)})})}).otherwise(this._handleError.bind(this)).always(function(){return n(d.stop(),function(){return i})})},_handleError:function(e){console.log(e),new a({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})});