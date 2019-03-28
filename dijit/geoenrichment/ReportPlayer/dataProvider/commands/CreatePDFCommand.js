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

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./CreateHTMLCommand","../../PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","../supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi","../../_devConfig"],function(e,r,i,t,n,a,s,o,l,d,u,c){function m(){var r=new i;return e(["esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/MaskUtil","esri/dijit/geoenrichment/utils/requests/FileContent","./supportClasses/LayoutXMLBuilder"],function(e,i,t,n){p=e,f=i,h=t,_=n,r.resolve()}),r.promise}u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var p,f,h,_;return r(n,{id:a.PDF,label:u.createPDFCommandLabel,errorMessage:u.createPDFError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:o.SVG,_requestSizeLimit:9e6,execute:function(e,r,i){var n=this,a=this.inherited(arguments);return m().then(function(){var i=function(e){if(!r.skipErrorNotification)return n._handleError(e)};return t(a,function(t){if(t&&t.svgStrings){var a=_.buildLayoutXML(t);if(c.createPDFCommand.removeUnicodeChars&&(a=f.removeXMLMasks(a,"X")),r.returnLayoutXMLOnly)return a;var o={report:e.getReportTitle(),format:"pdf",f:"bin"},u=h.fromFileData("report.xml",a);return delete u.filename,o["report.xml"]=u,l.formatReport(o).then(function(a){if(!a||!a.data)return void i();r.creditsTaskID&&l.consumeCredits(r.creditsTaskID),n._stepFinished(s.FORMAT_REPORT);var o={name:e.getReportTitle()+".pdf",data:a.data};return r.skipSavingFile||d.createPDFCommand.skipSavingFile||(n._saveMultipleFiles&&t.additionalFiles&&t.additionalFiles.length?n._saveMultipleFiles(o,t.additionalFiles):p.saveAs(o.data,o.name)),o})}}).otherwise(i).always(function(e){return t(n._printableContainer&&n._printableContainer.stop(),function(){return e})})}.bind(this))},_saveMultipleFiles:null,_stepFinished:function(e,r,i){if(this._currentProgressBack){var t=0;switch(e){case s.REPLACE_MAPS:t=10;break;case s.PREPARE_DOM:t=20;break;case s.RENDER_PAGE:t=20+60*r/i;break;case s.UNSET_LAYOUT:t=90;break;case s.FORMAT_REPORT:t=100}this._currentProgressBack(t/100)}}})});