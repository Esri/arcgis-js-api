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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","../DocumentOptions"],(function(n,t){var s={getGraphicReportEmptyPageJson:function(s){function e(){for(var n=[],t=0;t<s.numColumns;t++)n.push({field:"field"+t,style:{}});return n}function o(){for(var n=[],t=0;t<s.numRows;t++)n.push({style:{},fieldInfos:{}});return n}function i(i){return{documentOptions:n.mixin(t.getDefaultDocumentOptions(),s.documentOptions),sectionsTables:i||[{style:{},columns:e(),rows:o()}]}}if((s=s||{}).numRows=s.numRows||3,s.numColumns=s.numColumns||2,s.jsonToCopy){var r=s.jsonToCopy,u=r.sectionsTables[r.sectionsTables.length-1];if(!u)return i();var l={style:{}};return l.columns=u.columns.map((function(n){return{field:n.field,style:{width:n.style.width}}})),l.rows=u.rows.map((function(n){var t,s=n.style.fields;if(s)for(var e in t={},s){var o=s[e],i=t[e]={};o.width&&(i.width=o.width),o.height&&(i.height=o.height)}return{rowSpans:n.rowSpans&&JSON.parse(JSON.stringify(n.rowSpans)),columnSpans:n.columnSpans&&JSON.parse(JSON.stringify(n.columnSpans)),style:{height:n.style.height,fields:t}}})),i([l])}return i()}};return s}));