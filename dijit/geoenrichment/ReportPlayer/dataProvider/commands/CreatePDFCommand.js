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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/MaskUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/utils/requests/FileContent","./CreateHTMLCommand","../../PlayerCommands","./supportClasses/ProgressSteps","./createHTML/CommandMode","../supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/core/conversion/reportingEngine/converters/DocumentConverter","esri/dijit/geoenrichment/ReportPlayer/core/conversion/ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/i18n!../../../../../nls/jsapi","../../_devConfig"],function(e,t,r,i,n,o,s,a,c,g,u,l,d,p,m,_,h,f){h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;var v={buildLayoutXML:function(e){var r=d.buildDocumentTag({addDefaultQuery:!0,report:{templateJson:{documentOptions:t.mixin({},e.documentOptions,{left:0,right:0,top:0,bottom:0})}}}).documentTag,i=m.getPageBox(e.documentOptions),n=p.pxToPt(i.w),s=p.pxToPt(i.h);e.svgStrings.forEach(function(t,i){r.tags.push({name:"section",attributes:{type:_.DETAILS},tags:[{name:"img",attributes:{left:0,top:0,width:n,height:s},tags:[{text:"__svgString__"+i+"__svgString__"}]}]}),i<e.svgStrings.length-1&&r.tags.push({name:"pageBreak"})});var a=o.parseJson(r);return e.svgStrings.forEach(function(e,t){a=a.replace("__svgString__"+t+"__svgString__",e)}),a}};return e(a,{id:c.PDF,label:h.createPDFCommandLabel,errorMessage:h.createPDFError,_saveFiles:!1,_stopPrintableContainer:!1,_mode:u.SVG,_requestSizeLimit:9e6,execute:function(e,t,o){var a=this,c=function(e){if(!t.skipErrorNotification)return a._handleError(e)};return r(this.inherited(arguments),function(r){if(r.svgStrings){var o=v.buildLayoutXML(r);if(f.createPDFCommand.removeUnicodeChars&&(o=n.removeXMLMasks(o,"X")),t.returnLayoutXMLOnly)return o;var u={report:e.getReportTitle(),format:"pdf",f:"bin"},d=s.fromFileData("report.xml",o);return delete d.filename,u["report.xml"]=d,l.formatReport(e.getReportData().config.geoenrichmentUrl,u).then(function(r){if(!r||!r.data)return void c();t.creditsTaskID&&l.consumeCredits(e.getReportData().config.geoenrichmentUrl,t.creditsTaskID),a._stepFinished(g.FORMAT_REPORT);var n=e.getReportTitle()+".pdf";return t.skipSavingFile||i.saveAs(r.data,n),{name:n,data:r.data}})}}).otherwise(c).always(function(e){return r(a._printableContainer&&a._printableContainer.stop(),function(){return e})})},_stepFinished:function(e,t,r){if(this._currentProgressBack){var i=0;switch(e){case g.REPLACE_MAPS:i=10;break;case g.PREPARE_DOM:i=20;break;case g.RENDER_PAGE:i=20+60*t/r;break;case g.UNSET_LAYOUT:i=90;break;case g.FORMAT_REPORT:i=100}this._currentProgressBack(i/100)}}})});