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

define(["../createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","../../../_devConfig"],function(e,r,n){return{buildHTMLPageString:function(i,a,t){var o;o=a.config.createPlayerCommand.prettifyDataJson||n.createPlayerCommand.saveDataJsonAsTextFile?JSON.stringify(i,void 0,4):JSON.stringify(i),n.createPlayerCommand.saveDataJsonAsTextFile&&r.saveTextFile(o,"reportDataJson");var l=[];l.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }');var s=[];return n.createPlayerCommand.useTestBuild?(s.push({src:n.createPlayerCommand.configUrl}),s.push({"data-dojo-config":"baseUrl: '"+n.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",src:n.createPlayerCommand.mainUrl})):s.push({src:a.config.playerSourceRootUrl}),e.composeHtmlStringFromParts({reportTitle:a.getReportTitle(),links:[n.createPlayerCommand.useTestBuild?n.createPlayerCommand.esriDijitCssUrl:a.config.esriDijitCssUrl,n.createPlayerCommand.useTestBuild?n.createPlayerCommand.esriCssUrl:a.config.esriCssUrl],cssFiles:l,scripts:s.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/when",\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       when,\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl = UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       var reportDataJson = '+o+';\n       var dataProvider = new DataProviderGE();\n       dataProvider.registerCommand(PlayerCommands.PRINT);\n       if (!has("ie") && !has("trident"))\n           dataProvider.registerCommand(PlayerCommands.IMAGE);\n       var player = new ReportPlayer({\n           dataProvider: dataProvider,\n           viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n           enableDataDrilling: '+t+",\n           onError: function(e) {\n               console.log(e);\n           }\n       }).placeAt(layoutNode);\n       player.reportDataFromJson(reportDataJson);\n   });\n});"]),contentString:'<div id="layoutNode"></div>'})}}});