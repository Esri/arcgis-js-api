// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../PlayerCommands","../supportClasses/GEUtil","../../core/supportClasses/map/WebMapsUtil","../../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,t,r,a,o,n,l,i,s,p,c){var u,m,d,g,f;return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,t(null,{id:n.DYNAMIC_HTML,label:c.createDynamicHTMLCommandLabel,errorMessage:c.exportInfographicError,execute:function(e,t){var r=(t=t||{}).printableContainer;return t.reportTitle=e.getReportTitle(),t.allowDataDrilling=r.allowDataDrilling(),t.getImageInfos=function(){return!r.allowFallbackMaps()||t.skipFallbackMaps?null:d.collectMapsAsImages(e,{saveImagesAsDataUrl:!0})},t.loadStdFeatures=function(){return e._viewModel.loadAllStdFeatures()},t.reportDataToJson=function(r,a){return e.reportDataToJson({loadDataDrillingData:t.allowDataDrilling,mapImageInfos:r,loadedMapPortalItems:a})},t.templateJson=e.getReportData().templateJson,this._execute(t).always((function(e){return a(r.stop(),(function(){return e}))}))},executeOnData:function(e,t,r){return(r=r||{}).reportTitle=t.reportObject.title,r.allowDataDrilling=!0,r.reportDataToJson=function(r,a){return e.reportDataToJson(t,{loadedMapPortalItems:a})},r.templateJson=t.templateJson,this._execute(r)},_execute:function(t){t=t||{};var n=this;return(f?a(f.promise):(f=new r,e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],(function(e,t,r,a){u=e,m=t,d=r,g=a,f.resolve()})),f.promise)).then((function(){return o({mapImageInfos:t.getImageInfos&&t.getImageInfos(),stdFeatures:t.loadStdFeatures&&t.loadStdFeatures(),loadedMapPortalItems:p.createPlayerCommand.loadMapPortalItems&&i.loadItems(s.collectMapItemIdsAndNames(t.templateJson))}).then((function(e){var r;return a(t.reportDataToJson(e.mapImageInfos,e.loadedMapPortalItems),(function(e){if(e.config.portalUrl="https://www.arcgis.com",delete e.config.geometryServiceUrl,delete e.config.printMapTaskUrl,!t.returnReportDataJson)return a(g.buildHTMLPageString(e,t.reportTitle,t.allowDataDrilling,t.disableExportOptions),(function(e){r=e;var a=t.fileName||t.reportTitle+".html";return e&&!t.returnAsHtmlText&&n._confirmSaveFile(a,(function(){return m.saveTextFile(e,a,"text/html",{addDownloadIntervals:t.addDownloadIntervals})}))}));r=e})).then((function(){return!t.skipCreditConsumption&&!p.createPlayerCommand.skipCreditConsumption&&t.creditsTaskIDs&&t.creditsTaskIDs.forEach((function(e){l.consumeCredits(e)})),r}))})).otherwise(n._handleError.bind(n))}))},_handleError:function(e){console.log(e),new u({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,t){return t()}})}));