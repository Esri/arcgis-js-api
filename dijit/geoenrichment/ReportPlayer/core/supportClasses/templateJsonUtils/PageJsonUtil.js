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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","../DocumentOptions"],function(n,t){var e={};return e.getGraphicReportEmptyPageJson=function(e){function s(){for(var n=[],t=0;t<e.numColumns;t++)n.push({field:"field"+t,style:{}});return n}function o(){for(var n=[],t=0;t<e.numRows;t++)n.push({style:{},fieldInfos:{}});return n}function a(a){return{documentOptions:n.mixin(t.getDefaultDocumentOptions(),e.documentOptions),sectionsTables:a||[{style:{},data:{columns:s(),data:o()}}]}}if(e=e||{},e.numRows=e.numRows||3,e.numColumns=e.numColumns||2,e.jsonToCopy){var i=e.jsonToCopy,r=i.sectionsTables[i.sectionsTables.length-1];if(!r)return a();var u={style:{},data:{}};return u.data.columns=r.data.columns.map(function(n){return{field:n.field,style:{width:n.style.width}}}),u.data.data=r.data.data.map(function(n){var t,e=n.style.fields;if(e){t={};for(var s in e){var o=e[s],a=t[s]={};o.width&&(a.width=o.width),o.height&&(a.height=o.height)}}return{rowSpans:n.rowSpans&&JSON.parse(JSON.stringify(n.rowSpans)),columnSpans:n.columnSpans&&JSON.parse(JSON.stringify(n.columnSpans)),style:{height:n.style.height,fields:t}}}),a([u])}return a()},e});