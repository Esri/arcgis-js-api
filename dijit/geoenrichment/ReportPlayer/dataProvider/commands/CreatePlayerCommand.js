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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],(function(e,r,n,t,i,a,o,s){var l,c,u,m;return s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer,r(null,{id:a.DYNAMIC_HTML,label:s.createDynamicHTMLCommandLabel,errorMessage:s.exportInfographicError,execute:function(r,a){a=a||{};var s,d=this;return(s=new n,e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],(function(e,r,n,t){l=e,c=r,u=n,m=t,s.resolve()})),s.promise).then(function(){var e,n=a.printableContainer,s=n.allowDataDrilling();return i({mapImageInfos:!n.allowFallbackMaps()||a.skipFallbackMaps?null:u.collectMapsAsImages(r,{saveImagesAsDataUrl:!0}),comparisonTables:r._viewModel.loadAllStdFeatures()}).then((function(n){return t(r.reportDataToJson({loadDataDrillingData:!r.isPlayerOnServer&&s,mapImageInfos:n.mapImageInfos}),(function(n){if(!a.returnReportDataJson)return function(n){var t=m.buildHTMLPageString(n,r,s);e=t;var i=r.getReportTitle()+".html";return t&&!a.returnAsHtmlText&&d._confirmSaveFile(i,(function(){c.saveTextFile(t,i,"text/html")}))}(n);e=n}))})).then((function(){a.creditsTaskIDs&&a.creditsTaskIDs.forEach((function(e){o.consumeCredits(e)}))})).otherwise(this._handleError.bind(this)).always((function(){return t(n.stop(),(function(){return e}))}))}.bind(this))},_handleError:function(e){console.log(e),new l({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})}));