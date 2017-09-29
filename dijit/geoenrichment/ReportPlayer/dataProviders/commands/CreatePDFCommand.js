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

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/utils/requests/FileContent","./CreateHTMLCommand","./supportClasses/PlayerCommands","../supportClasses/GEUtil","esri/dijit/geoenrichment/ReportPlayer/core/conversion/reportingEngine/converters/DocumentConverter","esri/dijit/geoenrichment/ReportPlayer/core/conversion/ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(e,t,r,n,i,o,s,a,l,c,u,g,p){var m={buildLayoutXML:function(e){var r=c.buildDocumentTag({report:{templateJson:{documentOptions:t.mixin({},e.documentOptions,{left:0,right:0,top:0,bottom:0})}}}),n=g.getPageBox(e.documentOptions),o=u.pxToPt(n.w),s=u.pxToPt(n.h),a="__svgString__";e.svgStrings.forEach(function(t,n){r.tags.push({name:"section",attributes:{type:p.DETAILS},tags:[{name:"img",attributes:{left:0,top:0,width:o,height:s},tags:[{text:a+n+a}]}]}),n<e.svgStrings.length-1&&r.tags.push({name:"pageBreak"})});var l=i.parseJson(r);return e.svgStrings.forEach(function(e,t){l=l.replace(a+t+a,e)}),l}};return e(s,{id:a.PDF,_saveFiles:!1,_stopPrintableContainer:!1,_mode:"svg",_requestSizeLimit:9e6,execute:function(e,t){var i=this,s=function(e){return i._handleError(e)};return r(this.inherited(arguments),function(r){if(r.svgStrings){var i=m.buildLayoutXML(r);if(t.returnLayoutXMLOnly)return i;var a={report:e.getReportTitle(),format:"pdf",f:"bin"},c=o.fromFileData("report.xml",i);return delete c.filename,a["report.xml"]=c,l.formatReport(e.getReportData().config.geoenrichmentUrl,a).then(function(r){return r&&r.data?(t.creditsTaskID&&l.consumeCredits(e.getReportData().config.geoenrichmentUrl,t.creditsTaskID),void n.saveAs(r.data,e.getReportTitle()+".pdf")):void s()})}},s).always(function(){return i._printableContainer&&i._printableContainer.stop()})},_handleError:function(e){console.log(e),alert("Can't generate an PDF. Please try again later.")}})});