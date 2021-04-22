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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","./TemplateJsonModificationUtil"],(function(t,e){var n={createBlankTemplate:function(n){var o={},i=n.documentOptions||t.getDefaultDocumentOptionsGraphicReport(),a=i.left+i.right+n.layout.numColumns*n.elementWidth,l=i.top+i.bottom+n.layout.numRows*n.elementHeight;i.pagesize=t.combineCustomSizeString(a,l,"px"),o.documentOptions=i;for(var s={style:{width:n.layout.numColumns*n.elementWidth},data:{columns:[],data:[]}},u=0;u<n.layout.numColumns;u++)s.data.columns.push({field:"field"+u,style:{width:n.elementWidth}});for(var m=0;m<n.layout.numRows;m++)s.data.data.push({style:{height:n.elementHeight},fieldInfos:{}});return o.sectionsTables=[s],e.adjustDocumentOptions(o),o}};return n}));