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

define(["dojo/_base/lang","../../../supportClasses/ReportTemplateTypes","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],function(e,t,n,i,o){var a={};return a.buildDocumentTag=function(r){function s(e){return l=a.addCalculatorToQuery(e,n.DATA_COLLECTIONS_CALCULATOR_NAME)}var l,u=r.report,p=i.pxToPtObj(e.mixin({},u.templateJson.documentOptions)),m={name:"HTMLextReport",attributes:{version:"10.1",pagesize:o.getReportingEnginePageSize(p.pagesize,p.orientation),orientation:p.orientation,left:p.left,right:p.right,top:p.top,bottom:p.bottom,style:i.composeStyleString(a.buildDocumentStyle(r))},tags:[{name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers",groupBy:u.type===t.MULTICOLUMN?"headers.STORE_ID":void 0},tags:s([{name:"sort",tags:[{name:"field",attributes:{name:"headers.AREA_ID",order:"Ascending"}}]}])}]},{name:"def",attributes:{align:p.align,lineSpacing:p.lineSpacing}}]};return{documentTag:m,queryJoinArray:l}},a.addCalculatorToQuery=function(e,t){return e.push({name:"join",attributes:{table:t,key:"AREA_ID",to:"AREA_ID"}}),e},a.buildDocumentStyle=function(t){var n=i.pxToPtObj(e.mixin({},t.report.templateJson.documentOptions));return{fontSize:n.fontSize,fontFamily:n.fontFamily}},a});