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

define(["dojo/string","../../supportClasses/tableJson/TableJsonResizeUtil","../../supportClasses/tableJson/TableJsonUtil","./sorting/GridSortUtil","./sorting/GridRowStyler","./GridDataUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,n,i,l,r,o,s){s=s.geoenrichment.dijit.ReportPlayer.Grid;var u={collectStatsForVariables:function(a){var t=0,n=[],i={};if(a.columns.length<2||a.store.data.length<3)return null;var c=u.getFirstFilterableRowIndex(a)-1;a.columns.forEach((function(u,d){var m,f={alias:null,fieldName:u.field,columnIndex:d,min:1/0,max:-1/0,decimals:0,dataArray:[]};a._getOriginalData().forEach((function(e,n){var s=l.getRenderedValue(a,e,u);if(n<=c)f.alias=f.alias||n===c&&o.unrichHTML(s.formattedValue);else if("number"==typeof s.numericValue){var d=s.numericValue;f.min=Math.min(f.min,d),f.max=Math.max(f.max,d),f.decimals=Math.max(f.decimals,r.getPlaces(d)),f.dataArray.push(d),t++,m=!0,i[n]=!0}})),m&&(f.alias=f.alias||e.substitute(s.columnN,[d+1]),n.push(f),f._cIndex=d)}));var d={};for(var m in n.forEach((function(e){(d[e.alias]=d[e.alias]||[]).push(e)})),d)d[m].length>1&&d[m].forEach((function(a){a.alias+=" ("+e.substitute(s.columnN,[a._cIndex+1])+")"}));return n.forEach((function(e){delete e._cIndex})),t>1&&{filterRanges:n,numVariablesTotal:t,numRowsTotal:Object.keys(i).length}},getFirstFilterableRowIndex:function(e){var a=e._getOriginalData(),t=e.columns[0].field,n=l.getDataColumnSpan(a[0],t)===e.columns.length&&!l.getDataRowSpan(a[0],t),i=n?1:0,r=e.columns.some((function(e){return l.isVariableLikeFieldCell(l.getFieldInfo({gridData:a[i],column:e}))}));return n?r?1:2:r?0:1},filterGridData:function(e,r){var o=[],s=0,c=0,d={};r.forEach((function(e){d[e.fieldName]=e})),e._saveOriginalData();var m=u.getFirstFilterableRowIndex(e)-1,f=n.getSortableDataInfo(e);e.store.data.forEach((function(a,t){var n,i=!0;t>m&&e.columns.forEach((function(t){var r=d[t.field];if(r){var o=l.getRenderedValue(e,a,t);"number"==typeof o.numericValue&&(n=!0,o.numericValue<r.min||o.numericValue>r.max?(delete a.fieldInfos[t.field],delete a[t.field],i=!1):s++)}})),i&&(o.push(a),n&&c++)}));var g={data:{data:o,columns:e.columns}};if(a.resizeTableJsonToFitHeight(g,t.getTableHeight({data:{data:e.store.data}})),f&&f.styleInfo){var h=o.slice(f.topData.length);i.setAlternatingColors(h,e.columns,f.styleInfo)}return e.store.data=o,{numValuesShown:s,numRowsShown:c}}};return u}));