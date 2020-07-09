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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],(function(t,e){var o={buildDocumentTag:function(i){var n=i.report,a=t.pxToPtObj(n.templateJson.documentOptions),r={name:"HTMLextReport",attributes:{version:"10.1",pagesize:e.getReportingEnginePageSize(a.pagesize,a.orientation),orientation:a.orientation,left:a.left,right:a.right,top:a.top,bottom:a.bottom,style:t.composeStyleString(o.buildDocumentStyle(i)),comparisonZoom:n.defaultComparisonZoom||void 0},tags:[]};if(i.addDefaultQuery&&r.tags.push({name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers"}}]}),i.report.isGraphicReport||r.tags.push({name:"def",attributes:{align:a.align,lineSpacing:a.lineSpacing}}),n.templateJson.tooltipInfo&&n.templateJson.tooltipInfo.table){var l=n.templateJson.tooltipInfo.table;r.tags.push({name:"tooltip",tags:[{name:"table",attributes:{value:l.value||void 0,alias:l.alias||void 0,expression:l.expression||void 0,conditional:l.conditional||void 0}}]})}return{documentTag:r}},buildDocumentStyle:function(e){var o=t.pxToPtObj(e.report.templateJson.documentOptions);return{fontSize:o.fontSize,fontFamily:o.fontFamily}}};return o}));