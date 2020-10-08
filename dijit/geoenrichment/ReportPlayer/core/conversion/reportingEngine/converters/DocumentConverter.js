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

define(["../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],(function(t,e){var o={buildDocumentTag:function(i){var a=i.report,n=t.pxToPtObj(a.templateJson.documentOptions),l={name:"HTMLextReport",attributes:{version:"10.1",pagesize:e.getReportingEnginePageSize(n.pagesize,n.orientation),orientation:n.orientation,left:n.left,right:n.right,top:n.top,bottom:n.bottom,style:t.composeStyleString(o.buildDocumentStyle(i)),comparisonZoom:a.defaultComparisonZoom||void 0},tags:[]};if(i.addDefaultQuery&&l.tags.push({name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers"}}]}),i.report.isGraphicReport||l.tags.push({name:"def",attributes:{align:n.align,lineSpacing:n.lineSpacing}}),a.templateJson.tooltipInfo&&(a.templateJson.tooltipInfo.table||a.templateJson.tooltipInfo.chart)){var r={name:"tooltip",tags:[]};l.tags.push(r);var s=a.templateJson.tooltipInfo.table;s&&r.tags.push({name:"table",attributes:{value:s.value||void 0,alias:s.alias||void 0,expression:s.expression||void 0,conditional:s.conditional||void 0}});var p=a.templateJson.tooltipInfo.chart;p&&r.tags.push({name:"chart",attributes:{title:p.title||void 0,value:p.value||void 0,weight:p.weight||void 0,min:p.min||void 0,max:p.max||void 0,avg:p.avg||void 0,conditional:p.conditional||void 0}})}return{documentTag:l}},buildDocumentStyle:function(e){var o=t.pxToPtObj(e.report.templateJson.documentOptions);return{fontSize:o.fontSize,fontFamily:o.fontFamily}}};return o}));