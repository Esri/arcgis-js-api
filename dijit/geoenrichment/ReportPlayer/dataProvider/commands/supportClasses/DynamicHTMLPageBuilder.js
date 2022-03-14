// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/JsonCompressor","esri/dijit/geoenrichment/ReportPlayer/config","../createHTML/HTMLPageBuilder","./FeatureServiceDataLoader","../../../_devConfig"],(function(e,r,i,a,n,t,o){return{buildHTMLPageString:function(s,l,d,c){var m;m=a.createPlayerCommand.prettifyDataJson||o.createPlayerCommand.saveDataJsonAsTextFile?JSON.stringify(s,void 0,4):JSON.stringify(a.createPlayerCommand.compressData?i.compress(s,(function(e){return e.replace(/dataCollectionsCalculator/g,"_dcc")})):s),o.createPlayerCommand.saveDataJsonAsTextFile&&r.saveTextFile(m,"reportDataJson");var u=[];return u.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; font-family: "Avenir Next"; }'),e(this._prepareScripts(),(function(e){return n.composeHtmlStringFromParts({reportTitle:l,links:[o.createPlayerCommand.useTestBuild?o.createPlayerCommand.esriDijitCssUrl:a.esriDijitCssUrl,o.createPlayerCommand.useTestBuild?o.createPlayerCommand.esriCssUrl:a.esriCssUrl],cssFiles:u,scripts:e.concat(['require(["require", "esri/dijit/geoenrichment/nlsFix"],\nfunction (relativeRequire, nlsFix) {\n   nlsFix.load(null, relativeRequire);\n   require([\n       "dojo/sniff",\n       "esri/dijit/geoenrichment/ReportPlayer/ReportPlayer",\n       "esri/dijit/geoenrichment/ReportPlayer/DataProviderGE",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",\n       "esri/dijit/geoenrichment/ReportPlayer/PlayerCommands",\n       "esri/dijit/geoenrichment/utils/UrlUtil",\n       "dojo/domReady!"\n   ],\n   function (\n       has,\n       ReportPlayer,\n       DataProviderGE,\n       PlayerViewModes,\n       PlayerCommands,\n       UrlUtil\n   ) {\n       esriConfig.defaults.io.proxyUrl = UrlUtil.getVariableValue(window.location.href, "proxy") || null;\n       '+(a.createPlayerCommand.compressData?i.getDecompressMinified():"function decompress(d) { return d; };")+"\n       var reportDataJson = decompress("+m+");\n       "+t.getMinifiedFunction()+"\n       enrichReportDataWithFeatureServiceData(reportDataJson, function () {\n           var dataProvider = new DataProviderGE();\n"+(c?"":'           dataProvider.registerCommand(PlayerCommands.PRINT);\n           if (!has("ie") && !has("trident"))\n               dataProvider.registerCommand(PlayerCommands.IMAGE);\n')+'           var player = new ReportPlayer({\n               dataProvider: dataProvider,\n               viewMode: UrlUtil.getVariableValue(window.location.href, "viewMode") || PlayerViewModes.FULL_PAGES,\n               theme: UrlUtil.getVariableValue(window.location.href, "theme") || null,\n               enableDataDrilling: '+d+",\n               onError: function(e) {\n                   console.log(e);\n               }\n           }).placeAt(layoutNode);\n           player.reportDataFromJson(reportDataJson);\n       });\n   });\n});"]),contentString:'<div id="layoutNode"></div>'})}))},_prepareScripts:function(){function e(e){switch(a.env){case"dev":return e.replace("js.arcgis.com","jsdev.arcgis.com");case"qa":return e.replace("js.arcgis.com","jsqa.arcgis.com");default:return e}}a.playerSourceRootUrl=e(a.playerSourceRootUrl),a.esriDijitCssUrl=e(a.esriDijitCssUrl),a.esriCssUrl=e(a.esriCssUrl);var r=[];return o.createPlayerCommand.useTestBuild?(r.push({src:o.createPlayerCommand.configUrl}),r.push({"data-dojo-config":"baseUrl: '"+o.createPlayerCommand.baseUrl+"', isDebug: 1, waitSeconds: 60",src:o.createPlayerCommand.mainUrl})):(a.configScriptText&&r.push(a.configScriptText),r.push({src:a.playerSourceRootUrl})),r}}}));