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

define(["require","dojo/_base/declare","dojo/Deferred","dojo/when","dojo/promise/all","../../PlayerCommands","../supportClasses/GEUtil","dojo/i18n!esri/nls/jsapi"],function(e,r,t,n,o,i,a,s){function l(){var r=new t;return e(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/HTMLPageBuilder"],function(e,t,n,o){u=e,c=t,d=n,m=o,r.resolve()}),r.promise}s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var u,c,d,m;return r(null,{id:i.DYNAMIC_HTML,label:s.createDynamicHTMLCommandLabel,errorMessage:s.exportInfographicError,execute:function(e,r){r=r||{};var t=this;return l().then(function(){function i(n){var o=m.buildHTMLPageString(n,e,u);s=o;var i=e.getReportTitle()+".html";return o&&!r.returnAsHtmlText&&t._confirmSaveFile(i,function(){c.saveTextFile(o,i,"text/html")})}var s,l=r.printableContainer,u=l.allowDataDrilling();return o({mapImageInfos:d.collectMapsAsImages(e,{saveImagesAsDataUrl:!0}),comparisonTables:e._viewModel.loadAllStdFeatures()}).then(function(t){return n(e.reportDataToJson({allowDataDrilling:u,mapImageInfos:t.mapImageInfos}),function(e){return r.returnReportDataJson?void(s=e):n(i(e),function(){r.creditsTaskID&&a.consumeCredits(r.creditsTaskID)})})}).otherwise(this._handleError.bind(this)).always(function(){return n(l.stop(),function(){return s})})}.bind(this))},_handleError:function(e){console.log(e),new u({title:"Error",content:this.errorMessage}).show()},_confirmSaveFile:function(e,r){return r()}})});