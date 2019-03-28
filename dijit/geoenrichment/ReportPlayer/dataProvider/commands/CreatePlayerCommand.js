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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],function(e,r,t,n,i,o,a,s){function l(){var r=new t;return e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/HTMLPageBuilder"],function(e,t,n,i){u=e,c=t,m=n,d=i,r.resolve()}),r.promise}s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var u,c,m,d;return r(null,{id:o.DYNAMIC_HTML,label:s.createDynamicHTMLCommandLabel,errorMessage:s.exportInfographicError,execute:function(e,r){r=r||{};var t=this;return l().then(function(){var o,s=r.printableContainer,l=s.allowDataDrilling();return i({mapImageInfos:m.collectMapsAsImages(e,{saveImagesAsDataUrl:!0}),comparisonTables:e._viewModel.loadAllStdFeatures()}).then(function(i){return n(e.reportDataToJson({allowDataDrilling:l,mapImageInfos:i.mapImageInfos}),function(i){return r.returnReportDataJson?void(o=i):n(function(n){var i=d.buildHTMLPageString(n,e,l);o=i;var a=e.getReportTitle()+".html";return i&&!r.returnAsHtmlText&&t._confirmSaveFile(a,function(){c.saveTextFile(i,a,"text/html")})}(i),function(){r.creditsTaskID&&a.consumeCredits(r.creditsTaskID)})})}).otherwise(this._handleError.bind(this)).always(function(){return n(s.stop(),function(){return o})})}.bind(this))},_handleError:function(e){console.log(e),new u({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})});