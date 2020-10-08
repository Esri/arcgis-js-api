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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator"],(function(t,a){var e={},o={getJsonStat:function(t){var a=0,e=0,o=[];return t.sectionsTables.forEach((function(t){var n=0;t.data.columns.forEach((function(a){n+=i.getFieldWidth(t,t.data.data[0],a)})),a=Math.max(a,n);var r=0;t.data.data.forEach((function(a){r+=i.getDataHeight(t,a,t.data.columns[0])})),e=Math.max(e,r),o.push({totalW:n,totalH:r})})),{tableInfos:o,totalWMax:a,totalHMax:e}}},i={getFieldWidth:function(t,e,o){return a.getFieldWidth({looseResize:!0},e,o)||o.style.width},getDataHeight:function(t,e,o){return a.getDataHeight({looseResize:!0},e,o.field)},getAverageFieldWidth:function(t,a){var e=0;return t.data.data.forEach((function(o){e+=i.getFieldWidth(t,o,a)})),e/t.data.data.length},getAverageDataHeight:function(t,a){var e=0;return t.data.columns.forEach((function(o){e+=i.getDataHeight(t,a,o)})),e/t.data.columns.length}};return e.adjustDocumentOptions=function(a){if(a.documentOptions){var e=o.getJsonStat(a);if(e.totalWMax&&e.totalHMax&&!isNaN(e.totalWMax)&&!isNaN(e.totalHMax)){var i=a.documentOptions,n=i.left+i.right+e.totalWMax,r=i.top+i.bottom+e.totalHMax;i.pagesize=t.combineCustomSizeString(n,r,"px");var s=t.getClosestStandrdSizes(i)[0];s&&s.score<.001&&s.orientation===i.orientation&&(i.pagesize=s.pagesize)}}},e.JsonStatCollector=o,e.DataUtil=i,e}));