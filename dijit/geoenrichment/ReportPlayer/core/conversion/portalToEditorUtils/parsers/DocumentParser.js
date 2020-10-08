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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../../supportClasses/DocumentOptions"],(function(t,i,o,e){var n={parseDocument:function(n,r){var a=r.templateJson,s="HTMLextReport"===n.name?n:i.queryTopJson(n,"HTMLextReport")[0];if(s){var u=s.attributes.pagesize,p=s.attributes.orientation||"portrait";a.documentOptions.pagesize=e.tryGetStandardPageSize(u,p),a.documentOptions.orientation=p,["left","right","top","bottom"].forEach((function(t){a.documentOptions[t]=o.ptToPx(s.attributes[t]||0)})),t.mixin(a.documentOptions,o.ptToPxObj(o.parseStyleString(s.attributes.style)));var l=i.queryTopJson(n,"def")[0];l&&(l.attributes.align&&(a.documentOptions.align=l.attributes.align),l.attributes.lineSpacing&&(a.documentOptions.lineSpacing=o.ptToPx(l.attributes.lineSpacing))),s.attributes.comparisonZoom&&(r.report.defaultComparisonZoom=Number(s.attributes.comparisonZoom));var m=i.queryTopJson(n,"tooltip")[0];if(m){a.tooltipInfo={};var c=i.queryTopJson(m,"table")[0];if(c){var b=c.attributes||{};a.tooltipInfo.table={value:!!b.value,alias:!!b.alias,expression:!!b.expression,conditional:!!b.conditional}}var v=i.queryTopJson(m,"chart")[0];if(v){b=v.attributes||{};a.tooltipInfo.chart={title:!!b.title,value:!!b.value,weight:!!b.weight,min:!!b.min,max:!!b.max,avg:!!b.avg,conditional:!!b.conditional}}}r.revisionVersion=s.attributes.revisionVersion?Number(s.attributes.revisionVersion):-1,a.documentOptions.revisionVersion=r.revisionVersion}}};return n}));