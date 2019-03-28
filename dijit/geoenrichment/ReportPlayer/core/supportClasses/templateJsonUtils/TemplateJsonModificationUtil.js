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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator"],function(t,a,e){var o={},i={getJsonStat:function(t){var a=0,e=0,o=[];return t.sectionsTables.forEach(function(t){var i=0;t.data.columns.forEach(function(a){i+=n.getFieldWidth(t,t.data.data[0],a)}),a=Math.max(a,i);var r=0;t.data.data.forEach(function(a){r+=n.getDataHeight(t,a,t.data.columns[0])}),e=Math.max(e,r),o.push({totalW:i,totalH:r})}),{tableInfos:o,totalWMax:a,totalHMax:e}}},n={getFieldWidth:function(t,a,o){var i={looseResize:!0};return e.getFieldWidth(i,a,o)||o.style.width},getDataHeight:function(t,a,o){var i={looseResize:!0};return e.getDataHeight(i,a,o.field)},getAverageFieldWidth:function(t,a){var e=0;return t.data.data.forEach(function(o){e+=n.getFieldWidth(t,o,a)}),e/t.data.data.length},getAverageDataHeight:function(t,a){var e=0;return t.data.columns.forEach(function(o){e+=n.getDataHeight(t,a,o)}),e/t.data.columns.length}};return o.adjustDocumentOptions=function(e){if(e.documentOptions){var o=i.getJsonStat(e);if(o.totalWMax&&o.totalHMax&&!isNaN(o.totalWMax)&&!isNaN(o.totalHMax)){var n=e.documentOptions,r=n.left+n.right+o.totalWMax,s=n.top+n.bottom+o.totalHMax;n.pagesize=t.combineCustomSizeString(a.pxToIn(r),a.pxToIn(s));var l=t.getClosestStandrdSizes(n),c=l[0];c&&c.score<.001&&c.orientation===n.orientation&&(n.pagesize=c.pagesize)}}},o.JsonStatCollector=i,o.DataUtil=n,o});