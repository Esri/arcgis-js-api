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

define(["dojo/string","../../supportClasses/tableJson/TableJsonResizeUtil","../../supportClasses/tableJson/TableJsonUtil","./sorting/GridSortUtil","./sorting/GridRowStyler","./GridDataUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,t,i,n,l,r,o){o=o.geoenrichment.dijit.ReportPlayer.Grid;var s={};return s.collectStatsForVariables=function(e){var t=0,i=[],n={};return e.columns.forEach(function(s,u){var d,m={alias:null,fieldName:s.field,columnIndex:u,min:1/0,max:-1/0,decimals:0,dataArray:[]};e._getOriginalData().forEach(function(a,i){var o=l.getRenderedValue(e,a,s);if("number"==typeof o.numericValue){var u=o.numericValue;m.min=Math.min(m.min,u),m.max=Math.max(m.max,u),m.decimals=Math.max(m.decimals,r.getPlaces(u)),m.dataArray.push(u),t++,d=!0,n[i]=!0}else m.alias=m.alias||0===i&&o.formattedValue}),d&&(m.alias=m.alias||a.substitute(o.columnN,[u+1]),i.push(m))}),{filterRanges:i,numVariablesTotal:t,numRowsTotal:Object.keys(n).length}},s.filterGridData=function(a,r){var o=[],s=0,u=0,d={};r.forEach(function(a){d[a.fieldName]=a}),a._saveOriginalData();var m=i.getSortableDataInfo(a);a.store.data.forEach(function(e){var t,i=!0;a.columns.forEach(function(n){var r=d[n.field];if(r){var o=l.getRenderedValue(a,e,n);"number"==typeof o.numericValue&&(t=!0,o.numericValue<r.min||o.numericValue>r.max?(delete e.fieldInfos[n.field],delete e[n.field],i=!1):s++)}}),i&&(o.push(e),t&&u++)});var c={data:{data:o,columns:a.columns}};if(e.resizeTableJsonToFitHeight(c,t.getTableHeight({data:{data:a.store.data}})),m.styleInfo){var f=o.slice(m.topData.length);n.setAlternatingColors(f,a.columns,m.styleInfo)}return a.store.data=o,{numValuesShown:s,numRowsShown:u}},s});