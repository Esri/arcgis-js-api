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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/string","../../supportClasses/tableJson/TableJsonResizeUtil","../../supportClasses/tableJson/TableJsonUtil","./sorting/GridSortUtil","./sorting/GridRowStyler","./GridDataUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","dojo/i18n!esri/nls/jsapi"],(function(e,a,n,t,i,l,r,o,s){s=s.geoenrichment.dijit.ReportPlayer.Grid;var u={collectStatsForVariables:function(a){var n=0,t=[],i={};if(a.columns.length<2||a.rows.length<3)return null;var c=u.getFirstFilterableRowIndex(a)-1;a.columns.forEach((function(u,m){var f,d={alias:null,fieldName:u.field,columnIndex:m,min:1/0,max:-1/0,decimals:0,dataArray:[]};a._getOriginalData().forEach((function(e,t){var s=l.getRenderedValue(a,e,u);if(t<=c)d.alias=d.alias||t===c&&o.unrichHTML(s.formattedValue);else if("number"==typeof s.numericValue){var m=s.numericValue;d.min=Math.min(d.min,m),d.max=Math.max(d.max,m),d.decimals=Math.max(d.decimals,r.getPlaces(m)),d.dataArray.push(m),n++,f=!0,i[t]=!0}})),f&&(d.alias=d.alias||e.substitute(s.columnN,[m+1]),t.push(d),d._cIndex=m)}));var m={};for(var f in t.forEach((function(e){(m[e.alias]=m[e.alias]||[]).push(e)})),m)m[f].length>1&&m[f].forEach((function(a){a.alias+=" ("+e.substitute(s.columnN,[a._cIndex+1])+")"}));return t.forEach((function(e){delete e._cIndex})),n>1&&{filterRanges:t,numVariablesTotal:n,numRowsTotal:Object.keys(i).length}},getFirstFilterableRowIndex:function(e){var a=e._getOriginalData(),n=e.columns[0].field,t=l.getDataColumnSpan(a[0],n)===e.columns.length&&!l.getDataRowSpan(a[0],n),i=t?1:0,r=e.columns.some((function(e){return l.isVariableLikeFieldCell(l.getFieldInfo({row:a[i],column:e}))}));return t?r?1:2:r?0:1},filterGridData:function(e,r){var o=[],s=0,c=0,m={};r.forEach((function(e){m[e.fieldName]=e})),e._saveOriginalData();var f=u.getFirstFilterableRowIndex(e)-1,d=t.getSortableDataInfo(e);e.rows.forEach((function(a,n){var t,i=!0;n>f&&e.columns.forEach((function(n){var r=m[n.field];if(r){var o=l.getRenderedValue(e,a,n);"number"==typeof o.numericValue&&(t=!0,o.numericValue<r.min||o.numericValue>r.max?(delete a.fieldInfos[n.field],delete a[n.field],i=!1):s++)}})),i&&(o.push(a),t&&c++)}));var g={rows:o,columns:e.columns};if(a.resizeTableJsonToFitHeight(g,n.getTableHeight({rows:e.rows})),d&&d.styleInfo){var h=o.slice(d.topData.length);i.setAlternatingColors(h,e.columns,d.styleInfo)}return e.rows=o,{numValuesShown:s,numRowsShown:c}}};return u}));