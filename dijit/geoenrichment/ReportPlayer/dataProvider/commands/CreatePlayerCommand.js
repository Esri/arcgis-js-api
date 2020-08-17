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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,r,n,a,o,i,l){var s,u,c,d,p;return l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer,t(null,{id:o.DYNAMIC_HTML,label:l.createDynamicHTMLCommandLabel,errorMessage:l.exportInfographicError,execute:function(e,t){var r=(t=t||{}).printableContainer;return t.reportTitle=e.getReportTitle(),t.allowDataDrilling=r.allowDataDrilling(),t.getImageInfos=function(){return!r.allowFallbackMaps()||t.skipFallbackMaps?null:c.collectMapsAsImages(e,{saveImagesAsDataUrl:!0})},t.loadStdFeatures=function(){return e._viewModel.loadAllStdFeatures()},t.reportDataToJson=function(r){return e.reportDataToJson({loadDataDrillingData:t.allowDataDrilling,mapImageInfos:r})},this._execute(t).always((function(e){return n(r.stop(),(function(){return e}))}))},executeOnData:function(e,t,r){return(r=r||{}).reportTitle=t.reportObject.title,r.allowDataDrilling=!0,r.reportDataToJson=function(){return e.reportDataToJson(t)},this._execute(r)},_execute:function(t){t=t||{};var o=this;return(p?n(p.promise):(p=new r,e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],(function(e,t,r,n){s=e,u=t,c=r,d=n,p.resolve(),p=!0})),p.promise)).then((function(){return a({mapImageInfos:t.getImageInfos&&t.getImageInfos(),stdFeatures:t.loadStdFeatures&&t.loadStdFeatures()}).then((function(e){var r;return n(t.reportDataToJson(e.mapImageInfos),(function(e){if(!t.returnReportDataJson)return n(d.buildHTMLPageString(e,t.reportTitle,t.allowDataDrilling,t.disableExportOptions),(function(e){r=e;var n=t.fileName||t.reportTitle+".html";return e&&!t.returnAsHtmlText&&o._confirmSaveFile(n,(function(){return u.saveTextFile(e,n,"text/html",{addDownloadIntervals:t.addDownloadIntervals})}))}));r=e})).then((function(){return!t.skipCreditConsumption&&t.creditsTaskIDs&&t.creditsTaskIDs.forEach((function(e){i.consumeCredits(e)})),r}))})).otherwise(o._handleError.bind(o))}))},_handleError:function(e){console.log(e),new s({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,t){return t()}})}));
