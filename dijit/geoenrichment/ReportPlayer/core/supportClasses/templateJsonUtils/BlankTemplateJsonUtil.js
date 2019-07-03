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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/PageUnitsConverter","./TemplateJsonModificationUtil"],function(t,e,n){var o={};return o.createBlankTemplate=function(o){var i={},s=o.documentOptions||t.getDefaultDocumentOptionsGraphicReport(),a=s.left+s.right+o.layout.numColumns*o.elementWidth,l=s.top+s.bottom+o.layout.numRows*o.elementHeight;s.pagesize=t.combineCustomSizeString(e.pxToIn(a),e.pxToIn(l)),i.documentOptions=s;for(var u={style:{width:o.layout.numColumns*o.elementWidth},data:{columns:[],data:[]}},m=0;m<o.layout.numColumns;m++)u.data.columns.push({field:"field"+m,style:{width:o.elementWidth}});for(var r=0;r<o.layout.numRows;r++)u.data.data.push({style:{height:o.elementHeight},fieldInfos:{}});return i.sectionsTables=[u],n.adjustDocumentOptions(i),i},o});