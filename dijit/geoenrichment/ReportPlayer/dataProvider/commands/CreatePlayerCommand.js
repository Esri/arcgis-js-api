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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],function(e,r,n,t,i,a,o,s){function l(){var r=new n;return e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],function(e,n,t,i){c=e,u=n,m=t,d=i,r.resolve()}),r.promise}s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var c,u,m,d;return r(null,{id:a.DYNAMIC_HTML,label:s.createDynamicHTMLCommandLabel,errorMessage:s.exportInfographicError,execute:function(e,r){r=r||{};var n=this;return l().then(function(){var a,s=r.printableContainer,l=s.allowDataDrilling();return i({mapImageInfos:!s.allowFallbackMaps()||r.skipFallbackMaps?null:m.collectMapsAsImages(e,{saveImagesAsDataUrl:!0}),comparisonTables:e._viewModel.loadAllStdFeatures()}).then(function(i){return t(e.reportDataToJson({loadDataDrillingData:!e.isPlayerOnServer&&l,mapImageInfos:i.mapImageInfos}),function(t){return r.returnReportDataJson?void(a=t):function(t){var i=d.buildHTMLPageString(t,e,l);a=i;var o=e.getReportTitle()+".html";return i&&!r.returnAsHtmlText&&n._confirmSaveFile(o,function(){u.saveTextFile(i,o,"text/html")})}(t)})}).then(function(){r.creditsTaskIDs&&r.creditsTaskIDs.forEach(function(e){o.consumeCredits(e)})}).otherwise(this._handleError.bind(this)).always(function(){return t(s.stop(),function(){return a})})}.bind(this))},_handleError:function(e){console.log(e),new c({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})});