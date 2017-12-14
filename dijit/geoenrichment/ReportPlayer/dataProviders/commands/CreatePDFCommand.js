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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/MaskUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/utils/requests/FileContent","./CreateHTMLCommand","./supportClasses/PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","../supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/core/conversion/reportingEngine/converters/DocumentConverter","esri/dijit/geoenrichment/ReportPlayer/core/conversion/ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/i18n!../../../../../nls/jsapi","../../_devConfig"],function(e,t,r,i,n,o,s,a,c,u,l,p,g,d,m,h,f,v){f=f.geoenrichment.dijit.ReportPlayer.ReportPlayer;var P={buildLayoutXML:function(e){var r=g.buildDocumentTag({report:{templateJson:{documentOptions:t.mixin({},e.documentOptions,{left:0,right:0,top:0,bottom:0})}}}).documentTag,i=m.getPageBox(e.documentOptions),n=d.pxToPt(i.w),s=d.pxToPt(i.h),a="__svgString__";e.svgStrings.forEach(function(t,i){r.tags.push({name:"section",attributes:{type:h.DETAILS},tags:[{name:"img",attributes:{left:0,top:0,width:n,height:s},tags:[{text:a+i+a}]}]}),i<e.svgStrings.length-1&&r.tags.push({name:"pageBreak"})});var c=o.parseJson(r);return e.svgStrings.forEach(function(e,t){c=c.replace(a+t+a,e)}),c}};return e(a,{id:c.PDF,label:f.createPDFCommandLabel,errorMessage:f.createPDFError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:l.SVG,_requestSizeLimit:9e6,execute:function(e,t,o){var a=this,c=function(e){return t.skipErrorNotification?void 0:a._handleError(e)};return r(this.inherited(arguments),function(r){if(r.svgStrings){var o=P.buildLayoutXML(r);if(v.createPDFCommand.removeUnicodeChars&&(o=n.removeXMLMasks(o,"X")),t.returnLayoutXMLOnly)return o;var l={report:e.getReportTitle(),format:"pdf",f:"bin"},g=s.fromFileData("report.xml",o);return delete g.filename,l["report.xml"]=g,p.formatReport(e.getReportData().config.geoenrichmentUrl,l).then(function(r){if(!r||!r.data)return void c();t.creditsTaskID&&p.consumeCredits(e.getReportData().config.geoenrichmentUrl,t.creditsTaskID),a._stepFinished(u.FORMAT_REPORT);var n=e.getReportTitle()+".pdf";return t.skipSavingFile||i.saveAs(r.data,n),{name:n,data:r.data}})}}).otherwise(c).always(function(e){return r(a._printableContainer&&a._printableContainer.stop(),function(){return e})})},_stepFinished:function(e,t,r){if(this._currentProgressBack){var i=0;switch(e){case u.REPLACE_MAPS:i=10;break;case u.PREPARE_DOM:i=20;break;case u.RENDER_PAGE:i=20+60*t/r;break;case u.UNSET_LAYOUT:i=90;break;case u.FORMAT_REPORT:i=100}this._currentProgressBack(i/100)}}})});