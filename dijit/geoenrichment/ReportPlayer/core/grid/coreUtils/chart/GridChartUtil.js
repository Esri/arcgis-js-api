// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/string","../../../charts/utils/ChartTypes","../GridDataUtil","dojo/i18n!esri/nls/jsapi"],(function(e,l,n,r){r=r.geoenrichment.dijit.ReportPlayer.Grid;var t={};function i(e,l,n){var r=e.queryCells({rowIndex:l.index,columnIndex:n.index})[0];return r.appliedConditionalStyle&&r.appliedConditionalStyle.backgroundColor}return t.getSupportedChartTypes=function(e){return t._canViewTableAsChart(e)&&[l.COLUMN,l.BAR,l.LINE,l.VERTICAL_LINE,l.PIE,l.DONUT,l.RING]},t.getTableRowsColumnsInfos=function(l){var n=l.columns[0].field,i=t._hasBigTitleCell(l)?1:0,o=l.rows[i];if(!o)return null;var s=[],u=[];return l.columns.forEach((function(l,n){0!==n&&u.push({label:o[l.field]||e.substitute(r.columnN,[n+1]),id:n+""})})),l.rows.forEach((function(e,l){l>i&&s.push({label:e[n]||l+1+"",id:l+""})})),{rowInfos:s,columnInfos:u}},t._canViewTableAsChart=function(e){return!e.noChartView&&(!(e.columns.length<2||e.rows.length<2)&&(e.getCells().length===e.rows.length*e.columns.length||!(!t._hasBigTitleCell(e)||e.getCells().length-1!=(e.rows.length-1)*e.columns.length)))},t.getChartTitle=function(e){return e.getCells()[0].get("value")},t._hasBigTitleCell=function(e){var l=e.getCells()[0];return n.getColumnSpan(l)===e.columns.length&&!n.getRowSpan(l)},t.createChartSeriesItems=function(e,l){return l.seriesInRows?t._buildSeriesInRows(e,l):t._buildSeriesInColumns(e,l)},t._buildSeriesInColumns=function(o,s){var u=[],a=o.columns[0].field,c=t._hasBigTitleCell(o)?1:0;if(o.columns.forEach((function(l,t){if(0!==t){var s={label:"",points:[]};u.push(s),o.rows.forEach((function(u,f){if(!(f<c))if(f===c)s.label=u[l.field]||e.substitute(r.columnN,[t+1]),s._cIndex=t;else{var d=n.getRenderedValue(o,u,l),h=u.fieldInfos[l.field];s.points.push({label:u[a]||e.substitute(r.rowN,[f+1]),color:h&&h.triggerJson&&i(o,u,l),value:{value:d.numericValue||0,formattedValue:d.formattedValue,decimals:h&&h.decimals},_rIndex:f})}}))}})),l.isSingleSeries(s.chartType)&&s.sourceId>=0){var f=u[s.sourceId];u=f?[f]:[]}return t._resolveSeriesNames(u,!1),u},t._buildSeriesInRows=function(o,s){var u=[],a=t._hasBigTitleCell(o)?1:0,c=o.rows[a];if(o.rows.forEach((function(l,t){if(!(t<a)&&t!==a){var s={label:"",points:[]};u.push(s),o.columns.forEach((function(u,a){if(0===a)s.label=l[u.field]||e.substitute(r.rowN,[t+1]),s._rIndex=t;else{var f=n.getRenderedValue(o,l,u),d=l.fieldInfos[u.field];s.points.push({label:c[u.field]||a+1+"",color:d&&d.triggerJson&&i(o,l,u),value:{value:f.numericValue||0,formattedValue:f.formattedValue,decimals:d&&d.decimals},_cIndex:a})}}))}})),l.isSingleSeries(s.chartType)&&s.sourceId>=0){var f=u[s.sourceId];u=f?[f]:[]}return t._resolveSeriesNames(u,!0),u},t._resolveSeriesNames=function(e,l){t._resolveItems(e,l),e.forEach((function(e){t._resolveItems(e.points,!l)}))},t._resolveItems=function(l,n){var t={};for(var i in l.forEach((function(e){(t[e.label]=t[e.label]||[]).push(e)})),t)t[i].length>1&&t[i].forEach((function(l){l.label+=" ("+e.substitute(r[n?"rowN":"columnN"],[l[n?"_rIndex":"_cIndex"]+1])+")"}));l.forEach((function(e){delete e[n?"_rIndex":"_cIndex"]}))},t}));