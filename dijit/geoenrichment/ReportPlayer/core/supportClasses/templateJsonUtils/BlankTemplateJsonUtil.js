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

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/PageUnitsConverter","./TemplateJsonModificationUtil"],function(t,e,o){var n={};return n.createBlankTemplate=function(n){var i={},a=n.documentOptions||t.getDefaultDocumentOptionsGraphicReport(),s=a.left+a.right+n.layout.numColumns*n.elementWidth,u=a.top+a.bottom+n.layout.numRows*n.elementHeight;a.pagesize=t.combineCustomSizeString(e.pxToIn(s),e.pxToIn(u)),i.documentOptions=a;for(var l={data:{columns:[],data:[]}},m=0;m<n.layout.numColumns;m++)l.data.columns.push({field:"field"+m,style:{width:Number(100/n.layout.numColumns).toFixed(3)+"%"}});for(var r=0;r<n.layout.numRows;r++)l.data.data.push({style:{height:n.elementHeight},fieldInfos:{}});return i.sectionsTables=[l],o.adjustDocumentOptions(i),i},n});