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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/string","../../supportClasses/tableJson/TableJsonResizeUtil","../../supportClasses/tableJson/TableJsonUtil","./sorting/GridSortUtil","./sorting/GridRowStyler","./GridDataUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,a,t,n,i,l,r,o){o=o.geoenrichment.dijit.ReportPlayer.Grid;var s={};return s.collectStatsForVariables=function(a){var t=0,n=[],i={},u=s._hasBigTitleCell(a)?1:0;a.columns.forEach(function(s,c){var d,f={alias:null,fieldName:s.field,columnIndex:c,min:1/0,max:-1/0,decimals:0,dataArray:[]};a._getOriginalData().forEach(function(e,n){var o=l.getRenderedValue(a,e,s);if("number"==typeof o.numericValue){var c=o.numericValue;f.min=Math.min(f.min,c),f.max=Math.max(f.max,c),f.decimals=Math.max(f.decimals,r.getPlaces(c)),f.dataArray.push(c),t++,d=!0,i[n]=!0}else f.alias=f.alias||n===u&&o.formattedValue}),d&&(f.alias=f.alias||e.substitute(o.columnN,[c+1]),n.push(f),f._cIndex=c)});var c={};n.forEach(function(e){(c[e.alias]=c[e.alias]||[]).push(e)});for(var d in c)c[d].length>1&&c[d].forEach(function(a){a.alias+=" ("+e.substitute(o.columnN,[a._cIndex+1])+")"});return n.forEach(function(e){delete e._cIndex}),{filterRanges:n,numVariablesTotal:t,numRowsTotal:Object.keys(i).length}},s._hasBigTitleCell=function(e){var a=e.getFieldCells()[0];return l.getColumnSpan(a)===e.columns.length&&!l.getRowSpan(a)},s.filterGridData=function(e,r){var o=[],s=0,u=0,c={};r.forEach(function(e){c[e.fieldName]=e}),e._saveOriginalData();var d=n.getSortableDataInfo(e);e.store.data.forEach(function(a){var t,n=!0;e.columns.forEach(function(i){var r=c[i.field];if(r){var o=l.getRenderedValue(e,a,i);"number"==typeof o.numericValue&&(t=!0,o.numericValue<r.min||o.numericValue>r.max?(delete a.fieldInfos[i.field],delete a[i.field],n=!1):s++)}}),n&&(o.push(a),t&&u++)});var f={data:{data:o,columns:e.columns}};if(a.resizeTableJsonToFitHeight(f,t.getTableHeight({data:{data:e.store.data}})),d&&d.styleInfo){var m=o.slice(d.topData.length);i.setAlternatingColors(m,e.columns,d.styleInfo)}return e.store.data=o,{numValuesShown:s,numRowsShown:u}},s});