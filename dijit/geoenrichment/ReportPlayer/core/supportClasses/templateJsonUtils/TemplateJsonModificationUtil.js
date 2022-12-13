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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridLayoutCalculator"],(function(t,e){var o={},a={getJsonStat:function(t){var e=0,o=0,a=[];return t.sectionsTables.forEach((function(t){var n=0;t.columns.forEach((function(e){n+=i.getFieldWidth(t,t.rows[0],e)})),e=Math.max(e,n);var r=0;t.rows.forEach((function(e){r+=i.getDataHeight(t,e,t.columns[0])})),o=Math.max(o,r),a.push({totalW:n,totalH:r})})),{tableInfos:a,totalWMax:e,totalHMax:o}}},i={getFieldWidth:function(t,o,a){return e.getFieldWidth({looseResize:!0},o,a)||a.style.width},getDataHeight:function(t,o,a){return e.getDataHeight({looseResize:!0},o,a.field)},getAverageFieldWidth:function(t,e){var o=0;return t.rows.forEach((function(a){o+=i.getFieldWidth(t,a,e)})),o/t.rows.length},getAverageDataHeight:function(t,e){var o=0;return t.columns.forEach((function(a){o+=i.getDataHeight(t,e,a)})),o/t.columns.length}};return o.adjustDocumentOptions=function(e){if(e.documentOptions){var o=a.getJsonStat(e);if(o.totalWMax&&o.totalHMax&&!isNaN(o.totalWMax)&&!isNaN(o.totalHMax)){var i=e.documentOptions,n=i.left+i.right+o.totalWMax,r=i.top+i.bottom+o.totalHMax;i.pagesize=t.combineCustomSizeString(n,r,"px");var s=t.getClosestStandrdSizes(i)[0];s&&s.score<.001&&s.orientation===i.orientation&&(i.pagesize=s.pagesize)}}},o.JsonStatCollector=a,o.DataUtil=i,o}));