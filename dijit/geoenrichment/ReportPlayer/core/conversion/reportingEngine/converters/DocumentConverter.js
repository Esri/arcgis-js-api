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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../supportClasses/ReportTemplateTypes","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],function(t,e,n,i,o){var a={};return a.buildDocumentTag=function(e){var n=e.report,r=i.pxToPtObj(t.mixin({},n.templateJson.documentOptions)),l={name:"HTMLextReport",attributes:{version:"10.1",pagesize:o.getReportingEnginePageSize(r.pagesize,r.orientation),orientation:r.orientation,left:r.left,right:r.right,top:r.top,bottom:r.bottom,style:i.composeStyleString(a.buildDocumentStyle(e))},tags:[{name:"def",attributes:{align:r.align,lineSpacing:r.lineSpacing}}]};return e.addDefaultQuery&&l.tags.unshift({name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers"}}]}),{documentTag:l}},a.buildDocumentStyle=function(e){var n=i.pxToPtObj(t.mixin({},e.report.templateJson.documentOptions));return{fontSize:n.fontSize,fontFamily:n.fontFamily}},a});