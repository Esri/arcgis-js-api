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

define(["dojo/_base/lang","../../../supportClasses/templateJsonUtils/FieldInfoNameUtil","../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],function(t,e,n,i){var o={};return o.buildDocumentTag=function(a){function r(t){var n=[{name:"join",attributes:{table:e.DATA_COLLECTIONS_CALCULATOR_NAME,key:"AREA_ID",to:"AREA_ID"}}];return t.concat(n)}var l=a.report,s=n.pxToPtObj(t.mixin({},l.templateJson.documentOptions)),m={name:"HTMLextReport",attributes:{version:"10.1",pagesize:i.getReportingEnginePageSize(s.pagesize,s.orientation),orientation:s.orientation,left:s.left,right:s.right,top:s.top,bottom:s.bottom,style:n.composeStyleString(o.buildDocumentStyle(a))},tags:[{name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers",groupBy:"esriReportTemplateMultiColumn"==l.type?"headers.STORE_ID":void 0},tags:r([{name:"sort",tags:[{name:"field",attributes:{name:"headers.AREA_ID",order:"Ascending"}}]}])}]},{name:"def",attributes:{align:s.align,lineSpacing:s.lineSpacing}}]};return m},o.buildDocumentStyle=function(e){var i=n.pxToPtObj(t.mixin({},e.report.templateJson.documentOptions));return{fontSize:i.fontSize,fontFamily:i.fontFamily}},o});