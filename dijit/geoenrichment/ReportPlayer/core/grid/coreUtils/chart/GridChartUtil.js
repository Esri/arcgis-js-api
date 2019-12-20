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

define(["dojo/string","../../../charts/utils/ChartTypes","../GridDataUtil","dojo/i18n!esri/nls/jsapi"],function(e,l,t,n){n=n.geoenrichment.dijit.ReportPlayer.Grid;var r={};return r.getSupportedChartTypes=function(e){return r._canViewTableAsChart(e)&&[l.COLUMN,l.BAR,l.LINE,l.VERTICAL_LINE,l.PIE,l.DONUT,l.RING]},r.getTableRowsColumnsInfos=function(l){var t=l.columns[0].field,s=r._hasBigTitleCell(l)?1:0,i=l.store.data[s];if(!i)return null;var a=[],o=[];return l.columns.forEach(function(l,t){0!==t&&o.push({label:i[l.field]||e.substitute(n.columnN,[t+1]),id:t+""})}),l.store.data.forEach(function(e,l){l>s&&a.push({label:e[t]||l+1+"",id:l+""})}),{rowInfos:a,columnInfos:o}},r._canViewTableAsChart=function(e){return!(e.columns.length<2||e.store.data.length<2)&&(e.getFieldCells().length===e.store.data.length*e.columns.length||!(!r._hasBigTitleCell(e)||e.getFieldCells().length-1!=(e.store.data.length-1)*e.columns.length))},r.getChartTitle=function(e){return e.getFieldCells()[0].get("value")},r._hasBigTitleCell=function(e){var l=e.getFieldCells()[0];return t.getColumnSpan(l)===e.columns.length&&!t.getRowSpan(l)},r.createChartSeriesItems=function(e,l){return l.seriesInRows?r._buildSeriesInRows(e,l):r._buildSeriesInColumns(e,l)},r._buildSeriesInColumns=function(s,i){var a=[],o=s.columns[0].field,u=r._hasBigTitleCell(s)?1:0;if(s.columns.forEach(function(l,r){if(0!==r){var i={label:"",points:[]};a.push(i),s.store.data.forEach(function(a,c){if(!(c<u))if(c===u)i.label=a[l.field]||e.substitute(n.columnN,[r+1]),i._cIndex=r;else{var d=t.getRenderedValue(s,a,l),f=a.fieldInfos[l.field];i.points.push({label:a[o]||e.substitute(n.rowN,[c+1]),value:{value:d.numericValue||0,formattedValue:d.formattedValue,decimals:f&&f.decimals},_rIndex:c})}})}}),l.isSingleSeries(i.chartType)&&i.sourceId>=0){var c=a[i.sourceId];a=c?[c]:[]}return r._resolveSeriesNames(a,!1),a},r._buildSeriesInRows=function(s,i){var a=[],o=r._hasBigTitleCell(s)?1:0,u=s.store.data[o];if(s.store.data.forEach(function(l,r){if(!(r<o)&&r!==o){var i={label:"",points:[]};a.push(i),s.columns.forEach(function(a,o){if(0===o)i.label=l[a.field]||e.substitute(n.rowN,[r+1]),i._rIndex=r;else{var c=t.getRenderedValue(s,l,a),d=l.fieldInfos[a.field];i.points.push({label:u[a.field]||o+1+"",value:{value:c.numericValue||0,formattedValue:c.formattedValue,decimals:d&&d.decimals},_cIndex:o})}})}}),l.isSingleSeries(i.chartType)&&i.sourceId>=0){var c=a[i.sourceId];a=c?[c]:[]}return r._resolveSeriesNames(a,!0),a},r._resolveSeriesNames=function(e,l){r._resolveItems(e,l),e.forEach(function(e){r._resolveItems(e.points,!l)})},r._resolveItems=function(l,t){var r={};l.forEach(function(e){(r[e.label]=r[e.label]||[]).push(e)});for(var s in r)r[s].length>1&&r[s].forEach(function(l){l.label+=" ("+e.substitute(n[t?"rowN":"columnN"],[l[t?"_rIndex":"_cIndex"]+1])+")"});l.forEach(function(e){delete e[t?"_rIndex":"_cIndex"]})},r});