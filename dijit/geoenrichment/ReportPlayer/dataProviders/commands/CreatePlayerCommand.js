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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","dijit/Dialog","./createHTML/HTMLStringBuilder","esri/dijit/geoenrichment/utils/FileUtil","./supportClasses/MapToImageUtil","./supportClasses/PlayerCommands","../supportClasses/GEUtil","./_config","dojo/i18n!../../../../../nls/jsapi"],function(e,r,o,t,i,a,n,l,s,d,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{id:l.DYNAMIC_HTML,errorMessage:c.createHTMLError,execute:function(e,r){function t(){return m&&m.stop()}function l(e){u._handleError(e)}function c(e,r,o){return e&&u._confirmSaveFile(r,function(){a.saveTextFile(e,r,o)})}function p(e){var r=JSON.stringify(e),o=[];o.push('html, body, #layoutNode { padding: 0px; margin: 0px; height: 100%; overflow: hidden; font-size: 13px; background-color: #525659; font-family: "Avenir Next"; }');var t=i.composeHtmlStringFromParts({reportTitle:y,links:[d.esriDijitCssUrl,d.playerSourceRootUrl+d.playerCssUrl],cssFiles:o,scripts:[{src:d.playerSourceRootUrl+d.playerConfigUrl},{"data-dojo-config":"baseUrl: '"+d.playerSourceRootUrl+"', isDebug: 1, waitSeconds: 60",src:d.playerSourceRootUrl+d.playerMainUrl},'require(["dojo/when","esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/dataProviders/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes","esri/dijit/geoenrichment/ReportPlayer/PlayerZoomBehaviors","esri/dijit/geoenrichment/ReportPlayer/dataProviders/commands/supportClasses/PlayerCommands","esri/dijit/geoenrichment/utils/UrlUtil","dojo/domReady!"],function (when,ReportPlayer,DataProviderGE,PlayerResizeModes,PlayerZoomBehaviors,PlayerCommands,UrlUtil) {esriConfig.defaults.io.proxyUrl = UrlUtil.getVariableValue(window.location.href, "proxy") || null;var reportDataJson = '+r+';var dataProvider = new DataProviderGE();dataProvider.registerCommand(PlayerCommands.HTML, "HTML");dataProvider.registerCommand(PlayerCommands.PRINT, "Print");var player = new ReportPlayer({isSlidesView: UrlUtil.getVariableValue(window.location.href, "slidesView"),dataProvider: dataProvider,resizeMode: PlayerResizeModes.FIT_WINDOW,defaultZoomBehavior: PlayerZoomBehaviors.FIT_PAGE}).placeAt(layoutNode);when(dataProvider.reportDataFromJson(reportDataJson), function (reportData) {player.setReportData(reportData);});});'],contentString:'<div id="layoutNode"></div>'}),a=y+".html";return g.htmlString=t,c(t,a,"text/html")}var u=this,m=r&&r.printableContainer,g={htmlString:null},y=e.getReportTitle();return o(n.collectMapsAsImages(e,{saveImagesAsBase64:!0}),function(t){return o(e.dataProvider.reportDataToJson(e.getReportData(),{mapImageInfos:t}),function(t){return o(p(t),function(){r.creditsTaskID&&s.consumeCredits(e.getReportData().config.geoenrichmentUrl,r.creditsTaskID)})})},l).always(function(){return o(t(),function(){return g})})},_handleError:function(e){console.log(e),new t({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})});