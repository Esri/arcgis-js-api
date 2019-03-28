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

define(["dojo/_base/lang","../../ConversionUtil","../ReportingEnginePageSizeCompatibilityUtil"],function(t,e,n){var i={};return i.buildDocumentTag=function(o){var a=o.report,r=e.pxToPtObj(t.mixin({},a.templateJson.documentOptions)),u={name:"HTMLextReport",attributes:{version:"10.1",pagesize:n.getReportingEnginePageSize(r.pagesize,r.orientation),orientation:r.orientation,left:r.left,right:r.right,top:r.top,bottom:r.bottom,style:e.composeStyleString(i.buildDocumentStyle(o))},tags:[]};return o.addDefaultQuery&&u.tags.push({name:"queries",tags:[{name:"query",attributes:{name:"default",table:"headers"}}]}),o.report.isGraphicReport||u.tags.push({name:"def",attributes:{align:r.align,lineSpacing:r.lineSpacing}}),{documentTag:u}},i.buildDocumentStyle=function(n){var i=e.pxToPtObj(t.mixin({},n.report.templateJson.documentOptions));return{fontSize:i.fontSize,fontFamily:i.fontFamily}},i});