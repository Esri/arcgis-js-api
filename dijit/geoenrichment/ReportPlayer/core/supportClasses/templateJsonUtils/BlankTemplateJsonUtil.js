// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","./TemplateJsonModificationUtil"],(function(e,t){var o={createBlankTemplate:function(o){var n={},i=o.documentOptions||e.getDefaultDocumentOptionsGraphicReport(),s=i.left+i.right+o.layout.numColumns*o.elementWidth,l=i.top+i.bottom+o.layout.numRows*o.elementHeight;i.pagesize=e.combineCustomSizeString(s,l,"px"),n.documentOptions=i;for(var u={style:{width:o.layout.numColumns*o.elementWidth},columns:[],rows:[]},m=0;m<o.layout.numColumns;m++)u.columns.push({field:"field"+m,style:{width:o.elementWidth}});for(var r=0;r<o.layout.numRows;r++)u.rows.push({style:{height:o.elementHeight},fieldInfos:{}});return n.sectionsTables=[u],t.adjustDocumentOptions(n),n}};return o}));